import Lottie from "lottie-react";
import history from "../../../public/history.json";
const History = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-3 py-10 px-3">
            <div className="">
            <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] pr-5 inline-block mb-3'>History</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, nam expedita suscipit voluptas nesciunt animi aut iusto explicabo dolorum, architecto unde omnis possimus eius dolorem sint, atque exercitationem veniam excepturi?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, nam expedita suscipit voluptas nesciunt animi aut iusto explicabo dolorum, architecto unde omnis possimus eius dolorem sint, atque exercitationem veniam excepturi?
            </p>
            </div>
            <div>
            <Lottie className="w-10/12 mx-auto" animationData={history} loop={true} />
            </div>
        </div>
    );
};

export default History;