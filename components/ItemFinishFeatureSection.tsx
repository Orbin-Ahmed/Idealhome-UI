"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export interface ItemFeatureBlock {
  title: string;
  subtitle: string;
  images: string[];
  textPosition: "left" | "right";
}

interface Props {
  features: ItemFeatureBlock[];
}

const ItemFinishFeatureSection: React.FC<Props> = ({ features }) => {
  return (
    <section className=" bg-gray-100">
      <div className=" mx-auto ">
        {features.map((block, idx) => {
          const textOrder =
            block.textPosition === "left" ? "lg:order-1" : "lg:order-2";
          const imageOrder =
            block.textPosition === "left" ? "lg:order-2" : "lg:order-1";

          return (
            <div key={idx} className="flex flex-col lg:flex-row items-stretch">
              {/* Text Panel */}
              <div className={`w-full lg:w-1/2 ${textOrder}`}>
                <div
                  className="
                    bg-white p-8 flex flex-col justify-center
                    h-80
                    min-h-[280px] 
                    md:min-h-[340px] 
                    lg:min-h-[400px]
                  "
                >
                  <h4 className="text-2xl font-bold text-black flex items-center">
                    <span className="text-red-600 font-extrabold mr-2">|</span>
                    {block.title}
                  </h4>
                  <p className="mt-4 text-gray-700 text-base">
                    {block.subtitle}
                  </p>
                </div>
              </div>

              {/* Image Slider */}
              <div className={`w-full lg:w-1/2 ${imageOrder}`}>
                <div
                  className="
                    h-80
                    min-h-[280px] 
                    md:min-h-[340px] 
                    lg:min-h-[400px]
                  "
                >
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop
                    className="h-full w-full"
                  >
                    {block.images.map((src, i) => (
                      <SwiperSlide key={i}>
                        <div
                          className="w-full h-full bg-center bg-cover"
                          style={{ backgroundImage: `url(${src})` }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItemFinishFeatureSection;
