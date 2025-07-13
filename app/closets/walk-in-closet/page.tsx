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
    src: "https://placehold.co/800x500?text=WIC+Rendered+Image+No.+1",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=WIC+Rendered+Image+No.+2",
    alt: "Image 2 Premium Closet",
  },
  {
    src: "https://placehold.co/800x500?text=WIC+Rendered+Image+No.+3",
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
  "/images/test/1.png",
  "/images/test/2.png",
  "/images/test/3.png",
  "/images/test/4.png",
  "/images/test/5.png",
];

const WalkInCloset: React.FC = () => {
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
              A Statement of Luxury. A Space That Works for You.
            </h2>
            <div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Step into a space designed just for you — where luxury,
                organization, and comfort come together. Our custom Walk-In
                Closets are more than storage — they're personal sanctuaries
                crafted to elevate your everyday routine. With premium finishes,
                smart layouts, and seamless functionality, your walk-in becomes
                an extension of your lifestyle and style.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                And before anything is built, you'll see it first — in stunning
                3D.{" "}
                <strong className="font-semibold">
                  Fast. Free. Personalized.
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
            <strong>See It in 3D Before You Commit</strong> - Get a free 3D
            preview of your closet — explore and approve before we build.
          </p>
        </section>
        <TwoImageSection images={sectionalImages_1} />
      </div>
      <Footer />
    </>
  );
};

export default WalkInCloset;
