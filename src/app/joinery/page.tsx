import React from "react";
import Mainlayout from "../../component/Mainlayout";
import YourProject from "@/component/YourProject";
import JoineryAbout from "@/component/JoineryAbout";
import JoineryService from "@/component/JoineryService";
import CustomSliderV1 from "@/component/CustomSliderV1";

const images = [
  "https://placehold.co/800x800?text=Wordrobe",
  "https://placehold.co/800x800?text=Kitchen",
  "https://placehold.co/800x800?text=Bedroom",
  "https://placehold.co/800x800?text=Living Room",
  "https://placehold.co/800x800?text=Majlis",
];

const Joinery = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white" style={{ overflow: "hidden" }}>
        <CustomSliderV1
          images={images}
          subText="A Complete Solution for Your Joinery Vision."
          title="Luxury Joinery Made Easy — 3D Preview, Fair Price, Flawless Finish"
        />
        <YourProject />
        <JoineryAbout />
        <JoineryService />
      </div>
    </Mainlayout>
  );
};

export default Joinery;
