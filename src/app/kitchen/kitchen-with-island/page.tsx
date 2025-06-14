"use client";

import React, { useState } from "react";
import Mainlayout from "../../../component/Mainlayout";
import CustomImagePos from "@/component/CustomImagePos";
import Request3DDesignModal from "@/component/Request3DDesignModal";
import ProductCardGrid from "@/component/ProductCardGrid";

const kitchenGalleryItems = [
  {
    type: "image" as const,
    image: "https://placehold.co/800x400?text=Shot+No+1+Kitchen+with+Island",
  },
  {
    type: "image" as const,
    image: "https://placehold.co/400x400?text=Top+View+Kitchen+1",
  },
  {
    type: "description" as const,
    title: "Walnut Matte and Soft Beige Island Kitchen",
    description:
      "Warm walnut tones paired with soft beige cabinetry create a balanced, inviting atmosphere — blending natural elegance with everyday comfort.",
    ctaText: "View it in 3D ",
    ctaLink: "/",
  },
  {
    type: "image" as const,
    image: "https://placehold.co/800x400?text=Shot+No+2+Kitchen+with+Island",
  },
  {
    type: "image" as const,
    image: "https://placehold.co/800x400?text=Shot+No+3+Kitchen+with+Island",
  },
  {
    type: "image" as const,
    image: "https://placehold.co/400x400?text=Top+View+Kitchen+2",
  },
];

const products = [
  {
    title: "Double Gally Kitchen",
    image: "https://placehold.co/600x400?text=Double+Gally+Kitchen",
    link: "/kitchen/double-gally-kitchen",
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
              Your Kitchen's Heart, Reimagined
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
              Our island kitchens combine smart function with elegant design —
              perfect for cooking, dining, and connecting
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
