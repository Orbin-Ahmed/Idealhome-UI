"use client";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { GiWoodenDoor, GiWoodPile, GiHandSaw, GiChisel } from "react-icons/gi";

interface ShapeData {
  src: string;
}

interface WorkItem {
  id: number;
  icon: string;
  title: string;
}

const workOne = {
  shape: { src: "/backgrounds/work-shape.png" },
  tagline: "OUR PROCESS",
  title: "Our Concrete Finishing Services",
  works: [
    {
      id: 1,
      icon: "icon-wood-board",
      title: "Color Board",
    },
    {
      id: 2,
      icon: "icon-wood",
      title: "Dimension",
    },
    {
      id: 3,
      icon: "icon-wheel-saw",
      title: "Installation",
    },
    {
      id: 4,
      icon: "icon-chisel",
      title: "Finishing",
    },
  ],
};

interface WorkSingleProps {
  work: WorkItem;
}

// Map each work ID to a corresponding React icon element.
const iconMapping: Record<number, React.ReactElement> = {
  1: <GiWoodenDoor size={60} />,
  2: <GiWoodPile size={60} />,
  3: <GiHandSaw size={60} />,
  4: <GiChisel size={60} />,
};

const WorkSingle: React.FC<WorkSingleProps> = ({ work }) => {
  const { id, title } = work;
  return (
    <Col xl={3} lg={3} className="animated fadeInUp">
      <div className="work-one__single text-center">
        <div className={`work-one__single-icon bg${id}`}>
          {iconMapping[id] || null}
          <div className="count-box"></div>
        </div>
        <h2>
          <a href="#">{title}</a>
        </h2>
      </div>
    </Col>
  );
};

interface WorkOneProps {
  className?: string;
  showShape?: boolean;
}

const WorkOne: React.FC<WorkOneProps> = ({
  className = "",
  showShape = true,
}) => {
  return (
    <section className="work-one">
      {showShape && (
        <div className="shape1">
          <Image src={workOne.shape.src} alt="Shape" />
        </div>
      )}
      <Container>
        <div className="sec-title text-center">
          <span className="sec-title__tagline">{workOne.tagline}</span>
          <h2 className="sec-title__title">{workOne.title}</h2>
        </div>
        <Row>
          {workOne.works.map((work) => (
            <WorkSingle work={work} key={work.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WorkOne;
