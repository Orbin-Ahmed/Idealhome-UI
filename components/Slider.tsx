"use client";

import React, { useState, useEffect } from "react";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const iv = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(iv);
  }, [images.length]);

  return (
    <div className="slider-container relative overflow-hidden">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`
            slider-slide
            ${idx === current ? "slider-visible" : "slider-hidden"}
            absolute inset-0 bg-center bg-cover transition-opacity duration-700
          `}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Gray shadow overlay */}
      <div className="slider-overlay absolute inset-0 bg-black opacity-30 pointer-events-none" />
    </div>
  );
};

export default Slider;
