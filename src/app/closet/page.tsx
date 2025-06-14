"use client";
import React, { useState } from "react";
import Mainlayout from "../../component/Mainlayout";
import CustomSliderV1 from "@/component/CustomSliderV1";
import TwoImageSection from "@/component/TwoImageSection";
import WhatYouWillLoveSection from "@/component/WhatYouWillLoveSection";
import Request3DDesignModal from "@/component/Request3DDesignModal";
import CollectionsSection from "@/component/CollectionsSection";

const images = [
  "https://placehold.co/800x800?text=Walk-In+Closet",
  "https://placehold.co/800x800?text=Reach-In+Closet",
  "https://placehold.co/800x800?text=Smart Storage Closet",
];

const sectionalImages = [
  {
    src: "https://placehold.co/800x500?text=Image+1+Premium+Closet",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=Image+2+Premium+Closet",
    alt: "Image 2 Premium Closet",
  },
];

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
    text: "Visualize your entire closet in 3D — fast, free, and editable — so you know exactly what you're getting.",
  },
];

const closets = [
  {
    title: "Walk-In Closets",
    image: "https://placehold.co/600x400?text=Kitchen+with+Island",
    link: "/closet/walk-in-closet",
  },
  {
    title: "Reach-In Closets",
    image: "https://placehold.co/600x400?text=Double+Gally+Kitchen",
    link: "/closet/reach-in-closet",
  },
  {
    title: "Smart Storage Solutions",
    image: "https://placehold.co/600x400?text=U-Shaped+Kitchen",
    link: "/closet/smart-storage-solution",
  },
];

const closet = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Mainlayout>
      <div className="page-content bg-white" style={{ overflow: "hidden" }}>
        <CustomSliderV1
          images={images}
          subText=""
          title={
            <>
              Built for Living,
              <br />
              Designed for You.
            </>
          }
        />
        <section
          className="py-5"
          style={{
            backgroundColor: "#f8f9fa",
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div className="container">
            {/* Main Headline */}
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "var(--primary-dark)",
                marginBottom: "20px",
              }}
              className="text-start"
            >
              Your closet is more than just storage
            </h2>

            {/* Sub Headline */}
            <h4
              className="text"
              style={{
                fontSize: "20px",
                fontWeight: "400",
                color: "#555",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              It's where your day begins and ends. It's where order meets
              inspiration, and where your personal style takes shape. At Ideal
              Factory, we craft closets that are as functional as they are
              beautiful — tailored to fit your space, your routine, and your
              lifestyle.
            </h4>
          </div>
        </section>
        <TwoImageSection images={sectionalImages} />
        <WhatYouWillLoveSection
          sectionTitle="What You'll Love About Your Kitchen"
          features={features}
          ctaText="Request Free 3D Design"
          ctaAction={() => setShowModal(true)}
        />
      </div>
      <div id="service">
        <CollectionsSection
          sectionTitle="Our Closets Collections"
          sectionSubtitle="Explore 4 layout styles — each thoughtfully designed to suit different spaces, storage needs, and personal routines."
          kitchens={closets}
          ctaText="Request Free 3D Design"
          ctaAction={() => setShowModal(true)}
          screenSize={4}
        />
      </div>
      <Request3DDesignModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </Mainlayout>
  );
};

export default closet;
