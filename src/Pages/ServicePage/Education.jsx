import edu from '../../assets/right.gif';
const Education = () => {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">

                <div className="p-3">
                    <h2 className='border-b-4 text-3xl font-mainText border-[#05418A] pr-5 inline-block mb-3'>Educational Support Services</h2>
                    <p>
                        Education is a cornerstone for personal growth and empowerment. At SNUS, we are committed to providing comprehensive Educational Support Services to individuals with disabilities, ensuring equitable access to learning opportunities.
                    </p>
                    <br />
                    <p>Engage in our educational workshops covering a range of topics, including study skills, time management, and effective learning strategies.</p>
                </div>
                <div>
                    <img src={edu} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Education;