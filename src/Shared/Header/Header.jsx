import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/subarna-nagarik-unnayan-songstha.jpg'
import { AiOutlineUser } from "react-icons/ai";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import useIdentity from "../../hooks/useIdentity";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);
    const [identity] = useIdentity()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('log out successful');
            })
            .catch(error => {
                console.log(error);
            })
    }
    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'/service'}>Service</NavLink></li>
        <li><NavLink to={'/story'}>Success Story</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
        <li><NavLink to={'/donate'}>Donate Us</NavLink></li>
        {
            identity?.admin ? <li><NavLink to={'/dashboard/home'}>Dashboard</NavLink></li> : ''
        }
        
    </>
    return (
        <div className="bg-[#05418A] text-white fixed top-0 left-0 z-50 w-full shadow-lg shadow-[#fff6]">
            <div className="navbar container mx-auto" id="navItems">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-2xl">
                            <FaBars></FaBars>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#05418A5f] rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="md:navbar-start navbar-center md:block hidden">
                        <Link to={'/'}>
                            <img className="h-12" src={logo} alt="" />
                        </Link>
                    </div>
                </div>

                <div className="block md:hidden navbar-center">
                    <Link to={'/'}>
                        <img className="h-12" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleLogOut} className="tooltip tooltip-bottom text-xl flex items-center gap-2 px-3 py-1 text-red-300" data-tip="Log Out">
                                <p className=" uppercase">{user.displayName}</p>
                                < FiLogOut className="text-2xl"></ FiLogOut>
                            </button>
                            :
                            <Link to={'/login'} className="text-white text-3xl">
                                <AiOutlineUser />
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;