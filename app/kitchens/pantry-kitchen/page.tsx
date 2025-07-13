"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import CustomImagePos from "@/components/CustomImagePos";
import ProductCardGrid from "@/components/ProductCardGrid";
import Footer from "@/components/Footer";

const kitchenGalleryItems = [
  {
    type: "image" as const,
    image: "/images/test2/kitchen_3.png",
  },
  {
    type: "image" as const,
    image: "/images/test2/kitchen_3.png",
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
    image: "/images/test2/kitchen_3.png",
  },
  {
    type: "image" as const,
    image: "/images/test2/kitchen_3.png",
  },
  {
    type: "image" as const,
    image: "/images/test2/kitchen_3.png",
  },
];

const products = [
  {
    title: "U-Shaped Kitchen",
    image: "/images/test2/kitchen.png",
    link: "/kitchens/u-shaped-kitchen",
  },
  {
    title: "Kitchen With Island",
    image: "/images/test2/kitchen_1.png",
    link: "/kitchens/kitchen-with-island",
  },
];

const images = [
  "/images/test/1.png",
  "/images/test/2.png",
  "/images/test/3.png",
  "/images/test/4.png",
  "/images/test/5.png",
];

const pantryKitchen: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Slider images={images} />
      <Navbar />
      <div
        className="
          bg-gradient-to-br from-[#f0f4f8] to-[#e4ecf1]
          overflow-hidden
        "
      >
        <section className="py-8 bg-gray-50 border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#57b7c0] mb-5 text-left">
              Designed for Daily Ease
            </h2>

            {/* Subtitle */}
            <h4 className="text-lg md:text-xl font-normal text-gray-600 leading-relaxed max-w-6xl">
              A dedicated pantry zone that keeps everyday essentials out of
              sight, yet always within reach. Clean lines, smart shelving, and a
              cohesive finish make it a seamless blend of style and efficiency.
            </h4>
          </div>
        </section>
        <CustomImagePos items={kitchenGalleryItems} />
        <div className="text-center pt-8 bg-white">
          <button
            onClick={() => setShowModal(true)}
            className="
                  inline-block px-6 py-3
                  bg-[#57b7c0] text-white font-semibold
                  rounded-lg shadow-md
                  min-w-[220px]
                  transition-opacity duration-300
                  hover:opacity-90
                "
          >
            <a href="#contact-us">Request Free 3D Design</a>
          </button>
        </div>
        <section className="py-8 bg-white border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#57b7c0] mb-5 text-left">
              Explore More Kitchen Inspirations
            </h2>

            {/* Subtitle */}
            <h4 className="text-lg md:text-xl font-normal text-gray-600 leading-relaxed max-w-6xl">
              Dive into our handpicked kitchen designs — each tailored to fit
              your space, express your style, and enhance how you cook, live,
              and gather.
            </h4>
          </div>
        </section>

        <ProductCardGrid products={products} />
      </div>
      <Footer />
    </>
  );
};

export default pantryKitchen;
