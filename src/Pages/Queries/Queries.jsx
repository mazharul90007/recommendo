import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { IoPerson, IoTime } from "react-icons/io5";

const Queries = () => {

    const queries = useLoaderData();
    const { user } = useAuth()
    console.log(queries)

    return (
        <div className="w-11/12 mx-auto">
            {/* <div className="hero bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-5 mb-5 rounded-lg">
                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold mb-6">
                            Welcome to the Query Portal
                        </h1>
                        <p className="mb-8 text-lg">
                            Have questions or suggestions? Add your queries and share them with others.
                        </p>
                        <Link to={'/addQueries'}>
                            <button
                                className="btn btn-primary px-8 py-3 text-lg font-semibold hover:bg-indigo-700 transition-all duration-300"
                            >
                                Add Queries
                            </button>
                        </Link>
                    </div>
                </div>
            </div> */}

            <div>
                {queries.length === 0
                    ?
                    <div>
                        <p>Sorry: No Queries Avaialable</p>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            queries.map(query =>
                                <div
                                    key={query._id}
                                    className="card card-compact bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src={query.imageURL}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body flex flex-col">
                                        <h2 className="card-title">{query.queryTitle}</h2>
                                        <div className="flex justify-between items-center">
                                            <img
                                                src={query.authorImg}
                                                className="w-12 h-12 rounded-full border border-gray-200 p-1"
                                                alt="Author Image" />
                                            <div>
                                                <p className="flex items-center gap-2"><IoPerson /> {query.authorName}</p>
                                                <p className="flex items-center gap-2"><IoTime /> {new Date(query.postedTime).toLocaleString()}</p>
                                            </div>
                                        </div>

                                        <div className="card-actions flex items-center justify-between mt-auto">
                                            <button className="">Reccommend Count: </button>
                                            <Link to={`/queryDetails/${query._id}`}>
                                                <button className=" py-2 px-3 border border-green-100 rounded-lg shadow text-green-700">Recommend</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Queries;