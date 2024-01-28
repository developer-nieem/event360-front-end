import { useGetServices } from "@/api/services/useGetServices";
import Container from "@/layout/Shared/Container";
import { IService } from "@/type/services/service.type";
import { Check } from "lucide-react";

const ServicesSection = () => {
    const {data , isLoading , isError} = useGetServices()

    if (isLoading) {
        return <p>Loading</p>
    }
    if (isError) {
        return <p>Something Went Wrong</p>
    }


  return (
    <div className="bg-[#0F172A]">
      <Container>
        <div className="text-center text-white space-y-3 pt-24">
        <img className="mx-auto -mb-[70px]" src="../../../src/assets/Vector14.png" alt="service" />
            <h2 className="text-6xl font-bold  ">Our Services</h2>
           
            <p className="max-w-[70ch] mx-auto">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>


            <div className="grid grid-cols-12 gap-4 py-14">
                    {
                         data?.data.map((service: IService) => <div className=" col-span-12 md:col-span-6  lg:col-span-4 bg-[#070B15] p-6" key={service._id}>
                            <div className="space-y-4">
                             <img className="rounded-md" src={service.image} alt="service event" />
                             <h2 className="text-3xl text-left">{service.name}</h2>
                             <div>
                                 {service?.features?.map(feature => <div className="flex gap-3 my-3 ">
                                       <Check className="bg-[#1F1F2A] rounded-full p-1"/>  {feature}
                                 </div> )}
                             </div>
                            </div>
                 
                            </div> )
                    }
            </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
