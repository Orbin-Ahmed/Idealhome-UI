import Pagebanner from "../../element/Pagebanner";
import IMAGES from "../../component/theme";
import ClientSwiper from "../../element/ClientSwiper";
import Mainlayout from "../../component/Mainlayout";
import Testimonail from "../../element/Testimonail";
import TeamSlider from "../../element/TeamSlider";
import MasonaryBlog from "../../element/MasonaryBlog";
import ProgressSection from "../../element/ProgressSection";

const Portfolio = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <div
          className="dz-bnr-inr style-1 overlay-white-dark"
          style={{ backgroundImage: `url(${IMAGES.BanerImg5.src})` }}
        >
          <Pagebanner
            maintitle="OUR PORTFOLIO"
            currenttitle="Portfolio"
            parent="Home"
          />
        </div>
        <section className="content-inner-1 line-img overflow-hidden masonry-portfolio">
          <MasonaryBlog />
        </section>
        {/* <!-- Clients Logo --> */}
        <div className="clients-section-1 line-img bg-gray">
          <div className="container">
            <ClientSwiper />
          </div>
        </div>
        {/* <!-- Progress --> */}
        <section className="section-full line-img content-inner">
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
                    <i className="las la-long-arrow-alt-left"></i>PREV
                  </div>
                  <div className="btn-next swiper-button-next3 ps-3 c-pointer">
                    NEXT<i className="las la-long-arrow-alt-right"></i>
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
        <section
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
        </section>
      </div>
    </Mainlayout>
  );
};

export default Portfolio;
