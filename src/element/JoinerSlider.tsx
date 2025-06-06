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
    bg: "https://placehold.co/1920x700",
    text: "A Complete Solution for Your Joinery Vision.",
    title: "Luxury Joinery Made Easy — 3D Preview, Fair Price, Flawless Finish",
  },
  {
    id: 2,
    bg: "https://placehold.co/1920x700",
    text: "A Complete Solution for Your Joinery Vision.",
    title: "Luxury Joinery Made Easy — 3D Preview, Fair Price, Flawless Finish",
  },
  {
    id: 3,
    bg: "https://placehold.co/1920x700",
    text: "A Complete Solution for Your Joinery Vision.",
    title: "Luxury Joinery Made Easy — 3D Preview, Fair Price, Flawless Finish",
  },
  {
    id: 4,
    bg: "https://placehold.co/1920x700",
    text: "A Complete Solution for Your Joinery Vision.",
    title: "Luxury Joinery Made Easy — 3D Preview, Fair Price, Flawless Finish",
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
