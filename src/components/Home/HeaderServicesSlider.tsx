import { Swiper, SwiperSlide } from "swiper/react";
import { Check } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination , Autoplay } from "swiper/modules";
import { useGetServices } from "@/api/services/useGetServices";
import { IService } from "@/type/services/service.type";

const HeaderServicesSlider = () => {

    const {data , isLoading , isError} = useGetServices()

    if (isLoading) {
        return ;
    }
    if (isError) {
        return ;
    }

  return (
    <div className="mt-5 ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
      
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
      >
        {
           data?.data.map((service : IService) => <SwiperSlide key={service._id}>
           <div className="space-y-4">
            <img className="rounded-md" src={service.image} alt="service event" />
            <h2 className="text-3xl">{service.name}</h2>
            <div>
                {service?.features?.map(feature => <div className="flex gap-3 my-3 ">
                      <Check className="bg-[#1F1F2A] rounded-full p-1"/>  {feature}
                </div> )}
            </div>

            <button className="btn w-full bg-gradient-to-r from-[#00D4FC] via-transparent to-[#00FEE3] ">View Details</button>
           </div>

           </SwiperSlide> )
        }
      </Swiper>
    </div>
  );
};

export default HeaderServicesSlider;
