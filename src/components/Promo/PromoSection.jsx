import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PromoSection = () => {
    const promoData = [
        {
        title: "Diskon servis berkala",
        description: "Diskon 20% untuk servis rutin setiap 5000 km",
        image: "https://images.unsplash.com/photo-1677442136019-21c1f18715df",
        buttonText: "Lihat detail promo"
        },
        {
        title: "Gratis Oli atau Sparepart",
        description: "Ganti oli 3x, gratis 1x di servis berikutnya",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        buttonText: "Lihat detail promo"
        },
        {
        title: "Paket Servis Hemat",
        description: "Paket servis murah 200rb free cuci motor",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
        buttonText: "Lihat detail promo"
        },
        {
        title: "Cashback besar",
        description: "Dapatkan cashback 10% untuk transaksi diatas Rp.300.000!",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        buttonText: "Lihat detail promo"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Promo Bengkel Ghilman</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Pilih Promo Menarik untuk anda!
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promoData.map((promo, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
                >
                <div className="relative h-64">
                    <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe";
                    }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{promo.title}</h3>
                    <p className="text-gray-300 mb-6">{promo.description}</p>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                    <span>{promo.buttonText}</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default PromoSection;