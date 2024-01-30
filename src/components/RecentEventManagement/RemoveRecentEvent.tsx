import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Trash } from "lucide-react";
import Swal from "sweetalert2";




const RemoveRecentEvent = ({ id }: { id: string }) => {



    const queryClient = useQueryClient()

const {mutateAsync} = useMutation({
    mutationFn: async() => {
        return await axios.delete(`http://localhost:3000/recent-event/${id}`)
    },

    onSuccess: () => {
        queryClient.invalidateQueries({queryKey : ["recent"]})

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Recent Event has been Removed",
            showConfirmButton: false,
            timer: 1500,
          });
    }
})


    const handleDelete = async() => {
    

     await   mutateAsync()
    }


    return (
        <button onClick={handleDelete}>
        <Trash/>  

        </button>
    );
};

export default RemoveRecentEvent;