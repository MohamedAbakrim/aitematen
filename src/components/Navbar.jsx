import React from "react";
import './../styles/Navbar.css';

const Navbar = () => {
    return(
        <div className="header-container">
            <div className="header">
                <a href="/" class="logo">
                    <img alt="logo" src="logo.png" className="logo-img"/>
                    <span>AiteMaten</span>
                </a>
                <ul className="nav-links">
                    <li><a className="nav-link" href="#accueil">Accueil</a></li>
                    <li><a className="nav-link" href="#services">Services</a></li>
                    <li><a className="nav-link" href="#produits">Produits</a></li>
                    <li><a className="nav-link" href="#contact">Contactez-nous</a></li>
                </ul>
                <a className="contact-button" href="#contact">Contact</a>
            </div>
        </div>
    )
}
export default Navbar;