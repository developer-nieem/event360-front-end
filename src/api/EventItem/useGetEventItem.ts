import {  useQuery,  } from "@tanstack/react-query";
import axios from "axios";



export const useGetEventItem = () => {

    const eventItemData= useQuery({
        queryKey : ["event"],
        queryFn : () =>{
            return axios.get("https://level2-assignment5-server.vercel.app/event-item")
        }

    })

    return eventItemData

};

