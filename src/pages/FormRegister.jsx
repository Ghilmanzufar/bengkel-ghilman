import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "../components/Login-Regist/CardRegister";

const FormRegister = ()=>{
    return (
        <div className="">
            <NavbarComponent />
            <Register />
            <Footer />
        </div>
    );
};

export default FormRegister;
