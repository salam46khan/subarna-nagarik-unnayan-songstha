import PropTypes from 'prop-types'
const MemberItem = ({ itme }) => {
    const { img, name, designation } = itme;
    console.log(itme, img);

    return (
        <div className=" bg-[#fff4] my-5 shadow-md  shadow-[#000b] rounded w-[280px] mx-auto py-10">
            <div className="w-[200px] h-[200px] border rounded-full mx-auto overflow-hidden">
                <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
            <div className="pt-5 text-center">
                <p className="font-bold text-2xl">{name}</p>
                <p>{designation}</p>
            </div>
        </div>
    );
};
MemberItem.propTypes = {
itme: PropTypes.object
}
export default MemberItem;