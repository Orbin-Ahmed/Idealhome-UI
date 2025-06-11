import React from "react";
import Mainlayout from "../../component/Mainlayout";
import YourProject from "@/component/YourProject";
import JoineryAbout from "@/component/JoineryAbout";
import JoineryService from "@/component/JoineryService";
import JoinerSliderV1 from "@/component/JoinerSliderV1";

const Joinery = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white" style={{ overflow: "hidden" }}>
        {/* <JoinerSlider /> */}
        <JoinerSliderV1 />
        <YourProject />
        <JoineryAbout />
        <JoineryService />
        {/* <JoineryMaterial /> */}
        {/* <!-- Contact US Form --> */}
        {/* <ContactUSComponent /> */}
      </div>
    </Mainlayout>
  );
};

export default Joinery;
