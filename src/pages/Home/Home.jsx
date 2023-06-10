import React, { useEffect } from "react";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import OurFeatures from "./OurFeatures";

const Home = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Home";
  }, []);

  return (
    <>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <OurFeatures></OurFeatures>
    </>
  );
};

export default Home;
