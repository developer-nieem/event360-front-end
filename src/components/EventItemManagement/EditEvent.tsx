import { useGetEventItem } from "@/api/EventItem/useGetEventItem";
import { IEvents } from "@/type/events/events.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

type Inputs = {
    name: string
    image: string
  }

const EditEvent = () => {

    const [eventName , setEventName] = useState('')
    const [eventImage , setEventImage] = useState('')
    

    const router =  useNavigate()

    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()

    const {id} =  useParams();

    const {data} = useGetEventItem()

  
    const event =  data?.data.find ((item : IEvents) => item._id === id)

        useEffect(() => {
    
                    setEventName(event?.name)
                    setEventImage(event?.image)
        
           }, [event])
   
    const  queryCLient = useQueryClient()

           const {mutateAsync} = useMutation({
            mutationFn : async(data) => {
                return await axios.put(`http://localhost:3000/event-item/${id}`, data)
            },

            onSuccess : () => {
                queryCLient.invalidateQueries({queryKey : ["event"]})

                
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Event has been Updated",
                showConfirmButton: false,
                timer: 1500
              });

                router("/admin/event-item-management")



            }
           })


           console.log(`http://localhost:3000/event-item/${id}`);
           
 const onSubmit: SubmitHandler<Inputs> = async(data) => {

        const eventData = {
            name: data.name,
            image: data.image
        }

      
        await mutateAsync(eventData)
         
    }

  
    return (
        <div className="bg-black p-10 space-y-4 ">
            <h2 className="text-center text-white text-2xl">Edit Event Item</h2>

            <div>
            <form onSubmit={handleSubmit(onSubmit)} className=" max-w-2xl mx-auto">
                <label htmlFor="name" className="text-center">Edit Name</label>
          <input defaultValue={eventName} className=" mb-4 input w-full text-black" placeholder="Name" {...register("name")} id="name" />

        <label htmlFor="image" className="text-white ">Edit Image Link</label>
          <input defaultValue={eventImage}  className="input w-full text-black" placeholder="image link" {...register("image")} id="image" />
         

         <div className="text-center my-4">
         <button className="btn ">Update Event</button>
         </div>
          </form>
               
            </div>
        </div>
    );
};

export default EditEvent;