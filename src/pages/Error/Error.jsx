import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/error.png";

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col text-center">
        <img className="w-60 h-60" src={errorImage} alt="" />
        <Link
          to={"./"}
          className="text-indigo-600 hover:text-indigo-400 underline cursor-pointer pt-2"
        >
          Back to the homepage!
        </Link>
      </div>
    </div>
  );
};

export default Error;
