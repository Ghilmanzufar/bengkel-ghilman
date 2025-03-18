import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import ForgetPass from "../components/Login-Regist/CardForgotPassword";

const FormForgetPassword = ()=>{
    return (
        <div className="">
            <NavbarComponent />
            <ForgetPass />
            <Footer />
        </div>
    );
};

export default FormForgetPassword;
