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
    image: "/images/kitchen/u-shaped-kitchen/u-shaped-kitchen-1.jpg",
  },
  {
    type: "image" as const,
    image: "/images/kitchen/u-shaped-kitchen/top-view-kitchen-1.jpg",
  },
  {
    type: "description" as const,
    title: "Cool Grey and Sleek Finish U-Shaped Kitchen",
    description:
      "Cool grey tones paired with sleek surfaces create a modern, calming ambiance — combining understated elegance with everyday practicality.",
    ctaText: "View it in 3D ",
    ctaLink: "/",
  },
  {
    type: "image" as const,
    image: "/images/kitchen/u-shaped-kitchen/u-shaped-kitchen-2.jpg",
  },
  {
    type: "image" as const,
    image: "/images/kitchen/u-shaped-kitchen/u-shaped-kitchen-3.jpg",
  },
  {
    type: "image" as const,
    image: "/images/kitchen/u-shaped-kitchen/top-view-kitchen-2.jpg",
  },
];

const products = [
  {
    title: "Pantry Kitchen",
    image: "/images/kitchen/u-shaped-kitchen/pantry-kitchen.jpg",
    link: "/kitchens/pantry-kitchen",
  },
  {
    title: "Kitchen With Island",
    image: "/images/kitchen/u-shaped-kitchen/kitchen-island.jpg",
    link: "/kitchens/kitchen-with-island",
  },
];

const images = [
  "/images/kitchen/u-shaped-kitchen/slider-1.jpg",
  "/images/kitchen/u-shaped-kitchen/slider-2.jpg",
  "/images/kitchen/u-shaped-kitchen/slider-3.jpg",
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
