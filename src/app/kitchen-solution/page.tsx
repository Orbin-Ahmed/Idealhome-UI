import React from "react";
import Mainlayout from "../../component/Mainlayout";
import YourProject from "@/component/YourProject";
import JoineryAbout from "@/component/JoineryAbout";
import JoineryService from "@/component/JoineryService";
import CustomSliderV1 from "@/component/CustomSliderV1";
import WhatYouWillLoveSection from "@/component/WhatYouWillLoveSection";
import CollectionsSection from "@/component/CollectionsSection";

const images = [
  "https://placehold.co/800x800?text=Kitchen with Island",
  "https://placehold.co/800x800?text=Gally Kitchen",
  "https://placehold.co/800x800?text=U-Shaped Kitchen",
  "https://placehold.co/800x800?text=Pantry Kitchen",
];

const kitchens = [
  {
    title: "Kitchen with Island",
    image: "https://placehold.co/600x400?text=Kitchen+with+Island",
    link: "/kitchen/kitchen-with-island",
  },
  {
    title: "Double Gally Kitchen",
    image: "https://placehold.co/600x400?text=Double+Gally+Kitchen",
    link: "/kitchen/double-gally-kitchen",
  },
  {
    title: "U-Shaped Kitchen",
    image: "https://placehold.co/600x400?text=U-Shaped+Kitchen",
    link: "/kitchen/u-shaped-kitchen",
  },
  {
    title: "Pantry Kitchen",
    image: "https://placehold.co/600x400?text=Pantry+Kitchen",
    link: "/kitchen/pantry-kitchen",
  },
];

const Joinery = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white" style={{ overflow: "hidden" }}>
        <CustomSliderV1
          images={images}
          subText=""
          title={
            <>
              Built for Living,
              <br />
              Designed for You.
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
              Customized for You
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
              Your kitchen is more than just a place to cook — it's where your
              day begins, where family connects, and where guests gather. At
              Ideal Factory, we design and build kitchens that blend function
              with beauty, tailored around how you live.
            </h4>
          </div>
        </section>
        <WhatYouWillLoveSection />
        <div id="service">
          <CollectionsSection
            sectionTitle="Our Kitchen Collections"
            sectionSubtitle="Explore 4 types of layouts — each tailored for different lifestyles, spaces, and cooking needs."
            kitchens={kitchens}
          />
        </div>
      </div>
    </Mainlayout>
  );
};

export default Joinery;
