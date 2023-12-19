import PropTypes from 'prop-types';
const Pageheader = ({ title }) => {
    return (
        <div className='bg-[#a6c7ef] h-[200px] w-full'>
            <div className='container mx-auto flex items-center h-full justify-center'>
                <div className='text-center mt-10'>
                    <h2 className='font-titleText text-4xl'>{title}</h2>
                    <h3>Subarno Nagorik unnoyon Sangsta</h3>
                </div>
            </div>
        </div>
    );
};
Pageheader.propTypes = {
    title: PropTypes.string,
}
export default Pageheader;