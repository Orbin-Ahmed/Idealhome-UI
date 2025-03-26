"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleSlider from "@/component/SingleSlider";

export interface Slide {
  id: number;
  bg: string;
  text: string;
  title: string;
}

const mainSlider: Slide[] = [
  {
    id: 1,
    bg: "work_1.png",
    text: "A Complete Solution for Your Joinery Vision.",
    title: "Welcome to Our Ideal Home Joinery Solutions",
  },
  {
    id: 2,
    bg: "work_2.png",
    text: "A Complete Solution for Your Joinery Vision.",
    title: "Welcome to Our Ideal Home Joinery Solutions",
  },
  {
    id: 3,
    bg: "work_3.png",
    text: "A Complete Solution for Your Joinery Vision.",
    title: "Welcome to Our Ideal Home Joinery Solutions",
  },
  {
    id: 4,
    bg: "work_4.png",
    text: "A Complete Solution for Your Joinery Vision.",
    title: "Welcome to Our Ideal Home Joinery Solutions",
  },
];

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const JoinerSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="main-slider main-slider-one">
      <Slider {...settings}>
        {mainSlider.map((slide) => (
          <div key={slide.id}>
            <SingleSlider slide={slide} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default JoinerSlider;
