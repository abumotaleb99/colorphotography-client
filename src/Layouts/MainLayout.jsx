import React from "react";
import Navbar from "../pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
