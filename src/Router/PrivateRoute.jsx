import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const { pathname } = useLocation();

    if (user) {
        return children;
    } else if (loading) {
        return (
            <div className="p-5 mt-10">
                <span className="loading loading-bars loading-lg absolute left-1/2 -translate-x-1/2"></span>
            </div>
        );
    } else {
        return <Navigate state={pathname} to={"/login"} />;
    }
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
