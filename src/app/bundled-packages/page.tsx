import React from "react";
import Mainlayout from "../../component/Mainlayout";
import JoinerSlider from "@/element/JoinerSlider";
import YourProject from "@/component/YourProject";
import JoineryAbout from "@/component/JoineryAbout";
import JoineryStat from "@/component/JoineryStat";
import JoineryService from "@/component/JoineryService";
import JoineryMaterial from "@/component/JoineryMaterial";
import BlogSlider from "@/element/BlogSlider";
import Testimonail from "@/element/Testimonail";
import ContactUSComponent from "@/component/ContactUSComponent";

const BundledPackages = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white" style={{ overflow: "hidden" }}>
        <JoinerSlider />
        <YourProject />
        <JoineryAbout />
        <JoineryStat />
        <JoineryService />
        <JoineryMaterial />
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
              <p className="sec-title__tagline">Visiting our blog</p>
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
        {/* <!-- Contact US Form --> */}
        <ContactUSComponent />
      </div>
    </Mainlayout>
  );
};

export default BundledPackages;
