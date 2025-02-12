import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(authContext);
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return (
            <div className="h-screen flex flex-col justify-center items-center gap-4">
                <p className="text-2xl">Loading...</p>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        )
    }

    if (user) {
        return children
    }

    return <Navigate to={'/signin'} state={location?.pathname}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}