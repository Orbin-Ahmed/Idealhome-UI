import Link from "next/link";
import IMAGES from "../../component/theme";
import ClientSwiper from "../../element/ClientSwiper";
import Testimonail from "../../element/Testimonail";
import Mainlayout from "../../component/Mainlayout";
import ProductVideoSection from "@/element/ProductVideoSection";
import ProgressSection from "@/element/ProgressSection";
import UpvcProduct from "@/element/UpvcProduct";
import Pagebanner from "@/element/Pagebanner";

const serviceData = [
  { image: IMAGES.ServicePic1, name: "Interior Design" },
  { image: IMAGES.ServicePic2, name: "Floor Plan Design" },
  { image: IMAGES.ServicePic3, name: "Construction" },
  { image: IMAGES.ServicePic4, name: "Furniture Production" },
  { image: IMAGES.ServicePic5, name: "Architecture Design" },
  { image: IMAGES.ServicePic6, name: "24X7 Support" },
];

const Services = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <div
          className="dz-bnr-inr style-1"
          style={{ backgroundImage: `url(${IMAGES.BanerImg2.src})` }}
        ></div>
        <section
          className="section-full content-inner line-img section-title style-2"
          data-name="our skills"
        >
          <ProductVideoSection />
          {/* <ProgressSection /> */}
        </section>
        <section className="content-inner line-img">
          <UpvcProduct />
        </section>
        <div className="clients-section-1 line-img bg-gray">
          <div className="container">
            <ClientSwiper />
          </div>
        </div>
        <section
          className="section-full content-inner line-img section-title style-2"
          data-name="our skills"
        >
          <ProgressSection />
        </section>
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
            buttn1="swiper-button-prev3"
            buttn2="swiper-button-next3"
          />
        </section>
        {/* <section
          className="content-inner section-title line-img style-2"
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
      </div>
    </Mainlayout>
  );
};

export default Services;
