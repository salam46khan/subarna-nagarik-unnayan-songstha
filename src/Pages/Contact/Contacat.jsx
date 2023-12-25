import { Link } from "react-router-dom";
import Pageheader from "../../Shared/Pageheader/Pageheader";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
const Contacat = () => {
    return (
        <div>
            <Pageheader title={"Contact Us"}></Pageheader>
            <div className="container mx-auto py-10 px-3">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div className="md:text-right">
                        <h2 className="text-2xl font-mainText">Suborna Nagarik Unnoyon Songsta</h2>
                        <p>
                            <FaHome className="inline-block mr-3"> </FaHome>
                            Kaligonj, Satkhira, Bangladesh
                        </p>
                        <p>
                            <FaPhoneAlt className="inline-block mr-3"> </FaPhoneAlt>
                            +8801706603075
                        </p>
                        <p>Social Link:</p>
                        <div className="flex md:justify-end gap-2 mt-3">
                            <Link className="btn btn-circle text-2xl bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 duration-200" to={'/'}>
                                <FaFacebookF />
                            </Link>
                            <Link className="btn btn-circle text-2xl bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 duration-200" to={'/'}>
                                <FaInstagram />
                            </Link>
                            <Link className="btn btn-circle text-2xl bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 duration-200" to={'/'}>
                                <FaTwitter />
                            </Link>
                        </div>
                    </div>
                    <div>

                        <div className="card mx-auto shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <textarea type="text" placeholder="text" className="textarea textarea-bordered" required />
                                </div>
                                
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacat;