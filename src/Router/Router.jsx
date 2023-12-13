import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Donate from "../Pages/Donate/Donate";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <p>All about is running well</p>
            },
            {
                path: '/donate',
                element: <Donate></Donate>
            }
        ]
    }
])

export default Router;