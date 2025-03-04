"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import IMAGES from "../component/theme";

interface btnType {
  prvBtn: string;
  nextBtn: string;
}

interface ImageBlog {
  double?: string;
  image1?: any;
  image2?: any;
  singleimage?: any;
}

const galleryBlogData: ImageBlog[] = [
  { singleimage: IMAGES.work3Pic12 },
  { double: "doubleimage", image1: IMAGES.work3Pic2, image2: IMAGES.work3Pic3 },
  { singleimage: IMAGES.work3Pic1 },
  { double: "doubleimage", image1: IMAGES.work3Pic4, image2: IMAGES.work3Pic6 },
  { singleimage: IMAGES.work3Pic5 },
  { singleimage: IMAGES.work3Pic13 },
  { double: "doubleimage", image1: IMAGES.work3Pic7, image2: IMAGES.work3Pic8 },
  { singleimage: IMAGES.work3Pic9 },
  {
    double: "doubleimage",
    image1: IMAGES.work3Pic10,
    image2: IMAGES.work3Pic11,
  },
  { singleimage: IMAGES.work3Pic5 },
  {
    double: "doubleimage",
    image1: IMAGES.work3Pic15,
    image2: IMAGES.work3Pic16,
  },
  { singleimage: IMAGES.work3Pic14 },
  {
    double: "doubleimage",
    image1: IMAGES.work3Pic17,
    image2: IMAGES.work3Pic19,
  },
  { singleimage: IMAGES.work3Pic18 },
  {
    double: "doubleimage",
    image1: IMAGES.work3Pic20,
    image2: IMAGES.work3Pic22,
  },
  { singleimage: IMAGES.work3Pic21 },
  {
    double: "doubleimage",
    image1: IMAGES.work3Pic10,
    image2: IMAGES.work3Pic23,
  },
];

const PortfolioSlider = ({ prvBtn, nextBtn }: btnType) => {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail]} selector=".lightimg">
      <Swiper
        speed={1500}
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        className="swiper-container swiper-portfolio lightgallery"
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: `.${prvBtn}`,
          nextEl: `.${nextBtn}`,
        }}
        breakpoints={{
          1280: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          591: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {galleryBlogData.map((item, ind) => {
          if (item.double === "doubleimage") {
            return (
              <SwiperSlide key={ind}>
                <div className="dz-box overlay style-1">
                  <div className="dz-media">
                    <Image src={item.image1} alt="" loading="lazy" />
                  </div>
                  <div className="dz-info">
                    <span
                      data-src={item.image1.src}
                      className="view-btn lightimg"
                      title="INTERIOR DESIGN"
                    >
                      <Link href={item.image1}>
                        {" "}
                        <Image src={item.image1} alt="" className="d-none" />
                      </Link>
                    </span>
                    <h6 className="sub-title">INTERIOR DESIGN</h6>
                    <h4 className="title m-b15">
                      <Link href="/portfolio-details">
                        Modern uPVC Door <span></span>
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="dz-box overlay style-1">
                  <div className="dz-media">
                    <Image src={item.image2} alt="" loading="lazy" />
                  </div>
                  <div className="dz-info">
                    <span
                      data-src={item.image2.src}
                      className="view-btn lightimg"
                      title="CREATIVE"
                    >
                      <Image src={item.image2} alt="" className="d-none" />
                    </span>
                    <h6 className="sub-title">CREATIVE</h6>
                    <h4 className="title m-b15">
                      <Link href="/portfolio-details">
                        Sample uPVC Window<span></span>
                      </Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={ind}>
                <div className="dz-box overlay style-1">
                  <div className="dz-media">
                    <Image src={item.singleimage} alt="" loading="lazy" />
                  </div>
                  <div className="dz-info">
                    <span
                      data-src={item.singleimage.src}
                      className="view-btn lightimg"
                      title="ARCHITECTURAL"
                    >
                      <Image src={item.singleimage} alt="" className="d-none" />
                    </span>
                    <h6 className="sub-title">ARCHITECTURAL</h6>
                    <h4 className="title m-b15">
                      <Link href="/portfolio-details">
                        Residential Project, <span>Abu Dhabi</span>
                      </Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </LightGallery>
  );
};

export default PortfolioSlider;
