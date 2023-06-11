import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [showModal, setShowModal] = useState(false);

  const { data: classes = [], refetch } = useQuery(["users"], async () => {
    const res = await axios.get("http://localhost:5000/classes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    });
    return res.data;
  });

  const handleApproveClass = (singleClass) => {
    fetch(`http://localhost:5000/class/approve/${singleClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          isSetDisable(true);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Approved Class Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDenyClass = (singleClass) => {
    fetch(`http://localhost:5000/class/deny/${singleClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          isSetDisable(true);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Denied Class Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    const id = form.id.value;
    console.log(id);

    const updateFeedback = {
      feedback,
    };

    fetch(`http://localhost:5000/class/feedback/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          setShowModal(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sent Feedback Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto py-4">
      <h3 className="text-2xl md:text-3xl font-bold px-4 sm:px-0">
        All Classes
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
                  Status
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((singleClass, index) => (
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
                    {singleClass?.status === "approved"
                      ? "Approved"
                      : singleClass?.status === "denied"
                      ? "Denied"
                      : "Pending"}
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <button
                      onClick={() => handleApproveClass(singleClass)}
                      className={`text-white ${
                        singleClass?.status === "pending"
                          ? "bg-[#3A5BF0]"
                          : "bg-[#1D4CAA]"
                      }   hover:bg-[#1D4CAA] px-2 py-2 rounded-md mr-2`}
                      disabled={
                        singleClass?.status === "pending" ? false : true
                      }
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDenyClass(singleClass)}
                      className={`text-white ${
                        singleClass?.status === "pending"
                          ? "bg-[#3A5BF0]"
                          : "bg-[#1D4CAA]"
                      }   hover:bg-[#1D4CAA] px-2 py-2 rounded-md mr-2`}
                      disabled={
                        singleClass?.status === "pending" ? false : true
                      }
                    >
                      Deny
                    </button>
                    <button
                      onClick={() => setShowModal(true)}
                      className={`text-white ${
                        singleClass?.role === "instructor"
                          ? "bg-[#1D4CAA]"
                          : "bg-[#3A5BF0]"
                      }   hover:bg-[#1D4CAA] px-2 py-2 rounded-md`}
                    >
                      Send Feedback
                    </button>
                    {/* Modal */}
                    {showModal ? (
                      <>
                        <form onSubmit={handleFeedback}>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-2xl">
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between px-5 py-4 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-xl font-semibold">
                                    Write your feedback here!
                                  </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <input
                                    type="hidden"
                                    name="id"
                                    value={singleClass._id}
                                  />
                                  <textarea
                                    name="feedback"
                                    id=""
                                    cols="50"
                                    rows="5"
                                    required
                                  ></textarea>
                                </div>
                                <div className="flex items-center justify-end px-5 py-4 border-t border-solid border-slate-200 rounded-b">
                                  <button
                                    className="text-red-600 px-5 py-2 rounded-md mr-1"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                  >
                                    Close
                                  </button>
                                  <input
                                    type="submit"
                                    className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-5 py-2 rounded-md"
                                    value="Send"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </form>
                      </>
                    ) : null}
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

export default ManageClasses;
