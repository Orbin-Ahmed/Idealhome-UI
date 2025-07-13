"use client";

import React from "react";
import Image from "next/image";

interface ThreeImageSectionProps {
  images: { src: string; alt: string }[];
}

const ThreeImageSection: React.FC<ThreeImageSectionProps> = ({ images }) => {
  return (
    <section className="py-8 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg overflow-hidden relative w-full h-64"
            >
              <Image src={image.src} alt={image.alt} fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeImageSection;
