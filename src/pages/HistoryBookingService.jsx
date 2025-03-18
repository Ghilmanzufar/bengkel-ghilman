import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import HistoryCardBooking from "../components/Profile/CardHistoryService";
const HistoryBookingService = () => {
    return (
        <div className="">
            <NavbarComponent />
            <HistoryCardBooking />
            <Footer />
        </div>
    );
};

export default HistoryBookingService;
