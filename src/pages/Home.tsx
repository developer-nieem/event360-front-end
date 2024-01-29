import ContactSection from "@/components/Home/ContactSection";
import EventSection from "@/components/Home/EventSection";
import GallerySection from "@/components/Home/GallerySection";
import HeaderSection from "@/components/Home/HeaderSection";
import PricingSection from "@/components/Home/PricingSection";
import RecentEventSection from "@/components/Home/RecentEventSection";
import ReviewSection from "@/components/Home/ReviewSection";
import ServicesSection from "@/components/Home/ServicesSection";
import SubscribeSection from "@/components/Home/SubscribeSection";

const Home = () => {
    return (
        <div >
           <HeaderSection/>
          <ServicesSection/>
          <EventSection/>
          <GallerySection/>
          <PricingSection/>
          <ReviewSection/>
          <RecentEventSection/>
          <SubscribeSection/>
          <ContactSection/>
        </div>
    );
};

export default Home;