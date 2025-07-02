"use client";
import React, { useState, useEffect } from "react";

const IMAGES: string[] = [
  "https://placehold.co/1920x1080",
  "https://placehold.co/1920x1080",
  "https://placehold.co/1920x1080",
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrent((c) => (c + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="slider-container">
      {IMAGES.map((src, idx) => (
        <div
          key={idx}
          className={`
            slider-slide
            ${idx === current ? "slider-visible" : "slider-hidden"}
          `}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* gray shadow overlay */}
      <div className="slider-overlay" />
    </div>
  );
};

export default Slider;
