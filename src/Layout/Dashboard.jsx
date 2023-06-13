import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaList, FaWallet, FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-gradient-to-b from-red-600 to-yellow-400 pt-20">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-white font-bold">
            {/* Sidebar content here */}
            <li>
            <Link to="/dashboard/myClass"><FaShoppingCart></FaShoppingCart> My Selected Class</Link>
            </li>
            <li>
            <Link to="/dashboard/enrolled"><FaList></FaList> My Enrolled Classes</Link>
            </li>
            <li>
            <Link to="/dashboard/payment"><FaWallet></FaWallet> Payment History</Link>
            </li>
            <div className="divider"></div>
            <li><Link to="/"><FaHome></FaHome> Home</Link></li>
            <li><Link to="/allClasses"><SiGoogleclassroom></SiGoogleclassroom> Classes</Link></li>
            <li><Link to="/allInstructors"><GiTeacher></GiTeacher> Instructors</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
