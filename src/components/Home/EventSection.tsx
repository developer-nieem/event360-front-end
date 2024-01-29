import Container from "@/layout/Shared/Container";
import SectionHeading from "../ui/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IEvents } from "@/type/events/events.type";


const EventSection = () => {

    const {data , isLoading , isError} = useQuery({
        queryKey : ["event"],
        queryFn : () =>{
            return axios.get("http://localhost:3000/event-item")
        }
    })

    if (isLoading) {
        return ;
      }
      if (isError) {
        return ;
      }

    return (
        <div className="bg-[#0F172A]">
            
            <Container>
               
               <div>
                <SectionHeading  heading="Event Items" paragraph="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."/>
               </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
                        {
                            data?.data.map((item : IEvents) => <div key={item._id} className="bg-[#070B15] p-6 rounded-sm space-y-3">
                                    <h1 className="text-2xl font-semibold text-white">{item.name}</h1>
                                    <img className="rounded-md" src={item.image} alt={item.name} />

                            </div> )
                        }
                </div>


            </Container>

        </div>
    );
};

export default EventSection;