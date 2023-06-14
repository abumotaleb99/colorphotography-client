import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const useUser = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: isUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["isUser", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://b7a12-summer-camp-server-side-abumotaleb99.vercel.app/users/${user?.email}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.data;
    },
  });
  return [isUser, isUserLoading];
};
export default useUser;
