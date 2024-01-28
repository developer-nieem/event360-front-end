import Container from "@/layout/Shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';



const ReviewSection = () => {

    const reviews = [
        {
          "name": "Alice",
          "company": "Tech Innovations",
          "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
          "description": "Exceptional service! The team at Tech Innovations went above and beyond to make our experience unforgettable."
        },
        {
          "name": "Bob",
          "company": "Gadget Masters",
          "image": "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "description": "I was impressed with the quality and attention to detail at Gadget Masters. Highly recommend!"
        },
        {
            "name": "Charlie",
            "company": "Smart Solutions",
            "image": "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Amazing products and great customer support at Smart Solutions. Will definitely be coming back for more."
          },
          {
            "name": "Diana",
            "company": "Innovate Tech",
            "image": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "The team's dedication to customer satisfaction at Innovate Tech sets them apart. Highly recommended!"
          }
      ]
      

  return (
    <div className="bg-[#0F172A] py-[160px]">
      <Container>
        <div className="text-white space-y-3 mb-8">
          <img
            className="  -mb-[70px] overflow-hidden"
            src="../../../src/assets/Vector14.png"
            alt="service"
          />
          <h2 className="text-6xl font-bold  ">What everyone says</h2>
        </div>


{/* Review slider */}


        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}

        breakpoints={{
            768: {
              slidesPerView: 3,
            }
          }}
        
      >

        {
            reviews.map((review , i) =><SwiperSlide key={i +1 }>

                    <div className="bg-black text-white p-8 rounded-md space-y-6">
                        <p>{review.description}</p>
                        <div className="flex gap-3">
                            <div>
                                <img className="w-10 h-10 rounded-full" src={review.image} alt={review.name} />
                            </div>
                            <div>
                                <h2 className="text-xl">{review.name}</h2>
                                <h4 className="text-sm">{review.company}</h4>
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

export default ReviewSection;
