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
    title: "Pantry Kitchen",
    image: "/images/test2/kitchen.png",
    link: "/kitchens/pantry-kitchen",
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

const UShapedKitchen: React.FC = () => {
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
              Surround Yourself with Function
            </h2>

            {/* Subtitle */}
            <h4 className="text-lg md:text-xl font-normal text-gray-600 leading-relaxed max-w-6xl">
              Our U-shaped kitchens wrap efficiency around you — offering
              abundant counter space, smart storage, and a streamlined workflow,
              all in a stylish, immersive design.
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
              Discover More Kitchen Inspirations
            </h2>

            {/* Subtitle */}
            <h4 className="text-lg md:text-xl font-normal text-gray-600 leading-relaxed max-w-6xl">
              Browse our curated selection of kitchen styles — uniquely crafted
              to suit your space, reflect your taste, and complement your daily
              routine.
            </h4>
          </div>
        </section>
        <ProductCardGrid products={products} />
      </div>
      <Footer />
    </>
  );
};

export default UShapedKitchen;
