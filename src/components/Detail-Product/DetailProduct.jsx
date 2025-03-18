import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsStarFill, BsHeart } from "react-icons/bs";
import styled from "styled-components"; 
const ProductDetail = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const product = {
        name: "Premium Leather Backpack",
        description: "Handcrafted from genuine leather, this versatile backpack features multiple compartments, adjustable straps, and water-resistant material. Perfect for daily commute or weekend adventures.",
        price: 199.99,
        stock: 8,
        rating: 4.8,
        images: [
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        "https://images.unsplash.com/photo-1576626840126-c95ebd67818f"
        ],
        relatedProducts: [
        {
            id: 1,
            name: "Canvas Tote Bag",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1614179689702-355944cd0918"
        },
        {
            id: 2,
            name: "Leather Messenger Bag",
            price: 149.99,
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
        },
        {
            id: 3,
            name: "Travel Duffel Bag",
            price: 129.99,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
        },
        {
            id: 4,
            name: "Business Briefcase",
            price: 179.99,
            image: "https://images.unsplash.com/photo-1547949003-9792a18a2601"
        }
        ]
    };

    const handleQuantityChange = (type) => {
        if (type === "increase" && quantity < product.stock) {
        setQuantity(quantity + 1);
        } else if (type === "decrease" && quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

    const getStockStatus = () => {
        if (product.stock === 0) return { text: "Out of Stock", color: "text-red-600" };
        if (product.stock <= 5) return { text: "Low Stock", color: "text-yellow-600" };
        return { text: "In Stock", color: "text-green-600" };
    };

    return (
        <Section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-500">
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden ${currentImageIndex === index ? "ring-2 ring-blue-500" : ""}`}
                >
                    <img src={image} alt="" className="w-full h-24 object-cover" />
                </button>
                ))}
            </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-white">{product.name}</h1>
            <div className="mt-4 flex items-center">
                <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <BsStarFill
                    key={index}
                    className={index < Math.floor(product.rating) ? "text-yellow-400" : "text-white"}
                    />
                ))}
                </div>
                <span className="ml-2 text-white">{product.rating} / 5</span>
            </div>

            <p className="mt-6 text-white text-lg leading-relaxed">
                {product.description}
            </p>

            <div className="mt-8">
                <p className="text-4xl font-bold text-white">Rp. {product.price}</p>
                <p className={`mt-2 ${getStockStatus().color}`}>
                {getStockStatus().text} - {product.stock} items left
                </p>
            </div>

            <div className="mt-8">
                <label className="text-white text-sm font-medium">Jumlah</label>
                <div className="mt-2 flex items-center space-x-4">
                <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="p-2 rounded-full bg-black hover:bg-gray-200"
                    disabled={quantity <= 1}
                >
                    <FiMinus />
                </button>
                <span className="text-xl font-medium">{quantity}</span>
                <button
                    onClick={() => handleQuantityChange("increase")}
                    className="p-2 rounded-full bg-black hover:bg-gray-200"
                    disabled={quantity >= product.stock}
                >
                    <FiPlus />
                </button>
                </div>
            </div>

            <div className="mt-8 space-y-4">
                <button
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                disabled={product.stock === 0}
                >
                Simpan keranjang
                </button>
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                Beli sekarang
                </button>
            </div>
            </div>
        </div>
        </Section>
    );
};

const Section = styled.section`
    background: radial-gradient(circle at center, #3A4750 10%, #222831 80%);
    @keyframes neonGlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
export default ProductDetail;