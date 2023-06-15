import React from "react";

const Instructor = ({ instructor }) => {
  const { image, name, email } = instructor;

  return (
    <div className="bg-white rounded-md">
      <div>
        <img src={image} className="w-full rounded-md rounded-b-none" alt="" />
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-medium">{name}</h2>
        <h3 className="text-[#999] text-lg pb-4">{email}</h3>
        <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md">
          See Classes
        </button>
      </div>
    </div>
  );
};

export default Instructor;
