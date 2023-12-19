import Lottie from "lottie-react";
import vision from "../../../public/vision.json";
const Vision = () => {
    return (
        <div className="bg-[#f0f7ff]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-3 py-10 px-3">
                <div className="">
                <Lottie className="w-8/12 mx-auto" animationData={vision} loop={true} />
                </div>
                <div className="">
                    <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] pr-5 inline-block mb-3'>Mission and Vision</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, nam expedita suscipit voluptas nesciunt animi aut iusto explicabo dolorum, architecto unde omnis possimus eius dolorem sint, atque exercitationem veniam excepturi?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, nam expedita suscipit voluptas nesciunt animi aut iusto explicabo dolorum, architecto unde omnis possimus eius dolorem sint, atque exercitationem veniam excepturi?
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Vision;