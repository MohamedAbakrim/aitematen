import React from "react";
import './../styles/Accueil.css';
import { Link } from "react-router-dom";

const Accueil = () => {
    return(
        <div className="container" id="accueil">
            <div className="accueil">
                <div className='accueil-description'>
                    <h1>Tous travaux d'impression et de publicité</h1>
                    <p>Nous vous fournissons une entreprise de confiance & Minimum de charge!</p>
                    <Link className="contact-button" to="/contact">CONTACT</Link>
                </div>
                <img src="pic1.avif" alt="accueil-img" className="accueil-img"/>
            </div>
        </div>
    )
}
export default Accueil;