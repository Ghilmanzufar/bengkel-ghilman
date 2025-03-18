import { useState } from "react";

const filtersData = {
    jenisSparepart: [
        { value: "suku-cadang", label: "Suku Cadang" },
        { value: "sistem-pengapian", label: "Sistem Pengapian" },
        { value: "sistem-kelistrikan", label: "Sistem Kelistrikan" },
        { value: "sistem-kaki-kaki", label: "Sistem Kaki-Kaki" },
        { value: "sistem-bahan-bakar", label: "Sistem Bahan Bakar" },
        { value: "sistem-pendingin", label: "Sistem Pendingin" },
        { value: "sistem-transmisi-cvt", label: "Sistem Transmisi & CVT" },
        { value: "sistem-rem", label: "Sistem Rem" },
        { value: "sistem-knalpot", label: "Sistem Knalpot" },
        { value: "aksesoris-body-part", label: "Aksesoris & Body Part" },
    ],
    merk: [
        { value: "yamaha", label: "Yamaha" },
        { value: "honda", label: "Honda" },
        { value: "suzuki", label: "Suzuki" },
        { value: "kawasaki", label: "Kawasaki" },
    ],
    stok: [
        { value: "tersedia", label: "Tersedia" },
        { value: "habis", label: "Habis" },
    ],
    kondisi: [
        { value: "baru", label: "Baru" },
        { value: "bekas", label: "Bekas" },
    ],
};

export default function CategoryFilter({ onFilterChange }) {
    const [selectedFilters, setSelectedFilters] = useState({
        jenisSparepart: [],
        merk: [],
        stok: [],
        kondisi: [],
    });

    const [openDropdown, setOpenDropdown] = useState(null);

    const handleCheckboxChange = (category, value) => {
        setSelectedFilters((prevFilters) => {
            const newFilters = { ...prevFilters };
            if (newFilters[category].includes(value)) {
                newFilters[category] = newFilters[category].filter((item) => item !== value);
            } else {
                newFilters[category].push(value);
            }
            onFilterChange(newFilters);
            return newFilters;
        });
    };

    return (
        <div className="w-full flex flex-wrap gap-2 items-center justify-center p-4 border-b border-gray-200 bg-white">
            {Object.entries(filtersData).map(([category, options]) => (
                <div key={category} className="relative">
                    <button
                        onClick={() => setOpenDropdown(openDropdown === category ? null : category)}
                        className="px-3 py-2 bg-gray-100 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition text-sm"
                    >
                        <span className="text-gray-900 capitalize">{category.replace(/([A-Z])/g, " $1")}</span>
                        <span>{openDropdown === category ? "▲" : "▼"}</span>
                    </button>

                    {openDropdown === category && (
                        <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-3 border z-10">
                            {options.map((option) => (
                                <div key={option.value} className="flex items-center mb-1">
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        name={category}
                                        value={option.value}
                                        checked={selectedFilters[category].includes(option.value)}
                                        onChange={() => handleCheckboxChange(category, option.value)}
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={option.value} className="ml-2 text-gray-700 text-sm">{option.label}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {/* Reset Filter Button */}
            <button
                onClick={() => setSelectedFilters({ jenisSparepart: [], merk: [], stok: [], kondisi: [] })}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm w-full sm:w-auto"
            >
                Reset Filter
            </button>
        </div>
    );
}
