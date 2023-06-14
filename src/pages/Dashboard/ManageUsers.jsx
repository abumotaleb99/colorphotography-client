import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const ManageUsers = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Manage Users";
  }, []);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axios.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    });
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Made Admin Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Made Instructor Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto py-4">
      <h3 className="text-2xl md:text-3xl font-bold px-4 sm:px-0">All Users</h3>
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
                  Name
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{index + 1}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{user?.name}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{user?.email}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    {user?.role === "admin"
                      ? "Admin"
                      : user?.role === "instructor"
                      ? "Instructor"
                      : "Student"}
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className={`text-white ${
                        user?.role === "admin" ? "bg-[#1D4CAA]" : "bg-[#3A5BF0]"
                      }   hover:bg-[#1D4CAA] px-7 py-2 rounded-md mr-2`}
                      disabled={user?.role === "admin" ? true : false}
                    >
                      Make Admin
                    </button>
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className={`text-white ${
                        user?.role === "instructor"
                          ? "bg-[#1D4CAA]"
                          : "bg-[#3A5BF0]"
                      }   hover:bg-[#1D4CAA] px-7 py-2 rounded-md`}
                      disabled={user?.role === "instructor" ? true : false}
                    >
                      Make Instructor
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

export default ManageUsers;
