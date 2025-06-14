import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface FeatureItem {
  title: string;
  text: string;
}

interface DynamicFeatureSectionProps {
  sectionTitle: string;
  features: FeatureItem[];
  ctaText?: string;
  ctaAction?: () => void;
}

const DynamicFeatureSection: React.FC<DynamicFeatureSectionProps> = ({
  sectionTitle,
  features,
  ctaText,
  ctaAction,
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
        {/* Section Title */}
        <div className="text-center mb-4">
          <h4
            style={{
              fontWeight: "600",
              color: "var(--primary-dark)",
              fontSize: "28px",
              marginBottom: "30px",
            }}
          >
            {sectionTitle}
          </h4>
        </div>

        {/* Features */}
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

        {/* CTA Button */}
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
    </section>
  );
};

export default DynamicFeatureSection;
