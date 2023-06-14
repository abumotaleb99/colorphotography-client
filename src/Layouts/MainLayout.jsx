import React, { useState } from "react";
import Navbar from "../pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`${darkMode ? "bg-slate-900" : "bg-[#F5F5F5]"}`}>
        <Navbar toggleMode={toggleMode}></Navbar>
        <div className="w-full max-w-7xl mx-auto min-h-[calc(100vh-367px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
