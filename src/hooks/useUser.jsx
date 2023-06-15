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
        `https://b7a12-summer-camp-server-side-abumotaleb99.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
  });
  return [isUser, isUserLoading];
};
export default useUser;
