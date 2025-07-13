import Slider from "@/components/Slider";
import Navbar from "../components/Navbar";
import DesignSection from "@/components/DesignSection";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Footer from "@/components/Footer";

const itemFeatures = [
  {
    title: "CLOSETS",
    subtitleItems: [
      { label: "Walk-in", href: "/closets/walk-in-closet" },
      { label: "Reach-in", href: "/closets/reach-in-closet" },
      { label: "Smart Storage", href: "/closets/smart-storage-solution" },
      { label: "His & Hers" },
      { label: "Kid's" },
      { label: "Modern" },
      { label: "Classic" },
      { label: "Luxury" },
    ],
    images: [
      "/images/test2/1.jpg",
      "/images/test2/2.jpg",
      "/images/test2/3.jpg",
    ],
    textPosition: "left" as const,
    titleLink: "/closets",
  },
  {
    title: "KITCHENS",
    subtitleItems: [
      { label: "With Island", href: "/kitchens/kitchen-with-island" },
      { label: "Pantry Kitchen", href: "/kitchens/pantry-kitchen" },
      { label: "U-shape", href: "/kitchens/u-shaped-kitchen" },
      { label: "Double Gally" },
      { label: "Kid's" },
      { label: "Modern" },
      { label: "Classic" },
    ],
    images: [
      "/images/test2/1.jpg",
      "/images/test2/2.jpg",
      "/images/test2/3.jpg",
    ],
    textPosition: "right" as const,
    titleLink: "/kitchens",
  },
  {
    title: "DOORS",
    subtitleItems: [
      { label: "Interior" },
      { label: "Front" },
      { label: "Wood" },
      { label: "PVC" },
      { label: "Sliding" },
      { label: "uPVC Exterior Doors" },
      { label: "Glass & Aluminum" },
      { label: "Modern" },
      { label: "Classic" },
    ],
    images: [
      "/images/test2/1.jpg",
      "/images/test2/2.jpg",
      "/images/test2/3.jpg",
    ],
    textPosition: "left" as const,
    titleLink: "/doors",
  },
];

const images = [
  "/images/test/1.png",
  "/images/test/2.png",
  "/images/test/3.png",
  "/images/test/4.png",
  "/images/test/5.png",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider images={images} />
      <DesignSection />
      <ItemFinishFeatureSection features={itemFeatures} />
      <Footer />
    </>
  );
}
