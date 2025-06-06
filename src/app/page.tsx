"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import AboutUs from "@/element/AboutUs";
import ServiceBlog from "@/element/ServiceBlog";
import WatchUs from "@/element/WatchUs";
import Testimonail from "@/element/Testimonail";
import PortfolioSlider from "@/element/PortfolioSlider";
import Mainlayout from "@/component/Mainlayout";
import HomeSlider from "@/element/HomeSlider";
import WhyChooseIdealFactory from "@/component/WhyChooseIdealFactory";

export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <HomeSlider />
        <section
          className="py-5"
          style={{
            backgroundColor: "#f8f9fa",
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div className="container text-center">
            <h4
              className="text"
              style={{
                fontSize: "24px",
                fontWeight: "500",
                color: "var(--primary-dark)",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Transform your villa with elegant joinery and German uPVC windows
              — all in one seamless, hassle-free package.
            </h4>
          </div>
        </section>

        <section className="line-img section-title style-2">
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
          </div>
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
