import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageClasses = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Manage Classes";
  }, []);

  const [axiosSecure] = useAxiosSecure();

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

  const handleSendFeedback = (classId) => {
    Swal.fire({
      title: "Write your feedback here",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Send",
      showLoaderOnConfirm: true,
      preConfirm: async (value) => {
        try {
          const response = await axiosSecure.put(
            `/classes/feedback/${classId}`,
            { feedback: value }
          );
          if (response.status === 200) {
            return response.data;
          } else {
            throw new Error(response.statusText);
          }
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Feedback Sent!",
          text: "Your feedback has been submitted successfully!",
          icon: "success",
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
                      onClick={() => handleSendFeedback(singleClass._id)}
                      className={`text-white 
                           bg-[#3A5BF0] hover:bg-[#1D4CAA] px-2 py-2 rounded-md`}
                    >
                      Send Feedback
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

export default ManageClasses;
