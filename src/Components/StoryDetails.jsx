import { Link, useParams } from "react-router-dom";
import Pageheader from "../Shared/Pageheader/Pageheader";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState } from "react";
import donate from '../assets/donate.gif'

const StoryDetails = () => {
    const respon = useParams()
    const axiosPublic = useAxiosPublic()
    const [details, setDetails] = useState([])
    const { title, content, date, image } = details;
    
    // console.log(res.id);
    axiosPublic.get(`/story/${respon.id}`)
        .then(res => {
            // console.log(res.data);
            setDetails(res.data)
        })
    return (
        <div>
            <Pageheader title={'Story Details'}></Pageheader>
            <div className="container mx-auto py-10 px-3">
                <h2 className="text-center text-2xl font-mainText">Details</h2>
                <hr />
                <div className="mt-10 md:flex">
                    <div className="md:w-3/4 border p-3">
                        <img className="w-full" src={image} alt="" />
                        <dir>
                            <h2 className="text-2xl font-mainText">{title}</h2>
                            <p className="text-sm">{date}</p>
                            <p>{content}</p>
                        </dir>
                    </div>
                    <div className="md:w-1/4 hidden md:block p-3">
                        <Link to={'/donate'}>
                            <img className="w-full" src={donate} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;