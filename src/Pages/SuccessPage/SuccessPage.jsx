import StoryItem from "../../Components/StoryItem";
import Pageheader from "../../Shared/Pageheader/Pageheader";
import useStory from "../../hooks/useStory";

const SuccessPage = () => {
    const [story] = useStory()
    return (
        <div>
            <Pageheader title={"Success Story"}></Pageheader>
            <div className="py-10 px-3 container mx-auto">
                <div>
                    <h2 className="text-center text-2xl font-mainText">All Success Story</h2>
                    <hr />
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
                    {
                        story.map(item => <StoryItem key={item._id} item={item}></StoryItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;