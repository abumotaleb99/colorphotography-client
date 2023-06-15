// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import axios from "axios";

// const useUser = () => {
//   const { user, loading } = useContext(AuthContext);

//   const { data: isUser, isLoading: isUserLoading } = useQuery({
//     queryKey: ["isUser", user?.email],
//     enabled: !loading,
//     queryFn: async () => {
//       const res = await axios.get(
//         `http://localhost:5000/users/${user?.email}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("access-token")}`,
//           },
//         }
//       );
//       return res.data;
//     },
//   });
//   return [isUser, isUserLoading];
// };
// export default useUser;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUser = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["isUser", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/users/${user?.email}`
      );
      return res.data;
    },
  });
  return [isUser, isUserLoading];
};
export default useUser;
