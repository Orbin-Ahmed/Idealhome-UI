"use client";
import Mainlayout from "@/component/Mainlayout";
import Request3DDesignModal from "@/component/Request3DDesignModal";
import React, { useState } from "react";
import WhatYouWillLoveSection from "@/component/WhatYouWillLoveSection";
import ThreeImageSection from "@/component/ThreeImageSection";

type Props = {};

const features = [
  {
    title: "Every storage unit is custom",
    text: "designed to fit awkward corners, unused walls, and underutilized spaces — maximizing functionality without wasting a square inch.",
  },
  {
    title: "Say goodbye to mess",
    text: "Built-in compartments, pull-out trays, and vertical dividers keep everything in its place — from shoes and bags to tools and toys.",
  },
  {
    title: "Seamlessly Blends with Your Interiors",
    text: "Our solutions come in premium finishes that match your home's décor — modern, classic, or anything in between.",
  },
  {
    title: "Everyday Access, Zero Hassle",
    text: "everything is built for comfort and convenience in daily use.",
  },
  {
    title: "Transform Dead Spaces into Useful Areas",
    text: "Make the most of hallways, under-stair voids, laundry nooks, or attic corners — turning them into beautiful, functional storage zones.",
  },
  {
    title: "Designed in 3D Before You Commit",
    text: "Visualize your smart storage in high-quality 3D — free of charge.",
  },
];

const sectionalImages = [
  {
    src: "https://placehold.co/800x500?text=SSS Rendered Image No. 1",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=SSS Rendered Image No. 2",
    alt: "Image 2 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=SSS Rendered Image No. 3",
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
              Smart Storage, Tailored for Your Life
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
              We transform unused spaces into elegant, functional storage —
              custom-built to fit your home and lifestyle.
              <br />
              <strong>See It Before We Build It — in 3D.</strong>
              <br />
              Quick. Free. Custom-fit to your space and needs.
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
