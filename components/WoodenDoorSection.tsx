"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

const placeholderImages = [
  "/images/doors/slider-1.jpg",
  "/images/doors/slider-2.jpg",
  "/images/doors/slider-3.jpg",
];

const WoodenDoorSection: React.FC = () => {
  const t = useTranslations("WoodenDoorSection");

  return (
    <section className="w-full h-screen bg-white">
      <div className="w-full h-full flex border-t border-b border-gray-200">
        {/* Left panel */}
        <div className="w-1/3 h-full bg-gray-50 p-8 flex flex-col justify-center border-r border-gray-200">
          <div className="flex items-center mb-4">
            <span className="w-1 h-8 bg-red-600 mr-3" />
            <h3 className="text-3xl font-semibold uppercase text-gray-900">
              {t("leftPanel.title")}
            </h3>
          </div>
          <p className="text-gray-600 text-lg">{t("leftPanel.subtitle")}</p>
        </div>

        {/* Right panel: full-screen slider */}
        <div className="w-2/3 h-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="h-full w-full"
          >
            {placeholderImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={t("slider.alt", { index: idx + 1 })}
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WoodenDoorSection;
