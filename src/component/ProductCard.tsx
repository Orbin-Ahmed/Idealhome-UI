"use client";

import Link from "next/link";
import React from "react";

interface ProductCardProps {
  title: string;
  image: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, link }) => {
  return (
    <Link
      href={link}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
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
          cursor: "pointer",
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

      {/* Hover effect */}
      <style jsx>{`
        .hover-scale:hover {
          transform: scale(1.03);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </Link>
  );
};

export default ProductCard;
