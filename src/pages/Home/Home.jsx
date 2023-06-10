import React, { useEffect } from "react";
import Banner from "./Banner";

const Home = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Home";
  }, []);

  return (
    <>
      <Banner></Banner>
    </>
  );
};

export default Home;
