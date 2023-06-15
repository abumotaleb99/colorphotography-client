import React from "react";
import { Link, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
import {
  FaBox,
  FaHistory,
  FaHome,
  FaShoppingBasket,
  FaUserCog,
  FaClone,
  FaBookMedical,
  FaBook,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardLayout = () => {
  const [isUser] = useUser();

  return (
    <div>
      <div className="bg-[#1ec0ff] flex justify-between items-center px-8 py-3 lg:py-5">
        <Link to="">
          <h2 className="text-white text-xl font-semibold">ColorPhotography</h2>
        </Link>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#1ec0ff] border-t-2">
            {/* Sidebar content here */}
            {isUser?.role === "admin" ? (
              <>
                <li>
                  <Link to="" className="text-white px-2 mx-1">
                    <FaHome className="text-xl" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="manage-classes" className="text-white px-2 mx-1">
                    <FaClone className="text-xl" />
                    Manage Classes
                  </Link>
                </li>
                <li>
                  <Link to="manage-users" className="text-white px-2 mx-1">
                    <FaUserCog className="text-xl" />
                    Manage Users
                  </Link>
                </li>
              </>
            ) : isUser?.role == "instructor" ? (
              <>
                <li>
                  <Link to="" className="text-white px-2 mx-1">
                    <FaHome className="text-xl" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="add-class" className="text-white px-2 mx-1">
                    <FaBookMedical className="text-xl" />
                    Add a Class
                  </Link>
                </li>
                <li>
                  <Link to="my-classes" className="text-white px-2 mx-1">
                    <FaBook className="text-xl" />
                    My Classes
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="" className="text-white px-2 mx-1">
                    <FaHome className="text-xl" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="selected-classes" className="text-white px-2 mx-1">
                    <FaShoppingBasket className="text-xl " />
                    My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="enrolled-classes" className="text-white px-2 mx-1">
                    <FaBox className="text-xl" />
                    My Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link to="payment-history" className="text-white px-2 mx-1">
                    <FaHistory className="text-xl" />
                    Payment History
                  </Link>
                </li>
              </>
            )}
            <div>
              <ul className="border-t-2 mt-8">
                <li>
                  <Link to="/" className="text-white px-2 mx-1 mt-1">
                    <FaHome className="text-xl " />
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
