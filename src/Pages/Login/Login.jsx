import { Link, useLocation, useNavigate } from "react-router-dom";
import Pageheader from "../../Shared/Pageheader/Pageheader";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
    const [error, setError] = useState('');
    const {logInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(hi);
    const handleLogin = event =>{
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
        
        setError('')

        logInUser(email, password)
         .then(result =>{
            console.log(result.user);
            navigate(location.state ? location.state : '/')
         })
         .catch(error =>{
            console.log(error);
            setError(error)
         })
        
    }
    return (
        <div className="min-h-screen bg-[#f0f7ff]">
            <Pageheader title={'Log In'}></Pageheader>
            <div className="container mx-auto py-10">
                <div className="bg-base-100 shadow-md rounded-md mx-auto py-10 px-2 max-w-sm">
                    <h2 className="text-center font-logoTitle text-2xl">Login</h2>

                    <form onSubmit={handleLogin} className="card-body">
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
                            {
                                error ? <p>{error.message}</p> : ''
                            }
                        </div>
                        <div className="form-control mt-4">

                            <input className="btn btn-primary" type="submit" value="LogIn" />
                        </div>
                        <div className="divider">OR</div>
                        <GoogleLogin></GoogleLogin>
                    </form>
                    
                    <div className="px-8">
                        {/* <GoogleLogin></GoogleLogin> */}
                    </div>
                    <div className="text-center mt-4">
                        <p>Not a member? <Link className="text-blue-500" to={'/signup'}>Sign Up</Link> now</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;