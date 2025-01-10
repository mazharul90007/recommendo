

import { Slide } from "react-awesome-reveal";
import img1 from '../../assets/banner1.png'
import img2 from '../../assets/banner2.png'
import img3 from '../../assets/banner3.png'
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="carousel w-full h-[400px] md:h-[550px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full" />
                <div className="absolute flex items-center pl-3 md:pl-16 h-full top-0 gap-4 bg-gradient-to-r from-[rgba(47,47,47,0.3)] to-[#15151500]">
                    <div className='w-8/12'>
                        <Slide duration={1500} direction='right'>
                            <h2 className='text-2xl md:text-4xl text-green-700 font-semibold'>Your Gateway to Smart Suggestions</h2>
                        </Slide>
                        <Slide duration={1500}>
                            <p className='text-gray-700 font-semibold italic my-4'>Discover personalized product recommendations tailored just for you. Find the best suggestions in no time!</p>
                        </Slide>
                        <div className='flex gap-3'>
                            <Link to={'/queries'}>
                                <button className="btn btn-sm md:btn btn-warning">Discover More</button>
                            </Link>
                        </div>

                    </div>

                </div>
                <div className="absolute right-5 bottom-0 flex gap-4 -translate-y-1/2 transform">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full" />
                <div className="absolute right-5 bottom-0 flex gap-4 -translate-y-1/2 transform">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full" />
                <div className="absolute right-5 bottom-0 flex gap-4 -translate-y-1/2 transform">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full" />
                <div className="absolute right-5 bottom-0 flex gap-4 -translate-y-1/2 transform">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;