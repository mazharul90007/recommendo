
import { useLoaderData } from "react-router-dom";


const RecommendationForMeDetails = () => {

    const recommendation = useLoaderData();
    // console.log(recommendation);
    return (
        <div className="w-11/12 mx-auto py-8 md:py-16">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="md:grid-cols-1 border border-green-300 p-4">
                    <div className="card bg-base-100 w-full h-full">
                        <h2 className="text-2xl font-semibold text-center my-3">My Query</h2>

                        <figure className="">
                            <img
                                src={recommendation.queryImage}
                                alt="Query Image"
                                className="rounded-xl" />
                        </figure>

                        <div className="card-body items-start">
                            <h2 className="card-title"><span className="text-xl font-normal">Product:</span>{recommendation.productName}</h2>

                            <p>Title: <span className="text-lg font-semibold">{recommendation.queryTitle}</span></p>

                            
                        </div>
                    </div>
                </div>
                <div className="md:grid-cols-1 border border-red-300 p-4">
                    <div className="card bg-base-100 w-full">

                    <h2 className="text-2xl font-semibold text-center my-3">Recommendation For Me</h2>

                        <figure className="">
                            <img
                                src={recommendation.recommendedImageURL}
                                alt="Recommendation Image"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-start">
                            <h2 className="card-title"><span className="text-xl font-normal">Product:</span>{recommendation.recommendedProductName}</h2>

                            <p className="font-medium">Title: <span className="text-lg font-semibold">{recommendation.recommendTitle}</span></p>

                            <p className="font-medium">Recommended Reason: <span className="text-gray-500 font-normal">{recommendation.recommendationReason}</span></p>

                            <p className="font-medium">Recommender Name: <span className="text-gray-500 font-normal">{recommendation.recommenderName}</span></p>

                            <p className="font-medium">Recommender Email: <span className="text-gray-500 font-normal">{recommendation.recommenderEmail}</span></p>

                            <p className="font-medium">Recommendation Time: <span className="text-gray-500 font-normal">{new Date(recommendation.recommendTime).toLocaleString()}</span></p>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendationForMeDetails;