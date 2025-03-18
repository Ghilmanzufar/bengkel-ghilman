import { useState, useEffect } from "react";
import { FaMotorcycle, FaUserAlt, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ServiceBookingCard = () => {
    const [formData, setFormData] = useState({
        customerName: "",
        phoneNumber: "",
        servicePackage: "",
        motorcycleBrand: "",
        bookingTime: new Date(),
        notes: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const serviceOptions = [
        "Regular Maintenance",
        "Oil Change",
        "Tire Replacement",
        "Engine Tune-up",
        "Break Service",
        "Full Service"
    ];

    const motorcycleBrands = [
        "Honda",
        "Yamaha",
        "Kawasaki",
        "Suzuki",
        "Harley-Davidson",
        "BMW",
        "Ducati",
        "KTM"
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.customerName.trim()) {
        newErrors.customerName = "Name is required";
        } else if (!/^[A-Za-z\s]{2,}$/.test(formData.customerName)) {
        newErrors.customerName = "Name should contain only letters and be at least 2 characters";
        }

        if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required";
        } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Please enter a valid phone number";
        }

        if (!formData.servicePackage) {
        newErrors.servicePackage = "Please select a service package";
        }

        if (!formData.motorcycleBrand) {
        newErrors.motorcycleBrand = "Please select a motorcycle brand";
        }

        if (formData.bookingTime < new Date()) {
        newErrors.bookingTime = "Booking time cannot be in the past";
        }

        if (formData.notes.length > 250) {
        newErrors.notes = "Notes cannot exceed 250 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validateForm()) {
        setIsSubmitting(true);
        try {
            // Simulating API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success("Booking submitted successfully!");
            setFormData({
            customerName: "",
            phoneNumber: "",
            servicePackage: "",
            motorcycleBrand: "",
            bookingTime: new Date(),
            notes: ""
            });
        } catch (error) {
            toast.error("Failed to submit booking. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Form Booking Servis
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                    <FaUserAlt className="mr-2" />
                    Nama Pelanggan
                </label>
                <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    className={`mt-1 block  w-full rounded-md border ${errors.customerName ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
                    placeholder="Enter your name"
                />
                {errors.customerName && (
                    <p className="mt-1 text-sm text-red-500">{errors.customerName}</p>
                )}
                </div>

                <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                    <FaPhone className="mr-2" />
                    Nomer Hp
                </label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
                    placeholder="Enter phone number"
                />
                {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                )}
                </div>

                <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                    Paket Servis
                </label>
                <select
                    name="servicePackage"
                    value={formData.servicePackage}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.servicePackage ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
                >
                    <option value="">Pilih Paket Servis</option>
                    {serviceOptions.map(service => (
                    <option key={service} value={service}>{service}</option>
                    ))}
                </select>
                {errors.servicePackage && (
                    <p className="mt-1 text-sm text-red-500">{errors.servicePackage}</p>
                )}
                </div>

                <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                    <FaMotorcycle className="mr-2" />
                    Brand Motor
                </label>
                <select
                    name="motorcycleBrand"
                    value={formData.motorcycleBrand}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.motorcycleBrand ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
                >
                    <option value="">Pilih Brand motor</option>
                    {motorcycleBrands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
                {errors.motorcycleBrand && (
                    <p className="mt-1 text-sm text-red-500">{errors.motorcycleBrand}</p>
                )}
                </div>

                <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                    <FaCalendarAlt className="mr-2" />
                    Waktu Booking
                </label>
                <DatePicker
                    selected={formData.bookingTime}
                    onChange={(date) => setFormData(prev => ({ ...prev, bookingTime: date }))}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    className={`mt-1 block w-full rounded-md border ${errors.bookingTime ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
                />
                {errors.bookingTime && (
                    <p className="mt-1 text-sm text-red-500">{errors.bookingTime}</p>
                )}
                </div>

                <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                    <MdDescription className="mr-2" />
                    Pesan Tambahan
                </label>
                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className={`mt-1 block w-full rounded-md border ${errors.notes ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black`}
                    placeholder="Pesan Tambahan? (optional)"
                />
                <p className="mt-1 text-sm text-gray-500">
                    {formData.notes.length}/250 characters
                </p>
                {errors.notes && (
                    <p className="mt-1 text-sm text-red-500">{errors.notes}</p>
                )}
                </div>

                <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                >
                {isSubmitting ? (
                    <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                    </>
                ) : "Book Service"}
                </button>
            </form>
            </div>
        </div>
        <ToastContainer position="bottom-right" />
        </div>
    );
};

export default ServiceBookingCard;