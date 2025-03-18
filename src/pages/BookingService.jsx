import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import CardBooking from "../components/Booking-Servis/CardBooking";
const BookingService = () => {
    return (
        <div className="">
            <NavbarComponent />
            <CardBooking />
            <Footer />
        </div>
    );
};

export default BookingService;
