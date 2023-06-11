import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Token;

const AddClass = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Add A Class";
  }, []);

  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

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
          const {
            class_name,
            instructor_name,
            instructor_email,
            available_seats,
          } = data;

          const price = parseFloat(data.price);

          const newClass = {
            class_name,
            instructor_name,
            instructor_email,
            available_seats,
            price,
            status: "pending",
            image: imgURL,
          };
          axiosSecure.post("/add-class", newClass).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="px-5 py-8 md:py-16">
      <div className="w-full md:max-w-4xl m-auto border rounded-md px-6 py-12">
        <h1 className="text-3xl font-bold">Add A Class</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="mb-2 md:grid grid-cols-2 gap-5">
            <div>
              <label className=" text-base font-semibold">Class Name</label>
              <input
                type="text"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                {...register("class_name", { required: true })}
              />
              {errors.class_name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div>
              <label className=" text-base font-semibold">
                Instructor Name
              </label>
              <input
                type="text"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                defaultValue={user?.displayName}
                {...register("instructor_name", { required: true })}
              />
              {errors.instructor_name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div>
            <label className=" text-base font-semibold">Instructor Email</label>
            <input
              type="email"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
              defaultValue={user?.email}
              {...register("instructor_email", { required: true })}
            />
            {errors.instructor_email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mb-2 md:grid grid-cols-2 gap-5">
            <div>
              <label className=" text-base font-semibold">
                Available seats
              </label>
              <input
                type="text"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                required
                {...register("available_seats", { required: true })}
              />
              {errors.available_seats && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div>
              <label className=" text-base font-semibold">Price</label>
              <input
                type="text"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                required
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="mb-2">
            <label className=" text-base font-semibold">Photo</label>
            <input
              type="file"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
              required
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
              value="Add A Class"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
