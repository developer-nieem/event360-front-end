import EventSection from "@/components/Home/EventSection";
import GallerySection from "@/components/Home/GallerySection";
import PricingSection from "@/components/Home/PricingSection";
import RecentEventSection from "@/components/Home/RecentEventSection";
import ReviewSection from "@/components/Home/ReviewSection";
import ServicesSection from "@/components/Home/ServicesSection";
import SubscribeSection from "@/components/Home/SubscribeSection";

const Home = () => {
    return (
        <div >
          <ServicesSection/>
          <EventSection/>
          <GallerySection/>
          <PricingSection/>
          <ReviewSection/>
          <RecentEventSection/>
          <SubscribeSection/>
        </div>
    );
};

export default Home;