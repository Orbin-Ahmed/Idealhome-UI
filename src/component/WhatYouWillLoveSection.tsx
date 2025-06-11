"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Request3DDesignModal from "./Request3DDesignModal";

const WhatYouWillLoveSection = () => {
  const [showModal, setShowModal] = useState(false);

  const features = [
    {
      title: "Effortless Functionality",
      text: "Smartly designed for easier cooking, organizing, and cleaning.",
    },
    {
      title: "Tailored to You",
      text: "Layouts designed around how you cook, store, and entertain.",
    },
    {
      title: "Style That Lasts",
      text: "Elegant finishes built to handle everyday use with lasting durability.",
    },
    {
      title: "Everything in Its Place",
      text: "Smart storage keeps essentials organized, visible, and within reach.",
    },
    {
      title: "Seamless Appliance Fit",
      text: "Clean, integrated design that hides appliances without losing access.",
    },
    {
      title: "See It Before It's Built",
      text: "Free 3D design lets you explore and refine your kitchen before you commit.",
    },
  ];

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
        <div className="text-center mb-4">
          <h4
            style={{
              fontWeight: "600",
              color: "var(--primary-dark)",
              fontSize: "28px",
              marginBottom: "30px",
            }}
          >
            What You'll Love About Your Kitchen
          </h4>
        </div>

        <Row className="mb-4">
          {features.map((feature, index) => (
            <Col md={6} key={index} className="mb-3">
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  lineHeight: "1.6",
                }}
              >
                <strong>{feature.title}</strong> — {feature.text}
              </p>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <button
            onClick={() => setShowModal(true)}
            className="btn shadow-primary btn-primary rounded-sm btn-quote"
            style={{ minWidth: "220px" }}
          >
            Request Free 3D Design
          </button>
        </div>
      </Container>
      <Request3DDesignModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </section>
  );
};

export default WhatYouWillLoveSection;
