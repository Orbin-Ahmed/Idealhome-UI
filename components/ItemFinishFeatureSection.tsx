"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

export interface SubtitleItem {
  label: string;
  href?: string;
}

export interface ItemFeatureBlock {
  title: string;
  subtitleItems: SubtitleItem[];
  images: string[];
  textPosition: "left" | "right";
  titleLink?: string;
}

interface Props {
  features: ItemFeatureBlock[];
}

const ItemFinishFeatureSection: React.FC<Props> = ({ features }) => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto">
        {features.map((block, idx) => {
          const textOrder =
            block.textPosition === "left" ? "lg:order-1" : "lg:order-2";
          const imageOrder =
            block.textPosition === "left" ? "lg:order-2" : "lg:order-1";

          return (
            <div
              key={idx}
              className="flex flex-col lg:flex-row items-stretch lg:h-[400px]"
            >
              {/* Text Panel */}
              <div className={`w-full lg:w-1/2 ${textOrder} lg:h-full`}>
                <div className="bg-white p-6 md:p-8 flex flex-col justify-center h-full">
                  {block.titleLink ? (
                    <Link href={block.titleLink} className="inline-block">
                      <h4 className="text-xl md:text-2xl font-bold text-black flex items-center hover:underline">
                        <span className="text-red-600 font-extrabold mr-2">
                          |
                        </span>
                        {block.title}
                      </h4>
                    </Link>
                  ) : (
                    <h4 className="text-xl md:text-2xl font-bold text-black flex items-center">
                      <span className="text-red-600 font-extrabold mr-2">
                        |
                      </span>
                      {block.title}
                    </h4>
                  )}
                  <p className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base flex flex-wrap justify-start gap-x-1 gap-y-2">
                    {block.subtitleItems.map((item, i) => {
                      const separator =
                        i < block.subtitleItems.length - 1 ? "," : "";
                      if (item.href) {
                        return (
                          <Link
                            key={i}
                            href={item.href}
                            className="hover:underline"
                          >
                            {item.label}
                            {separator}
                          </Link>
                        );
                      } else {
                        return (
                          <span key={i}>
                            {item.label}
                            {separator}
                          </span>
                        );
                      }
                    })}
                  </p>
                </div>
              </div>

              <div className={`w-full lg:w-1/2 ${imageOrder} aspect-video`}>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop
                  className="h-full w-full"
                >
                  {block.images.map((src, i) => (
                    <SwiperSlide key={i} className="relative">
                      <Image
                        src={src}
                        alt={`${block.title} slide ${i + 1}`}
                        fill
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItemFinishFeatureSection;
