"use client";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "./TestSplit";
import ModalVideo from "react-modal-video";

interface ImageData {
  src: string;
}

interface ListItem {
  id: number;
  icon: string;
  title: string;
}

const aboutData = {
  shape1: { src: "/backgrounds/about-v1-shape1.png" },
  image1: { src: "/backgrounds/about-v1-img1.jpg" },
  image2: { src: "/backgrounds/about-v1-img2.jpg" },
  videoId: "p25gICT63ek",
  tagline: "Why Choose Us",
  title: "Premium Joinery Solutions",
  text: "We use premium materials - from solid hardwoods and high-grade MDF to Erupean malmine, laminates, veneer, premuim coutner tops, and accessories for cabinets - selecting each element to achieve a rich, cohesive look.",
  text2:
    "The finish options are virtually limitless, whether you prefer classic walnut wood tones, modern glossy lacquer, or eco-friendly textured laminates. \n We also incorporate quality hardware (soft-close hinges, elegant handles, LED lighting) to add that extra touch of luxury and convenience.",
  text3:
    "Each installation is built to furniture-grade standards and rigorously quality-checked, giving you joinery that not only looks stunning but is durable enough to last for decades without warping or wear.",
  lists: [
    {
      id: 1,
      icon: "/backgrounds/wood.png",
      title: "Hardwood Floor Repair",
    },
    {
      id: 2,
      icon: "/backgrounds/satisfaction.png",
      title: "Custom projects with unique designs",
    },
    {
      id: 3,
      icon: "/backgrounds/kitchen.png",
      title: "We bring our showroom to your home.",
    },
  ],
};

interface AboutOneProps {
  className?: string;
  aboutTwo?: boolean;
  listCount?: number;
}

const JoineryAbout: React.FC<AboutOneProps> = ({
  className = "",
  aboutTwo = true,
  listCount,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const count = listCount ?? aboutData.lists.length;

  const {
    shape1,
    image1,
    image2,
    videoId,
    tagline,
    title,
    text,
    lists,
    text2,
    text3,
  } = aboutData;

  return (
    <>
      <section className={`about-one ${className}`}>
        <Container>
          <Row>
            {/* <Col xl={6}>
              <div className="about-one__img">
                <div className="shape1 animated zoom-fade">
                  <Image src={shape1.src} alt="Shape" />
                </div>
                <div className="about-one__img1">
                  <Image src={image1.src} alt="Image One" />
                </div>
                <div className="about-one__img2">
                  <div className="video-icon">
                    <a
                      onClick={() => setOpen(true)}
                      className="video-popup animated zoomIn"
                      title="Video"
                    >
                      <span className="icon-play-button-3"></span>
                    </a>
                  </div>
                  <Image src={image2.src} alt="Image Two" />
                </div>
              </div>
            </Col> */}
            <Col xl={12}>
              <div className="about-one__content">
                <div className="sec-title">
                  {tagline && (
                    <span className="sec-title__tagline text-primary">
                      {tagline}
                    </span>
                  )}
                  <h2 className="sec-title__title">{title}</h2>
                </div>
                {!aboutTwo ? (
                  <div className="about-one__content-text">
                    <TextSplit text={text} as="p" />
                  </div>
                ) : (
                  <>
                    <div className="about-two__content-text1">
                      <p>{text}</p>
                    </div>
                    <div className="about-two__content-text2">
                      <p>{text2}</p>
                    </div>
                    <div className="about-two__content-text2">
                      <p>{text3}</p>
                    </div>
                  </>
                )}
                {/* <ul className="about-one__content-list">
                  {lists.slice(0, count).map(({ id, icon, title }) => (
                    <li key={id}>
                      <img src={icon} />
                      <div className="title">
                        <h3>{title}</h3>
                      </div>
                    </li>
                  ))}
                </ul> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default JoineryAbout;
