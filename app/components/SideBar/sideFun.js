import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const  useSideFun= (props)=>{

    const fetchDay = async () => {
        const res = await axios.get("https://kitsu.io/api/edge/categories");
        return res.data;
      };
    
      const { data, isError, isLoading, isSuccess } = useQuery({
        queryKey: ["get", "category"],
        queryFn: fetchDay,
      });

      const category = data?.data


    return {
        category, isError, isLoading, isSuccess
    }
}

export default useSideFun