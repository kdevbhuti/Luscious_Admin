import React from "react";
import ReactDom from "react-dom";
import Admin from "./Admin";

import {render} from "@testing-library/react"

it("render without crashing", ()=>{
    const main =  document.createElement("main");
    ReactDom.render(<Admin></Admin>, main);
})