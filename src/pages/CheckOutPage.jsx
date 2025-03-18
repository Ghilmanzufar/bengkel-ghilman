import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Checkout/Pembayaran";
const CheckOutPage = () => {
    return (
        <div className="">
            <NavbarComponent />
            <Card />
            <Footer />
        </div>
    );
};

export default CheckOutPage;
