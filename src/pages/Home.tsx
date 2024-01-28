import EventSection from "@/components/Home/EventSection";
import GallerySection from "@/components/Home/GallerySection";
import PricingSection from "@/components/Home/PricingSection";
import ReviewSection from "@/components/Home/ReviewSection";
import ServicesSection from "@/components/Home/ServicesSection";

const Home = () => {
    return (
        <div >
          <ServicesSection/>
          <EventSection/>
          <GallerySection/>
          <PricingSection/>
          <ReviewSection/>
        </div>
    );
};

export default Home;