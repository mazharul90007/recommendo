import { Link, useLoaderData } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import { IoPerson, IoTime } from "react-icons/io5";
import { useState } from "react";

const Queries = () => {

    const queries = useLoaderData();
    const sortedQueries = [...queries].sort((a, b) => new Date(b.postedTime) - new Date(a.postedTime))

    const [searchItem, setSearchItem] = useState('');

    const filteredQueries = sortedQueries.filter(query => query.productName.toLowerCase().includes(searchItem.toLocaleLowerCase()));
    // const { user } = useAuth()
    // console.log(queries)

    const [columns, setColumns] = useState(3);

    return (
        <div className="w-11/12 mx-auto my-12">

            <div className="mb-6">

                <input
                    type="text"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    placeholder="Search by product name"
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            {/* Layout Toggle Buttons */}
            <div className="my-3 gap-4 hidden md:flex justify-center">
                <button
                    onClick={() => setColumns(1)}
                    className={`btn ${columns === 1 ? 'btn-success' : 'btn-outline'}`}
                >
                    1 Column
                </button>

                <button
                    onClick={() => setColumns(2)}
                    className={`btn ${columns === 2 ? 'btn-success' : 'btn-outline'}`}
                >
                    2 Column
                </button>

                <button
                    onClick={() => setColumns(3)}
                    className={`btn ${columns === 3 ? 'btn-success' : 'btn-outline'}`}
                >
                    3 Column
                </button>
            </div>

            <div>
                {filteredQueries.length === 0
                    ?
                    <div>
                        <p>Sorry: No Queries Avaialable</p>
                    </div>
                    :
                    <div className={`grid gap-4 ${columns === 1 ? 'grid-cols-1 md:grid-cols-1' :
                            columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
                                'grid-cols-1 md:grid-cols-3'
                        }`}>
                        {
                            filteredQueries.map(query =>
                                <div
                                    key={query._id}
                                    className={`card card-compact bg-base-100 shadow ${columns === 1 && 'w-full md:w-[500px] mx-auto'}`}>
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
        </div >
    );
};

export default Queries;