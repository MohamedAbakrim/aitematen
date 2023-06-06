import React from "react";
import './../styles/Footer.css';


const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer">
                <div className="up">
                    <div>
                        <img src="logo.png" alt="logo"/>
                        <p>Tous travaux d'impression et de publicité Nous vous fournissons une entreprise de confiance & Minimum de charge!</p>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><a href="#accueil">Accueil</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#produits">Produits</a></li>
                            <li><a href="#services">Services</a></li>
                        </ul>
                    </div>
                </div>
                <div className="down">
                    <a className="social" href="https://www.facebook.com/profile.php?id=100087708593489&mibextid=ZbWKwL" target="_blank"><img width="30px" src="facebook.svg" alt="facebook"/></a>
                    <a className="social" href="https://instagram.com/imprimerie.aitmaten.aitmelloul?igshid=ZDdkNTZiNTM=" target="_blank"><img alt="instagram" src="square-instagram.svg" width="30px"/></a>
                </div>
            </div>
        </div>
    );
}
export default Footer;