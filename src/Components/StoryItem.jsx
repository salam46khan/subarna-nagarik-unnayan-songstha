import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const StoryItem = ({ item }) => {
    const { title, image, content, _id } = item;
    
    return (
        <div className='border p-3 rounded hover:-translate-y-3 hover:bg-[#00000008] hover:shadow-md duration-300'>
            <img className='w-full h-[230px] rounded' src={image} alt="" />
            <div className='mt-3'>
                <p className='text-2xl font-bold'>{title}</p>
                <p>{content.length > 70 ? content.slice(0, 70) + '...' : content}</p>
            </div>
            <div className='mt-2 '>
                <Link to={`/story/${_id}`} className='my-btn'>Details</Link>
            </div>
        </div>
    );
};
StoryItem.propTypes = {
    item: PropTypes.object
}
export default StoryItem;