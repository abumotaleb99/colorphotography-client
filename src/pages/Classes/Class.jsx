import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Class = ({ singleClass }) => {
  const { _id, image, available_seats, class_name, instructor_name, price } =
    singleClass;

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      const selectedClass = {
        classId: _id,
        class_name,
        instructor_name,
        image,
        available_seats,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Class has been added to the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddToCart(singleClass)}
            className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-7 py-2 rounded-md"
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class;
