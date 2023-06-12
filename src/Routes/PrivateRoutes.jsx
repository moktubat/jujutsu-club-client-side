import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoutes;