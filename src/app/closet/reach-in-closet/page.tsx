"use client";
import Mainlayout from "@/component/Mainlayout";
import Request3DDesignModal from "@/component/Request3DDesignModal";
import React, { useState } from "react";
import WhatYouWillLoveSection from "@/component/WhatYouWillLoveSection";
import ThreeImageSection from "@/component/ThreeImageSection";

type Props = {};

const features = [
  {
    title: "Custom-Fit Storage",
    text: "Built to your space with smart zones for hanging, shelving, and drawers.",
  },
  {
    title: "Elegant & Durable",
    text: "Made with premium melamine, veneers, mirrors, and glass for a long-lasting.",
  },
  {
    title: "Seamless Experience",
    text: "Soft-close doors and drawers with smooth sliding or hinged mechanisms for quiet, effortless use.",
  },
  {
    title: "Integrated Lighting",
    text: "Built-in lighting brings clarity and elegance to your daily routine.",
  },
  {
    title: "Elegant & Functional Design",
    text: "From handleless designs to decorative hardware, form meets function in every detail.",
  },
  {
    title: "3D Visualization Before Production",
    text: "Instantly preview your custom wardrobe in realistic 3D — free, editable, and ready before we build.",
  },
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
  {
    src: "https://placehold.co/800x500?text=Image+3+Premium+Closet",
    alt: "Image 3 Premium Closet",
  },
];

const ReachInCloset = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Mainlayout>
      <div
        className="page-content bg-white"
        style={{
          overflow: "hidden",
          background: "linear-gradient(135deg, #f0f4f8 0%, #e4ecf1 100%)",
          paddingTop: "100px",
        }}
      >
        <section
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src="https://placehold.co/1920x600"
            alt="Full Width Kitchen"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </section>
        <section
          className="pt-5"
          style={{
            backgroundColor: "#f8f9fa",
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "var(--primary-dark)",
                marginBottom: "20px",
              }}
              className="text-start"
            >
              Our Reach-in Closets are Designed for Everyday Efficiency
            </h2>

            <h4
              className="text mb-5"
              style={{
                fontSize: "20px",
                fontWeight: "400",
                color: "#555",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              A stylish, space-saving solution designed to keep your essentials
              organized, accessible, and tailored to your daily routine. And
              before we build, you'll see it in a full 3D design —{" "}
              <strong>fast, free, and exactly how you want it.</strong>
            </h4>
            <div className="text-center my-4">
              <button
                onClick={() => setShowModal(true)}
                className="btn shadow-primary btn-primary rounded-sm btn-quote"
                style={{ minWidth: "220px" }}
              >
                Request Free 3D Design
              </button>
            </div>
          </div>
          <ThreeImageSection images={sectionalImages} />
          <WhatYouWillLoveSection
            sectionTitle="What You'll Love About Your Kitchen"
            features={features}
            ctaText="Request Free 3D Design"
            ctaAction={() => setShowModal(true)}
          />
          <Request3DDesignModal
            show={showModal}
            handleClose={() => setShowModal(false)}
          />
        </section>
      </div>
    </Mainlayout>
  );
};

export default ReachInCloset;
