import React from "react";
import './../styles/Contact.css';

const Contact = () => {
    return(
        <div className="contact-container" id="contact">
            <div className="contact">
                <div className="header">
                    <h1>Contactez-Nous</h1>
                    <p>une question ou une remarque? Contactez-nous simplement</p>
                </div>
                <div className="contact-main">
                    <div className="contact-information">
                        <div className="contact-header">
                            <h2>Coordonnées</h2>
                            <p>Voici les informations pour nous contacter</p>
                        </div>
                        <div className="body">
                            <div>
                                <img src="phone-solid.svg" alt="phone"/>
                                <span>+212-660106944</span>
                            </div>
                            <div>
                                <img src="envelope-solid.svg" alt="email"/>
                                <span><a href="mailto:contact.aitmaten@gmail.com" target="_blank">contact.aitmaten@gmail.com</a></span>
                            </div>
                            <div>
                                <img src="location-dot-solid.svg" alt="email"/>
                                <span><a href="https://maps.app.goo.gl/nPyhfT9Y1GaUMojJ6" target="_blank">Sté AIT MATEN PRINT Avenue Al Mouqaouama, Aït Melloul</a></span>
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="https://www.facebook.com/profile.php?id=100087708593489&mibextid=ZbWKwL" target="_blank"><img width="30px" src="facebook.svg" alt="facebook"/></a>
                            <a href="https://instagram.com/imprimerie.aitmaten.aitmelloul?igshid=ZDdkNTZiNTM=" target="_blank"><img alt="instagram" src="square-instagram.svg" width="30px"/></a>
                        </div>
                    </div>
                    <div className="map">
                        <img alt="map" src="pic2.PNG"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;