import { useState } from "react";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Password baru dan konfirmasi tidak cocok.");
            return;
        }
        setError("");
        alert("Password berhasil diubah!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-grey-500 to-sky-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Ubah Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-black">
                        <label className="block text-gray-600 font-medium mb-1">Password Lama</label>
                        <input
                            type="password"
                            className="w-full text-black p-3 border rounded-lg focus:ring focus:ring-blue-300"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Password Baru</label>
                        <input
                            type="password"
                            className="w-full p-3 border rounded-lg text-black focus:ring focus:ring-blue-300"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Konfirmasi Password Baru</label>
                        <input
                            type="password"
                            className="w-full p-3 border rounded-lg text-black focus:ring focus:ring-blue-300"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
                    >
                        Simpan Perubahan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
