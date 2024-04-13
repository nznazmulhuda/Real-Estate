import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext);

    return user ? children : <Navigate to={"/login"} />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
