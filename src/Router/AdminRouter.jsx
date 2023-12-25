import { Navigate } from "react-router-dom";
import useIdentity from "../hooks/useIdentity";
import PropTypes from 'prop-types'
const AdminRouter = ({children}) => {
    const [identity]= useIdentity();
    if(identity?.admin){
        return children
    }
    return <Navigate to={'/'}></Navigate>
};
AdminRouter.propTypes ={
    children : PropTypes.object
}
export default AdminRouter;