
import StoryItem from "../../../Components/StoryItem";
import { Link } from "react-router-dom";

import useStory from "../../../hooks/useStory";

const StoriesSec = () => {
    
    const [succStory] = useStory()
    console.log(succStory);

    return (
        <div className="py-10 px-3 container mx-auto">
            <div className="text-center">
                <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] px-3 inline-block mb-3'>Success Story</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
                {
                    succStory.slice(0,4).map(item => <StoryItem key={item.id} item={item}></StoryItem>)
                }

            </div>
            <div className="text-center mt-5">
                <Link className="my-btn" to={'/story'}>See More</Link>
            </div>

        </div>
    );
};

export default StoriesSec;