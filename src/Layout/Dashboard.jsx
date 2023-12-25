import { NavLink, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import logo from '../assets/subarna-nagarik-unnayan-songstha.jpg'

const Dashboard = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}

                        <div className="lg:hidden bg-base-300 w-full px-3 py-2 flex items-center">
                            <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden text-3xl">
                            <MdDashboard />
                            </label>

                            
                            <img className="w-16" src={logo} alt="" />
                        </div>

                        <div className="p-3">
                            <Outlet></Outlet>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                        <div className="bg-base-300 min-h-full">
                            
                            <ul className="menu p-4 w-80 min-h-full  text-base-content">
                                {/* Sidebar content here */}
                                <li><NavLink to={'/dashboard/home'}>Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/all_user'}>All Users</NavLink></li>
                                <li><NavLink to={'/dashboard/all_story'}>All Story</NavLink></li>
                                

                                <div className="divider">OR</div>
                                <li><NavLink to={'/'}>Home</NavLink></li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;