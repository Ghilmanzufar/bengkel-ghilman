import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import OrderHistory from "../components/Profile/CardOrderHistory";
const HistoryOrder = () => {
    return (
        <div className="">
            <NavbarComponent />
            <OrderHistory />
            <Footer />
        </div>
    );
};

export default HistoryOrder;
