import Pageheader from "../../Shared/Pageheader/Pageheader";
import Achievements from "./Achievements";
import Founding from "./Founding";
import History from "./History";
import Overview from "./Overview";
import Vision from "./Vision";

const About = () => {
    return (
        <div className="font-normalText">
            <Pageheader title={'About'}></Pageheader>
            <Overview></Overview>
            <Vision></Vision>
            <History></History>
            <div className="bg-[#f0f7ff] py-10 px-3">
                <Founding></Founding>
            </div>
            <Achievements></Achievements>
        </div>
    );
};

export default About;