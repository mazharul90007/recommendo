import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const RecommendationForMe = () => {
    const { user } = useAuth();
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/recommendation?userEmail=${user.email}`)
            .then(res => {
                const data = res.data;
                console.log(data);
                setRecommendations(data);
            })
    }, [user.email])
    return (
        <div className="w-11/12 mx-auto mb-16">
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>My Query</th>
                                <th>Recommendation</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recommendations.map((recommendation, index) => <tr key={recommendation._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <img className="w-12 h-12 rounded-lg" src={recommendation.queryImage} alt="" />
                                            <p>{recommendation.productName}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <img className="w-12 h-12 rounded-lg" src={recommendation.recommendedImageURL} alt="" />
                                            <p>{recommendation.recommendedProductName}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <Link to={`/recommendationForMe/${recommendation._id}`}>
                                                <button className="py-1 px-2 border border-green-500 rounded-md shadow">Details</button>
                                            </Link>
                                            <button className=" text-xl text-red-500 py-1 px-2 border border-red-500 rounded-md shadow"><MdDelete /></button>
                                        </div>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecommendationForMe;