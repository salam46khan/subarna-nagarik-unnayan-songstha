import { Link, useLocation, useNavigate } from "react-router-dom";
import Pageheader from "../../Shared/Pageheader/Pageheader";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import GoogleLogin from "./GoogleLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    const { createUser } = useContext(AuthContext)

    const handleSignUp = async (event) => {
        event.preventDefault()
        // console.log(event.target);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        const user = { name, email, password }
        console.log(user);
        if (!/[$#@%&*]/.test(password)) {
            setError('do not have a special character')
            return
        }
        if (password.length < 6) {
            setError('is less than 6 characters')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('do not have a capital letter')
            return
        }
        if (!/[0-9]/.test(password)) {
            setError('do not have a numeric characte')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    // photoURL: imgURL
                })
                const userInfo = {
                    name, email
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                })
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div className="">
            <Pageheader title={'Sign Up'}></Pageheader>
            <div className="min-h-screen bg-[#f0f7ff]">
                <div className="container mx-auto py-10">
                    <div className="bg-base-100 shadow-md rounded-md mx-auto py-10 px-2 max-w-sm">
                        <h2 className="text-center font-logoTitle text-2xl">Sign Up</h2>

                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            
                            <div className="text-red-400">
                                
                                <p>{error ? error : ''}</p>
                            </div>
                            <div className="form-control mt-4">

                                <input className="btn btn-primary" type="submit" value="Sign up" />
                            </div>
                            <div className="divider">OR</div>
                            <GoogleLogin></GoogleLogin>
                        </form>
                        
                        <div className="px-8">
                            

                        </div>
                        <div className="text-center mt-4">
                            <p>Have an account? <Link className="text-blue-500" to={'/login'}>Log In</Link> please</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;