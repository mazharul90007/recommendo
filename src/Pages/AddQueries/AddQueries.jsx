import { AiOutlineUser } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";
import { PiSubtitles } from "react-icons/pi";
import { IoBan } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AddQueries = () => {
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
        const authorImg = user.photoURL;
        const authorName = user.displayName;
        const postedTime = Date.now()
        const authorEmail = user.email;

        const productQuery = { productName, brandName, imageURL, queryTitle, boycott, query, authorImg, authorName, postedTime, authorEmail }

        console.log(productQuery);

        // fetch('http://localhost:3000/queries',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(productQuery)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        // })

        axios.post('http://localhost:3000/queries', productQuery)
            .then(res => {
                const data = res.data;
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Query has been Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/myQueries')
                }
            })

    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="card w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center text-primary mb-6">
                    Add Your Query
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
                                placeholder="Enter Product Name"
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
                                placeholder="Enter Brand Name"
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
                                placeholder="URL"
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
                            placeholder="Write your query here..."
                            name="query"
                            className="textarea textarea-bordered w-full"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control">
                        <button type="submit" className="btn btn-primary w-full">
                            Submit Query
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddQueries;