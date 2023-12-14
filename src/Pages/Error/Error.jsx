import { Link } from "react-router-dom";
import './Error.css'
const Error = () => {
    return (
        <div className="error font-normalText">
            <div className="container mx-auto flex justify-center items-center h-screen text-center text-white">
                <div>
                    <h1 className="text-5xl font-bold pb-4">ERROR</h1>
                    <p>Sorry Page Not Found</p>
                    <div className="pt-3 flex gap-3">
                        <Link to={-1}><button className="my-btn">Go Back</button></Link>
                        <Link to={'/'}><button className="my-btn">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;