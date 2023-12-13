import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            {/* <h2>Head</h2> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;