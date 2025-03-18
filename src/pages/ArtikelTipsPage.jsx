import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import ArtikelCard from "../components/Artikel/ArtikelTips";
const ArtikelPage = () => {
    return (
        <div className="">
            <NavbarComponent /> 
            <ArtikelCard />        
            <Footer />
        </div>
    );
};

export default ArtikelPage;
