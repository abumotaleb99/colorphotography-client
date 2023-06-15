import React from "react";
import img1 from "../../assets/classes/class1.jpg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useEffect } from "react";
import Class from "../Classes/Class";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-abumotaleb99.vercel.app/top-classes"
    )
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);

  return (
    <Fade cascade duration={3000}>
      <div className="max-w-7xl mx-auto px-5 md:px-0 py-8 md:py-16">
        <div className="pb-8">
          <h3 className="text-3xl md:text-4xl font-bold pb-1">
            Popular Classes
          </h3>
          <p className="text-[#999] text-lg">Discover our popular classes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularClasses.map((singleClass) => (
            <Class key={singleClass._id} singleClass={singleClass}></Class>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default PopularClasses;
