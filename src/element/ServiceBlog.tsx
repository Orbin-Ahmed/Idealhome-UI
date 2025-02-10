import Link from "next/link";
import React from "react";
import IMAGES from "../component/theme";

const carddata = [
  {
    image: IMAGES.ServicePic1,
    title: "UPVC Solution",
    description:
      "Experience the perfect blend of innovation and durability with our high-performance UPVC doors and windows. Designed to withstand harsh climates, they offer superior energy efficiency and timeless elegance.",
  },
  {
    image: IMAGES.ServicePic2,
    title: "Bespoke Joinery",
    description:
      "elevate your interiors with our custom luxury joinery. crafted with precision and attention to detail, our bespoke designs bring sophistication and functionality to every space, from abu dhabi's luxury villas to modern architectural projects.",
  },
];

const ServiceBlog = () => {
  return (
    <div className="row justify-content-center">
      {carddata.map((item, index) => (
        <div className="col-lg-4 col-md-6 aos-item" key={index}>
          <div className="icon-bx-wraper style-1 m-b30 flip-bx" data-name="1.">
            <div
              className="front overlay-black-middle"
              style={{ backgroundImage: `url(${item.image.src})` }}
            >
              <div className="inner">
                <div>
                  <div className="sep-tl"></div>
                  <div className="sep-br"></div>
                  <h4 className="title m-b10">{item.title}</h4>
                  <h6 className="sub-title text-primary">WE DESIGN IDEAS</h6>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div>
                  <div className="sep-tl"></div>
                  <div className="sep-br"></div>
                  <div className="icon-lg">
                    <span className="icon-cell text-primary">
                      <i className="flaticon-blueprint-1" />
                    </span>
                  </div>
                  <h4 className="title m-b15">
                    <Link href="/services-details" className="text-white">
                      {item.title}
                    </Link>
                  </h4>
                  <p className="text-sm">{item.description}</p>
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
