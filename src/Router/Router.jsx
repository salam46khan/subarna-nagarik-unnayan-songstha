import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Donate from "../Pages/Donate/Donate";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import About from "../Pages/About/About";
import Service from "../Pages/ServicePage/Service";
import SuccessPage from "../Pages/SuccessPage/SuccessPage";
import Dashboard from "../Layout/Dashboard";
import AdminRouter from "./AdminRouter";
import DashHome from "../Pages/Dashboard/DashHome";
import AllUser from "../Pages/Dashboard/AllUser";
import AllStory from "../Pages/Dashboard/AllStory";
import StoryDetails from "../Components/StoryDetails";
import Contacat from "../Pages/Contact/Contacat";

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
                element: <About></About>
            },{
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/donate',
                element: <Donate></Donate>
            },
            {
                path: '/story',
                element: <SuccessPage></SuccessPage>
            },
            {
                path: '/story/:id',
                element: <StoryDetails></StoryDetails>
            },
            {
                path: '/contact',
                element: <Contacat></Contacat>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'home',
                element: <AdminRouter><DashHome></DashHome></AdminRouter>
            },
            {
                path: 'all_user',
                element: <AdminRouter><AllUser></AllUser></AdminRouter>
            },
            {
                path: 'all_story',
                element: <AdminRouter><AllStory></AllStory></AdminRouter>
            },
        ]
    }
])

export default Router;