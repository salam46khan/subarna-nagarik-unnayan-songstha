import Lottie from "lottie-react";
import achievement from "../../../public/achivement.json";
const Achievements = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-3 py-10 px-3">
            <div>
                <Lottie className="w-10/12 mx-auto" animationData={achievement} loop={true} />
            </div>
            <div className="">
                <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] pr-5 inline-block mb-3'>Achievements</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, nam expedita suscipit voluptas nesciunt animi aut iusto explicabo dolorum, architecto unde omnis possimus eius dolorem sint, atque exercitationem veniam excepturi?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, nam expedita suscipit voluptas nesciunt animi aut iusto explicabo dolorum, architecto unde omnis possimus eius dolorem sint, atque exercitationem veniam excepturi?
                </p>
            </div>
            
        </div>
    );
};

export default Achievements;