import React from 'react';
import './../styles/Services.css';
const Services = () => {
    return(
        <div class="service-container" id="services">
            <div className="service-parent">
                <div className="card">
                    <img src="images/img1.png" width="230px" alt="test"/>
                    <h2>Carnet Autocopiant A5</h2>
                    <p>200 à seulement <span>15 Dhs</span></p>
                </div>
                <div className="card">
                    <img src="images/img2.png" width="230px" alt="test"/>
                    <h2>Impression Des Cartes Visite</h2>
                    <p>1000 cartes visites plastifier à <span>200 Dhs</span> (1 face)</p>
                    <p>1000 cartes visites plastifier à <span>200 Dhs</span> (2 face)</p>
                </div>
                <div className="card">
                    <img src="images/img3.png" width="230px" alt="test"/>
                    <h2>Impression Flyer Format A5</h2>
                    <p>5000 à seulement <span>1400 Dhs</span></p>
                </div>
                <div className="card">
                    <img src="images/img4.png" width="230px" alt="test"/>
                    <h2>Cacht Automatique</h2>
                    <p>à seulement <span>100 Dhs</span></p>
                </div>
            </div>
        </div>
    );
} 
export default Services;