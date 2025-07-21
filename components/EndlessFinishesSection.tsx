"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const placeholderImages = [
  '/images/doors/interior-door-slider-1.jpg',
];

const EndlessFinishesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image Slider */}
        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="h-80 md:h-96 lg:h-[500px] w-full"
          >
            {placeholderImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Interior door ${idx + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center">
            <span className="w-1 h-8 bg-red-600 mr-3" />
            <h2 className="text-3xl font-semibold text-gray-900">
              Endless Finishes. Infinite Impressions.
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Choose from over 60 finishes — from rich natural woods to refined
            lacquers — in a variety of sizes, grains, and styles. Whether you
            want a bold statement piece or a door that blends seamlessly into
            your walls, our collection offers the versatility and elegance to
            suit every taste and design detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EndlessFinishesSection;
