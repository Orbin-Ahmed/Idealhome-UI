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
    text: "Visualize your smart storage in high-quality 3D — free of charge",
  },
];

const sectionalImages = [
  {
    src: "https://placehold.co/800x500?text=SSS+Rendered+Image+No.+1",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=SSS+Rendered+Image+No.+2",
    alt: "Image 2 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=SSS+Rendered+Image+No.+3",
    alt: "Image 3 Premium Closet",
  },
];

const sectionalImages_1 = [
  {
    src: "https://placehold.co/800x500?text=Image+1+Premium+Closet",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=Image+2+Premium+Closet",
    alt: "Image 2 Premium Closet",
  },
];
const images = [
  "https://placehold.co/1920x1080?text=Slide+1",
  "https://placehold.co/1920x1080?text=Slide+2",
  "https://placehold.co/1920x1080?text=Slide+3",
];

const SmartStorageSolution: React.FC = () => {
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
              Smart Storage, Tailored for Your Life
            </h2>
            <div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                We turn underutilized spaces into beautifully crafted,
                functional storage — tailored to your home and the way you live.
              </p>
              <h2 className="text-md md:text-lg lg:text-xl font-bold text-black mb-6">
                See It Before We Build It — in 3D.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Quick. Free. Custom-fit to your space and needs.
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
            <strong>Designed in 3D Before You Commit</strong> - Visualize your
            smart storage in high-quality 3D — free of charge
          </p>
        </section>
        <TwoImageSection images={sectionalImages_1} />
      </div>
      <Footer />
    </>
  );
};

export default SmartStorageSolution;
