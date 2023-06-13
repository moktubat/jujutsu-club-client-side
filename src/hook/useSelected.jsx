import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useSelected = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: select = [] } = useQuery({
    queryKey: ["selected", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selected?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [select, refetch];
};

export default useSelected;
