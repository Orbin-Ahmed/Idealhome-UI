"use client";
import React, { useState } from "react";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WoodenDoorSection from "@/components/WoodenDoorSection";
import EndlessFinishesSection from "@/components/EndlessFinishesSection";
import { useTranslations } from "next-intl";

const DoorPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Translations
  const t = useTranslations("Doors");

  // Localized item features (structure preserved)
  const itemFeatures = [
    {
      title: t("items.1.title"),
      images: ["/images/doors/laminated-1.jpg", "/images/doors/laminated-2.jpg"],
      textPosition: "left" as const,
      subtitleItems: [{ label: t("items.1.subtitleItems.part1") }],
    },
    {
      title: t("items.2.title"),
      images: ["/images/doors/stained-veneer-1.jpg", "/images/doors/stained-veneer-2.jpg"],
      textPosition: "right" as const,
      subtitleItems: [{ label: t("items.2.subtitleItems.part1") }],
    },
    {
      title: t("items.3.title"),
      images: ["/images/doors/painted-1.jpg", "/images/doors/painted-2.jpg"],
      textPosition: "left" as const,
      subtitleItems: [{ label: t("items.3.subtitleItems.part1") }],
    },
    {
      title: t("items.4.title"),
      images: ["/images/doors/solid-1.jpg", "/images/doors/solid-2.jpg"],
      textPosition: "right" as const,
      subtitleItems: [{ label: t("items.4.subtitleItems.part1") }],
    },
  ];

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
              {t("hero.titleLine1")} <br />
              {t("hero.titleLine2")}
            </h2>
            <div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                {t("hero.p1")}
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t("hero.p2")}
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
