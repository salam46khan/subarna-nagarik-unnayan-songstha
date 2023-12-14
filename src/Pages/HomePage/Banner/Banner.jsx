
import Slider from "react-slick";
import bannerOne from '../../../assets/banner-1.jpg'
import bannerTwo from '../../../assets/banner-2.jpg'
import bannerThree from '../../../assets/banner-3.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        fade: true,
    };
    return (
        <div className="min-h-screen">
            <div className="relative">
                <Slider {...settings} className="border">
                    <div className="border">
                        <img className="w-full" src={bannerOne} alt="" />
                    </div>
                    <div>
                        <img className="w-full" src={bannerTwo} alt="" />
                    </div>
                    <div>
                        <img className="w-full" src={bannerThree} alt="" />
                    </div>
                </Slider>
                <div className="absolute top-0 left-0 w-full h-full bg-blue-800 bg-opacity-40 flex justify-center items-center">
                    <div className="container mx-auto border text-white text-center">
                        hi
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;