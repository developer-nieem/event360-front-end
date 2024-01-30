import { useGetRecentEvent } from "@/api/RecentEvent/useGetRecentEvent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

type Inputs = {
  eventName: string;
  organizerName: string;
  image: string;
};


type IItem =  {
  _id : string
}

const EditRecentEvent = () => {
  const [recentEventName, setEventName] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");
  const [eventImage, setEventImage] = useState("");

  const router = useNavigate();

  const { handleSubmit, register } = useForm<Inputs>();

  const { id } = useParams();

  const { data } = useGetRecentEvent();

  const recentEvent = data?.data.find((item : IItem ) => item._id === id);

  useEffect(() => {
    setEventName(recentEvent?.eventName);
    setEventOrganizer(recentEvent?.organizerName);
    setEventImage(recentEvent?.image);
  }, [recentEvent]);

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation<void, AxiosError, Inputs>({
    mutationFn: async (data) => {
      return await axios.put(`http://localhost:3000/recent-event/${id}`, data);
      
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recent"] });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Recent Event has been Updated",
        showConfirmButton: false,
        timer: 1500,
      });

      router("/admin/recent-event-management");
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const recentEventData = {
      eventName: data.eventName,
      organizerName: data.organizerName,
      image: data.image,
    };

    await mutateAsync(recentEventData);
  };

  return (
    <div className="bg-black p-10 space-y-4 ">
      <h2 className="text-center text-white text-2xl">Edit Recent Event </h2>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className=" max-w-2xl mx-auto">
          <label htmlFor="eventName" className="text-center text-white">
            Edit Event Name
          </label>
          <input
            defaultValue={recentEventName}
            className=" mb-4 input w-full text-black"
            placeholder="Name"
            {...register("eventName")}
            id="eventName"
            required
          />

          <label htmlFor="organizerName" className="text-center text-white">
            Edit Organizer Name
          </label>
          <input
            defaultValue={eventOrganizer}
            className=" mb-4 input w-full text-black"
            placeholder="Name"
            {...register("organizerName")}
            id="organizerName"
            required
          />

          <label htmlFor="image" className="text-white ">
            Edit Image Link
          </label>
          <input
            defaultValue={eventImage}
            className="input w-full text-black"
            placeholder="image link"
            {...register("image")}
            id="image"
            required
          />

          <div className="text-center my-4">
            <button className="btn ">Update Recent Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecentEvent;
