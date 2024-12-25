import { Link, useLoaderData } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import { IoPerson, IoTime } from "react-icons/io5";

const Queries = () => {

    const queries = useLoaderData();
    const sortedQueries = queries.sort((a, b) => new Date(b.postedTime) - new Date(a.postedTime))
    // const { user } = useAuth()
    console.log(queries)

    return (
        <div className="w-11/12 mx-auto my-12">
            <div>
                {sortedQueries.length === 0
                    ?
                    <div>
                        <p>Sorry: No Queries Avaialable</p>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            sortedQueries.map(query =>
                                <div
                                    key={query._id}
                                    className="card card-compact bg-base-100 shadow">
                                    <figure>
                                        <img
                                            src={query.imageURL}
                                            alt="Shoes" />
                                    </figure>

                                    <div className="card-body flex flex-col">
                                        <h2 className="card-title">{query.queryTitle}</h2>

                                        <p className="text-gray-500 font-medium">Item: {query.productName}</p>
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
                                            <button className="">Reccommend Count: {query.recommendationCount ? query.recommendationCount : '0'} </button>
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