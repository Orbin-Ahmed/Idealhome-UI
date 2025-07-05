import Slider from "@/components/Slider";
import Navbar from "../components/Navbar";
import DesignSection from "@/components/DesignSection";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";

const itemFeatures = [
  {
    title: "CLOSETS",
    subtitle:
      "Walk-in, Reach-in, Smart Storage, His & Hers, Kid's, Modern, Classic, Luxury",
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
    textPosition: "left" as const,
  },
  {
    title: "KITCHENS",
    subtitle:
      "With Island, U-shape, L-shape, Double Gally, Kid's, Modern, Classic ",
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
    textPosition: "right" as const,
  },
  {
    title: "DOORS",
    subtitle:
      "Interior, Front, Wood, PVC, uPVC Exterior Doors, Sliding, Glass & Aluminum, Modern, Classic",
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
    textPosition: "left" as const,
  },
  {
    title: "WINDOWS",
    subtitle:
      "Comfort, Energy Efficient, Design, Schuco quality, Sustainability",
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
    textPosition: "right" as const,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <DesignSection />
      <ItemFinishFeatureSection features={itemFeatures} />
    </>
  );
}
