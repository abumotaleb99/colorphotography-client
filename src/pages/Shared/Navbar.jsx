import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;

  const navItems = (
    <>
      <li>
        <Link to="/" className="text-white px-2 mx-1">
          Home
        </Link>
      </li>
      <li>
        <Link to="/instructors" className="text-white px-2 mx-1">
          Instructors
        </Link>
      </li>
      <li>
        <Link to="/classes" className="text-white px-2 mx-1">
          Classes
        </Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard" className="text-white px-2 mx-1">
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-[#1ec0ff] ">
      <div className="max-w-7xl mx-auto  navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content mt-3 p-2 shadow bg-[#1ec0ff] rounded-md w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link href="/" className="text-white text-xl font-semibold">
            ColorPhotography
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md">
              LogOut
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md"
            >
              Login
            </Link>
          )}
          <>
            {user && (
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar hover:bg-[#1D4CAA] mr-2 md:ms-2"
              >
                <div className="w-10 rounded-full">
                  <img src="" title="" />
                </div>
              </label>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
