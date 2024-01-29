import Container from "@/layout/Shared/Container";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
const SubscribeSection = () => {
  return (
    <div className=" bg-[#0F172A] ">
      <Container>
       <div className="bg-[#070B15] h-96 rounded-lg shadow-black">
       <SectionHeading
          heading="Get Exclusive Updates!"
          paragraph="Subscribe now to receive our latest news, special offers, and exclusive content straight to your inbox. "
        />

        <div className="text-center pt-4 ">
          <form className=" flex flex-col gap-4 md:flex-row justify-center">
            <motion.input
              type="text"
              className="input w-full md:w-5/12 o"
              placeholder="example@gmail.com"
              whileTap={{ scale: 0.9, transition: {duration: 1} }}
            />
            <div>
            <motion.button
            
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            className="btn btn-primary btn-wide md:w-fit "
          >
            Subscribe Now
          </motion.button>
            </div>
          </form>
        </div>
       </div>
      </Container>
    </div>
  );
};

export default SubscribeSection;
