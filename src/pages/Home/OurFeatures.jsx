import React from "react";

const OurFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0 py-8 md:py-16">
      <div className="pb-8">
        <h3 className="text-3xl md:text-4xl font-bold pb-1">Our Features</h3>
        <p className="text-[#999] text-lg">Best skill development platform.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-8 text-center">
          <h2 className="text-lg font-semibold">Real Time Doubt Resolution</h2>
          <p>with Live Instructors</p>
        </div>
        <div className="bg-white p-8 text-center">
          <h2 className="text-lg font-semibold">Unlimited Access</h2>
          <p>to Online Learning Repository</p>
        </div>
        <div className="bg-white p-8 text-center">
          <h2 className="text-lg font-semibold">Learning Assistants</h2>
          <p>to Guide When You Are Stuck</p>
        </div>
        <div className="bg-white p-8 text-center">
          <h2 className="text-lg font-semibold">Truck Your</h2>
          <p>Career Growth</p>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
