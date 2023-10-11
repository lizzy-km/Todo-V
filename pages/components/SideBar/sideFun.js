import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const  useSideFun= (props)=>{

    const fetchDay = async () => {
        const res = await axios.get("https://kitsu.io/api/edge/categories");
        return res.data;
      };
    
      const { data, isSuccess } = useQuery({
        queryKey: ["get", "category"],
        queryFn: fetchDay,
      });

      const category = data?.data


    return {
        category, isSuccess
    }
}

export default useSideFun