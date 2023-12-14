import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Donate from "../Pages/Donate/Donate";
import Error from "../Pages/Error/Error";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
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