import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import useUser from "../../hooks/useUser";
import { useState } from "react";

const auth = getAuth(app);

const img_hosting_token = import.meta.env.VITE_Image_Token;

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [isUser] = useUser();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;

        if (!isUser) {
          const saveUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            image: loggedUser.photoURL,
          };

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                navigate("/");
              }
            })
            .catch((error) => console.log(error));
        }
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;

          createUser(data.email, data.password).then((result) => {
            const createdUser = result.user;
            updateProfile(auth.currentUser, {
              displayName: data.name,
              photoURL: imgURL,
            });

            const saveUser = {
              name: data.name,
              email: data.email,
              image: imgURL,
            };

            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  navigate("/");
                }
              })
              .catch((error) => {
                switch (error) {
                  case "auth/wrong-password":
                    setError(`Password didn't match.`);
                    break;
                  case "(auth/user-not-found":
                    setError("User not found.");
                    break;
                  case "(auth/email-already-in-use":
                    setError("This email already used.");
                    break;
                  default:
                    setError(error.message);
                    break;
                }
              });
          });
        }
      });
  };

  return (
    <div className="px-5 py-8 md:py-12">
      <div className="w-full md:max-w-lg m-auto border bg-white rounded-md px-6 py-12">
        <h1 className="text-3xl font-bold">Sign Up</h1>

        <p className="text-sm  text-red-500 font-medium py-2">{error}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
          <div className="mb-2">
            <label className=" text-base font-semibold">Name</label>
            <input
              type="text"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
              defaultValue=""
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
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
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
          </div>
          <div className="mb-2">
            <label className="text-base font-semibold">Confirm Password</label>
            <input
              type="password"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2 "
              {...register("confirm_password", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
            />
            {errors.confirm_password && (
              <p className="text-red-600">Password didn't match</p>
            )}
          </div>
          <div className="mb-2">
            <label className="text-base font-semibold">Photo</label>
            <input
              type="file"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2 "
              defaultValue=""
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mt-6">
            <input
              type="submit"
              className="w-full text-base text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] tracking-wide rounded-md cursor-pointer  px-4 py-2"
              value="Sign Up"
            />
          </div>
        </form>

        <div className="flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full text-base tracking-wide flex justify-center items-center border gap-5 rounded-md cursor-pointer  px-4 py-2 mt-5"
        >
          <FaGoogle className="text-orange-400" /> Sign In with Google
        </button>
        <p className="text-sm font-medium mt-4">
          Have an account?
          <Link to="/login" className="text-purple-700 ps-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
