import { Link } from 'react-router-dom';
import about from '../../../assets/about.jpg'
const AboutSec = () => {
    return (
        <div className="py-10 px-3">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                <div>
                    <img className='w-full' src={about} alt="" />
                </div>
                <div className='p-2'>
                    <h2 className='font-mainText inline-block border-b-4 pr-5 mb-3 text-3xl border-[#05418A]'>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur magni libero nesciunt culpa vel explicabo ut tenetur eum inventore doloremque quos mollitia earum neque, corporis, minus corrupti distinctio atque labore aspernatur dignissimos dolore. Quo dolorem ad, perferendis nobis aut in doloremque ipsam consectetur obcaecati, velit totam accusamus voluptates, recusandae delectus fugiat architecto. Nobis nemo sit cupiditate illum consequuntur ab doloribus maxime ipsa velit quas. Harum quis repellat facilis aut. Repudiandae incidunt ducimus architecto harum, praesentium minus culpa sunt illo iste voluptatibus voluptas vel? Sit dolores nesciunt alias exercitationem consectetur excepturi ipsa est obcaecati atque culpa minima aperiam eveniet sed eum laboriosam optio, enim, dignissimos deserunt maiores quibusdam et eligendi. Doloribus unde id sint esse sed, iure deleniti atque culpa nam consectetur ipsam eveniet ea! Eaque neque animi voluptas porro. 
                    </p>
                    <Link className='my-btn mt-3' to={'/about'}>
                        read more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSec;