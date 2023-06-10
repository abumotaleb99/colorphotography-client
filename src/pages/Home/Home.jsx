import React, { useEffect } from "react";
import Banner from "./Banner";
import TopClasses from "./TopClasses";

const Home = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Home";
  }, []);

  return (
    <>
      <Banner></Banner>
      <TopClasses></TopClasses>
    </>
  );
};

export default Home;
