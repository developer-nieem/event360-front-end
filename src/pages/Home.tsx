import EventSection from "@/components/Home/EventSection";
import GallerySection from "@/components/Home/GallerySection";
import ServicesSection from "@/components/Home/ServicesSection";

const Home = () => {
    return (
        <div >
          <ServicesSection/>
          <EventSection/>
          <GallerySection/>
        </div>
    );
};

export default Home;