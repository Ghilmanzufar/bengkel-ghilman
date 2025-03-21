import React from "react";
import Logo from "../../assets/Logo.png";

const CardLogin = () => {
    return (
        <div className="min-h-screen bg-black text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <h1 className="text-3xl text-center font-serif font-bold">Form Login</h1>
                    <div className="mt-12 flex flex-col items-center">
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-blue-200 focus:outline-none">
                                <svg className="w-6 h-6 -ml-2 mx-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span>Daftar Akun Sekarang</span>
                                </button>
                            </div>
                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Silahkan Login
                                </div>
                            </div>
                            <div className="mx-auto max-w-xs">
                                <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="email" placeholder="Email" />
                                <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" />
                                <button className="mt-5 tracking-wide font-semibold bg-blue-400 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-2">Sign In</span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    <a href="#" className="border-b border-gray-500 border-dotted">Lupa Password</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-gray-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${Logo})` }}></div>
                </div>
            </div>
        </div>
    );
};

export default CardLogin;
