import { useQuery } from "@tanstack/react-query";
import axios from "axios";



 export const useGetRecentEvent = () => {
    const recentData  = useQuery({
        queryKey : ["recent"],
        queryFn : () =>{
            return axios.get("https://level2-assignment5-server.vercel.app/recent-event")
        }
    })

    return recentData
};

