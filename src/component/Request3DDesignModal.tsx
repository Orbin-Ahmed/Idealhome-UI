"use client";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Request3DDesignModalProps {
  show: boolean;
  handleClose: () => void;
}

const Request3DDesignModal: React.FC<Request3DDesignModalProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      dialogClassName="request-3d-design-modal" // Add custom class for extra styling
    >
      <Modal.Body className="p-0 d-flex flex-column flex-lg-row">
        {/* Form */}
        <div
          className="p-5 flex-fill"
          style={{
            background: "#ffffff",
            borderRadius: "12px 0 0 12px",
          }}
        >
          <h4 className="mb-4" style={{ color: "var(--primary-dark)" }}>
            Request Your Free 3D Design
          </h4>
          <Form>
            <Form.Group controlId="formName" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                style={{ borderRadius: "8px", padding: "12px" }}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{ borderRadius: "8px", padding: "12px" }}
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                style={{ borderRadius: "8px", padding: "12px" }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{ padding: "12px", borderRadius: "8px" }}
            >
              Submit Request
            </Button>
          </Form>
        </div>

        {/* Contact Info */}
        <div
          className="p-5 flex-fill d-flex flex-column justify-content-center"
          style={{
            background: "#f9f9f9",
            borderLeft: "1px solid #e0e0e0",
            borderRadius: "0 12px 12px 0",
          }}
        >
          <h5 className="mb-3" style={{ color: "var(--primary-dark)" }}>
            Contact Us
          </h5>
          <p
            className="mb-2"
            style={{ fontSize: "15px", color: "var(--secondary)" }}
          >
            📞 Phone: +971-123-4567
          </p>
          <p
            className="mb-2"
            style={{ fontSize: "15px", color: "var(--secondary)" }}
          >
            ✉️ Email: info@idealfactory.com
          </p>
          <p style={{ fontSize: "15px", color: "var(--secondary)" }}>
            🏠 Office: Dubai Design District, UAE
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Request3DDesignModal;
