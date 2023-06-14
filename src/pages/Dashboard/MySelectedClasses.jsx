import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  useEffect(() => {
    document.title = "ColorPhotography | My Selected Classes";
  }, []);

  const { user, loading } = useContext(AuthContext);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/carts?email=${user?.email}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [user, cart]);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your selected class has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-4">
      <h3 className="text-2xl md:text-3xl font-bold px-4 sm:px-0">
        My Selected Classes
      </h3>
      <div className=" flex mt-3 px-4 sm:px-0"></div>
      <div className="sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-md overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  SI
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Class Name
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Instructor Name
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Instructor Email
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Available Seats
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((singleClass, index) => (
                <tr key={singleClass._id}>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{index + 1}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{singleClass?.class_name}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <img src={singleClass?.image} className="w-20" alt="" />
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{singleClass?.instructor_name}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{singleClass?.instructor_email}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{singleClass?.available_seats}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>
                      {singleClass?.price}
                      <span>$</span>
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <Link
                      to={`../pay/${singleClass?.price}`}
                      className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-5 py-2 rounded-md mr-2"
                    >
                      Pay
                    </Link>
                    <button
                      onClick={() => handleDelete(singleClass)}
                      className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-3 py-2 rounded-md mr-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClasses;
