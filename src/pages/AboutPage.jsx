import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About/AboutComponent";
const AboutPage = () => {
    return (
        <div className="">
            <NavbarComponent />
            <About />
            <Footer />
        </div>
    );
};

export default AboutPage;
