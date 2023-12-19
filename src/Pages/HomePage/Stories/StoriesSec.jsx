import { useEffect, useState } from "react";
import StoryItem from "../../../Components/StoryItem";
import { Link } from "react-router-dom";

const StoriesSec = () => {
    const [story, setStory] = useState([]);
    useEffect(() => {
        fetch('story.json')
            .then(res => res.json())
            .then(data => setStory(data))
    }, [])
    return (
        <div className="py-10 px-3 container mx-auto">
            <div className="text-center">
                <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] px-3 inline-block mb-3'>Success Story</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                {
                    story.slice(0,6).map(item => <StoryItem key={item.id} item={item}></StoryItem>)
                }
            </div>
            <div className="text-center mt-5">
                <Link className="my-btn" to={'/story'}>See More</Link>
            </div>

        </div>
    );
};

export default StoriesSec;