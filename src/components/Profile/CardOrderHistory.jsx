import { useState, useEffect } from "react";
import { FaSearch, FaShoppingBag, FaTruck, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [loading, setLoading] = useState(true);

    const dummyOrders = [
        {
        id: "ORD-001",
        date: "2024-01-15",
        status: "completed",
        total: 299.99,
        products: [
            {
            id: 1,
            name: "Premium Wireless Headphones",
            quantity: 1,
            price: 199.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            },
            {
            id: 2,
            name: "Smart Watch Pro",
            quantity: 1,
            price: 100.00,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            }
        ],
        shipping: {
            address: "123 Tech Street, Innovation City, IC 12345",
            service: "Express Delivery",
            estimatedDelivery: "2024-01-20"
        }
        },
        {
        id: "ORD-002",
        date: "2024-01-14",
        status: "processing",
        total: 549.97,
        products: [
            {
            id: 3,
            name: "4K Ultra HD Camera",
            quantity: 1,
            price: 549.97,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
            }
        ],
        shipping: {
            address: "456 Camera Boulevard, Photo City, PC 67890",
            service: "Standard Shipping",
            estimatedDelivery: "2024-01-25"
        }
        },
        {
        id: "ORD-003",
        date: "2024-01-13",
        status: "cancelled",
        total: 129.99,
        products: [
            {
            id: 4,
            name: "Wireless Speaker",
            quantity: 1,
            price: 129.99,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
            }
        ],
        shipping: {
            address: "789 Audio Lane, Sound City, SC 13579",
            service: "Standard Shipping",
            estimatedDelivery: "N/A"
        }
        }
    ];

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
        setOrders(dummyOrders);
        setFilteredOrders(dummyOrders);
        setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        const filtered = orders.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = selectedStatus === "all" || order.status === selectedStatus;
        return matchesSearch && matchesStatus;
        });
        setFilteredOrders(filtered);
    }, [searchQuery, selectedStatus, orders]);

    const getStatusColor = (status) => {
        switch (status) {
        case "completed":
            return "bg-green-100 text-green-800";
        case "processing":
            return "bg-yellow-100 text-yellow-800";
        case "cancelled":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
        }
    };

    if (loading) {
        return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        );
    }

    if (!filteredOrders.length && !loading) {
        return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <FaShoppingBag className="text-gray-400 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Orders Found</h2>
            <p className="text-gray-500 mb-4">Start shopping to create your order history</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Start Shopping
            </button>
        </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>

            <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                type="text"
                placeholder="Search by Order ID"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
            >
                <option value="all">All Orders</option>
                <option value="completed">Completed</option>
                <option value="processing">Processing</option>
                <option value="cancelled">Cancelled</option>
            </select>
            </div>

            <div className="space-y-4">
            {filteredOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">{order.id}</h2>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <FaCalendarAlt />
                        <span>{new Date(order.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                        <span className="font-semibold text-lg text-gray-900">${order.total.toFixed(2)}</span>
                    </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {order.products.map((product) => (
                        <div key={product.id} className="flex items-center gap-4">
                            <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-lg"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1560393464-5c69a73c5770";
                            }}
                            />
                            <div>
                            <h3 className="font-medium text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                            <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div className="border-t border-gray-200 mt-4 pt-4">
                    <div className="flex items-start gap-2 text-sm text-gray-500">
                        <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                        <div>
                        <p>{order.shipping.address}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <FaTruck />
                            <span>{order.shipping.service}</span>
                            <span className="text-gray-400">|</span>
                            <span>Estimated Delivery: {order.shipping.estimatedDelivery}</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default OrderHistory;