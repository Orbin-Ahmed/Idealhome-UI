"use client";
import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { Slide } from "@/element/JoinerSlider";
import TextSplit from "./TestSplit";

interface SingleSliderProps {
  slide: Slide;
}

const SingleSlider: React.FC<SingleSliderProps> = ({ slide }) => {
  const { bg, text, title } = slide;
  const imageSrc = `/backgrounds/${bg}`;

  return (
    <div className="position-relative vh-100 w-100">
      <div
        className="image-layer position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></div>
      <Container fluid className="h-100 d-flex align-items-center">
        <Row className="w-100">
          <Col xl={12}>
            <div className={"main - slider - one__inner text-center"}>
              <p className="main-slider-one__text">{text}</p>
              <TextSplit
                text={title}
                as="h2"
                className="main-slider-one__title mt-4 pt-4"
              />
              <div className="main-slider-one__btn mt-3">
                <Link
                  href="/about-us"
                  className="btn shadow-primary btn-primary btn-quote-2 rounded-pill project-btn"
                >
                  Our Solution
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleSlider;
