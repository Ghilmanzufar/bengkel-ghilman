import { useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oli from './assets/OliMotul.jpeg';
import kampasRem from './assets/KampasRem.jpeg';
import ban from './assets/Ban.jpeg';
import roler from './assets/roler.jpeg';
import gear from './assets/gear.jpg';
import kampasGanda from './assets/kampasGanda.jpeg';
import velg from './assets/velg.jpeg';
import masterRem from './assets/masterRem.jpeg';



const products = 
    [
        {
            id: 1,
            name: "Oli MOTUL Power Scooter full synthetic",
            price: 299.99,
            description: "Cocok untuk semua motor matic",
            image: oli
        },
        {
            id: 2,
            name: "Kampas Rem Belakang Daytona",
            price: 199.99,
            description: "Beat, Vario, PCX CBU, Genio, Spacy ",
            image: kampasRem
        },
        {
            id: 3,
            name: "Ban Michellin Pilot Moto GP Ring 14 Lebar",
            price: 49.99,
            description: "Lebar 100/80 90/90 90/80 80/90 Ban Matic Soft Compound ",
            image: ban
        },
        {
            id: 4,
            name: "UMA RACING Roler",
            price: 79.99,
            description: "Vario 125 PCX150 Vario150 ADV Skywave SPIN Skydrive Genio Scoopy 2021 Beat New 2020",
            image: roler
        },
        {
            id: 5,
            name: "GEAR PAKET RANTAI SUPRA X125",
            price: 159.99,
            description: "RGB mechanical keyboard with custom switches",
            image: gear
        },
        {
            id: 6,
            name: "Kampas Ganda Daytona",
            price: 399.99,
            description: "Untuk Semua Motor Matic",
            image: kampasGanda
        },
        {
            id: 7,
            name: "Velg RCB SP522 GOLD R17",
            price: 39.99,
            description: "pnp semua motor",
            image: velg
        },
        {
            id: 8,
            name: "Master Rem Ktc",
            price: 129.99,
            description: "Radial Big Size up 105, cocok untuk semua matic ",
            image: masterRem
        }
]

const ProductCard = ({ product }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 sm:w-full max-w-[250px] mx-auto">
            <div className="relative aspect-square overflow-hidden">
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
                {imageError ? (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">Image not available</span>
                    </div>
                ) : (
                    <img
                        src={product.image}
                        alt={product.name}
                        className={`object-cover w-full h-full ${isLoading ? "opacity-0" : "opacity-100"}`}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setImageError(true)}
                    />
                )}
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                    <FiHeart className="w-5 h-5 text-gray-600" />
                </button>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">Rp. {product.price}</span>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        <FiShoppingCart className="w-5 h-5" />
                        Tambahkan Keranjang
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductListing = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-white mb-8">Featured Products</h1>
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className="p-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </Section>
    );
};
const Section = styled.section`
    background: radial-gradient(circle at center, #3A4750 10%, #222831 80%);
`;

export default ProductListing;
