import React from "react";
import Mainlayout from "../../component/Mainlayout";
import YourProject from "@/component/YourProject";
import JoineryAbout from "@/component/JoineryAbout";
import JoineryService from "@/component/JoineryService";
import CustomSliderV1 from "@/component/CustomSliderV1";
import DoorFinishesSection from "@/component/DoorFinishesSection";
import DoorFinishFeatureSection from "@/component/DoorFinishFeatureSection";

const images = [
  "https://placehold.co/800x800?text=door+1",
  "https://placehold.co/800x800?text=door+2",
  "https://placehold.co/800x800?text=door+3",
  "https://placehold.co/800x800?text=door+4",
  "https://placehold.co/800x800?text=door+5",
  "https://placehold.co/800x800?text=door+6",
];

const doorFeatures = [
  {
    title: "LAMINATED",
    subtitle: "With European Woods",
    images: [
      "https://placehold.co/600x300?text=Laminated+1",
      "https://placehold.co/600x300?text=Laminated+2",
    ],
    textPosition: "left" as const,
  },
  {
    title: "STAINED VENEER",
    subtitle: "Natural wood grain",
    images: [
      "https://placehold.co/600x300?text=Veneer+1",
      "https://placehold.co/600x300?text=Veneer+2",
    ],
    textPosition: "right" as const,
  },
  {
    title: "PAINTED SMOOTH FINISH",
    subtitle: "In matt",
    images: [
      "https://placehold.co/600x300?text=Painted+1",
      "https://placehold.co/600x300?text=Painted+2",
    ],
    textPosition: "left" as const,
  },
  {
    title: "SOLID",
    subtitle: "Natural solid wood",
    images: [
      "https://placehold.co/600x300?text=Painted+1",
      "https://placehold.co/600x300?text=Painted+2",
    ],
    textPosition: "right" as const,
  },
];

const Door = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white" style={{ overflow: "hidden" }}>
        <CustomSliderV1
          images={images}
          subText=""
          title={
            <>
              Our Design,
              <br />
              Your Choice.
            </>
          }
        />

        <section
          className="py-5"
          style={{
            backgroundColor: "#f8f9fa",
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div className="container">
            {/* Main Headline */}
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "var(--primary-dark)",
                marginBottom: "20px",
              }}
              className="text-start"
            >
              CLASSIC, MODERN AND CUSTOMIZED WOODEN DOORS
            </h2>

            {/* Sub Headline */}
            <h4
              className="text"
              style={{
                fontSize: "20px",
                fontWeight: "400",
                color: "#555",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              At Ideal Home, our wooden doors reflect craftsmanship, blending
              strength, elegance, and versatility. Designed to elevate any space
              — from classic and traditional to sleek and modern — each door is
              a statement of enduring quality.
              <p className="mt-3">
                With limitless configurations and premium finishes, our doors
                bring warmth, character, and a tailored aesthetic to every home.
              </p>
            </h4>
          </div>
        </section>

        <DoorFinishesSection />

        <DoorFinishFeatureSection features={doorFeatures} />
      </div>
    </Mainlayout>
  );
};

export default Door;
