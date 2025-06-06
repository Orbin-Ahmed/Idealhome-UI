"use client";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TextSplit from "./TestSplit";
import Request3DDesignModal from "./Request3DDesignModal";

interface ProjectItem {
  id: number;
  title: string;
  text: string;
  image?: string;
}

export const yourProject = [
  {
    id: 1,
    title: "Unleash the Luxury Within Your Home",
    text: "Ideal Factory's Premium Joinery Solutions bring bespoke craftsmanship to every corner of your interior - custom kitchens, walk-in closets, dressing rooms, built-in libraries, TV units, interior doors and more.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Immediate 3D Design Previews,  Zero Upfront Commitment",
    text: "At Ideal Factory, we bring your vision to life before you ever spend a Dirham. You will visualize a fast and realistic 3D model of your new kitchen, wardrobe, or living space without paying or committing to anything upfront.",
    image: "https://placehold.co/600x400",
  },
];

const YourProject: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="your-project-one">
      <Row>
        <Col xl={12}>
          <div className="your-project-one__wrapper">
            {yourProject.map(({ id, title, text, image }: ProjectItem) => (
              <div key={id} className="your-project-card mb-4">
                {image && (
                  <div className="your-project-card__image">
                    <img src={image} alt={title} />
                  </div>
                )}

                <div className="your-project-card__content">
                  <TextSplit text={title} as="h2" />
                  <TextSplit text={text} as="p" />
                </div>
              </div>
            ))}
          </div>

          {/* External Button */}
          <div className="text-center mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="btn shadow-primary btn-primary rounded-sm btn-quote"
              style={{ minWidth: "220px" }}
            >
              Request Free 3D Design
            </button>
          </div>

          {/* Modal Component */}
          <Request3DDesignModal
            show={showModal}
            handleClose={() => setShowModal(false)}
          />
        </Col>
      </Row>
    </section>
  );
};

export default YourProject;
