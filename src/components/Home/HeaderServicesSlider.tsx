import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Check } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination , Autoplay } from "swiper/modules";






const HeaderServicesSlider = () => {

    const {data , isLoading , isError} = useQuery({
        queryKey: ["services"],
        queryFn : () => {
            return axios.get("http://localhost:3000/services")
        }
    })

    if (isLoading) {
        return <p>Loading</p>
    }

    console.log(data?.data);
    

  return (
    <div className="mt-5 ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
       
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
      >
        {
           data?.data.map(service => <SwiperSlide key={service._id}>
           <div className="space-y-4">
            <img className="rounded-md" src={service.image} alt="service event" />
            <h2 className="text-3xl">{service.name}</h2>
            <div>
                {service?.features?.map(feature => <div className="flex gap-3 my-3 ">
                      <Check className="bg-[#1F1F2A] rounded-full p-1"/>  {feature}
                </div> )}
            </div>

            <button className="btn w-full ">View Details</button>
           </div>

           </SwiperSlide> )
        }
      </Swiper>
    </div>
  );
};

export default HeaderServicesSlider;
