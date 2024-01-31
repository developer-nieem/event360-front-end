import Container from "@/layout/Shared/Container";
import { Facebook, Mail, PhoneCall } from "lucide-react";
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";



const ContactSection = () => {

const myRef = useRef<HTMLImageElement>(null)



    const {scrollYProgress} = useScroll({
        target: myRef,
        offset : ['0 1', '1.5 1']
        
    })


    const scaleValues = useTransform(scrollYProgress, [0 , 1], [0.2 , 1])
    const opacityValues = useTransform(scrollYProgress , [1, 1] , [0.1 , 1])
    

  return (
    <div className="bg-[#0F172A] pb-40 ">
      <Container>
        <div className="grid grid-cols-12 items-center">
        <div className="text-white space-y-8 pt-24 col-span-12 md:col-span-4 ">
          <img
            className="  -mb-[90px] overflow-hidden"
            src="/Vector14.png"
            alt="service"
          />
          <h2 className="text-6xl font-bold text-nowrap ">Get In Touch</h2>
          <p className="max-w-[30ch] ">
          Interested? Reach out to us and we’ll get back to you shortly.
          </p>

          <div className="flex gap-3 my-3 ">
            <PhoneCall className="bg-[#7A5CFF] rounded-full p-1 text-white" /> +880 1744112183
          </div>
          <div className="flex gap-3 my-3 ">
            <Mail className="bg-[#7A5CFF] rounded-full p-1 text-white" /> nieemhossen@gmail.com
          </div>
          <div className="flex gap-3 my-3 ">
            <Facebook className="bg-[#7A5CFF] rounded-full p-1 text-white" /> <a href="https://facebook.com/m.nieemhossen/">Like us on Facebook</a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 pt-10 flex justify-end items-center">
                <motion.img ref={myRef}  style={{
                     scale: scaleValues, opacity:opacityValues
                }} src="/graph-jasmine-f.png" alt="contact" />
        </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
