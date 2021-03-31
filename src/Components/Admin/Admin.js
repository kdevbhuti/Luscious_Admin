import "../../css/admin.css";
import React from "react";

const Admin = ()=>{
    const [input, setInput] = React.useState([{value: ""}]);
    const [state, setState] = React.useState({});


    const handleChangeState = (event)=> {
        const {name = "", value = ""} = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async()=>{
        const responce = await fetch("http://localhost:4000/api/v1/save-recipe-data", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(state)
        })
        const data = await responce.json();
    }


  
    const handleAddInput = (event)=>{
        let isEmty = false;
        event.preventDefault();
        input.forEach(element =>{
            if(element.value === ""){
                isEmty = true;
            }
        })
        if(!isEmty){
            setInput([...input, {value: ""}]);
        }
    }

    const handleChange = (event, index)=>{
        const values = [...input];
        values[index].value = event.target.value;
        setInput(values);
        setState({ 
            ...state,
            ingredients: input
        })
    }

    return(
        <main>
            <section>
                <form>
                    <div className="heading">
                        <h1>Create Recipe</h1>
                        <button className="submitBtn" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="inputRecipe">
                        <div className="description_div">
                            <h4>Description of the recipe</h4>
                            <textarea className="description" required name="description" onChange={handleChangeState} rows="4" cols="70"></textarea>
                        </div>
                        <div>
                            <h4>Name of the Recipe</h4>
                            <input name="recipeName" required onChange={handleChangeState} type="text"></input>
                        </div>
                        <div className="preparationMethod_div">
                        <h4>Method of preparation</h4>
                        <textarea  onChange={handleChangeState} name="preparationMethod" required rows="4" cols="50"></textarea>
                   
                            <h4>Enter url of Dish Image</h4>
                            <input name="snapshort" onChange={handleChangeState} required type="text"></input>
                        </div>  
                        <div className="ingredients_div">
                            <h4>Ingredients</h4>
                            {input.map((element, index) => (
                                <input key={`${element}-${index}`} type="text" name="ingredients" required  onChange={event => handleChange(event, index)} value={element.value}/>
                            ))}
                            <button onClick={handleAddInput}>Next</button>
                        </div>
                        <div className="preparationVideo_div">
                            <h4>Enter url of video</h4>
                            <input type="text" onChange={handleChangeState} required name="preparationVideo"></input>
                        </div>   
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Admin;