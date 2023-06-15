import React, { useEffect } from "react";
import Instructor from "./Instructor";
import { useState } from "react";

const Instructors = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Instructors";
  }, []);

  const [allInstructor, setAllInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-instructor")
      .then((res) => res.json())
      .then((data) => setAllInstructor(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0 py-5 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allInstructor.map((instructor) => (
          <Instructor key={instructor._id} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
