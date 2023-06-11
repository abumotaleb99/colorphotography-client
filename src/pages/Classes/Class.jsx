import React from "react";

const Class = ({ singleClass }) => {
  const { _id, image, available_seats, class_name, instructor_name, price } =
    singleClass;

  return (
    <div className="bg-white rounded-md">
      <div>
        <img src={image} className="w-full rounded-md rounded-b-none" alt="" />
      </div>
      <div className="p-5">
        <p className="text-[#999]">
          <span className="text-black font-medium">{available_seats} </span>
          Seats available
        </p>
        <h2 className="text-2xl font-medium">{class_name}</h2>
        <h3 className="text-[#999] text-lg pb-4">{instructor_name}</h3>
        <div className="flex justify-between items-center border-t-2 pt-5">
          <p className="text-[#29DE92] text-lg font-semibold">
            <span>{price}</span>$
          </p>
          <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md">
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class;
