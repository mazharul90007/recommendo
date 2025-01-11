import axios from "axios";
import { useEffect, useState } from "react";
import QueryCard from "../QueryCard/QueryCard";


const TopRecommended = () => {
    const [topRatedQueries, setTopRatedQueries] = useState([])

    useEffect(()=>{
        axios.get('https://recommendo-server.vercel.app/queries')
        .then(res =>{
            const data = res.data;
            // console.log(data)
            const sortedData = [...data].slice(0,8).sort((a,b)=> b.recommendationCount - a.recommendationCount)
            setTopRatedQueries(sortedData);
        })
    },[])
    return (
        <div className="w-11/12 mx-auto mb-24">
            <div className="mb-8">
                <h2 className="text-4xl font-semibold text-green-700 text-center">Top Recommended Products</h2>
                <p className='text-center text-xl text-gray-500 italic'>Discover the best products loved by our users and experts.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    topRatedQueries.map(topRatedQuery => <QueryCard key={topRatedQuery._id} query={topRatedQuery}></QueryCard>)
                }
            </div>
        </div>
    );
};

export default TopRecommended;