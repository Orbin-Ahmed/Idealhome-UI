"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface ThreeImageSectionProps {
  images: { src: string; alt: string }[];
}

const ThreeImageSection: React.FC<ThreeImageSectionProps> = ({ images }) => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container>
        <Row className="g-4">
          {images.map((image, index) => (
            <Col key={index} lg={4} md={12} sm={12}>
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  width: "100%",
                  height: "auto",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ThreeImageSection;
