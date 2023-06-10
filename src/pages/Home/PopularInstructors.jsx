import React from "react";
import img1 from "../../assets/instructors/Henri-Cartier-Bresson.jpg";

const PopularInstructors = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0 pb-8 md:pb-16">
      <div className="pb-8">
        <h3 className="text-3xl md:text-4xl font-bold pb-1">
          Popular Instructors
        </h3>
        <p className="text-[#999] text-lg">Meet our top 6 Instructors.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-md">
          <div>
            <img
              src={img1}
              className="w-full rounded-md rounded-b-none"
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-medium">Md. Abu Motaleb</h2>
            <h3 className="text-[#999] text-lg pb-4">
              abumotaleb1111@gmail.com
            </h3>
            <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md">
              See Classes
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div>
            <img
              src={img1}
              className="w-full rounded-md rounded-b-none"
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-medium">Md. Abu Motaleb</h2>
            <h3 className="text-[#999] text-lg pb-4">
              abumotaleb1111@gmail.com
            </h3>
            <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md">
              See Classes
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div>
            <img
              src={img1}
              className="w-full rounded-md rounded-b-none"
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-medium">Md. Abu Motaleb</h2>
            <h3 className="text-[#999] text-lg pb-4">
              abumotaleb1111@gmail.com
            </h3>
            <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md">
              See Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
