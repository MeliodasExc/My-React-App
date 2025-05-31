import { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/main.css"
import "../Style/header.css"
import logo from "../assets/logoipsum-300.svg"
export default function Header(){

const [activeElement, setActiveElement] = useState(null);
function handleOnMouseDown(index){
    setActiveElement(index);
}
function handleOnMouseUp(){
    setActiveElement(null);
}
const buttons = [
    {label:"Home", path:"/"},
    {label:"About Us", path:"/about-us"},
    {label:"Login", path:"/login"},]
return(

<>
<header id="header">
    <div className="navigation_bar">
        <div className="logo">
        <img className="logo" src={logo} alt="logo-picture"/>
        </div>
        <h1 className="name"><Link to={"/"}>CARDHUB</Link></h1>
        <nav className="nav_btn_Holder" role="menubar">
            <ul>
                {buttons.map((item, index)=>
                <li key={index}>
                    <Link to={item.path}>
                        <span 
                            onMouseEnter={()=>handleOnMouseDown(index)}
                            onMouseLeave={handleOnMouseUp}
                            className={
                                (item.label==="Login" ? 
                                (activeElement === index ? "login_btn_active" :"login_btn") : 
                                (activeElement === index ? "nav_btn_active" :"nav_btn")
                            )}>
                            {item.label} 
                        </span>
                        </Link>
                    </li>
                
                )}
            </ul>
        </nav>

    </div>

</header>
</>

);

}

/*className={(activeElement === index ? "nav_btn_active" : "nav_btn")}>*/