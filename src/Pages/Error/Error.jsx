import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorAnimation from "../../../public/404.json"


const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <div className="w-64 md:w-96">
                <Lottie animationData={errorAnimation} loop={true} />
            </div>
            <h1 className="text-4xl font-bold text-red-600 mt-6">404 - Page Not Found</h1>
            <p className="text-gray-500 mt-2 text-lg">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="mt-6 px-6 py-3 bg-green-100 text-amber-700 border border-amber-500 text-lg font-semibold rounded-lg shadow-md hover:bg-green-200 transition">
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;