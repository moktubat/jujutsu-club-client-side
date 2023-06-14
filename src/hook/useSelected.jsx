import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelected = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  
  const { refetch, data: select = [] } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selected?email=${user?.email}`);
      return res.data;
    },
  });
  return [select, refetch];
};

export default useSelected;
