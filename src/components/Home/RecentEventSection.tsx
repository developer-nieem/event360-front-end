import Container from "@/layout/Shared/Container";
import SectionHeading from "../ui/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import {  Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { IRecentEvent } from "@/type/recentEvent/recentEvent.type";
import { useGetRecentEvent } from "@/api/RecentEvent/useGetRecentEvent";


const RecentEventSection = () => {

    
    const {data , isLoading , isError} = useGetRecentEvent()

    if (isLoading) {
        return ;
      }
      if (isError) {
        return ;
      }


      
    return (
        <div className="bg-[#0F172A] pb-20">
            <Container>
                <div className="pb-12">

                <SectionHeading heading="Recent Events" paragraph="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."/>
                </div>
                


         <Swiper
          cssMode={true}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}

        breakpoints={{
            768: {
              slidesPerView: 3,
            }
          }}
      >

        {
            data?.data.map((event :IRecentEvent ) =><SwiperSlide key={event._id }>

                    <div className="bg-black text-white  rounded-md space-y-6">
                        <div >
                            
                                <img className="rounded-md h-[220px] w-full" src={event.image} alt={event.eventName} />
                            
                           
                               <div className="p-4">
                               <h2 className="text-xl">{event.eventName}</h2>
                                <h4 className="text-sm text-[#475569]">by {event.organizerName}</h4>
                               </div>
                           
                        </div>
                    </div>


            </SwiperSlide> )
        }
        
        
      </Swiper>


            </Container>
        </div>
    );
};

export default RecentEventSection;