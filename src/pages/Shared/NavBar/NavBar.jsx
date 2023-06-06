import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = (
    <>
      <Link className="text-white font-semibold" href="/">Home</Link>
      <Link className="text-white font-semibold" href="#">Instructors</Link>
      <Link className="text-white font-semibold" href="#">Classes</Link>
      <Link className="text-white font-semibold" href="#">Login</Link>
    </>
  );

  return (
      <nav className="bg-slate-500">
        <div className="max-w-4xl mx-auto">
          <div className="flex mx-auto justify-between w-3/4 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-24 my-4">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-white items-center "
                >
                  <img className="w-20" src={logo} alt="" />
                  <span>Jujutsu Club</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">{navLinks}</div>
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
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              {navLinks}
            </div>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
