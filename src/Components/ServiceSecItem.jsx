import PropTypes from 'prop-types'
const ServiceSecItem = ({item}) => {
    const {icon, service} = item;
    return (
        <div className="border w-[280px] p-4 bg-white hover:shadow-md hover:-translate-y-2 duration-200">
            <img className="w-full" src={icon} alt="" />
            <h2 className="text-xl font-bold text-center mt-3">{service}</h2>
        </div>
    );
};
ServiceSecItem.propTypes ={
    item: PropTypes.object
}
export default ServiceSecItem;