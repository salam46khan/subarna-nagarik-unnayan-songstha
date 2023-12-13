import { Link } from 'react-router-dom';
import donate from '../../assets/donate.gif'
import logo from '../../assets/subarna-nagarik-unnayan-songstha.jpg'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
const Footer = () => {
    return (
        <div className="bg-[#05418A] text-white">
            <div className="py-10 px-3 container mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-3">
                    <div>
                        <img className='max-w-[200px]' src={logo} alt="" />

                    </div>
                    <div>
                        <ul className='flex flex-col'>
                            <p className='font-bold text-xl mb-3'>Quick Links</p>
                            <li><Link>About Us</Link></li>
                            <li><Link>Service</Link></li>
                            <li><Link>Contact Us</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                    <ul className='flex flex-col gap-3'>
                            <p className='font-bold text-xl mb-3'>Contact</p>
                            <li className='flex items-center gap-3'><FaPhone /> <span>+8801700000</span></li>
                            <li className='flex items-center gap-3'><FaLocationDot /> <span>Motherespur <br /> Kaligonj, Satkhira</span></li>
                            <li className='flex items-center gap-3'><CgMail /><span>sunorna@gam.com</span></li>
                            
                        </ul>
                    </div>
                    <div>
                        <Link to={'/donate'}>
                            <img className='max-w-[200px]' src={donate} alt="" />
                        </Link>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Footer;