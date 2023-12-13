import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            {/* <h2>Head</h2> */}
            <Outlet></Outlet>
            <h2>footer</h2>
        </div>
    );
};

export default Main;