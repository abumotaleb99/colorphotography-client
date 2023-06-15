import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);

  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payment-history/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPaymentHistory(data);
      });
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto py-4">
      <h3 className="text-2xl md:text-3xl font-bold px-4 sm:px-0">
        Payment History
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
                  Transaction ID
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Class Name
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 border-b-2 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory?.map((ph, index) => (
                <tr key={ph._id}>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{index + 1}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{ph?.transactionId}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{ph?.className}</p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>
                      {ph?.price} <span>$</span>
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b text-sm">
                    <p>{ph?.date}</p>
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

export default PaymentHistory;
