"use client";

import React from "react";
import Link from "next/link";

export interface GalleryItem {
  type: "image" | "description";
  image?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface KitchenGalleryProps {
  items: GalleryItem[];
}

const CustomImagePos: React.FC<KitchenGalleryProps> = ({ items }) => {
  return (
    <section className="py-5 bg-white border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items[0] && (
            <div className="border border-gray-300 rounded-lg overflow-hidden md:col-span-2">
              {items[0].type === "image" && items[0].image && (
                <img
                  src={items[0].image}
                  alt={items[0].title ?? "Image"}
                  className="w-full h-[250px] object-cover block"
                />
              )}
            </div>
          )}
          {items[1] && (
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {items[1].type === "image" && items[1].image && (
                <img
                  src={items[1].image}
                  alt={items[1].title ?? "Image"}
                  className="w-full h-[250px] object-cover block"
                />
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items[2] && (
            <div className="border border-gray-300 rounded-lg p-5 bg-gray-50 flex flex-col justify-center">
              {items[2].type === "description" && (
                <>
                  <h5 className="text-lg font-bold text-[#57b7c0] mb-2">
                    {items[2].title}
                  </h5>
                  <p className="text-base text-gray-600 leading-relaxed mb-4">
                    {items[2].description}
                  </p>
                  {items[2].ctaText && items[2].ctaLink && (
                    <Link
                      href={items[2].ctaLink}
                      className="text-sm font-medium text-[#57b7c0] inline-block"
                    >
                      {items[2].ctaText} →
                    </Link>
                  )}
                </>
              )}
            </div>
          )}
          {items[3] && (
            <div className="border border-gray-300 rounded-lg overflow-hidden md:col-span-2">
              {items[3].type === "image" && items[3].image && (
                <img
                  src={items[3].image}
                  alt={items[3].title ?? "Image"}
                  className="w-full h-[300px] object-cover block"
                />
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items[4] && (
            <div className="border border-gray-300 rounded-lg overflow-hidden md:col-span-2">
              {items[4].type === "image" && items[4].image && (
                <img
                  src={items[4].image}
                  alt={items[4].title ?? "Image"}
                  className="w-full h-[250px] object-cover block"
                />
              )}
            </div>
          )}
          {items[5] && (
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {items[5].type === "image" && items[5].image && (
                <img
                  src={items[5].image}
                  alt={items[5].title ?? "Image"}
                  className="w-full h-[250px] object-cover block"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomImagePos;
