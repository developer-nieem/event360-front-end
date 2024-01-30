import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export const useGetServices = () => {
    const servicesData = useQuery({
        queryKey: ["services"],
        queryFn : () => {
            return axios.get("https://level2-assignment5-server.vercel.app/services")
        }
    })

    return servicesData;
};
