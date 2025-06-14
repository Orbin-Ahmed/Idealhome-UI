"use client";
import Mainlayout from "@/component/Mainlayout";
import Request3DDesignModal from "@/component/Request3DDesignModal";
import React, { useState } from "react";
import WhatYouWillLoveSection from "@/component/WhatYouWillLoveSection";
import ThreeImageSection from "@/component/ThreeImageSection";

type Props = {};

const features = [
  {
    title: "Effortless Organization",
    text: "Everything has a place — for a clutter-free, easy-to-use wardrobe.",
  },
  {
    title: "Designed Around You",
    text: "Layouts customized to your routine, storage needs, and style.",
  },
  {
    title: "A Daily Boutique Experience",
    text: "Enjoy the feel of a personal showroom with elegant, functional touches.",
  },
  {
    title: "Elevated Comfort & Privacy",
    text: "Your private dressing space — peaceful, inspiring, and made for you.",
  },
  {
    title: "Crafted to Match Your Home",
    text: "Finishes, colors, and details tailored to your interior design theme.",
  },
  {
    title: "See It in 3D Before You Commit",
    text: "Get a free 3D preview of your closet — explore and approve before we build.",
  },
];

const sectionalImages = [
  {
    src: "https://placehold.co/800x500?text=WIC Rendered Image No. 1",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=WIC Rendered Image No. 2",
    alt: "Image 2 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=WIC Rendered Image No. 3",
    alt: "Image 3 Premium Closet",
  },
];

const WalkInCloset = (props: Props) => {
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
              A Statement of Luxury. A Space That Works for You.
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
              Step into a space designed just for you — where luxury,
              organization, and comfort come together. Our custom Walk-In
              Closets are more than storage — they're personal sanctuaries
              crafted to elevate your everyday routine. With premium finishes,
              smart layouts, and seamless functionality, your walk-in becomes an
              extension of your lifestyle and style.
              <p className="mt-3">
                And before anything is built, you'll see it first — in stunning
                3D.
                <br />
                <strong> Fast. Free. Personalized.</strong>
              </p>
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

export default WalkInCloset;
