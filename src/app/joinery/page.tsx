import React from "react";
import Mainlayout from "../../component/Mainlayout";
import JoinerSlider from "@/element/JoinerSlider";
import YourProject from "@/component/YourProject";
import JoineryAbout from "@/component/JoineryAbout";
import JoineryStat from "@/component/JoineryStat";
import JoineryService from "@/component/JoineryService";
import JoineryMaterial from "@/component/JoineryMaterial";

const Joinery = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white" style={{ overflow: "hidden" }}>
        <JoinerSlider />
        <YourProject />
        <JoineryAbout />
        <JoineryStat />
        <JoineryService />
        <JoineryMaterial />
      </div>
    </Mainlayout>
  );
};

export default Joinery;
