import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileSection from "../components/Profile/CardProfile";

const ProfilePage = () => {
return (
        <div className="">
            <NavbarComponent />
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <ProfileSection />
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
