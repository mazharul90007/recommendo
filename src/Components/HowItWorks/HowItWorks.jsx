import { Link } from "react-router-dom";


const HowItWorks = () => {
    return (
        <div className="w-11/12 mx-auto">
            <section className="pb-16" id="how-it-works">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-green-700 mb-8">How Recommendo Works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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

                        <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl text-red-500 mb-4">
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compare and Buy</h3>
                            <p className="text-gray-600 text-center">
                                Easily compare the products, read reviews, and make an informed decision before purchasing.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link to={'/signin'}>
                            <button className="btn btn-primary">Start Your Query Now</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
