import Link from "next/link";
import React from "react";
import IMAGES from "../component/theme";

const carddata = [
  {
    image: "https://placehold.co/1200x1600",
    title: "CLOSETS",
    page: "/closet",
    description:
      "High-performance uPVC windows and doors, engineered with Schüco's German precision for durability, energy efficiency, and timeless design tailored to the UAE climate.",
  },
  {
    image: "https://placehold.co/1200x1600",
    title: "KITCHEN SOLUTIONS",
    page: "/kitchen",
    description:
      "High-performance uPVC windows and doors, engineered with Schüco's German precision for durability, energy efficiency, and timeless design tailored to the UAE climate.",
  },
  {
    image: "https://placehold.co/1200x1600",
    title: "WALL CLADDING",
    page: "/wall-cladding",
    description:
      "High-performance uPVC windows and doors, engineered with Schüco's German precision for durability, energy efficiency, and timeless design tailored to the UAE climate.",
  },
  {
    image: "https://placehold.co/1200x1600",
    title: "DOORS",
    page: "/door",
    description:
      "High-performance uPVC windows and doors, engineered with Schüco's German precision for durability, energy efficiency, and timeless design tailored to the UAE climate.",
  },
  {
    image: "https://placehold.co/1200x1600",
    title: "uPVC Windows & Doors",
    page: "/upvc",
    description:
      "High-performance uPVC windows and doors, engineered with Schüco's German precision for durability, energy efficiency, and timeless design tailored to the UAE climate.",
  },
];

const ServiceBlog = () => {
  return (
    <div className="row justify-content-center media-query" id="service">
      {carddata.map((item, index) => (
        <div className="col-lg-4 col-md-6 aos-item mb-4" key={index}>
          <div className="icon-bx-wraper style-1 m-b30 flip-bx" data-name="1.">
            {/* Front Image */}
            <div
              className="front overlay-black-middle hover-image"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="inner">
                <div>
                  <div className="sep-tl"></div>
                  <div className="sep-br"></div>
                </div>
              </div>
            </div>

            {/* Back content */}
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
                  <p className="text-sm service-text">{item.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-2">
            <h5 className="mb-0">
              <Link
                href={item.page}
                className="text-dark text-decoration-none fw-bold"
              >
                {item.title}
              </Link>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceBlog;
