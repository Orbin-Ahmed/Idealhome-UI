"use client";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import DynamicFeatureSection from "@/components/DynamicFeatureSection";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

// Keep images outside (unchanged)
const images = [
  "/images/kitchen/slider-1.jpg",
  "/images/kitchen/slider-2.jpg",
  "/images/kitchen/slider-3.jpg",
];

const KitchenPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Translations
  const t = useTranslations("Kitchen");
  const b = useTranslations("Button");

  // Rebuild features with localized strings (same structure)
  const features = [
    {
      title: t("features.1.title"),
      text: t("features.1.text"),
    },
    {
      title: t("features.2.title"),
      text: t("features.2.text"),
    },
    {
      title: t("features.3.title"),
      text: t("features.3.text"),
    },
    {
      title: t("features.4.title"),
      text: t("features.4.text"),
    },
    {
      title: t("features.5.title"),
      text: t("features.5.text"),
    },
    {
      title: t("features.6.title"),
      text: t("features.6.text"),
    },
  ];

  // Rebuild itemFeatures with localized strings (same structure & links)
  const itemFeatures = [
    {
      title: t("items.1.title"),
      images: ["/images/kitchen/island-1.jpg", "/images/kitchen/island-2.jpg"],
      textPosition: "left" as const,
      subtitleItems: [
        { label: t("items.1.subtitle.part1") },
        { label: t("items.1.subtitle.part2") },
        { label: t("items.1.subtitle.part3") },
      ],
      titleLink: "/kitchens/kitchen-with-island",
    },
    {
      title: t("items.2.title"),
      images: ["/images/kitchen/u-shaped-1.jpg", "/images/kitchen/u-shaped-2.jpg"],
      textPosition: "right" as const,
      subtitleItems: [
        { label: t("items.2.subtitle.part1") },
        { label: t("items.2.subtitle.part2") },
        { label: t("items.2.subtitle.part3") },
        { label: t("items.2.subtitle.part4") },
        { label: t("items.2.subtitle.part5") },
      ],
      titleLink: "/kitchens/u-shaped-kitchen",
    },
    {
      title: t("items.3.title"),
      images: ["/images/kitchen/pantry-1.jpg", "/images/kitchen/pantry-2.jpg"],
      textPosition: "left" as const,
      subtitleItems: [
        { label: t("items.3.subtitle.part1") },
        { label: t("items.3.subtitle.part2") },
        { label: t("items.3.subtitle.part3") },
        { label: t("items.3.subtitle.part4") },
        { label: t("items.3.subtitle.part5") },
      ],
      titleLink: "/kitchens/pantry-kitchen",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white overflow-hidden">
        {/* Hero Slider */}
        <Slider images={images} />

        {/* Features */}
        <DynamicFeatureSection
          sectionTitle={t("sectionTitle")}
          features={features}
          ctaText={b("ctaButton")}
          ctaAction={() => setShowModal(true)}
        />

        <ItemFinishFeatureSection features={itemFeatures} />
      </div>
      <Footer />
    </>
  );
};

export default KitchenPage;
