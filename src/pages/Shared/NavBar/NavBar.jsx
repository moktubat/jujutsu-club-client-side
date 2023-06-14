import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import useAdmin from "../../../hook/useAdmin";
import useAuth from "../../../hook/useAuth";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user, logOut } = useAuth();
  const isAdmin = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <Link className="text-white font-semibold" to="/">
        Home
      </Link>
      <Link className="text-white font-semibold" to="/allInstructors">
        Instructors
      </Link>
      <Link className="text-white font-semibold" to="/allClasses">
        Classes
      </Link>

      {user ? (
        <>
          {isAdmin ? (
            <Link className="text-white font-semibold" to="/dashboard/allUsers">
              Dashboard
            </Link>
          ) : (
            <Link className="text-white font-semibold" to="/dashboard/myClass">
              Dashboard
            </Link>
          )}
          {user.photoURL && (
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img className="w-full h-full" src={user.photoURL} alt="User" />
            </div>
          )}
          <Link onClick={handleLogOut} className="text-white font-semibold">
            Logout
          </Link>
        </>
      ) : (
        <Link className="text-white font-semibold" to="/login">
          Login
        </Link>
      )}
    </>
  );

  return (
    <nav className="bg-[#252525]">
      <div className="max-w-4xl mx-auto">
        <div className="flex mx-auto justify-between w-3/4">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-24 my-4">
            {/* logo */}
            <div>
              <Link
                to="/"
                className="flex gap-1 font-bold text-white items-center"
              >
                <img className="w-20" src={logo} alt="" />
                <span>Jujutsu Club</span>
              </Link>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8">{navLinks}</div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-2"></div>
              <div>
                <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                  Free Trial
                </button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <GiHamburgerMenu className="h-6" style={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <motion.div
        className="fixed z-40 w-full bg-[#252525] overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700"
        initial={{ height: 0 }}
        animate={{ height: toggleMenu ? "100%" : 0 }}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider items-center">
            {navLinks}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
