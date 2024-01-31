import Container from "@/layout/Shared/Container";
import HeaderServicesSlider from "./HeaderServicesSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HeaderSection = () => {


    useEffect(() => {
        AOS.init();
    }, [])


    return (
               <header className="bg-[#02011B] pb-14">
                <Container>
                <div className="grid pt-10 grid-cols-12 text-white gap-5">
                        <div data-aos="fade-right" className="col-span-12 lg:col-span-7 header-left h-[708px] flex flex-col justify-end px-11 pb-10 gap-2">
                            <h1 className="text-5xl font-bold">New Packages For Winter</h1>
                            <p className="max-w-[70ch]">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
                        </div>
                        <div data-aos="fade-left" className="col-span-12 lg:col-span-5 px-20 pt-8 bg-[#01000D]">
                           <h2 className="text-2xl font-bold uppercase text-center pb-5">Our most popular services</h2>
                           <hr  />

                         <HeaderServicesSlider/>
                        </div>
                </div>
                </Container>
               </header>

    );
};

export default HeaderSection;