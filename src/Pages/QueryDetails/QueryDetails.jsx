import { useLoaderData } from "react-router-dom";
import { FiBox } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";
import { PiSubtitles } from "react-icons/pi";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


const QueryDetails = () => {
    const {user} = useAuth();
    const query = useLoaderData();
    console.log(query);
    const [recommend, setRecommend] = useState(false)

    const handleRecommendBtn = () => {
        setRecommend(!recommend)
        console.log(recommend)
    }

    const handleRecommendation = (e) => {
        e.preventDefault()
        const form = e.target;
        const recommendTitle = form.recommendationTitle.value;
        const recommendedProductName = form.recommendedProductName.value;
        const recommendedImageURL = form.recommendedImageURL.value;
        const recommendationReason = form.recommendationReason.value;
        const queryId = query._id;
        const queryTitle = query.queryTitle;
        const queryImage = query.imageURL;
        const productName = query.productName;
        const userName = query.authorName;
        const userEmail = query.authorEmail;
        const recommenderEmail = user.email;
        const recommenderName = user.displayName;
        const recommendTime = Date.now();

        const recommendation = {recommendTitle, recommendedProductName, recommendedImageURL, recommendationReason, queryId, queryTitle, queryImage, productName, userName, userEmail, recommenderEmail, recommenderName, recommendTime}

        console.log(recommendation);

        axios.post('http://localhost:3000/recommendation', recommendation)
        .then(res => {
            const data = res.data;
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Recommendation has been Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                // navigate('/myQueries')
            }

            //Update Recommendation Count
            // axios.patch(`http://localhost:3000/queries/${query._id}`)
            // .then(res => {
            //     const data = res.data;
            //     console.log(data)
            // })
        })

    }
    return (
        <div className="hero bg-base-200 mb-12 w-11/12 mx-auto py-4 md:py-10">
            <div className="hero-content flex-col">
                <div>
                    <img
                        src={query.imageURL}
                        className="max-w-sm rounded-lg shadow" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-5">{query.queryTitle}</h1>
                    <p className="text-gray-700"><span className="font-semibold text-black">Product:</span> {query.productName}</p>
                    <p className="text-gray-700"><span className="font-semibold text-black">Details:</span> {query.query}</p>
                    <div className="flex gap-5 items-center my-5">
                        <img className="w-16 h-16 rounded-full p-1 border-2 border-gray-300" src={query.authorImg} alt="" />

                        <div>
                            <p className="text-black font-semibold">Posted By: <span className="text-gray-700 italic font-normal">{query.authorName}</span></p>
                            <p className="text-black font-semibold">Posted Time: <span className="text-gray-700 italic font-normal">{new Date(query.postedTime).toLocaleString()}</span></p>
                        </div>
                    </div>
                </div>

                {/* Recommend Button */}
                <div>
                    <button onClick={handleRecommendBtn} className="btn btn-primary">
                        {recommend ? 'Hide Recommendation' : 'Add a Recommendation'}
                    </button>
                </div>

                {/* Recomendation Form */}

                {recommend &&
                    <div className="card w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
                        <h1 className="text-3xl font-bold text-center text-primary mb-6">
                            Add Recommendation
                        </h1>
                        <form onSubmit={handleRecommendation} className="space-y-6">
                            {/* Recommendation Title */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Recommendation Title</span>
                                </label>
                                <div className="relative">
                                    <PiSubtitles className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Enter Recommendation Title"
                                        name="recommendationTitle"
                                        className="input input-bordered w-full pl-10"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Recommended Product Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Recommended Product Name</span>
                                </label>
                                <div className="relative">
                                    <FiBox className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Enter Product Name"
                                        name="recommendedProductName"
                                        className="input input-bordered w-full pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Product Image URL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Product Img URL</span>
                                </label>
                                <div className="relative">
                                    <TbWorldWww className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="URL"
                                        name="recommendedImageURL"
                                        className="input input-bordered w-full pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Recommendation Reason */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Recommendation Reason</span>
                                </label>
                                <div className="relative">
                                    <PiSubtitles className="absolute top-3 left-3 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Enter Recommendation Reason"
                                        name="recommendationReason"
                                        className="input input-bordered w-full pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control">
                                <button type="submit" className="btn btn-primary w-full">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    );
};

export default QueryDetails;