"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const iv = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(iv);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`
            absolute inset-0
            transition-opacity duration-700
            ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Gray shadow overlay */}
      <div className="absolute inset-0 bg-black opacity-10 z-20 pointer-events-none" />
    </div>
  );
};

export default Slider;
