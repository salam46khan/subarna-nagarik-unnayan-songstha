import Lottie from "lottie-react";
import achievement from "../../../public/ser.json";
const Rights = () => {
    return (
        <div className="">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">

                <div className="p-3">
                    <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] pr-5 inline-block mb-3'>Advocacy and Rights Awareness</h2>
                    <p>At SNUS, we are passionate about advocating for the rights of individuals with disabilities. Our Advocacy and Rights Awareness services are dedicated to fostering a society that values inclusivity, equal opportunities, and the protection of the rights of every individual.</p>
                    <br />
                    <p>We actively engage in advocating for policies at local, regional, and national levels that promote inclusivity, accessibility, and equal opportunities for individuals with disabilities.</p>
                    <br />
                    <p>We organize campaigns and events to raise awareness about the rights of individuals with disabilities, fostering a more informed and supportive community.</p>
                    <p>
                    Our advocacy team provides personalized support to individuals with disabilities, ensuring their voices are heard and their rights are protected.
                    </p>
                </div>
                <div>
                    <Lottie className="w-10/12 mx-auto" animationData={achievement} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Rights;