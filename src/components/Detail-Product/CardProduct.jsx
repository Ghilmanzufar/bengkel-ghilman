import React from "react";

export default function ProductCard({ product }) {
    return (
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        {/* Image */}
        <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />

        {/* Product Info */}
        <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm mt-1">Rp {product.price.toLocaleString()}</p>
        </div>

        {/* Buttons */}
        <div className="p-4 flex flex-col gap-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Tambah ke Keranjang
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Beli Sekarang
            </button>
        </div>
        </div>
    );
}
