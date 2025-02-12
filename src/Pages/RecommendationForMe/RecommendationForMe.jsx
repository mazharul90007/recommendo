import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import nodata from '../../assets/noData.png'
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const RecommendationForMe = () => {
    const { user, dayTheme } = useAuth();
    const [recommendations, setRecommendations] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/recommendation?userEmail=${user.email}`)
            .then(res => {
                const data = res.data;
                // console.log(data);
                setRecommendations(data);
            })
    }, [axiosSecure, user.email])

    return (
        <div className="py-16">
            <div className={`w-11/12 mx-auto mb-16 rounded-lg ${dayTheme ? '' : 'bg-gray-300'}`}>
                <div>
                    {
                        recommendations.length === 0
                            ?
                            <div>
                                <img className="mx-auto" src={nodata} alt="No Data img" />
                                <p className="text-center my-5 text-2xl font-semibold text-amber-700">Sorry! No one has recommended your query yet...</p>
                            </div>
                            :
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
                                                        <Link to={`/recommendationForMe/${recommendation._id}`}>
                                                            <button className="py-1 px-2 border border-green-500 rounded-md shadow">Details</button>
                                                        </Link>
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
        </div>
    );
};

export default RecommendationForMe;