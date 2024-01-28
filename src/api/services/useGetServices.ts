import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export const useGetServices = () => {
    const servicesData = useQuery({
        queryKey: ["services"],
        queryFn : () => {
            return axios.get("http://localhost:3000/services")
        }
    })

    return servicesData;
};
