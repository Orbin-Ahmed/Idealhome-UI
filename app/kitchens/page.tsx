"use client";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import DynamicFeatureSection from "@/components/DynamicFeatureSection";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Navbar from "@/components/Navbar";

const features = [
  {
    title: "Effortless Functionality",
    text: "Smartly designed for easier cooking, organizing, and cleaning.",
  },
  {
    title: "Tailored to You",
    text: "Layouts designed around how you cook, store, and entertain.",
  },
  {
    title: "Style That Lasts",
    text: "Elegant finishes built to handle everyday use with lasting durability.",
  },
  {
    title: "Everything in Its Place",
    text: "Smart storage keeps essentials organized, visible, and within reach.",
  },
  {
    title: "Seamless Appliance Fit",
    text: "Clean, integrated design that hides appliances without losing access.",
  },
  {
    title: "See It Before It's Built",
    text: "Free 3D design lets you explore and refine your kitchen before you commit.",
  },
];

const itemFeatures = [
  {
    title: "KITCHEN WITH ISLAND",
    subtitle:
      "Step into a space designed just for you — where luxury, organization, and comfort come together",
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "left" as const,
  },
  {
    title: "U-SHAPED KITCHEN",
    subtitle:
      "Our U-shaped kitchens wrap efficiency around you — offering abundant counter space, smart storage, and a streamlined workflow, all in a stylish, immersive design.",
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "right" as const,
  },
  {
    title: "PANTRY KITCHEN",
    subtitle:
      "A dedicated pantry zone that keeps everyday essentials out of sight, yet always within reach. Clean lines, smart shelving, and a cohesive finish make it a seamless blend of style and efficiency.",
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "left" as const,
  },
];

const KitchenPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-white overflow-hidden">
        {/* Hero Slider */}
        <Slider />
        {/* Features */}
        <DynamicFeatureSection
          sectionTitle="What You'll Love About Your Kitchen"
          features={features}
          ctaText="Request Free 3D Design"
          ctaAction={() => setShowModal(true)}
        />

        <ItemFinishFeatureSection features={itemFeatures} />
      </div>
    </>
  );
};

export default KitchenPage;
