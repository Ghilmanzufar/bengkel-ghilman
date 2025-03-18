import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaHistory, FaMotorcycle, FaSignOutAlt, FaCamera, FaCog } from "react-icons/fa";

const ProfileSection = () => {
    const navigate = useNavigate();

    const [user] = useState({
        name: "Budi Santoso",
        email: "budi@example.com",
        phone: "081234567890",
        address: "Jl. Merdeka No. 10, Jakarta",
        vehicle: "Honda Vario 150",
        profileImage: "https://via.placeholder.com/150",
    });

    return (
        <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        {/* Bagian Foto Profil */}
        <div className="flex flex-col items-center">
            <div className="relative">
            <img
                src={user.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800">
                <FaCamera />
            </button>
            </div>
            <p className="mt-3 text-lg font-semibold text-black">{user.name}</p>

            {/* Menu Aksi */}
            <div className="mt-4 space-y-2 w-full text-center">
                <button
                    className="flex items-center justify-center w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    onClick={() => navigate("/orderHistory")}
                >
                    <FaHistory className="mr-2" /> Riwayat Pesanan
                </button>
                <button
                    className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => navigate("/historybookingservice")}
                >
                    <FaMotorcycle className="mr-2" /> Riwayat Booking dan Servis
                </button>
                <button
                    className="flex items-center justify-center w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    onClick={() => navigate("/resetpassword")}
                >
                    <FaCog className="mr-2" /> Ubah Password
                </button>
                <button className="flex items-center justify-center w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    <FaSignOutAlt className="mr-2" /> Logout Akun
                </button>
            </div>
        </div>

        {/* Bagian Detail Profil */}
        <div className="md:col-span-2 bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Data Pelanggan</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Detail informasi tentang pelanggan</p>
            </div>
            <div className="border-t border-gray-200">
            <dl>
                {[
                { label: "Nama", value: user.name },
                { label: "Alamat Email", value: user.email },
                { label: "Nomer Hp", value: user.phone },
                { label: "Alamat tempat tinggal", value: user.address },
                { label: "Jenis dan Merk", value: user.vehicle },
                ].map((item, index) => (
                <div
                    key={index}
                    className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                >
                    <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.value}</dd>
                </div>
                ))}
            </dl>
            </div>

            {/* Button Edit Profil */}
            <div className="p-4 flex justify-end">
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <FaEdit className="mr-2" /> Edit Profil
            </button>
            </div>
        </div>
        </div>
    );
};

export default ProfileSection;
