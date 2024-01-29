import Container from "@/layout/Shared/Container";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
const SubscribeSection = () => {
  return (
    <div className="bg-[#070B15] pb-40">
      <Container>
        <SectionHeading
          heading="Get Exclusive Updates!"
          paragraph="Subscribe now to receive our latest news, special offers, and exclusive content straight to your inbox. Join our community of enthusiasts and be the first to know about exciting developments, upcoming events, and insider insights. Don't miss out – subscribe today for a front-row seat to all things Event"
        />

        <div className="text-center pt-4 ">
          <form className="md:space-x-4 flex flex-col gap-4 md:flex-row justify-center">
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
      </Container>
    </div>
  );
};

export default SubscribeSection;
