import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import setting from '../../../public/setting.json'
import { FaRegStar } from "react-icons/fa";


const HowItWorks = () => {
    return (
        <div className="w-11/12 mx-auto mb-16">
            <div className="mb-8">
                <h2 className="text-4xl font-semibold text-green-700 text-center ">How Recommendo Works</h2>
                <p className='text-center text-gray-500 italic'>Discover, Compare, and Decide – Everything You Need, All in One Place</p>
                <div className="divider w-9/12 mx-auto text-4xl text-gray-300"><FaRegStar /></div>
            </div>

            <section className=" grid grid-cols-1 md:grid-cols-12" id="how-it-works">
                <div className="md:col-span-4 flex justify-center items-center">
                    <div className="w-64 lg:w-80 h:80">
                        <Lottie animationData={setting}></Lottie>
                    </div>
                </div>
                <div className="text-center md:col-span-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl text-blue-500 mb-4">
                                <i className="fas fa-search"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ask Your Query</h3>
                            <p className="text-gray-600 text-center">
                                SignIn and Type your product-related query and get personalized product suggestions. For example, Best laptop under $1000.
                            </p>
                        </div>

                        <div className="flex flex-col items-center bg-amber-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl text-green-500 mb-4">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Personalized Recommendations</h3>
                            <p className="text-gray-600 text-center">
                                Based on your query, we provide tailored recommendations using advanced algorithms for your needs.
                            </p>
                        </div>

                        <div className="flex flex-col items-center bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl text-red-500 mb-4">
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compare and Buy</h3>
                            <p className="text-gray-600 text-center">
                                Easily compare the products, read reviews, and make an informed decision before purchasing.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <div className="flex justify-center">
                <Link to={'/addQueries'}>
                    <button className="py-2 px-3 mt-3 text-amber-700 bg-green-100 border border-amber-500 rounded-lg font-semibold shadow hover:bg-green-200 hover:scale-95 transition-transform transform">Start Your Query Now</button>
                </Link>
            </div>
        </div>
    );
};

export default HowItWorks;
