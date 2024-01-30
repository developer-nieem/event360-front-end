import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form"
import Swal from 'sweetalert2'

type Inputs = {
    name: string
    image: string
  }

const AddEvent = () => {

    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()

      const queryClient =  useQueryClient()

   


      const {mutateAsync } = useMutation<void, AxiosError, Inputs>({

        mutationFn : async(data ) => {
         return await axios.post('http://localhost:3000/event-item', data)
        },

        onSuccess : () => {
            queryClient.invalidateQueries({queryKey: ["event"]})

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Event has been Added",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })





      const onSubmit: SubmitHandler<Inputs> = async(data) => {

        const eventData = {
            name: data.name,
            image: data.image
        }

       await mutateAsync(eventData) 
         
    }





  return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl mb-4">Add Event Item</h2>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input className="input w-full text-black" placeholder="Name" {...register("name")} />
          <input className="input w-full text-black" placeholder="image link" {...register("image")} />
         

         <div className="text-center">
         <button className="btn ">Add Event</button>
         </div>
          </form>
        </div>
      </div>
   
  );
};

export default AddEvent;
