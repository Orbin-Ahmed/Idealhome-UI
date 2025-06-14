"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface DoorFeatureBlock {
  title: string;
  subtitle: string;
  images: string[];
  textPosition: "left" | "right";
}

interface DoorFinishFeatureSectionProps {
  features: DoorFeatureBlock[];
}

const DoorFinishFeatureSection: React.FC<DoorFinishFeatureSectionProps> = ({
  features,
}) => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container fluid>
        {features.map((feature, index) => {
          const TextBlock = (
            <div
              style={{
                padding: "30px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#000",
                }}
              >
                <span style={{ color: "red", fontWeight: "bold" }}>| </span>
                {feature.title}
              </h4>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "10px",
                  color: "#333",
                }}
              >
                {feature.subtitle}
              </p>
            </div>
          );

          const ImageSlider = (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              style={{ height: "100%" }}
            >
              {feature.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "300px",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          );

          return (
            <Row key={index} className="mb-4">
              <Col
                lg={6}
                md={12}
                className={
                  feature.textPosition === "left" ? "order-lg-1" : "order-lg-2"
                }
              >
                {TextBlock}
              </Col>
              <Col
                lg={6}
                md={12}
                className={
                  feature.textPosition === "left" ? "order-lg-2" : "order-lg-1"
                }
                style={{ backgroundColor: "#eee" }}
              >
                {ImageSlider}
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default DoorFinishFeatureSection;
