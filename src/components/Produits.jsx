import React from "react";
import './../styles/Produits.css';

const Produits = () => {
    return(
        <div id="produits" className="produits-container">
            <div className="produits">
                <div className="card card1">
                    <h1>Flyer et Dépliant</h1>
                    <img src="1.png" alt="1" width="360px"/>
                    <img src="2.png" alt="2" width="360px"/>
                    <img src="3.png" alt="3" width="360px"/>
                </div>
                <div className="card card1">
                    <h1>Affiches</h1>
                    <img src="tst.png" alt="4"/>
                </div>
                <div className="card card1">
                    <h1>Brochure/Catalogue</h1>
                </div>
                <div className="card card1">
                    <h1>Flyer et Dépliant</h1>
                </div>
                <div className="card card1">
                    <h1>Flyer et Dépliant</h1>
                </div>
            </div>
        </div>
    )
}

export default Produits;