import React from "react";
import img1 from "../../assets/classes/class1.jpg";
import { Fade } from "react-awesome-reveal";

const PopularClasses = () => {
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
          <div className="bg-white rounded-md">
            <div>
              <img
                src={img1}
                className="w-full rounded-md rounded-b-none"
                alt=""
              />
            </div>
            <div className="p-5">
              <p className="text-[#999]">
                <span className="text-black font-medium">20 </span>Seats
                available
              </p>
              <h2 className="text-2xl font-medium">Fashion Photography</h2>
              <h3 className="text-[#999] text-lg pb-4">Abu Motaleb</h3>
              <div className="flex justify-between items-center border-t-2 pt-5">
                <p className="text-[#29DE92] text-lg font-semibold">
                  <span>250</span>$
                </p>
                <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md">
                  Select Class
                </button>
              </div>
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
              <p className="text-[#999]">
                <span className="text-black font-medium">20 </span>Seats
                available
              </p>
              <h2 className="text-2xl font-medium">Fashion Photography</h2>
              <h3 className="text-[#999] text-lg pb-4">Abu Motaleb</h3>
              <div className="flex justify-between items-center border-t-2 pt-5">
                <p className="text-[#29DE92] text-lg font-semibold">
                  <span>250</span>$
                </p>
                <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md">
                  Select Class
                </button>
              </div>
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
              <p className="text-[#999]">
                <span className="text-black font-medium">20 </span>Seats
                available
              </p>
              <h2 className="text-2xl font-medium">Fashion Photography</h2>
              <h3 className="text-[#999] text-lg pb-4">Abu Motaleb</h3>
              <div className="flex justify-between items-center border-t-2 pt-5">
                <p className="text-[#29DE92] text-lg font-semibold">
                  <span>250</span>$
                </p>
                <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md">
                  Select Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PopularClasses;
