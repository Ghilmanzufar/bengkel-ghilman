import React, { useState, useEffect } from "react";
import { FaLightbulb, FaHistory, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaStar, FaUsers, FaCheckCircle, FaRocket } from "react-icons/fa";

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

    const milestones = [
        { year: 2018, title: "Awal Mula Berdiri", description: "Berawal dari kecintaan kami terhadap dunia otomotif, Bengkel Sparepart Ghilman didirikan sebagai sebuah bengkel kecil di Cibitung. Kami melihat banyak pemilik motor kesulitan mendapatkan sparepart berkualitas dengan harga terjangkau. Dari sinilah kami mulai menyediakan berbagai suku cadang untuk memenuhi kebutuhan pelanggan setia kami." },
        { year: 2019, title: "Memperluas Pilihan Produk", description: "Seiring meningkatnya permintaan, kami memperluas katalog produk dengan menyediakan berbagai sparepart motor dari brand ternama. " },
        { year: 2020, title: "Masuk ke Dunia Digital", description: "Melihat perkembangan teknologi dan perubahan pola belanja konsumen, kami memutuskan untuk merambah ke dunia digital dengan meluncurkan toko online pertama kami. " },
        { year: 2021, title: "Ekspansi dan Kemitraan Baru", description: "Kami terus berkembang dan menjalin kemitraan dengan lebih banyak supplier serta layanan pengiriman terpercaya." },
    ];

    const advantages = [
        { icon: <FaStar />, title: "Produk Berkualitas Tinggi", description: "Kami hanya menyediakan sparepart dari brand terpercaya yang telah teruji daya tahannya." },
        { icon: <FaUsers />, title: "Harga Terjangkau & Kompetitif", description: "Kami menawarkan harga yang bersaing tanpa mengorbankan kualitas, sehingga pelanggan bisa mendapatkan produk terbaik dengan biaya yang efisien" },
        { icon: <FaCheckCircle />, title: "Belanja Mudah & Cepat", description: "Dengan platform e-commerce yang modern, Anda bisa mencari, membandingkan, dan membeli produk dengan beberapa klik saja." },
        { icon: <FaRocket />, title: "Layanan Pelanggan Responsif", description: "Tim kami siap membantu Anda dalam memilih produk yang tepat serta menjawab semua pertanyaan dengan cepat dan ramah." }
    ];

    return (
        <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1950&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">Bengkel Sparepart Ghilman</h1>
            <p className="text-xl md:text-2xl">Sparetpart Lengkap Ada di Kami</p>
            </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Selamat Datang di Bengkel Sparepart Ghilman</h2>
                <p className="text-lg mb-6">
                tempat terbaik untuk menemukan sparepart motor berkualitas dengan harga terjangkau! Kami hadir untuk memberikan solusi bagi para pemilik kendaraan yang ingin mendapatkan produk terbaik dengan proses pembelian yang mudah, aman, dan terpercaya. Dengan beragam pilihan sparepart, mulai dari komponen mesin hingga aksesoris motor, kami siap memenuhi kebutuhan Anda.
                </p>
                </div>
                <div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1950&q=80" alt="Team" className="rounded-lg shadow-xl" />
                </div>
            </div>
            </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <FaLightbulb className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Visi</h3>
                <p>Menjadi penyedia sparepart motor terlengkap dan terpercaya di Indonesia dengan layanan terbaik dan harga kompetitif</p>
                </div>
                <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <FaRocket className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Misi</h3>
                <ul>
                    <li>
                        1. Menyediakan produk sparepart berkualitas tinggi yang sesuai dengan standar pabrikan.
                    </li>
                    <li>
                        2. Memberikan layanan pelanggan yang cepat, responsif, dan profesional.
                    </li>
                    <li>
                        3. Mempermudah proses pembelian dengan sistem e-commerce yang modern dan user-friendly.
                    </li>
                    <li>
                        4. Menghadirkan promo menarik serta harga bersaing untuk pelanggan setia.
                    </li>
                    <li>
                        5. Berkolaborasi dengan distributor dan supplier terpercaya untuk menjamin ketersediaan produk.
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sejarah Kami</h2>
            <div className="space-y-8">
                {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="w-24 text-center">
                    <span className="text-xl font-bold">{milestone.year}</span>
                    </div>
                    <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p>{milestone.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Keunggulan Kami</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((advantage, index) => (
                <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl text-blue-600 mb-4">{advantage.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p>{advantage.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Kontak Kami</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                    <FaPhone className="text-xl text-blue-600" />
                    <span>+62 888-0123-8937</span>
                    </div>
                    <div className="flex items-center gap-4">
                    <FaEnvelope className="text-xl text-blue-600" />
                    <span>ghilmanzufar2004@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-xl text-blue-600" />
                    <span>Kabupaten Bekasi, Cibitung</span>
                    </div>
                </div>
                </div>
                <div className="bg-gray-200 rounded-lg h-64 md:h-auto">
                {/* Map placeholder */}
                <div className="h-full flex items-center justify-center">
                    <span>Map Integration</span>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Back to Top Button */}
        {isVisible && (
            <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
            <FaArrowUp />
            </button>
        )}

        {/* Dark Mode Toggle */}
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-8 right-8 p-4 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg"
        >
            <FaLightbulb className={darkMode ? "text-yellow-400" : "text-gray-600"} />
        </button>
        </div>
    );
};

export default AboutUs;