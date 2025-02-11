import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Contact <span className="text-amber-700">Us</span>
                </h2>

                <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                        <FaPhone className="text-amber-700 text-2xl" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                            <p className="text-gray-600">+088 1939753168</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                        <FaEnvelope className="text-amber-700 text-2xl" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                            <p className="text-gray-600">support@recommendo.com</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                        <FaMapMarkerAlt className="text-amber-700 text-2xl" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                            <p className="text-gray-600">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-400 italic font-semibold">
                        Feel free to reach out for any inquiries or collaborations!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;