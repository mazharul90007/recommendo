import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import nodata from '../../assets/noData.png'
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyRecommendation = () => {
    const { user } = useAuth();
    const [recommendations, setRecommendations] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // axios.get(`http://localhost:3000/myRecommendation?recommenderEmail=${user.email}`, {withCredentials: true})
        //     .then(res => {
        //         const data = res.data;
        //         // console.log(data);
        //         setRecommendations(data);
        //     })

        axiosSecure.get(`/myRecommendation?recommenderEmail=${user.email}`)
        .then(res => {
                    const data = res.data;
                    console.log(data);
                    setRecommendations(data);
                })

    }, [axiosSecure, user.email])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Your recommendation will also be removed from the user's query.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/myRecommendation/${id}`)
                    .then(res => {
                        console.log(res.data)

                        const remaining = recommendations.filter(recommendation => recommendation._id !== id);
                        setRecommendations(remaining);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        })


    }
    return (
        <div className="w-11/12 mx-auto mb-16">
            <div>
                {
                    recommendations.length === 0
                        ?
                        <div>
                            <img className="mx-auto" src={nodata} alt="No Data img" />
                            <p className="text-center my-5 text-2xl font-semibold text-amber-700">Sorry! You have not recommended any query yet...</p>
                        </div>
                        :
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th> User Query</th>
                                        <th>My Recommendation</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recommendations.map((recommendation, index) => <tr key={recommendation._id}>
                                            <th>{index + 1}</th>
                                            {/* My Query */}
                                            <td>
                                                <div className="flex flex-col md:flex-row items-center gap-2">
                                                    <img className="w-12 h-12 rounded-lg" src={recommendation.queryImage} alt="" />
                                                    <p>{recommendation.productName}</p>
                                                </div>
                                            </td>
                                            {/* Recommendation */}
                                            <td>
                                                <div className="flex flex-col md:flex-row  items-center gap-2">
                                                    <img className="w-12 h-12 rounded-lg" src={recommendation.recommendedImageURL} alt="" />
                                                    <p>{recommendation.recommendedProductName}</p>
                                                </div>
                                            </td>
                                            {/* Action Buttons */}
                                            <td>
                                                <div className="flex flex-col md:flex-row  items-center gap-2">
                                                    <Link to={`/myRecommendation/${recommendation._id}`}>
                                                        <button className="py-1 px-2 border border-green-500 rounded-md shadow">Details</button>
                                                    </Link>
                                                    <button onClick={() => handleDelete(recommendation._id)} className=" text-xl text-red-500 py-1 px-2 border border-red-500 rounded-md shadow"><MdDelete /></button>
                                                </div>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                }

            </div>
        </div>
    );
};

export default MyRecommendation;