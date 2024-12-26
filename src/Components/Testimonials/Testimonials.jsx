

const Testimonials = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50" id="testimonials">
                <div className="w-11/12 mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-green-700 mb-8">What Our Users Say</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-amber-100">
                            <p className="text-gray-600 mb-4">
                                Recommendo helped me find the perfect headphones! The recommendations were spot on and saved me so much time.
                            </p>
                            <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
                            <p className="text-gray-500">Tech Enthusiast</p>
                            <div className="flex justify-center mt-4">
                                <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-green-100">
                            <p className="text-gray-600 mb-4">
                                I was unsure about which laptop to buy, but after using Recommendo, I got the best deal. Highly recommend it!
                            </p>
                            <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
                            <p className="text-gray-500">Professional Designer</p>
                            <div className="flex justify-center mt-4">
                                <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-amber-100">
                            <p className="text-gray-600 mb-4">
                                I love how easy it is to get personalized suggestions. Recommendo makes shopping so much more convenient!
                            </p>
                            <h4 className="text-lg font-semibold text-gray-800">Sara Lee</h4>
                            <p className="text-gray-500">Fashion Blogger</p>
                            <div className="flex justify-center mt-4">
                                <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;