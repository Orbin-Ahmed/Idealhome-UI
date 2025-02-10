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

        {/* Services  */}
        <section className="content-inner-1 line-img overflow-hidden">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h2 className="title">
                WHAT <span className="text-primary">WE PROVIDE</span>
              </h2>
              <div className="dz-separator style-1 text-primary"></div>
            </div>
            <ServiceBlog />
            <div className="text-center mt-4">
              <Link href="/services" className="btn shadow-primary btn-primary">
                VIEW ALL SERVICES <i className="m-l10 fas fa-caret-right" />
              </Link>
            </div>
          </div>
        </section>

        {/*  Content Box  */}
        <section className="dz-content-bx style-1 line-img p-t50">
          <WatchUs setOpen={setOpen} />
        </section>

        {/* <!-- Team --> */}
        {/* <section
          className="content-inner section-title style-2 line-img"
          data-name="Our Team"
        >
          <div className="container">
            <div className="section-head style-1 text-center">
              <h2 className="title">
                CREATIVE <span className="text-primary">EXPERTISE</span>
              </h2>
              <div className="dz-separator style-1 text-primary"></div>
            </div>
            <div className="row">
              <div className="col-lg-12 m-b30">
                <TeamSlider />
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Testimonials --> */}
        <section
          className="content-inner bg-gray section-title style-1 line-img"
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

        {/* <!-- Blog --> */}
        <section className="content-inner-1 line-img">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h2 className="title">
                STAY UPDATED <span className="text-primary">WITH US</span>
              </h2>
              <div className="dz-separator style-1 text-primary"></div>
            </div>
            <div className="blog-area">
              <BlogSlider />
            </div>
          </div>
        </section>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="4UdeL0kdMMs"
        onClose={() => setOpen(false)}
      />
    </Mainlayout>
  );
}
