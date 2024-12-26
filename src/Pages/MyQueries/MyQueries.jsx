import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { IoPerson, IoTime } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import nodata from '../../assets/noData.png'
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const MyQueries = () => {
    const [myQueries, setMyQueries] = useState([])
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        // axios.get(`http://localhost:3000/queries?authorEmail=${user.email}`)
        //     .then(res => {
        //         const data = res.data;
        //         setMyQueries(data);
        //         // console.log(data);
        //     })
        axiosSecure.get(`/queries?authorEmail=${user.email}`)
            .then(res => {
                const data = res.data;
                // console.log(data);
                setMyQueries(data);
            })
    }, [axiosSecure ,user.email])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "All the recommendations related to your query will also be deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/recommendation/${id}`)
                    .then(res => {
                        console.log(res.data);

                        axios.delete(`http://localhost:3000/queries/${id}`)

                        const remaining = myQueries.filter(myQuery => myQuery._id !== id);
                        setMyQueries(remaining);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        })
    }
    return (
        <div className="w-11/12 mx-auto mb-12">
            <div className="hero bg-gradient-to-r from-green-600 to-green-700 text-white py-5 mb-5 rounded-lg">
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
                                className="btn btn-success px-8 py-3 text-lg text-white font-semibold border border-green-600 transition-all duration-300 shadow-md"
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
                                        className="card card-compact bg-base-100 shadow">
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
                                            <div className="card-actions">
                                                <Link to={`/queryDetails/${query._id}`}>
                                                    <button className=" py-2 px-3 border rounded-lg shadow">View Details</button>
                                                </Link>

                                                <Link to={`/updateQuery/${query._id}`}>
                                                    <button className=" py-2 px-3 border rounded-lg shadow ">Update</button>
                                                </Link>

                                                <button onClick={() => handleDelete(query._id)} className=" py-2 px-3 border rounded-lg shadow ">Delete</button>
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