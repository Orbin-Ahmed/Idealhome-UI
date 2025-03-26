"use client";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "./TestSplit";
import Link from "next/link";

interface ImageData {
  src: string;
}

export const ourMaterial = {
  title: "Our Flooring \n Hardwood, \n Material Stone, \n Laminate, Carpet",
  text: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration",
  image: "/backgrounds/our-material-v1-img1.jpg",
  image2: "/backgrounds/our-material-v1-img2.jpg",
};

const { title, text, image, image2 } = ourMaterial;

const JoineryMaterial: React.FC = () => {
  return (
    <section className="our-material-one">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="our-material-one__content">
              <div className="sec-title">
                <h2 className="sec-title__title">
                  <TextSplit text={title} />
                </h2>
                <p className="sec-title__text">{text}</p>
              </div>
              <div className="our-material-one__content-btn">
                <Link
                  href="/about-us"
                  className="btn shadow-primary btn-primary btn-quote-2"
                >
                  Our Product
                </Link>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="our-material-one__img">
              <div className="our-material-one__img1">
                <Image src={image} alt="" />
              </div>
              <div className="our-material-one__img2 animated zoomIn">
                <Image src={image2} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoineryMaterial;
