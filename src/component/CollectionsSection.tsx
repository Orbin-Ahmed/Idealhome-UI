"use client";

import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Item {
  title: string;
  image: string;
  link: string;
}

interface CollectionsSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  kitchens: Item[];
  ctaAction?: () => void;
  ctaText: string;
  screenSize?: number;
}

const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  kitchens,
  ctaText,
  ctaAction,
  screenSize = 3,
}) => {
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
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h4
            style={{
              fontWeight: "600",
              color: "var(--primary-dark)",
              fontSize: "28px",
              marginBottom: "10px",
            }}
          >
            {sectionTitle}
          </h4>
          <p
            style={{
              fontSize: "18px",
              color: "#555",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {sectionSubtitle}
          </p>
        </div>

        {/* Kitchen Cards */}
        <Row className="mt-4">
          {kitchens.map((kitchen, index) => (
            <Col
              xl={screenSize}
              lg={screenSize}
              md={6}
              sm={12}
              className="mb-4"
              key={index}
            >
              <Link
                href={kitchen.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.2s ease",
                  }}
                  className="hover-scale"
                >
                  <div
                    style={{
                      width: "100%",
                      height: "220px",
                      backgroundImage: `url(${kitchen.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Optional overlay text could go here */}
                  </div>

                  <div
                    style={{
                      padding: "15px 10px",
                      textAlign: "center",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "var(--primary-dark)",
                        marginBottom: "0",
                      }}
                    >
                      {kitchen.title}
                    </h5>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 400,
            marginBottom: "20px",
          }}
          className="mt-3"
        >
          <strong>See It Before It's Built</strong> — Free 3D design lets you
          explore and perfect your closet layout before we start production.
        </p>

        {ctaText && ctaAction && (
          <div className="text-center mt-4">
            <button
              onClick={ctaAction}
              className="btn shadow-primary btn-primary rounded-sm btn-quote"
              style={{ minWidth: "220px" }}
            >
              {ctaText}
            </button>
          </div>
        )}
      </Container>

      {/* Optional hover effect styling */}
      <style jsx>{`
        .hover-scale:hover {
          transform: scale(1.03);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default CollectionsSection;
