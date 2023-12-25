import emp from '../../assets/job.png'
const Emply = () => {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
            <div>
                <img src={emp} alt="" />
            </div>
            <div className="p-3">
                <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] pr-5 inline-block mb-3'>Employment Placement Assistance</h2>
                <p>
                At SNUS, we recognize the importance of meaningful employment in fostering independence and empowerment for individuals with disabilities. Our Employment Placement Assistance services are dedicated to connecting qualified individuals with disabilities to rewarding employment opportunities.
                Our team of experienced legal professionals offers confidential consultations to address legal concerns related to disability rights, discrimination, and accessibility.
                </p>
                <br />
                
                <p>Our team assists in navigating the complex process of accessing disability-related benefits, ensuring that individuals receive the support they are entitled to.</p>
            </div>
        </div>
        </div>
    );
};

export default Emply;