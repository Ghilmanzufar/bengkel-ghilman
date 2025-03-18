import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/SparepartPage/CardProduct";

const SparepartPage = () => {
    return (
        <div className="">
            <NavbarComponent />
            <ProductCard />
            <Footer />
        </div>
    );
};

export default SparepartPage;
