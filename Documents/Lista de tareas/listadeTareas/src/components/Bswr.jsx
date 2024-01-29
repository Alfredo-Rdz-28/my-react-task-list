import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./Button";
import "./stlNav.css";
const Nav = () => {
    return(
        
        <div className="topnav" id="myTopnav">
            <Link to="/">Home</Link>
            <Link to="/todoList">Task Lists</Link>
            <Link to="/about">About</Link>
            <ToggleButton/>
        </div>
       
    )
}
export default Nav;