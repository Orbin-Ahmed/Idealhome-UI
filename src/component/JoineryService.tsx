"use client";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GiCookingPot, GiRolledCloth, GiWoodPile } from "react-icons/gi";
import TextSplit from "./TestSplit";

interface ServiceItem {
  id: number;
  title: string;
  text: string;
}

const JoineryServiceData = {
  title: "Services We Provide",
  text: "Our design services starts and ends with a best in class experience \n strategy that builds brands.",
  services: [
    {
      id: 1,
      title: "Carpet Removal",
      text: "Fusce dapibus, tellus ac cursus co \n mmodo,tortor mauris condimen \n tum nibh, ut fermentum",
    },
    {
      id: 2,
      title: "Kitchen Strip Outs",
      text: "Fusce dapibus, tellus ac cursus co \n mmodo,tortor mauris condimen \n tum nibh, ut fermentum",
    },
    {
      id: 3,
      title: "Timber Floor Removal",
      text: "Fusce dapibus, tellus ac cursus co \n mmodo,tortor mauris condimen \n tum nibh, ut fermentum",
    },
  ],
};

interface JoineryServiceProps {}

const iconMapping: Record<number, React.ReactElement> = {
  1: <GiRolledCloth size={85} />,
  2: <GiCookingPot size={85} />,
  3: <GiWoodPile size={85} />,
};

const JoineryServiceSingle: React.FC<{ service: ServiceItem }> = ({
  service,
}) => {
  const { id, title, text } = service;
  return (
    <Col xl={4} lg={4} className="animated fadeInLeft">
      <div className="services-one__single text-center">
        <div className={`services-one__single-icon bg${id}`}>
          {iconMapping[id] || null}
        </div>
        <h2>
          <Link href="/services-single-1">{title}</Link>
        </h2>
        <div className="text">
          <TextSplit text={text} as="p" />
        </div>
      </div>
    </Col>
  );
};

const JoineryService: React.FC<JoineryServiceProps> = () => {
  return (
    <section className="services-one clearfix">
      <Container>
        <div className="sec-title">
          <h2 className="sec-title__title">{JoineryServiceData.title}</h2>
          <p className="sec-title__text">{JoineryServiceData.text}</p>
        </div>

        <Row>
          {JoineryServiceData.services.slice(0, 3).map((service) => (
            <JoineryServiceSingle service={service} key={service.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default JoineryService;
