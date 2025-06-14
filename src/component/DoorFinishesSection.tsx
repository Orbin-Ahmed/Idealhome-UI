"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const DoorFinishesSection = () => {
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
        <Row className="align-items-center">
          {/* Image Placeholder */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div
              style={{
                width: "100%",
                height: "300px",
                border: "1px solid #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              6 Interior Images showing Group of Doors
            </div>
          </Col>

          {/* Text Content */}
          <Col lg={6}>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "28px",
                marginBottom: "15px",
                color: "var(--primary-dark)",
              }}
            >
              Endless Finishes. Infinite Impressions.
            </h4>
            <p
              style={{
                fontSize: "19px",
                lineHeight: "1.6",
                color: "#333",
              }}
            >
              Choose from over 60 finishes — from rich natural woods to refined
              lacquers — in a variety of sizes, grains, and styles. Whether you
              want a bold statement piece or a door that blends seamlessly into
              your walls, our collection offers the versatility and elegance to
              suit every taste and design detail.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DoorFinishesSection;
