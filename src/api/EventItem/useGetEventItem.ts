import {  useQuery,  } from "@tanstack/react-query";
import axios from "axios";



export const useGetEventItem = () => {

    const eventItemData= useQuery({
        queryKey : ["event"],
        queryFn : () =>{
            return axios.get("http://localhost:3000/event-item")
        }

    })

    return eventItemData

};

