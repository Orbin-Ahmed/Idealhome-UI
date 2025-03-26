"use client";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import VisibilityCountUp from "./VisibilityCountUp";
import Link from "next/link";
import TextSplit from "./TestSplit";

interface ShapeData {
  src: string;
}

export const bestLogistics = {
  shape: { src: "/backgrounds/best-logistics-v1-shape1.png" },
  title: "Expert Interior & Joinery Designer",
  text: "There are many variations of passages of Interior to choose from",
  bottomText: "We can help you stand out for your interior solution",
  overlayContent: "We Are Since 2006 ! Over 200 Awards",
  counters: [
    {
      id: 1,
      title: "Completed Projects",
      count: 5,
      text: "5k complete work",
      isK: true,
    },
    {
      id: 2,
      title: "Our Expert",
      count: 30,
      text: "Expert Interior worker",
      isK: false,
    },
  ],
  images: [
    {
      id: 1,
      className: "shape1 animated zoom-fade",
      image: { src: "/backgrounds/best-logistics-v1-shape1.png" },
    },
    {
      id: 2,
      className: "shape3",
      image: { src: "/backgrounds/best-logistics-v1-shape2.png" },
    },

    {
      id: 3,
      className: "best-logistics-one__img-inner",
      image: { src: "/backgrounds/best-logistics-v1-img.jpg" },
    },
  ],
};

interface CounterItem {
  id: number;
  title: string;
  text: string;
  count: number;
  isK?: boolean;
}

interface ImageData {
  src: string;
}

interface BestLogisticsImage {
  id: number;
  image: string;
  className?: string;
}

interface BestLogisticsData {
  text: string;
  title: string;
  shape: string;
  counters: CounterItem[];
  bottomText: string;
  overlayContent: string;
  images: BestLogisticsImage[];
}

interface BestLogisticsProps {
  className?: string;
}

const JoineryStat: React.FC<BestLogisticsProps> = ({ className = "" }) => {
  const { text, title, shape, counters, bottomText, overlayContent, images } =
    bestLogistics;

  return (
    <section className="best-logistics-one">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="best-logistics-one__content">
              <div className="sec-title">
                <h2 className="sec-title__title">
                  <TextSplit text={title} />
                </h2>
                <p className="sec-title__text">{text}</p>
              </div>

              <ul className="best-logistics-one__content-counter">
                {counters.map(({ id, title, text, count, isK }) => (
                  <li key={id} className="animated fadeInUp">
                    <div className={isK ? "inner" : ""}>
                      <h2>
                        <span className="odometer">
                          <VisibilityCountUp count={count} />
                        </span>
                        {isK && <span className="k">k</span>}
                        <span
                          className={`fa fa-plus plus-icon${
                            !isK ? " pd-l" : ""
                          }`}
                        ></span>
                      </h2>
                      <h3 className="best-logistics-one__content-counter-title">
                        {title}
                      </h3>
                      <p className="best-logistics-one__content-counter-text">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="best-logistics-one__content-bottom">
                <div className="best-logistics-one__content-bottom-text">
                  <p>{bottomText}</p>
                </div>
                <div className="best-logistics-one__content-bottom-btn">
                  <Link
                    href="/about-us"
                    className="btn shadow-primary btn-primary btn-quote-2 w-100"
                  >
                    Our Solution
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="best-logistics-one__img">
              {images.map(({ id, image, className }) => (
                <div key={id} className={className}>
                  <Image src={image.src} alt="" />
                </div>
              ))}
              <div className="overlay-content">
                <h2>{overlayContent}</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoineryStat;
