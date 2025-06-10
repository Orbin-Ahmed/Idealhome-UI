import React from "react";
import Mainlayout from "../../component/Mainlayout";
import JoinerSlider from "@/element/JoinerSlider";
import YourProject from "@/component/YourProject";
import JoineryAbout from "@/component/JoineryAbout";
import JoineryService from "@/component/JoineryService";
import JoineryMaterial from "@/component/JoineryMaterial";
import ContactUSComponent from "@/component/ContactUSComponent";

const Joinery = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white" style={{ overflow: "hidden" }}>
        <JoinerSlider />
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
