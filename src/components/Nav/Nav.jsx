import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo.png";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">Type It Fast!</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="http://localhost:3000/flashtype"
                    rel="noreferrer"
                >
                    
                </a>
            </div>
        </div>
    );
};

export default Nav;
