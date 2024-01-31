import Container from "@/layout/Shared/Container";
import { Check } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const PricingSection = () => {



  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="bg-[#070B15] pb-20">
      <Container>
        <div className="text-white text-center py-20 space-y-3">
          <h4 className="text-lg">PRICING</h4>
          <h2 className="text-6xl">Package Pricing</h2>
        </div>
        <div className="grid md:grid-cols-12 gap-12">

             {/* 1st pricing column */}
          <div data-aos="fade-right" className="  md:col-span-6 lg:col-span-4 bg-[#11151E] text-white p-16 space-y-4 rounded-md h-[536px] flex flex-col justify-between ">
           <div>
           <h4 className="text-xl">STANDARD</h4>
            <h2 className="text-4xl">$120</h2>
            <div className="flex gap-3 my-5 ">
              <Check className="bg-[#1F1F2A] rounded-full p-1" /> One day pas access all lecture
            </div>
            <div className="flex gap-3 my-3 ">
              <Check className="bg-[#1F1F2A] rounded-full p-1" />
              Lunch and Snack
            </div>

           </div>
            <div>
            <button className="btn bg-[#252A32] w-full text-white border-0 hover:text-black">Get your ticket</button>
            </div>
          </div>

           {/* 2nd pricing column */}
          <div data-aos="fade-down" className=" md:col-span-6 lg:col-span-4 bg-[#0038B4] text-white p-16 space-y-4 rounded-md h-[536px] lg:h-[588px] flex flex-col justify-between lg:-mt-12">
           <div>
           <h4 className="text-xl">PREMIUM</h4>
            <h2 className="text-4xl">$180</h2>
            <div className="flex gap-3 my-5 ">
              <Check className="bg-[#1F1F2A] rounded-full p-1" /> One day pas access all lecture
            </div>
            <div className="flex gap-3 my-3 ">
              <Check className="bg-[#1F1F2A] rounded-full p-1" />
              Lunch and Snack
            </div>
            <div className="flex gap-3 my-3 ">
              <Check className="bg-[#1F1F2A] rounded-full p-1" />
              Meet Event Speaker
            </div>

           </div>
            <div>
            <button className="btn w-full bg-gradient-to-r from-[#00D4FC] via-transparent to-[#00FEE3]">Get your ticket</button>
            </div>
          </div>

          {/* 3rd pricing column */}
          <div data-aos="fade-left" className=" md:col-span-6 lg:col-span-4 bg-[#11151E] text-white p-16 space-y-4 rounded-md h-[536px] flex flex-col justify-between">
           <div>
           <h4 className="text-xl">ENTERPRISE</h4>
            <h2 className="text-4xl">$200</h2>
            <div className="flex gap-3 my-5 ">
              <Check className="bg-[#1F1F2A] rounded-full p-1" /> One day pas access all lecture
            </div>
            <div className="flex gap-3 my-3 ">
              <Check className="bg-[#1F1F2A] rounded-full p-1" />
              Lunch and Snack
            </div>
            <div className="flex gap-3 my-3 ">
              <Check className="bg-[#1F1F2A] rounded-full p-1" />
              Meet Event Speaker
            </div>
            <div className="flex gap-3 my-3 ">
              <Check className="bg-[#1F1F2A] rounded-full p-1" />
              Front Seat
            </div>

           </div>
            <div>
            <button className="btn bg-[#252A32] w-full text-white border-0 hover:text-black">Get your ticket</button>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default PricingSection;
