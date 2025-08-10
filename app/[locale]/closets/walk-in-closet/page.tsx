"use client";
import React, { useState } from "react";
import DynamicFeatureSection from "@/components/DynamicFeatureSection";
import ThreeImageSection from "@/components/ThreeImageSection";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import TwoImageSection from "@/components/TwoImageSection";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

const sectionalImages = [
  {
    src: "/images/closets/walk-in-closet/image-1.jpg",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "/images/closets/walk-in-closet/image-2.jpg",
    alt: "Image 2 Premium Closet",
  },
  {
    src: "/images/closets/walk-in-closet/image-3.jpg",
    alt: "Image 3 Premium Closet",
  },
];

const sectionalImages_1 = [
  {
    src: "/images/closets/walk-in-closet/image-4.jpg",
    alt: "Image 1 Premium Closet",
  },
  {
    src: "/images/closets/walk-in-closet/image-5.jpg",
    alt: "Image 2 Premium Closet",
  },
];

const images = [
  "/images/closets/walk-in-closet/silder-1.jpg",
  "/images/closets/walk-in-closet/silder-2.jpg",
  "/images/closets/walk-in-closet/silder-3.jpg",
];

const WalkInCloset: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Translations
  const t = useTranslations("WalkInCloset");
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#57b7c0] mb-6">
              {t("hero.title")}
            </h2>
            <div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                {t("hero.p1")}
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t("hero.p2Lead")}{" "}
                <strong className="font-semibold">{t("hero.p2Strong")}</strong>
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
                <a href="#contact-us">{b("ctaButton")}</a>
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
            sectionTitle={t("sectionTitle")}
            features={features}
            ctaText={b("ctaButton")}
            ctaAction={() => setShowModal(true)}
          />
          <p className="text-center text-lg md:text-xl text-gray-600 leading-relaxed">
            <strong>{t("bottomNote.strong")}</strong> - {t("bottomNote.tail")}
          </p>
        </section>

        <TwoImageSection images={sectionalImages_1} />
      </div>
      <Footer />
    </>
  );
};

export default WalkInCloset;
