"use client";

import React from "react";
import Link from "next/link";

interface GalleryItem {
  type: "image" | "description";
  image?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface KitchenGalleryProps {
  items: GalleryItem[];
}

const CustomImagePos: React.FC<KitchenGalleryProps> = ({ items }) => {
  return (
    <section className="pt-5 pb-3">
      <div className="container">
        <div
          className="kitchen-gallery-wrapper"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {items[0] && (
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "transparent",
                }}
              >
                {items[0].type === "image" && items[0].image && (
                  <img
                    src={items[0].image}
                    alt="Kitchen Image"
                    style={{
                      width: "100%",
                      height: "250px",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            )}

            {items[1] && (
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "transparent",
                }}
              >
                {items[1].type === "image" && items[1].image && (
                  <img
                    src={items[1].image}
                    alt="Kitchen Image"
                    style={{
                      width: "100%",
                      height: "250px",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {items[2] && (
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  backgroundColor: "#f9f9f9",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {items[2].type === "description" && (
                  <>
                    <h5
                      style={{
                        fontWeight: "700",
                        color: "var(--primary-dark)",
                        marginBottom: "10px",
                        fontSize: "18px",
                      }}
                    >
                      {items[2].title}
                    </h5>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#555",
                        marginBottom: "15px",
                        lineHeight: "1.5",
                      }}
                    >
                      {items[2].description}
                    </p>
                    {items[2].ctaText && items[2].ctaLink && (
                      <Link
                        href={items[2].ctaLink}
                        style={{
                          fontSize: "14px",
                          color: "var(--primary)",
                          fontWeight: "500",
                        }}
                      >
                        {items[2].ctaText} →
                      </Link>
                    )}
                  </>
                )}
              </div>
            )}

            {items[3] && (
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "transparent",
                }}
              >
                {items[3].type === "image" && items[3].image && (
                  <img
                    src={items[3].image}
                    alt="Kitchen Image"
                    style={{
                      width: "100%",
                      height: "300px",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "20px",
            }}
          >
            {items[4] && (
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "transparent",
                }}
              >
                {items[4].type === "image" && items[4].image && (
                  <img
                    src={items[4].image}
                    alt="Kitchen Image"
                    style={{
                      width: "100%",
                      height: "250px",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            )}

            {items[5] && (
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "transparent",
                }}
              >
                {items[5].type === "image" && items[5].image && (
                  <img
                    src={items[5].image}
                    alt="Kitchen Image"
                    style={{
                      width: "100%",
                      height: "250px",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            )}
          </div>

          <style jsx>{`
            @media (max-width: 768px) {
              .kitchen-gallery-wrapper > div {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default CustomImagePos;
