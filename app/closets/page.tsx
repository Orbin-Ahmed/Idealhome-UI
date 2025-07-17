"use client";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import DynamicFeatureSection from "@/components/DynamicFeatureSection";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    subtitleItems: [
      { label: "Step into a space designed just for you — where luxury" },
      { label: "organization" },
      { label: "and comfort come together" },
    ],
    images: [
      "/images/closets/walk-in-1.jpg",
      "/images/closets/walk-in-2.jpg",
    ],
    textPosition: "left" as const,
    titleLink: "/closets/walk-in-closet",
  },
  {
    title: "REACH-IN CLOSETS",
    subtitle:
      "A stylish, space-saving solution designed to keep your essentials organized, accessible, and tailored to your daily routine",
    subtitleItems: [
      {
        label:
          "A stylish, space-saving solution designed to keep your essentials organized",
      },
      { label: "accessible" },
      { label: "and tailored to your daily routine" },
    ],
    images: [
      "/images/closets/wardrobe-1.jpg",
      "/images/closets/wardrobe-2.jpg",
    ],
    textPosition: "right" as const,
    titleLink: "/closets/reach-in-closet",
  },
  {
    title: "SMART STORAGE",
    subtitleItems: [
      { label: "Interior" },
      { label: "Front" },
      { label: "Wood. PVC" },
      { label: "uPVC Exterior Doors" },
      { label: "Sliding" },
      { label: "Glass & Aluminum" },
      { label: "Modern" },
      { label: "Classic" },
    ],
    images: [
      "/images/closets/smart-1.jpg",
      "/images/closets/smart-2.jpg",
    ],
    textPosition: "left" as const,
    titleLink: "/closets/smart-storage-solution",
  },
];

const images = [
  "/images/closets/slider-1.jpg",
  "/images/closets/slider-2.jpg",
  "/images/closets/slider-3.jpg",
];

const ClosetPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-white overflow-hidden">
        {/* Hero Slider */}

        <Slider images={images} />

        {/* Features */}
        <DynamicFeatureSection
          sectionTitle="What You'll Love About Your Closet"
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

export default ClosetPage;
