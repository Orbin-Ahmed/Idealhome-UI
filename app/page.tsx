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
      { label: "Wardrobe", href: "/closets/wardrobe-closet" },
      { label: "Smart Storage", href: "/closets/smart-storage-solution" },
      { label: "His & Hers" },
      { label: "Kid's" },
      { label: "Modern" },
      { label: "Classic" },
      { label: "Luxury" },
    ],
    images: [
      "/images/home/closet-1.jpg",
      "/images/home/closet-2.jpg",
    ],
    textPosition: "left" as const,
    titleLink: "/closets",
  },
  {
    title: "KITCHENS",
    subtitleItems: [
      { label: "Kitchen With Island", href: "/kitchens/kitchen-with-island" },
      { label: "U-shaped Kitchen", href: "/kitchens/u-shaped-kitchen" },
      { label: "Pantry Kitchen", href: "/kitchens/pantry-kitchen" },
      { label: "Modern" },
      { label: "Classic" },
    ],
    images: [
      "/images/home/kitchen-1.jpg",
      "/images/home/kitchen-2.jpg",
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
      "/images/home/doors-1.jpg",
      "/images/home/doors-2.jpg",
    ],
    textPosition: "left" as const,
    titleLink: "/doors",
  },
];

const images = [
  "/images/home/classic-elegant-walk-in-closet-mirrored-cabinet-doors.jpg",
  "/images/home/luxury-walk-in-closet-sliding-glass-doors-wood-finish.jpg",
  "/images/home/modern-kitchen-matte-black-beige-cabinets-marble-countertop-island.jpg",
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
