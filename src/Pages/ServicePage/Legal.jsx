import serviceImg from '../../assets/service.jpg'
const Legal = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
            <div>
                <img src={serviceImg} alt="" />
            </div>
            <div className="p-3">
                <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] pr-5 inline-block mb-3'>Legal Aid and Support</h2>
                <p>At SNUS, we understand the importance of ensuring that individuals with disabilities have access to their legal rights and are protected against discrimination. Our Legal Aid and Support services are designed to provide assistance, guidance, and advocacy for disabled individuals facing legal challenges.</p>
                <br />
                <p>Our team of experienced legal professionals offers confidential consultations to address legal concerns related to disability rights, discrimination, and accessibility.</p>
                <br />
                <p>Our team assists in navigating the complex process of accessing disability-related benefits, ensuring that individuals receive the support they are entitled to.</p>
            </div>
        </div>
    );
};

export default Legal;