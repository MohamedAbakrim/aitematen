import React from "react";
import Accueil from "./Accueil";
import Contact from "./Contact";
import Footer from "./Footer";
import Produits from "./Produits";
import Services from "./Services";

const Home = () => {
    return(
        <>
            <Accueil/>
            <Services/>
            <Produits/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default Home;