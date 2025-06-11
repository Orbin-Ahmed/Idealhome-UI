import React from "react";
import Mainlayout from "../../component/Mainlayout";
import YourProject from "@/component/YourProject";
import JoineryAbout from "@/component/JoineryAbout";
import JoineryService from "@/component/JoineryService";
import CustomSliderV1 from "@/component/CustomSliderV1";

const images = [
  "https://placehold.co/800x800?text=Kitchen with Island",
  "https://placehold.co/800x800?text=Gally Kitchen",
  "https://placehold.co/800x800?text=U-Shaped Kitchen",
  "https://placehold.co/800x800?text=Pantry Kitchen",
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
        <YourProject />
        <JoineryAbout />
        <JoineryService />
      </div>
    </Mainlayout>
  );
};

export default Joinery;
