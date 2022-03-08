import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <a
                target="_blank"
                className="footer-link"
                href="http://localhost:3000/flashtype"
                rel="noreferrer"
            >
               Created with love by Rakshit Kumar Sharma!
            </a>
        </div>
    );
};

export default Footer;
