import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Home/HeroHome/HeroHome";
import SparepartCategory from "../components/Home/CategorySparepart/CategorySparepart";
import SearchSection from "../components/Home/SearchHome/SearchSection";
import ProductSection from "../components/Home/ProductRekomendHome/ProductSection";
import TipsArticlesSection from "../components/Home/TipsArticles/TipsArticle";
const HomePage = () => {
    return (
        <div className="">
            <NavbarComponent />
            <HeroSection />
            <SparepartCategory/>
            <SearchSection  />
            <ProductSection />
            <TipsArticlesSection />
            <Footer />
        </div>
    );
};

export default HomePage;
