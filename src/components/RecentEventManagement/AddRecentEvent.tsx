import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";



type Inputs = {
    eventName : string,
    organizerName : string,
    image : string
}

const AddRecentEvent = () => {


    const { handleSubmit , register} =  useForm<Inputs>()


    const queryClient =  useQueryClient()


    const {mutateAsync} = useMutation<void, AxiosError, Inputs>({
        mutationFn : async (data) => {
            return await axios.post("http://localhost:3000/recent-event" , data)
        },

        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey : ["recent"]})

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Recent Event has been Added",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })


    const onSubmit: SubmitHandler<Inputs> = async(data) => {

        const eventData = {
            eventName: data.eventName,
            organizerName : data.organizerName,
            image: data.image
        }

       await mutateAsync(eventData) 
         
    }

    return (
        <div>
        <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl mb-4">Add Recent Event </h2>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input className="input w-full text-black" placeholder="Event Name" {...register("eventName")} />
          <input className="input w-full text-black" placeholder="Organizer Name" {...register("organizerName")} />
          <input className="input w-full text-black" placeholder="image link" {...register("image")} />
         

         <div className="text-center">
         <button className="btn ">Add Event</button>
         </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default AddRecentEvent;