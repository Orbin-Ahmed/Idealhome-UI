"use client";

import React, { useState } from "react";

interface ProductCardProps {
  title: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.2s ease",
          cursor: "pointer", // make it clear it's clickable
        }}
        className="hover-scale"
      >
        {/* Image Section */}
        <div
          style={{
            width: "100%",
            height: "220px",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Title */}
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
            {title}
          </h5>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      <style jsx>{`
        .hover-scale:hover {
          transform: scale(1.03);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default ProductCard;
