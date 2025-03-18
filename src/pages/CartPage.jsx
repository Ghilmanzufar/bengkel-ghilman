import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart/CartSection";
const CartPage = () => {
    return (
        <div className="">
            <NavbarComponent />
            <Cart />
            <Footer />
        </div>
    );
};

export default CartPage;
