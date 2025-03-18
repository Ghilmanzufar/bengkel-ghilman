import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ArticlePage = () => {
    const article = {
        title: "Mengenal Teknologi AI dan Dampaknya",
        author: "John Doe",
        date: "17 Maret 2025",
        image: "https://source.unsplash.com/800x400/?technology",
        content:
        "Artificial Intelligence (AI) telah mengubah cara kita bekerja dan berinteraksi. Dari chatbot hingga mobil tanpa pengemudi, AI memainkan peran besar dalam kehidupan modern. Namun, ada tantangan yang harus dihadapi, seperti etika dan keamanan data.",
        url: window.location.href, // URL artikel saat ini
    };

    const shareOnSocial = (platform) => {
        let shareUrl = "";
        switch (platform) {
        case "facebook":
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${article.url}`;
            break;
        case "twitter":
            shareUrl = `https://twitter.com/intent/tweet?url=${article.url}&text=${article.title}`;
            break;
        case "whatsapp":
            shareUrl = `https://api.whatsapp.com/send?text=${article.title} ${article.url}`;
            break;
        default:
            return;
        }
        window.open(shareUrl, "_blank");
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
        <p className="text-gray-600 text-sm">By {article.author} | {article.date}</p>

        {/* Gambar Thumbnail */}
        <img
            src={article.image}
            alt="Thumbnail"
            className="w-full h-60 object-cover rounded-lg mt-4"
        />

        {/* Konten Artikel */}
        <p className="mt-4 text-gray-700 leading-relaxed">{article.content}</p>

        {/* Tombol Share */}
        <div className="flex space-x-4 mt-6">
            <button
            onClick={() => shareOnSocial("facebook")}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
            <FaFacebook className="mr-2" /> Facebook
            </button>
            <button
            onClick={() => shareOnSocial("twitter")}
            className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
            >
            <FaTwitter className="mr-2" /> Twitter
            </button>
            <button
            onClick={() => shareOnSocial("whatsapp")}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
            <FaWhatsapp className="mr-2" /> WhatsApp
            </button>
        </div>
        </div>
    );
};

export default ArticlePage;
