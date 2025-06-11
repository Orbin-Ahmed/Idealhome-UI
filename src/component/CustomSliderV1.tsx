"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface JoinerSliderV1Props {
  images: string[];
  subText: string;
  title: React.ReactNode;
}

const CustomSliderV1: React.FC<JoinerSliderV1Props> = ({
  images,
  subText,
  title,
}) => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f0f4f8 0%, #e4ecf1 100%)",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container-fluid">
        <div className="row g-0 align-items-center">
          {/* Left side - Text */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center p-5">
            <div style={{ maxWidth: "600px", textAlign: "left" }}>
              <p
                style={{
                  fontSize: "18px",
                  color: "#555",
                  marginBottom: "15px",
                  letterSpacing: "1px",
                }}
              >
                {subText}
              </p>
              <h1
                style={{
                  fontSize: "38px",
                  fontWeight: "700",
                  color: "var(--primary-dark)",
                  marginBottom: "20px",
                  lineHeight: "1.3",
                }}
              >
                {title}
              </h1>
              <Link
                href="#service"
                className="btn btn-primary px-4 py-3"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  borderRadius: "8px",
                }}
              >
                See What We Offer
              </Link>
            </div>
          </div>

          {/* Right side - Image Slider */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center p-5">
            <div
              style={{
                maxWidth: "450px",
                width: "100%",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div style={{ width: "100%", height: "auto" }}>
                      <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        layout="responsive"
                        width={800}
                        height={800}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSliderV1;
