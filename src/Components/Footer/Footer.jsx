import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from '../../assets/Recommendo2.png'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0a1435] text-gray-400 py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Brand Info */}
                        <div>
                            <img className="w-28 h-24 mb-2 rounded-xl" src={logo} alt="" />
                            {/* <h2 className="text-white text-2xl font-bold mb-4">Recommendo</h2> */}
                            <p>Discover the best products with recommendations tailored just for you.</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/" className="hover:text-white">Home</a>
                                </li>
                                <li>
                                    <a href="/about" className="hover:text-white">About Us</a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:text-white">Contact</a>
                                </li>
                                <li>
                                    <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                            <p>Have questions or suggestions?</p>
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:support@recommendo.com"
                                    className="hover:text-white"
                                >
                                    support@recommendo.com
                                </a>
                            </p>
                            <p>
                                Phone:{" "}
                                <a href="tel:+123456789" className="hover:text-white">
                                    +1 (234) 567-89
                                </a>
                            </p>
                            <div className="mt-4 flex space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-700" />
                    <div className="text-center text-sm text-gray-500">
                        © 2024 Recommendo. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;