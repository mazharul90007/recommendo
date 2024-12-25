import { AiOutlineUser } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";
import { PiSubtitles } from "react-icons/pi";
import { IoBan } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const UpdateQuery = () => {

    const loadedQuery = useLoaderData();
    console.log(loadedQuery);

    const { user } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const imageURL = form.imageURL.value;
        const queryTitle = form.queryTitle.value;
        const boycott = form.boycott.value;
        const query = form.query.value;
        // const authorImg = user.photoURL;
        // const authorName = user.displayName;
        const postedTime = Date.now();
        // const authorEmail = user.email;

        const updateQuery = { productName, brandName, imageURL, queryTitle, boycott, query, postedTime }

        console.log(updateQuery);

        axios.patch(`https://recommendo-server.vercel.app/queries/${loadedQuery._id}`, updateQuery)
        .then(res => {
            const data = res.data;
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Query has been Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    };

    return (
        <div className=" py-5 bg-gray-100 flex justify-center items-center">
            <div className="card w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center text-primary mb-6">
                    Update Your Query
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Product Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Product Name</span>
                        </label>
                        <div className="relative">
                            <FiBox className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="text"
                                defaultValue={loadedQuery.productName}
                                name="productName"
                                className="input input-bordered w-full pl-10"
                                required
                            />
                        </div>
                    </div>
                    {/* Brand Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Brand Name</span>
                        </label>
                        <div className="relative">
                            <AiOutlineUser className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="text"
                                defaultValue={loadedQuery.brandName}
                                name="brandName"
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
                                defaultValue={loadedQuery.imageURL}
                                name="imageURL"
                                className="input input-bordered w-full pl-10"
                                required
                            />
                        </div>
                    </div>

                    {/* Query Title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Query Title</span>
                        </label>
                        <div className="relative">
                            <PiSubtitles className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Enter Query Title"
                                defaultValue={loadedQuery.queryTitle}
                                name="queryTitle"
                                className="input input-bordered w-full pl-10"
                                required
                            />
                        </div>
                    </div>

                    {/* Boycotting Reason */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Boycotting Reason</span>
                        </label>
                        <div className="relative">
                            <IoBan className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Enter Boycotting Reason"
                                defaultValue={loadedQuery.boycott}
                                name="boycott"
                                className="input input-bordered w-full pl-10"
                                required
                            />
                        </div>
                    </div>

                    {/* Query Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Your Query</span>
                        </label>
                        <textarea
                            placeholder="Write your query in details here..."
                            defaultValue={loadedQuery.query}
                            name="query"
                            className="textarea textarea-bordered w-full"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control">
                        <button type="submit" className="btn btn-primary w-full">
                            Update Query
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateQuery;