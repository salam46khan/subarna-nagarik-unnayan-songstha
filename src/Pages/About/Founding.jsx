import { useEffect, useState } from "react";
import MemberItem from "../../Components/MemberItem";
import Slider from "react-slick";

const Founding = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('member.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        swipeToSlide: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (

        <div className="container mx-auto">
            <div className="text-center">
                <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] px-3 inline-block mb-3'>Founding Members</h2>
            </div>
            <div>

                <div className="pt-10">
                    <Slider {...settings}>

                        {
                            members.map(item => <MemberItem itme={item} key={item.id}></MemberItem>)
                        }
                    </Slider>
                </div>
            </div>
        </div>

    );
};

export default Founding;