"use client";
import React, { useState } from "react";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WoodenDoorSection from "@/components/WoodenDoorSection";
import EndlessFinishesSection from "@/components/EndlessFinishesSection";

const itemFeatures = [
  {
    title: "LAMINATED",
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "left" as const,
    subtitleItems: [{ label: "With European Woods" }],
  },
  {
    title: "STAINED VENEER",
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "right" as const,
    subtitleItems: [
      {
        label: "Natural wood grain",
      },
    ],
  },
  {
    title: "PAINTED SMOOTH FINISH",
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "left" as const,
    subtitleItems: [
      {
        label: "In matt",
      },
    ],
  },
  {
    title: "SOLID",
    images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
    textPosition: "right" as const,
    subtitleItems: [
      {
        label: "Natural solid wood",
      },
    ],
  },
];

const DoorPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-black h-16">
        <Navbar />
      </div>
      <div className="bg-white overflow-hidden">
        <WoodenDoorSection />
        <section className="pt-12 pb-4 bg-white border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#57b7c0] mb-6"> */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              CLASSIC, MODERN AND CUSTOMIZED <br />
              WOODEN DOORS
            </h2>
            <div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                At Ideal Home, our wooden doors reflect craftsmanship, blending
                strength, elegance, and versatility. Designed to elevate any
                space — from classic and traditional to sleek and modern — each
                door is a statement of enduring quality.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                With limitless configurations and premium finishes, our doors
                bring warmth, character, and a tailored aesthetic to every home.
              </p>
            </div>
          </div>
        </section>
        <EndlessFinishesSection />
        <ItemFinishFeatureSection features={itemFeatures} />
      </div>
      <Footer />
    </>
  );
};

export default DoorPage;
