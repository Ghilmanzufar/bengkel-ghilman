import React from "react";
import diskon from './assets/diskon.jpg';
const DetailPromo = ({ image, title, description }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 bg-white shadow-lg rounded-lg p-6">
                {/* Promo Image */}
                <div className="w-full lg:w-1/2">
                <img
                    src={diskon}
                    alt={title}
                    className="w-full h-auto rounded-lg shadow-md"
                />
                </div>
                
                {/* Promo Description */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
                <p className="text-gray-600 text-lg">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailPromo;