
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Trash } from "lucide-react";
import Swal from "sweetalert2";


const RemoveEvent = ({ id }: { id: string }) => {


    const queryClient =  useQueryClient()
    const {mutateAsync} = useMutation({
     
        mutationFn : () => {
             return axios.delete(`https://level2-assignment5-server.vercel.app/event-item/${id}`)
        },


        onSuccess : () => {
            queryClient.invalidateQueries({queryKey : ["event"]})
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Event has been Removed",
                showConfirmButton: false,
                timer: 1500
              });

        }

        
    })


const handleDelete = async() => {

  await mutateAsync()

}


    return (
        
        <button onClick={handleDelete}>
        <Trash/>  

        </button>
              
       
    );
};

export default RemoveEvent;