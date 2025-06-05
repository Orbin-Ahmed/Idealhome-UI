"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import AboutUs from "@/element/AboutUs";
import ServiceBlog from "@/element/ServiceBlog";
import WatchUs from "@/element/WatchUs";
import TeamSlider from "@/element/TeamSlider";
import Testimonail from "@/element/Testimonail";
import BlogSlider from "@/element/BlogSlider";
import PortfolioSlider from "@/element/PortfolioSlider";
import Mainlayout from "@/component/Mainlayout";
import HomeSlider from "@/element/HomeSlider";
import ProductVideoSection from "@/element/ProductVideoSection";
import WhyChooseIdealFactory from "@/component/WhyChooseIdealFactory";

export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <HomeSlider />
        <section
          className="content-inner line-img section-title style-2"
          data-name="About Us"
        >
          <AboutUs />
        </section>
        <section className="line-img section-title style-2 pt-5">
          <WhyChooseIdealFactory />
        </section>

        {/* Services  */}
        <section className="content-inner-1 line-img overflow-hidden">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h2 className="title">
                Our <span className="text-primary">Products</span>
              </h2>
              <div className="dz-separator style-1 text-primary"></div>
            </div>
            <ServiceBlog />
            <div className="text-center mt-4">
              <Link href="/upvc" className="btn shadow-primary btn-primary">
                VIEW ALL SERVICES <i className="m-l10 fas fa-caret-right" />
              </Link>
            </div>
          </div>
        </section>

        {/*  Our Portfolio  */}
        <section
          className="content-inner-2 bg-gray line-img pb-1 section-title style-1"
          data-name="Portfolio"
        >
          <div className="container">
            <div className="row align-items-center section-head-bx">
              <div className="col-md-8">
                <div className="section-head style-1">
                  <h2 className="title">
                    SEE OUR <span className="text-primary">LATEST WORK</span>
                  </h2>
                  <div className="dz-separator style-1 text-primary"></div>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <div className="portfolio-pagination d-inline-block mb-5">
                  <div className="btn-prev swiper-button-prev2 pe-3 c-pointer">
                    <i className="las la-long-arrow-alt-left"></i>PREV
                  </div>
                  <div className="btn-next swiper-button-next2 ps-3 c-pointer">
                    NEXT<i className="las la-long-arrow-alt-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PortfolioSlider
            prvBtn="swiper-button-prev2"
            nextBtn="swiper-button-next2"
          />
        </section>

        {/*  Content Box  */}
        <section className="dz-content-bx style-1 line-img p-t50">
          <div className="section-head style-1 text-center mb-5">
            <h2 className="title">
              Our <span className="text-primary">Process</span>
            </h2>
            <div className="dz-separator style-1 text-primary mb-5"></div>
          </div>
          <WatchUs setOpen={setOpen} />
        </section>

        {/* <!-- Testimonials --> */}
        <section
          className="content-inner bg-gray section-title style-1 line-img mt-5"
          data-name="Testimonial"
        >
          <div className="container">
            <div className="row section-head-bx align-items-center">
              <div className="col-md-8">
                <div className="section-head style-1">
                  <h2 className="title">
                    WHAT OUR <span className="text-primary">CLIENT SAYS</span>
                  </h2>
                  <div className="dz-separator style-1 text-primary"></div>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <div className="testimonial-swiper m-b30">
                  <div className="btn-prev swiper-button-prev3 pe-3 c-pointer">
                    <i className="las la-long-arrow-alt-left" />
                    PREV
                  </div>
                  <div className="btn-next swiper-button-next3 ps-3 c-pointer">
                    NEXT
                    <i className="las la-long-arrow-alt-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Testimonail
            buttn1="swiper-button-prev3 "
            buttn2="swiper-button-next3"
          />
        </section>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="9cp-HugtbHo"
        onClose={() => setOpen(false)}
      />
    </Mainlayout>
  );
}
