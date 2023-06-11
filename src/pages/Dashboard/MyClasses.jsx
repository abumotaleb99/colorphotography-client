import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClasses(data);
      });
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto py-4">
      <h3 className="text-2xl md:text-3xl font-bold px-4 sm:px-0">
        My Classes
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
                  Status
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Feedback
                </th>
              </tr>
            </thead>
            <tbody>
              {myClasses?.map((singleClass, index) => (
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
                    {singleClass?.status === "approved"
                      ? "Approved"
                      : singleClass?.status === "denied"
                      ? "Denied"
                      : "Pending"}
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    {singleClass?.status === "denied" ? (
                      <button className="text-white bg-[#3A5BF0] hover:bg-[#1D4CAA] px-2 py-2 rounded-md mr-2">
                        View Feedback
                      </button>
                    ) : (
                      "No Feedback"
                    )}
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

export default MyClasses;
