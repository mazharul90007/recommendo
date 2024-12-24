import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { IoPerson, IoTime } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import nodata from '../../assets/noData.png'


const MyQueries = () => {
    const [myQueries, setMyQueries] = useState([])
    const { user } = useAuth()


    useEffect(()=>{
        axios.get(`http://localhost:3000/queries?authorEmail=${user.email}`)
        .then(res =>{
            const data = res.data;
            setMyQueries(data);
            console.log(data);
        })
    },[user.email])
    return (
        <div className="w-11/12 mx-auto">
            <div className="hero bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-5 mb-5 rounded-lg">
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
            </div>

            <div>
                {
                    myQueries.length === 0
                        ?
                        <div>
                            <img className="mx-auto" src={nodata} alt="No Data img" />
                            <p className="text-center my-5 text-2xl font-semibold text-amber-700">Please, Add Your Queries.</p>
                        </div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {
                                myQueries.map(query =>
                                    <div
                                        key={query._id}
                                        className="card card-compact bg-base-100 shadow-xl">
                                        <figure>
                                            <img
                                                src={query.imageURL}
                                                alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
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
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Buy Now</button>
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

export default MyQueries;