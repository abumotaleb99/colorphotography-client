import React from "react";
import img1 from "../../assets/instructors/Henri-Cartier-Bresson.jpg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useEffect } from "react";
import Instructor from "../Instructors/Instructor";

const PopularInstructors = () => {
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-abumotaleb99.vercel.app/top-instructor"
    )
      .then((res) => res.json())
      .then((data) => setPopularInstructor(data));
  }, []);
  return (
    <Fade cascade duration={3000}>
      <div className="max-w-7xl mx-auto px-5 md:px-0 pb-8 md:pb-16">
        <div className="pb-8">
          <h3 className="text-3xl md:text-4xl font-bold pb-1">
            Popular Instructors
          </h3>
          <p className="text-[#999] text-lg">Meet our top 6 Instructors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularInstructor.map((instructor) => (
            <Instructor
              key={instructor._id}
              instructor={instructor}
            ></Instructor>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default PopularInstructors;
