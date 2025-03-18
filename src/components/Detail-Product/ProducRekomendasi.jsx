import React, { useState } from "react";
import ProductCard from "./CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const products = [
    { id: 1, name: "Sparepart A", price: 250000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Sparepart B", price: 300000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Sparepart C", price: 150000, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Sparepart D", price: 400000, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Sparepart E", price: 200000, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Sparepart F", price: 350000, image: "https://via.placeholder.com/150" },
];

const ITEMS_PER_PAGE = 3;

export default function RecommendedProducts() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const displayedProducts = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <section className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Rekomendasi Produk</h2>
            
            {/* Mobile View - Swiper */}
            <div className="block md:hidden">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
            {/* Desktop View - Grid Layout */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination for Desktop */}
            <div className="hidden md:flex justify-center items-center mt-6 gap-2">
                <button 
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1} 
                    className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
                >
                    Prev
                </button>
                <span className="font-semibold">{currentPage} / {totalPages}</span>
                <button 
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
                    disabled={currentPage === totalPages} 
                    className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </section>
    );
}
