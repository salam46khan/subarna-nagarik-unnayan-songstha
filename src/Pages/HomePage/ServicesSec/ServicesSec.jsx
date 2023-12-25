import { useEffect, useState } from "react";
import ServiceSecItem from "../../../Components/ServiceSecItem";
import { Link } from "react-router-dom";

const ServicesSec = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data=> setService(data))
    },[])
    return (
        <div className="py-10 px-3 bg-sky-50">
            <div className="container mx-auto ">
                <div className="text-center">
                    <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] px-3 inline-block mb-3'>Service</h2>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                    
                    {
                        service.map(item => <ServiceSecItem key={item.id} item={item}></ServiceSecItem>)
                    }
                </div>
                <div className="mt-5 text-center">
                    <Link className="my-btn" to={'/service'}>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesSec;