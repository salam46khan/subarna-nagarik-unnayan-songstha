import AboutSec from "../AboutSec/AboutSec";
import Banner from "../Banner/Banner";
import FoundingSec from "../FoundingSec/FoundingSec";

const Home = () => {
    return (
        <div className="font-normalText">
            <Banner></Banner>
            <AboutSec></AboutSec>
            <FoundingSec></FoundingSec>
        </div>
    );
};

export default Home;