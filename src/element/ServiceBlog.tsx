import Link from "next/link";
import React from "react";
import IMAGES from "../component/theme";

const carddata = [
  {
    image: IMAGES.ServicePic1,
    title: "UPVC Solution",
    description:
      "High-performance uPVC windows and doors, engineered with Schüco's German precision for durability, energy efficiency, and timeless design tailored to the UAE climate.",
  },
  {
    image: IMAGES.ServicePic2,
    title: "Bespoke Joinery",
    description:
      "Custom-crafted luxury joinery, including kitchen cabinets, wardrobes, doors, and decorative wooden elements, designed to elevate your home with sophistication and functionality.",
  },
];

const ServiceBlog = () => {
  return (
    <div className="row justify-content-center media-query">
      {carddata.map((item, index) => (
        <div className="col-lg-4 col-md-6 aos-item" key={index}>
          <div className="icon-bx-wraper style-1 m-b30 flip-bx" data-name="1.">
            <div
              className="front overlay-black-middle hover-image"
              style={{
                backgroundImage: `url(${item.image.src})`,
                opacity: 0.99,
              }}
            >
              <div className="inner">
                <div>
                  <div className="sep-tl"></div>
                  <div className="sep-br"></div>
                  <h4 className="title m-b10">{item.title}</h4>
                  <h6 className="sub-title text-primary fw-bold">
                    WE DESIGN IDEAS
                  </h6>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div>
                  <div className="sep-tl"></div>
                  <div className="sep-br"></div>
                  <div className="icon-lg service-icon">
                    <span className="icon-cell text-primary">
                      <i className="flaticon-blueprint-1" />
                    </span>
                  </div>
                  <h4 className="title m-b15 service-title">
                    <Link href="/services-details" className="text-white">
                      {item.title}
                    </Link>
                  </h4>
                  <p className="text-sm service-text">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceBlog;
