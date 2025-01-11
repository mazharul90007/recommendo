import { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch('/testimonials.json')
            .then(res => res.json())
            .then(data => {
                setAuthors(data);
            })
    }, [])

    return (
        <div>
            <section className="pb-16" id="testimonials">
                <div className="w-11/12 mx-auto text-center">
                    <div className='mb-24'>
                        <h2 className="text-4xl font-semibold text-green-700">What Our Users Say</h2>
                        <p className='text-xl text-gray-500 italic'>Hear from our satisfied users who trust us with their choices!</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 md:gap-8">
                        {
                            authors.map((author, index) => <div key={index} className="bg-green-50 p-6 pt-16 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-amber-100 relative">
                                <img src={author.image} alt="John Doe" className='w-36 h-36 rounded-full border-8 border-amber-50 absolute left-32 md:left-24 lg:left-20 -top-20' />
                                <p className="text-gray-600 mb-4">
                                    {author.review}
                                </p>
                                <h4 className="text-lg font-semibold text-gray-800">{author.name}</h4>
                                <p className="text-gray-500">{author.occupation}</p>
                                <div className='flex justify-center mt-2'>
                                    <Rating style={{ maxWidth: 100 }} value={author.rating}></Rating>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;