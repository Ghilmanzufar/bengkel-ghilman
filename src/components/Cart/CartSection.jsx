import { useState, useEffect } from "react";
import { FiMinus, FiPlus, FiTrash2, FiHeart } from "react-icons/fi";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        quantity: 1,
        maxStock: 5,
        selected: false,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        },
        {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.99,
        quantity: 1,
        maxStock: 8,
        selected: false,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        },
        {
        id: 3,
        name: "Ultra HD Camera",
        price: 799.99,
        quantity: 1,
        maxStock: 3,
        selected: false,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
        }
    ]);

    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
        setCartItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const updateQuantity = (id, newQuantity) => {
        setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === id
            ? { ...item, quantity: Math.max(1, Math.min(newQuantity, item.maxStock)) }
            : item
        )
        );
    };

    const toggleSelection = (id) => {
        setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === id ? { ...item, selected: !item.selected } : item
        )
        );
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setCartItems(prevItems =>
        prevItems.map(item => ({ ...item, selected: newSelectAll }))
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const moveToWishlist = (id) => {
        // Implement wishlist functionality
        console.log("Moved to wishlist:", id);
    };

    const getSelectedTotal = () => {
        return cartItems
        .filter(item => item.selected)
        .reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getSelectedCount = () => {
        return cartItems.filter(item => item.selected).length;
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Keranjang Belanja</h1>

            {cartItems.length === 0 ? (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Keranjang anda Kosong</p>
            </div>
            ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-4 border-b border-gray-200">
                    <label className="flex items-center space-x-3">
                        <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-gray-700 font-medium">Pilih semua produk</span>
                    </label>
                    </div>

                    <div className="divide-y divide-gray-200">
                    {cartItems.map(item => (
                        <div key={item.id} className="p-6">
                        <div className="flex items-center">
                            <input
                            type="checkbox"
                            checked={item.selected}
                            onChange={() => toggleSelection(item.id)}
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <div className="ml-4 flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-24 w-24 object-cover rounded-md"
                                loading="lazy"
                            />
                            </div>
                            <div className="ml-6 flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                                <p className="text-lg font-medium text-gray-900">
                                Rp. {(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Rp. {item.price.toFixed(2)} .00</p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                    disabled={item.quantity <= 1}
                                >
                                    <FiMinus className="h-5 w-5 text-gray-600" />
                                </button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                    disabled={item.quantity >= item.maxStock}
                                >
                                    <FiPlus className="h-5 w-5 text-gray-600" />
                                </button>
                                </div>
                                <div className="flex space-x-3">
                                <button
                                    onClick={() => moveToWishlist(item.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <FiHeart className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <FiTrash2 className="h-5 w-5" />
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Ringkasan Pesanan</h2>
                    <div className="space-y-4">
                    <div className="flex justify-between">
                        <p className="text-gray-600">Total Jumlah Produk</p>
                        <p className="text-gray-900">{getSelectedCount()}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-600">Subtotal harga</p>
                        <p className="text-gray-900">Rp.{getSelectedTotal().toFixed(2)}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                        <button
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        disabled={getSelectedCount() === 0}
                        >
                        Bayar Sekarang
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            )}
        </div>
        </div>
    );
};

export default ShoppingCart;