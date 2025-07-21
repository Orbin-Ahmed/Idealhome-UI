"use client";
import React, { useState } from "react";
import DynamicFeatureSection from "@/components/DynamicFeatureSection";
import ThreeImageSection from "@/components/ThreeImageSection";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import TwoImageSection from "@/components/TwoImageSection";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Custom-Fit Storage",
    text: "Everything has a place — for a clutter-free, easy-to-use wardrobe.",
  },
  {
    title: "Seamless Experience",
    text: "Layouts customized to your routine, storage needs, and style.",
  },
  {
    title: "Elegant & Functional Design",
    text: "Enjoy the feel of a personal showroom with elegant, functional touches.",
  },
  {
    title: "Elegant & Durable",
    text: "Your private dressing space — peaceful, inspiring, and made for you.",
  },
  {
    title: "Integrated Lighting",
    text: "Finishes, colors, and details tailored to your interior design theme.",
  },
];

const sectionalImages = [
  {
    src: "/images/closets/wardrobe-closet/image-1.jpg",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "/images/closets/wardrobe-closet/image-2.jpg",
    alt: "Image 2 Premium Closet",
  },
  {
    src: "/images/closets/wardrobe-closet/image-3.jpg",
    alt: "Image 3 Premium Closet",
  },
];

const sectionalImages_1 = [
  {
    src: "/images/closets/wardrobe-closet/image-4.jpg",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "/images/closets/wardrobe-closet/image-5.jpg",
    alt: "Image 2 Premium Closet",
  },
];

const images = [
  "/images/closets/wardrobe-closet/slider-1.jpg",
  "/images/closets/wardrobe-closet/slider-2.jpg",
  "/images/closets/wardrobe-closet/slider-3.jpg",
];

const WardrobeCloset: React.FC = () => {
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
        {/* Intro */}
        <section className="pt-12 pb-4 bg-white border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#57b7c0] mb-6">
              Our Wardrobe Closets are Designed for Everyday Efficiency.
            </h2>
            <div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                A stylish, space-saving solution designed to keep your
                essentials organized, accessible, and tailored to your daily
                routine.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                And before we build, you'll see it in a full 3D design —{" "}
                <strong className="font-semibold">
                  fast, free, and exactly how you want it.
                </strong>
              </p>
            </div>

            <div className="text-center mt-8">
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
          </div>
        </section>

        {/* Three Image Gallery */}
        <section className="py-12 bg-gray-50">
          <ThreeImageSection images={sectionalImages} />
        </section>

        {/* Features */}
        <section className=" bg-white">
          <DynamicFeatureSection
            sectionTitle="What You'll Love About Your Closet"
            features={features}
            ctaText="Request Free 3D Design"
            ctaAction={() => setShowModal(true)}
          />
          <p className="text-center text-lg md:text-xl text-gray-600 leading-relaxed">
            <strong>3D Visualization Before Production</strong> - Instantly
            preview your custom wardrobe in realistic 3D — free, editable, and
            ready before we build.
          </p>
        </section>

        <TwoImageSection images={sectionalImages_1} />
      </div>
      <Footer />
    </>
  );
};

export default WardrobeCloset;
