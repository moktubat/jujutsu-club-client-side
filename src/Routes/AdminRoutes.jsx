import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useAdmin from "../hook/useAdmin";

const AdminRoutes = ({children}) => {
    const {user , loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default AdminRoutes;