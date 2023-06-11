import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            setError(`Password didn't match.`);
            break;
          case "(auth/user-not-found":
            setError("User not found.");
            break;
          default:
            setError(error.message);
            break;
        }
      });
  };

  return (
    <div className="px-5 py-8 md:py-12">
      <div className="w-full md:max-w-lg m-auto border rounded-md px-6 py-12 bg-white">
        <h1 className="text-3xl font-bold">Login</h1>

        <p className="text-sm  text-red-500 font-medium py-2">{error}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="mb-2">
            <label className=" text-base font-semibold">Email</label>
            <input
              type="email"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
              defaultValue=""
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mb-2">
            <label className="text-base font-semibold">Password</label>
            <input
              type="password"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2 "
              defaultValue=""
              {...register("password", {
                required: true,
              })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mt-6">
            <input
              type="submit"
              className="w-full text-base text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] tracking-wide rounded-md cursor-pointer  px-4 py-2"
              value="Login"
            />
          </div>
        </form>
        <div className="flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <button className="w-full text-base tracking-wide flex justify-center items-center border gap-5 rounded-md cursor-pointer  px-4 py-2 mt-5">
          <FaGoogle className="text-orange-400" /> Sign In with Google
        </button>

        <p className="text-sm font-medium mt-4">
          Don't have an account?
          <Link to="/register" className="text-purple-700 ps-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
