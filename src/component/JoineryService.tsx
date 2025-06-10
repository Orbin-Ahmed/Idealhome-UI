"use client";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  GiCookingPot,
  GiRolledCloth,
  GiWoodPile,
  GiDoor,
  GiClothes,
  GiBrickWall,
} from "react-icons/gi";
import TextSplit from "./TestSplit";

interface ServiceItem {
  id: number;
  title: string;
  text: string;
}

const JoineryServiceData = {
  title: "Our Products",
  text: "Our design services start and end with a best-in-class experience strategy that builds beautiful, functional spaces.",
  services: [
    {
      id: 1,
      title: "CLOSETS",
      text: "Maximize your space with fully customized closets and wardrobe systems. Designed to match your lifestyle and aesthetic preferences, with precision fittings and luxury finishes.",
    },
    {
      id: 2,
      title: "KITCHEN SOLUTIONS",
      text: "Transform your kitchen into a culinary showcase with bespoke cabinetry, integrated storage, and premium materials. Functionality and beauty, perfectly balanced.",
    },
    {
      id: 3,
      title: "WALL CLADDING",
      text: "Enhance your interiors with elegant wall cladding. Choose from a variety of textures and finishes to create feature walls and refined living spaces.",
    },
    {
      id: 4,
      title: "DOORS",
      text: "Premium interior and exterior doors crafted to complement your space. Engineered for durability, soundproofing, and visual appeal.",
    },
  ],
};

interface JoineryServiceProps {}

const iconMapping: Record<number, React.ReactElement> = {
  1: <GiClothes size={65} color="var(--primary)" />,
  2: <GiCookingPot size={65} color="var(--primary)" />,
  3: <GiBrickWall size={65} color="var(--primary)" />,
  4: <GiDoor size={65} color="var(--primary)" />,
};

const JoineryServiceSingle: React.FC<{ service: ServiceItem }> = ({
  service,
}) => {
  const { id, title, text } = service;
  return (
    <Col xl={6} lg={6} md={6} sm={12} className="animated fadeInUp mb-4">
      <div className="services-one__single text-center h-100 d-flex flex-column justify-content-between p-4 rounded shadow-sm bg-white">
        {/* <div className="services-one__single-icon mb-3">
          {iconMapping[id] || null}
        </div> */}
        <h2 style={{ fontSize: "20px", color: "var(--primary-dark)" }}>
          <Link
            href="/services-single-1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {title}
          </Link>
        </h2>
        {/* <div
          className="text"
          style={{ fontSize: "15px", color: "var(--secondary)" }}
        >
          <TextSplit text={text} as="p" />
        </div> */}
      </div>
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
          {/* <p
            className="sec-title__text"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "var(--secondary)",
            }}
          >
            {JoineryServiceData.text}
          </p> */}
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
