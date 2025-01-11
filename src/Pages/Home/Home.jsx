import Banner from "../../Components/Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import { IoPerson, IoTime } from "react-icons/io5";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import Testimonials from "../../Components/Testimonials/Testimonials";
import TopRecommended from "../../Components/TopRecommended/TopRecommended";
import { FaRegStar } from "react-icons/fa";


const Home = () => {

    const queries = useLoaderData();
    const sortedQueries = queries.sort((a, b) => new Date(b.postedTime) - new Date(a.postedTime))
    // const { user } = useAuth()
    // console.log(queries)

    return (
        <div>
            <Banner></Banner>
            <div className="w-4/5 md:w-3/5 mx-auto text-center">
                <h2 className="text-3xl font-semibold text-green-600 text-center mb-3">Experience the Power of Smart Recommendations</h2>
                <p className=" text-gray-500 italic font-medium">Get personalized suggestions based on your preferences and needs. Make confident choices with tailored insights that help you find the best products effortlessly.</p>
                <div className="divider text-4xl text-gray-300"><FaRegStar /></div>
            </div>
            <div className="w-11/12 mx-auto my-12 mb-24">
                <div>
                    {sortedQueries.length === 0
                        ?
                        <div>
                            <p>Sorry: No Queries Avaialable</p>
                        </div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {
                                sortedQueries.slice(0, 8).map(query =>
                                    <div
                                        key={query._id}
                                        className="rounded shadow bg-green-50 p-4 flex flex-col flex-grow border border-green-200">
                                        <div>
                                            <figure className="flex justify-center">
                                                <img
                                                    src={query.imageURL}
                                                    alt="Shoes"
                                                    className="rounded" />
                                            </figure>
                                            <h2 className="text-lg font-semibold">{query.queryTitle}</h2>
                                        </div>
                                        <div className=" flex flex-col mt-auto">
                                            
                                            <div className="flex flex-col justify-between items-start mb-2">
                                                <img
                                                    src={query.authorImg}
                                                    className="w-12 h-12 rounded-full border border-gray-200 p-1"
                                                    alt="Author Image" />
                                                <div className="text-sm font-medium text-gray-500">
                                                    <p className="flex items-center gap-2"><IoPerson /> {query.authorName}</p>
                                                    <p className="flex items-center gap-2"><IoTime /> {new Date(query.postedTime).toLocaleString()}</p>
                                                </div>
                                            </div>

                                            <div className="card-actions flex items-center justify-between">
                                                <button className="text-sm font-medium text-gray-500">Reccommend Count: {query.recommendationCount ? query.recommendationCount : '0'} </button>
                                                <Link to={`/queryDetails/${query._id}`}>
                                                    <button className=" py-1 px-2 border border-amber-500 bg-green-100 hover:bg-green-200 rounded-lg shadow text-amber-800 hover:scale-95 transition-transform transform">Recommend</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    }
                </div>
                <div className="text-center my-5">
                    <Link to={'/queries'}>
                        <button className="py-2 px-3 text-amber-700 bg-green-100 border border-amber-500 rounded-lg font-semibold shadow hover:bg-green-200 hover:scale-95 transition-transform transform">View All</button>
                    </Link>
                </div>
            </div>
            <TopRecommended></TopRecommended>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;