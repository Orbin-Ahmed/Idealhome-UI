"use client";

import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface ServiceItem {
  id: number;
  title: string;
  text: string;
  image: string;
  page: string; // add page here
}

const JoineryServiceData = {
  title: "Our Products",
  services: [
    {
      id: 1,
      title: "CLOSETS",
      text: "Maximize your space with fully customized closets and wardrobe systems.",
      image: "https://placehold.co/600x600?text=Closets",
      page: "/closets", // page link here
    },
    {
      id: 2,
      title: "KITCHEN SOLUTIONS",
      text: "Transform your kitchen into a culinary showcase with bespoke cabinetry.",
      image: "https://placehold.co/600x600?text=Kitchen",
      page: "/kitchen-solution",
    },
    {
      id: 3,
      title: "WALL CLADDING",
      text: "Enhance your interiors with elegant wall cladding.",
      image: "https://placehold.co/600x600?text=Wall+Cladding",
      page: "/wall-cladding",
    },
    {
      id: 4,
      title: "DOORS",
      text: "Premium interior and exterior doors crafted to complement your space.",
      image: "https://placehold.co/600x600?text=Doors",
      page: "/doors",
    },
  ],
};

interface JoineryServiceProps {}

const JoineryServiceSingle: React.FC<{ service: ServiceItem }> = ({
  service,
}) => {
  const { title, image, page } = service;
  return (
    <Col
      xl={3}
      lg={3}
      md={6}
      sm={12}
      className="animated fadeInUp mb-4 product"
    >
      <Link href={page} style={{ textDecoration: "none" }}>
        <div
          className="services-one__single text-center h-100 d-flex flex-column"
          style={{
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {/* Image */}
          <div>
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Title */}
          <div
            style={{
              padding: "10px 0 0 0",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                color: "var(--primary-dark)",
                marginBottom: 0,
              }}
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </Col>
  );
};

const JoineryService: React.FC<JoineryServiceProps> = () => {
  return (
    <section
      className="services-one clearfix py-5"
      style={{ background: "#f8f9fa" }}
      id="service"
    >
      <Container>
        <div className="sec-title text-center mb-5">
          <h2
            className="sec-title__title"
            style={{ color: "var(--primary-dark)" }}
          >
            {JoineryServiceData.title}
          </h2>
        </div>

        <Row>
          {JoineryServiceData.services.map((service) => (
            <JoineryServiceSingle service={service} key={service.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default JoineryService;
