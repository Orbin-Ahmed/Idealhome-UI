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
  title: "About Ideal Home Solutions Interior company",
  text: "Slando is a full-service landscape company. Our established systems allow us to deliver industry-leading landscape \n solutions to commercial and residential clients.",
  text2: "Additional text for about two variant if needed",
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
  aboutTwo = false,
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
  } = aboutData;

  return (
    <>
      <section className={`about-one ${className}`}>
        <Container>
          <Row>
            <Col xl={6}>
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
            </Col>
            <Col xl={6}>
              <div className="about-one__content">
                <div className="sec-title">
                  {tagline && (
                    <span className="sec-title__tagline">{tagline}</span>
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
                  </>
                )}
                <ul className="about-one__content-list">
                  {lists.slice(0, count).map(({ id, icon, title }) => (
                    <li key={id}>
                      <img src={icon} />
                      <div className="title">
                        <h3>{title}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
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
