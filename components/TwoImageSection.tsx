"use client";

import React from "react";

interface TwoImageSectionProps {
  images: { src: string; alt: string }[];
}

const TwoImageSection: React.FC<TwoImageSectionProps> = ({ images }) => {
  return (
    <section className="py-8 bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoImageSection;
