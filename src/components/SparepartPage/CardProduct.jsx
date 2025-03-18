import { useState, useCallback, useEffect } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { debounce } from "lodash";

const ProductListingPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedBrand, setSelectedBrand] = useState("all");
    const [sortOption, setSortOption] = useState("popular");
    const [products, setProducts] = useState([]);

    const dummyProducts = [
        {
        id: 1,
        title: "Premium Wireless Headphones",
        price: 299.99,
        originalPrice: 399.99,
        category: "Electronics",
        brand: "SoundMax",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        },
        {
        id: 2,
        title: "Athletic Running Shoes",
        price: 89.99,
        originalPrice: 129.99,
        category: "Sports",
        brand: "SpeedFit",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        },
        {
        id: 3,
        title: "Smart Watch Series X",
        price: 199.99,
        originalPrice: 249.99,
        category: "Electronics",
        brand: "TechPro",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        },
        // Add more dummy products as needed
    ];

    useEffect(() => {
        setProducts(dummyProducts);
    }, []);

    const handleSearch = useCallback(
        debounce((query) => {
        const filtered = dummyProducts.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filtered);
        }, 300),
        []
    );

    const handlePriceRangeChange = (e) => {
        setPriceRange([0, parseInt(e.target.value)]);
    };

    const ProductCard = ({ product }) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative aspect-w-16 aspect-h-9">
            <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full"
            loading="lazy"
            onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1560393464-5c69a73c5770";
            }}
            />
        </div>
        <div className="p-4 text-black">
            <h3 className="text-lg font-semibold line-clamp-2">{product.title}</h3>
            <div className="mt-2 flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">
                ${product.price}
            </span>
            {product.originalPrice > product.price && (
                <span className="text-sm text-red-600 line-through">
                ${product.originalPrice}
                </span>
            )}
            </div>
            <div className="mt-4 space-y-2">
            <button className="w-full py-2 px-4 bg-gray-100 text-black rounded-md flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                <FiShoppingCart /> Keranjang
            </button>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Beli Sekarang
            </button>
            </div>
        </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
            <div className="container mx-auto px-4">
            <div className="relative text-black">
                <input
                type="text"
                placeholder="Cari produk..."
                className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleSearch(e.target.value);
                }}
                value={searchQuery}
                />
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
            </div>
        </header>

        <main className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4 space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                <h2 className="font-semibold mb-4 ">Filter Harga</h2>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={handlePriceRangeChange}
                    className="w-full"
                />
                <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                <h2 className="font-semibold mb-4">Jenis Sparepart</h2>
                <select
                    className="w-full p-2 border rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="all">Semua part</option>
                    <option value="suku-cadang">Suku cadang</option>
                    <option value="sistem-pengapian">Sistem Pengapian</option>
                    <option value="sistem-kelistrikan">Sistem Kelistrikan</option>
                    <option value="sistem-kaki-kaki">Sistem Kaki-Kaki</option>
                    <option value="sistem-bahan-bakar">Sistem Bahan Bakar</option>
                    <option value="sistem-pendingin">Sistem Pendingin</option>
                    <option value="sistem-transmisi">Sistem Transmisi / Cvt</option>
                    <option value="sistem-rem">Sistem Rem</option>
                    <option value="sistem-knalpot">Sistem Knalpot</option>
                    <option value="sistem-body">Sistem Body Part</option>


                </select>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                <h2 className="font-semibold mb-4">Brand / Merk</h2>
                <select
                    className="w-full p-2 border rounded-md"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                >
                    <option value="all">Semua Brand</option>
                    <option value="yamaha">Yamaha</option>
                    <option value="honda">Honda</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="kawasaki">Kawasaki</option>
                </select>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm text-black">
                <h2 className="font-semibold mb-4">Urutkan</h2>
                <select
                    className="w-full p-2 border rounded-md"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="popular">Terlaris</option>
                    <option value="lowest">Termurah</option>
                    <option value="highest">Termahal</option>
                </select>
                </div>
            </aside>

            <div className="lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-8 text-black">
                    Tidak ada produk ditemukan
                    </div>
                )}
                </div>
            </div>
            </div>
        </main>
        </div>
    );
};

export default ProductListingPage;