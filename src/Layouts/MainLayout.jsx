import React from "react";
import Navbar from "../pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Navbar></Navbar>
        <div className="w-full max-w-7xl mx-auto min-h-[calc(100vh-367px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
