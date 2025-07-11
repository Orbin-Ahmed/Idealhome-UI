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
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
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
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
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
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
    textPosition: "left" as const,
    titleLink: "/doors",
  },
  // {
  //   title: "WINDOWS",
  //   subtitle:
  //     "Comfort, Energy Efficient, Design, Schuco quality, Sustainability",
  //   images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
  //   textPosition: "right" as const,
  // },
];

const images = [
  "https://placehold.co/1920x1080?text=Slide+1",
  "https://placehold.co/1920x1080?text=Slide+2",
  "https://placehold.co/1920x1080?text=Slide+3",
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
