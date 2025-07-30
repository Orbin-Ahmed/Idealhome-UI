"use client";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import DynamicFeatureSection from "@/components/DynamicFeatureSection";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

const images = [
  "/images/closets/slider-1.jpg",
  "/images/closets/slider-2.jpg",
  "/images/closets/slider-3.jpg",
];

const ClosetPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Translations
  const t = useTranslations("Closet");
  const b = useTranslations("Button");

  // Features (localized, same structure)
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

  // Item features (localized, same structure & links)
  const itemFeatures = [
    {
      title: t("items.1.title"),
      subtitle: t("items.1.subtitle"),
      subtitleItems: [
        { label: t("items.1.subtitleItems.part1") },
        { label: t("items.1.subtitleItems.part2") },
        { label: t("items.1.subtitleItems.part3") },
      ],
      images: ["/images/closets/walk-in-1.jpg", "/images/closets/walk-in-2.jpg"],
      textPosition: "left" as const,
      titleLink: "/closets/walk-in-closet",
    },
    {
      title: t("items.2.title"),
      subtitle: t("items.2.subtitle"),
      subtitleItems: [
        { label: t("items.2.subtitleItems.part1") },
        { label: t("items.2.subtitleItems.part2") },
        { label: t("items.2.subtitleItems.part3") },
      ],
      images: ["/images/closets/wardrobe-1.jpg", "/images/closets/wardrobe-2.jpg"],
      textPosition: "right" as const,
      titleLink: "/closets/wardrobe-closet",
    },
    {
      title: t("items.3.title"),
      subtitleItems: [
        { label: t("items.3.subtitleItems.part1") },
        { label: t("items.3.subtitleItems.part2") },
        { label: t("items.3.subtitleItems.part3") },
        { label: t("items.3.subtitleItems.part4") },
        { label: t("items.3.subtitleItems.part5") },
        { label: t("items.3.subtitleItems.part6") },
        { label: t("items.3.subtitleItems.part7") },
        { label: t("items.3.subtitleItems.part8") },
      ],
      images: ["/images/closets/smart-1.jpg", "/images/closets/smart-2.jpg"],
      textPosition: "left" as const,
      titleLink: "/closets/smart-storage-solution",
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

export default ClosetPage;
