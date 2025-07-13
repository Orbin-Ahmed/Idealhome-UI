"use client";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import DynamicFeatureSection from "@/components/DynamicFeatureSection";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "left" as const,
    subtitleItems: [
      { label: "Step into a space designed just for you — where luxury" },
      { label: "organization" },
      { label: "and comfort come together" },
    ],
    titleLink: "/kitchens/kitchen-with-island",
  },
  {
    title: "U-SHAPED KITCHEN",
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "right" as const,
    subtitleItems: [
      {
        label:
          "Our U-shaped kitchens wrap efficiency around you — offering abundant counter space",
      },
      { label: "smart storage" },
      { label: "and a streamlined workflow" },
      { label: "all in a stylish" },
      { label: "immersive design." },
    ],
    titleLink: "/kitchens/u-shaped-kitchen",
  },
  {
    title: "PANTRY KITCHEN",
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "left" as const,
    subtitleItems: [
      {
        label:
          "A dedicated pantry zone that keeps everyday essentials out of sight",
      },
      { label: "yet always within reach," },
      { label: "Clean lines" },
      { label: "smart shelving" },
      {
        label:
          "and a cohesive finish make it a seamless blend of style and efficiency.",
      },
    ],
    titleLink: "/kitchens/pantry-kitchen",
  },
];

const images = [
  "/images/test/1.png",
  "/images/test/2.png",
  "/images/test/3.png",
  "/images/test/4.png",
  "/images/test/5.png",
];

const KitchenPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-white overflow-hidden">
        {/* Hero Slider */}
        <Slider images={images} />
        {/* Features */}
        <DynamicFeatureSection
          sectionTitle="What You'll Love About Your Kitchen"
          features={features}
          ctaText="Request Free 3D Design"
          ctaAction={() => setShowModal(true)}
        />

        <ItemFinishFeatureSection features={itemFeatures} />
      </div>
      <Footer />
    </>
  );
};

export default KitchenPage;
