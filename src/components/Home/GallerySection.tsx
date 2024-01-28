import Container from "@/layout/Shared/Container";
import gallery from "../../assets/galary.png";
import { Check } from "lucide-react";

const GallerySection = () => {
  const galleryFeature = [
    "One day pas access all lecture",
    "Lunch and Snack",
    "Meet Event Speaker",
    "Front Seat",
    "One day pas access all lecture",
  ];

  return (
    <div className="bg-[#0F172A] py-20">
      <Container>
        <div className="grid  md:grid-cols-2 gap-7">
          <div className=" text-white space-y-3 pt-24">
            <img
              className=" w-56 -mb-[70px] overflow-hidden"
              src="../../../src/assets/Vector14.png"
              alt="service"
            />
            <h2 className="text-6xl font-bold  ">Gallery</h2>
            <p className="max-w-[70ch] mx-auto">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra. Ultrices faucibus neque velit risus ac id
              lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida
              id nibh ornare viverra. Ultrices faucibus neque velit risus ac id
              lorem.
            </p>

            {galleryFeature.map((feature) => (
                    <div className="flex gap-3 my-3 ">
                      <Check className="bg-[#1F1F2A] rounded-full p-1" />{" "}
                      {feature}
                    </div>
                  ))}
          </div>
          <div>
            <img src={gallery} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GallerySection;
