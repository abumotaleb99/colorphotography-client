import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Class from "./Class";

const Classes = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-classes")
      .then((res) => res.json())
      .then((data) => setAllClasses(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0 py-5 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allClasses.map((singleClass) => (
          <Class key={singleClass._id} singleClass={singleClass}></Class>
        ))}
      </div>
    </div>
  );
};

export default Classes;
