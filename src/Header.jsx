import React, { useState } from "react";
import "./Style/main.css"
import logo from "./assets/logoipsum-300.svg"
export default function Header(){

const [activeButton, setActiveButton] = useState(null);
function handleOnMouseDown(index){
    setActiveButton(index);
}
function handleOnMouseUp(){
    setActiveButton(null);
}
const buttons = ["Home", "Services", "About Us"]
return(

<>
<header className="header">
    <div className="navigation_bar">
        <div className="logo">
        <img className="logo" src={logo} alt="logo-picture"/>
        </div>
        <h1>CARD'S PORTFOLIO</h1>
        <nav>
            <ul>
                {buttons.map((label, index)=>
                <li key={index}>
                    <button 
                        onMouseEnter={()=>handleOnMouseDown(index)}
                        onMouseLeave={handleOnMouseUp}
                        className={(activeButton === index ? "nav_btn_active" : "nav_btn")}>
                            {label}
                    </button></li>
                
                )}
            </ul>
        </nav>

    </div>

</header>
</>

);

}