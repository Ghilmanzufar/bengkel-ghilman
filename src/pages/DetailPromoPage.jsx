import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import CardDetail from "../components/Promo/DetailPromo";
const DetailPromoPage = () => {
    return (
        <div className="">
            <NavbarComponent />
            <CardDetail image="https://via.placeholder.com/600x400"
                        title="Promo Spesial Bulan Ini!"
                        description="Dapatkan diskon hingga 50% untuk semua produk sparepart motor hanya di bulan ini! loremipsunasdadadaad"
            />
            <Footer />
        </div>
    );
};

export default DetailPromoPage;
