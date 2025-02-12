"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import {
  FreeMode,
  Autoplay,
  Navigation,
  Pagination,
  Parallax,
  Thumbs,
} from "swiper/modules";
import IMAGES from "../component/theme";
import { useRef, useState } from "react";
import ServiceBlog from "./ServiceBlog";

const swiperDataBlog = [{ image: IMAGES.MainSlider4 }];

const thumSliderData = [{ number: "01" }, { number: "02" }, { number: "03" }];

const Index3HomeSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <>
      <div className="silder-three">
        <Swiper
          speed={2000}
          slidesPerView={1}
          spaceBetween={0}
          parallax={true}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-white",
          }}
          className="swiper-container main-silder-swiper-03"
          modules={[Autoplay, Navigation, Pagination, Parallax, Thumbs]}
          navigation={{
            prevEl: ".swiper-button-home-prev",
            nextEl: ".swiper-button-home-next",
          }}
        >
          {swiperDataBlog.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="silder-img overlay-black-middle">
                <Image src={data.image} data-swiper-parallax="30%" alt="" />
              </div>
              <div className="d-flex justify-content-between">
                <div className="silder-content">
                  <div className="inner-content">
                    <h1 className="title">
                      <span className="text-primary">Ideal Factory</span> The
                      most trusted home upgrade provider in the UAE.
                    </h1>
                    <p className="m-b30">
                      Outdated interiors? Looking to transform your space?{" "}
                      <br />
                      <span>
                        In collaboration with Schüco, Germany's leader in
                        innovative building systems, we deliver extraordinary
                        results with premium home solutions that combine
                        cutting-edge technology and timeless design.{" "}
                      </span>
                    </p>
                    <Link
                      href="about-us"
                      className="btn shadow-primary btn-primary w-100 btn-quote"
                    >
                      REQUEST FOR A QUOTE TODAY{" "}
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <ServiceBlog />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="scroll-down">Scroll Down</div>
      </div>
    </>
  );
};

export default Index3HomeSlider;
