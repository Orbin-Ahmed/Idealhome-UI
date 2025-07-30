"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import CustomImagePos from "@/components/CustomImagePos";
import ProductCardGrid from "@/components/ProductCardGrid";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

const images = [
  "/images/kitchen/pantry-kitchen/slider-1.jpg",
  "/images/kitchen/pantry-kitchen/slider-2.jpg",
  "/images/kitchen/pantry-kitchen/slider-3.jpg",
];

const pantryKitchen: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Translations
  const t = useTranslations("PantryKitchen");
  const b = useTranslations("Button");

  // Localized content while preserving structure & props
  const kitchenGalleryItems = [
    {
      type: "image" as const,
      image: "/images/kitchen/pantry-kitchen/pantry-kitchen-1.jpg",
    },
    {
      type: "image" as const,
      image: "/images/kitchen/pantry-kitchen/top-view-kitchen-2.jpg",
    },
    {
      type: "description" as const,
      title: t("gallery.item3.title"),
      description: t("gallery.item3.description"),
      ctaText: t("gallery.item3.ctaText"),
      ctaLink: "/",
    },
    {
      type: "image" as const,
      image: "/images/kitchen/pantry-kitchen/pantry-kitchen-2.jpg",
    },
    {
      type: "image" as const,
      image: "/images/kitchen/pantry-kitchen/pantry-kitchen-3.jpg",
    },
    {
      type: "image" as const,
      image: "/images/kitchen/pantry-kitchen/top-view-kitchen-1.jpg",
    },
  ];

  const products = [
    {
      title: t("products.1.title"),
      image: "/images/kitchen/pantry-kitchen/ushaped.jpg",
      link: "/kitchens/u-shaped-kitchen",
    },
    {
      title: t("products.2.title"),
      image: "/images/kitchen/pantry-kitchen/kitchen-island.jpg",
      link: "/kitchens/kitchen-with-island",
    },
  ];

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
              {t("hero.title")}
            </h2>

            {/* Subtitle */}
            <h4 className="text-lg md:text-xl font-normal text-gray-600 leading-relaxed max-w-6xl">
              {t("hero.subtitle")}
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
            <a href="#contact-us">{b("ctaButton")}</a>
          </button>
        </div>

        <section className="py-8 bg-white border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#57b7c0] mb-5 text-left">
              {t("discover.title")}
            </h2>

            {/* Subtitle */}
            <h4 className="text-lg md:text-xl font-normal text-gray-600 leading-relaxed max-w-6xl">
              {t("discover.subtitle")}
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
