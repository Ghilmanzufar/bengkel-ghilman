import { useState, } from "react";
import { FaTrash, FaCreditCard, FaWallet, FaMoneyBill, FaTruck } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Premium Headphones", price: 199.99, quantity: 1, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
        { id: 2, name: "Wireless Speaker", price: 149.99, quantity: 1, image: "https://images.unsplash.com/photo-1589003077984-894e133dabab" }
    ]);

    const [shippingInfo, setShippingInfo] = useState({
        fullName: "",
        address: "",
        phone: "",
        provider: ""
    });

    const [paymentMethod, setPaymentMethod] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errors, setErrors] = useState({});

    const shippingProviders = [
        { name: "JNE", cost: 10 },
        { name: "J&T", cost: 12 },
        { name: "SiCepat", cost: 8 }
    ];

    const paymentMethods = {
        bank: ["BCA", "Mandiri", "Other Banks"],
        ewallet: ["GoPay", "OVO", "Dana", "ShopeePay"],
        card: ["Credit/Debit Card"],
        cod: ["Cash on Delivery"]
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems(items =>
        items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    const calculateTax = () => calculateSubtotal() * 0.1;
    const getShippingCost = () => shippingInfo.provider ? 
        shippingProviders.find(p => p.name === shippingInfo.provider)?.cost || 0 : 0;

    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax() + getShippingCost();
    };

    const validateForm = () => {
        const newErrors = {};
        if (!shippingInfo.fullName) newErrors.fullName = "Full name is required";
        if (!shippingInfo.address) newErrors.address = "Address is required";
        if (!shippingInfo.phone) newErrors.phone = "Phone number is required";
        if (!shippingInfo.provider) newErrors.provider = "Shipping provider is required";
        if (!paymentMethod) newErrors.payment = "Payment method is required";
        if (!termsAccepted) newErrors.terms = "Please accept terms and conditions";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        console.log("Processing payment...");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 text-black">
        <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-3xl font-bold">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                {/* Product List */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-semibold mb-4 text-black">Your Cart</h2>
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center py-4 border-b">
                    <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1 ml-4">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600">Rp  {item.price}</p>
                    </div>
                    <div className="flex items-center">
                        <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 px-2 py-1 border rounded mr-4"
                        min="1"
                        />
                        <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                        >
                        <FaTrash />
                        </button>
                    </div>
                    </div>
                ))}
                </div>

                {/* Shipping Information */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <div className="space-y-4">
                    <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        value={shippingInfo.fullName}
                        onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                        className="w-full p-2 border rounded"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <textarea
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                        className="w-full p-2 border rounded"
                        rows="3"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                        className="w-full p-2 border rounded"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-1">Shipping Provider</label>
                    <select
                        value={shippingInfo.provider}
                        onChange={(e) => setShippingInfo({...shippingInfo, provider: e.target.value})}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select Provider</option>
                        {shippingProviders.map(provider => (
                        <option key={provider.name} value={provider.name}>
                            {provider.name} (Rp  {provider.cost})
                        </option>
                        ))}
                    </select>
                    {errors.provider && <p className="text-red-500 text-sm mt-1">{errors.provider}</p>}
                    </div>
                </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                    <button
                        className={`p-4 border rounded-lg flex items-center Rp {paymentMethod === 'bank' ? 'border-blue-500 bg-blue-50' : ''}`}
                        onClick={() => setPaymentMethod('bank')}
                    >
                        <BsBank className="mr-2" /> Bank Transfer
                    </button>
                    <button
                        className={`p-4 border rounded-lg flex items-center Rp {paymentMethod === 'ewallet' ? 'border-blue-500 bg-blue-50' : ''}`}
                        onClick={() => setPaymentMethod('ewallet')}
                    >
                        <FaWallet className="mr-2" /> E-Wallet
                    </button>
                    <button
                        className={`p-4 border rounded-lg flex items-center Rp {paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : ''}`}
                        onClick={() => setPaymentMethod('card')}
                    >
                        <FaCreditCard className="mr-2" /> Credit/Debit Card
                    </button>
                    <button
                        className={`p-4 border rounded-lg flex items-center Rp {paymentMethod === 'cod' ? 'border-blue-500 bg-blue-50' : ''}`}
                        onClick={() => setPaymentMethod('cod')}
                    >
                        <FaMoneyBill className="mr-2" /> Cash on Delivery
                    </button>
                    </div>
                    {errors.payment && <p className="text-red-500 text-sm">{errors.payment}</p>}

                    {paymentMethod && (
                    <div className="mt-4">
                        <select className="w-full p-2 border rounded">
                        {paymentMethods[paymentMethod].map(method => (
                            <option key={method} value={method}>{method}</option>
                        ))}
                        </select>
                    </div>
                    )}
                </div>
                </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                    <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rp {calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                    <span>Tax (10%)</span>
                    <span>Rp {calculateTax().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Rp {getShippingCost().toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>Rp {calculateTotal().toFixed(2)}</span>
                    </div>
                    </div>

                    <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Promo Code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    />

                    <div className="mb-4">
                        <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="mr-2"
                        />
                        <span className="text-sm">I accept the terms and conditions</span>
                        </label>
                        {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Pay Now
                    </button>

                    <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                        <FaTruck className="mr-2" />
                        <span>Estimated delivery: 2-4 business days</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CheckoutPage;