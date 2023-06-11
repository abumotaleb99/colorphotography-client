import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
            <li>
              <Link to="" className="text-white px-2 mx-1">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="manage-classes" className="text-white px-2 mx-1">
                Manage Classes
              </Link>
            </li>
            <li>
              <Link to="manage-users" className="text-white px-2 mx-1">
                Manage Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
