"use client";

import React from "react";
import Image from "next/image";

interface TwoImageSectionProps {
  images: { src: string; alt: string }[];
}

const TwoImageSection: React.FC<TwoImageSectionProps> = ({ images }) => {
  return (
    <section className="py-8 bg-white border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative w-full h-64 border border-gray-300 rounded-lg overflow-hidden"
            >
              <Image src={image.src} alt={image.alt} fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoImageSection;
