import "../../css/navigation.css"
import React from "react";
import Logo from "../../assets/images/Logo.jpg"

const Navigation = ()=>{
    return(
        <nav>
            <figure className="logo">
                <img src={Logo}></img>
            </figure>
        </nav>
    )
}


export default Navigation;