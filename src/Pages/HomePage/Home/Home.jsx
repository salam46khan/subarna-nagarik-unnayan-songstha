import AboutSec from "../AboutSec/AboutSec";
import Banner from "../Banner/Banner";
import FoundingSec from "../FoundingSec/FoundingSec";
import ServicesSec from "../ServicesSec/ServicesSec";
import StoriesSec from "../Stories/StoriesSec";

const Home = () => {
    return (
        <div className="font-normalText">
            <Banner></Banner>
            <AboutSec></AboutSec>
            <ServicesSec></ServicesSec>
            <FoundingSec></FoundingSec>
            <StoriesSec></StoriesSec>

        </div>
    );
};

export default Home;