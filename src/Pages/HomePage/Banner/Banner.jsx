
import Slider from "react-slick";
import bannerOne from '../../../assets/banner-1.jpg'
import bannerTwo from '../../../assets/banner-2.jpg'
import bannerThree from '../../../assets/banner-3.jpg'
// import { Link } from "react-router-dom";

const Banner = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        fade: true,
    };
    return (
        <div className="bg-red-200 w-full overflow-hidden">
            <div className="relative overflow-hidden">
                <Slider {...settings} className="md:h-full overflow-hidden h-[500px]">
                    <div className="h-[500px] md:h-auto">
                        <img className="min-w-[500px] w-full h-full" src={bannerOne} alt="" />
                    </div>
                    <div className=" h-[500px] md:h-auto">
                        <img className="w-full h-full min-w-[500px] " src={bannerTwo} alt="" />
                    </div>
                    <div className=" h-[500px] md:h-auto">
                        <img className="md:w-full w-auto h-full min-w-[500px] " src={bannerThree} alt="" />
                    </div>
                </Slider>
                <div className="absolute top-0 left-0 w-full h-full bg-blue-800 bg-opacity-40 flex justify-center items-center">
                    <div className="container mx-auto  w-full md:w-[700px] text-white text-center">
                        <h1 className="capitalize font-titleText text-3xl md:text-6xl">subarna nagarik unnayan songstha (SNUS)</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;