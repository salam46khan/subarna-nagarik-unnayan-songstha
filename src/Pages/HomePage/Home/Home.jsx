import AboutSec from "../AboutSec/AboutSec";
import Banner from "../Banner/Banner";
import FoundingSec from "../FoundingSec/FoundingSec";
import StoriesSec from "../Stories/StoriesSec";

const Home = () => {
    return (
        <div className="font-normalText">
            <Banner></Banner>
            <AboutSec></AboutSec>
            <FoundingSec></FoundingSec>
            <StoriesSec></StoriesSec>
        </div>
    );
};

export default Home;