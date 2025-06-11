"use client";

import React, { useState } from "react";
import Mainlayout from "../../../component/Mainlayout";
import CustomImagePos from "@/component/CustomImagePos";
import Request3DDesignModal from "@/component/Request3DDesignModal";
import ProductCardGrid from "@/component/ProductCardGrid";

const kitchenGalleryItems = [
  {
    type: "image" as const,
    image: "https://placehold.co/800x400?text=Shot+No+1+Double+Gally+Kitchen",
  },
  {
    type: "image" as const,
    image: "https://placehold.co/400x400?text=Top+View+Kitchen+1",
  },
  {
    type: "description" as const,
    title: "Sleek Grey and White Double Galley Kitchen",
    description:
      "Streamlined grey cabinets paired with crisp white surfaces create a clean, modern flow on both sides — perfect for maximizing space, efficiency, and style.",
    ctaText: "View it in 3D ",
    ctaLink: "/",
  },
  {
    type: "image" as const,
    image: "https://placehold.co/800x400?text=Shot+No+2+Double+Gally+Kitchen",
  },
  {
    type: "image" as const,
    image: "https://placehold.co/800x400?text=Shot+No+3+Double+Gally+Kitchen",
  },
  {
    type: "image" as const,
    image: "https://placehold.co/400x400?text=Top+View+Kitchen+2",
  },
];

const products = [
  {
    title: "Kitchen with Island",
    image: "https://placehold.co/600x400?text=Kitchen+with+Island",
    link: "/kitchen/kitchen-with-island",
  },
  {
    title: "U-Shaped Kitchen",
    image: "https://placehold.co/600x400?text=U-Shaped+Kitchen",
    link: "/kitchen/u-shaped-kitchen",
  },
  {
    title: "Pantry Kitchen",
    image: "https://placehold.co/600x400?text=Pantry+Kitchen",
    link: "/kitchen/pantry-kitchen",
  },
];

const Joinery = () => {
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
          className="py-5"
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
              Efficiency Meets Elegance
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
              Our double galley kitchens are crafted for seamless movement and
              optimal workspace — a refined layout that brings beauty and
              function to the heart of your home.
            </h4>
          </div>
        </section>
        <CustomImagePos items={kitchenGalleryItems} />

        <div className="text-center my-4">
          <button
            onClick={() => setShowModal(true)}
            className="btn shadow-primary btn-primary rounded-sm btn-quote"
            style={{ minWidth: "220px" }}
          >
            Request Free 3D Design
          </button>
        </div>
        <section
          className="py-5"
          style={{
            backgroundColor: "#f8f9fa",
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div className="container mt-5">
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "var(--primary-dark)",
                marginBottom: "20px",
              }}
              className="text-start"
            >
              Explore more Kitchen Styles
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
              Discover a range of thoughtfully designed kitchens — each tailored
              to different tastes, spaces, and lifestyles.
            </h4>
          </div>
        </section>
        <ProductCardGrid products={products} />

        <Request3DDesignModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      </div>
    </Mainlayout>
  );
};

export default Joinery;
