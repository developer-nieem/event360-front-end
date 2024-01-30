import { useQuery } from "@tanstack/react-query";
import axios from "axios";



 export const useGetRecentEvent = () => {
    const recentData  = useQuery({
        queryKey : ["recent"],
        queryFn : () =>{
            return axios.get("http://localhost:3000/recent-event")
        }
    })

    return recentData
};

