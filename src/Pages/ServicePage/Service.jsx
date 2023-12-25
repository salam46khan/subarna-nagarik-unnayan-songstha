import Pageheader from "../../Shared/Pageheader/Pageheader";
import Education from "./Education";
import Emply from "./Emply";
import Legal from "./Legal";
import Rights from "./Rights";

const Service = () => {
    return (
        <div>
            <Pageheader title={'Service'}></Pageheader>
            <div className="py-10 px-3 font-normalText">
                <Legal></Legal>
                <Rights></Rights>
                <Emply></Emply>
                <Education></Education>
            </div>
        </div>
    );
};

export default Service;