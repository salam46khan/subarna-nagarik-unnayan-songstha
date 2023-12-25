import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        console.log('ok');
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName,
                    photo: result.user.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn btn-primary w-full border-none'>
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
        </div>
    );
};

export default GoogleLogin;