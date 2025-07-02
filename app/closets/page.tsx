"use client";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import DynamicFeatureSection from "@/components/DynamicFeatureSection";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Navbar from "@/components/Navbar";

const features = [
  {
    title: "Tailored to Fit Your Space",
    text: "Built to your room dimensions — whether reach-in or walk-in — for a perfect, seamless fit.",
  },
  {
    title: "Smart, Organized Interiors",
    text: "Custom configurations for hanging, shelving, drawers, and accessories — everything in its place, always within reach.",
  },
  {
    title: "Elegant Designs That Match Your Style",
    text: "From sleek modern to classic luxury, your closet's look is fully personalized to suit your taste and home theme.",
  },
  {
    title: "Premium Quality Materials",
    text: "Durable, moisture-resistant boards and top-grade finishes ensure your closet stays beautiful for years.",
  },
  {
    title: "Smooth & Silent Operation",
    text: "Soft-close drawers, smooth sliders, and well-crafted doors for everyday ease and comfort.",
  },
  {
    title: "3D Design Preview Before We Build",
    text: "Visualize your entire closet in 3D — fast, free, and editable — so you know exactly what you’re getting.",
  },
];

const itemFeatures = [
  {
    title: "WALK-IN CLOSETS",
    subtitle:
      "Step into a space designed just for you — where luxury, organization, and comfort come together",
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
    textPosition: "left" as const,
  },
  {
    title: "REACH-IN CLOSETS",
    subtitle:
      "A stylish, space-saving solution designed to keep your essentials organized, accessible, and tailored to your daily routine",
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
    textPosition: "right" as const,
  },
  {
    title: "SMART STORAGE",
    subtitle:
      "Interior, Front,  Wood. PVC, uPVC Exterior Doors, Sliding, Glass & Aluminum, Modern, Classic",
    images: ["https://placehold.co/840x400", "https://placehold.co/840x400"],
    textPosition: "left" as const,
  },
];

const ClosetPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-white overflow-hidden">
        {/* Hero Slider */}

        <Slider />

        {/* Features */}
        <DynamicFeatureSection
          sectionTitle="What You'll Love About Your Closet"
          features={features}
          ctaText="Request Free 3D Design"
          ctaAction={() => setShowModal(true)}
        />

        <ItemFinishFeatureSection features={itemFeatures} />
      </div>
    </>
  );
};

export default ClosetPage;
