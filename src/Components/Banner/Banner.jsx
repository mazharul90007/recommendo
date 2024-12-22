

import { Slide } from "react-awesome-reveal";
import img1 from '../../assets/banner1.jpg'
import img2 from '../../assets/banner2.jpg'
import img3 from '../../assets/banner3.jpg'
import img4 from '../../assets/banner4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[450px] rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full" />
                <div className="absolute flex items-center pl-3 md:pl-16 h-full top-0 gap-4 bg-gradient-to-r from-[#151515] to-[#15151500]">
                    <div className='w-8/12'>
                        <Slide duration={1500} direction='right'>
                            <h2 className='text-5xl text-white font-semibold'>All Collections of Sports Equipments</h2>
                        </Slide>
                        <Slide duration={1500}>
                            <p className='text-white my-4'>We have all kinds of Sports Equipments and Items. All are in reasonable price. </p>
                        </Slide>
                        <div className='flex gap-3'>
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-accent">Best Deal</button>
                        </div>

                    </div>

                </div>
                <div className="absolute right-5 bottom-0 flex gap-4 -translate-y-1/2 transform">
                    <a href="#slide4" className="btn btn-circle">❮</a>
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
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full" />
                <div className="absolute right-5 bottom-0 flex gap-4 -translate-y-1/2 transform">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;