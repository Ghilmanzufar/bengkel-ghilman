import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaUser, FaShoppingCart } from "react-icons/fa"; // Import ikon dari React Icons

const NavbarComponent = () => {
    // Simulasi status login (bisa diganti dengan state dari authentication)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartItems, setCartItems] = useState(3); // Contoh jumlah item dalam keranjang

    return (
        <nav className="navbar shadow-sm p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Sparepart">Sparepart</Link></li>
                        <li><Link to="/Booking">Booking Servis</Link></li>
                        <li><Link to="/Promo">Promo</Link></li>
                        <li><Link to="/Aboutus">Tentang Kami</Link></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost text-xl">Bengkel Sparepart</Link>
            </div>

            <div className="navbar-end flex gap-4">
                {/* Keranjang Belanja */}
                <div className="relative">
                    <Link to="/cart" className="btn btn-ghost btn-circle text-2xl">
                        <FaShoppingCart />
                        {cartItems > 0 && (
                            <span className="badge badge-sm bg-red-500 text-white absolute -top-2 -right-2">{cartItems}</span>
                        )}
                    </Link>
                </div>

                {/* User Profile Icon */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-2xl">
                        {isLoggedIn ? <FaUser /> : <FaUserCircle />} {/* Ganti ikon sesuai status login */}
                    </div>
                    <ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {isLoggedIn ? (
                            <>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><button onClick={() => setIsLoggedIn(false)}>Logout</button></li>
                            </>
                        ) : (
                            <li><button onClick={() => setIsLoggedIn(true)}>Login</button></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
