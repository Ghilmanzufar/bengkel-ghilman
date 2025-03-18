import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login-Regist/CardLogin";

const FormLogin = ()=>{
    return (
        <div className="">
            <NavbarComponent />
            <Login />
            <Footer />
        </div>
    );
};

export default FormLogin;
