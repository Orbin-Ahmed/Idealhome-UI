"use client";
import Image from "next/image";
import IMAGES from "../component/theme";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const progressData = [
  { name: "ARCHITECTURE", percent: "90%" },
  { name: "3D DESIGN", percent: "80%" },
  { name: "INTERIOR DESIGN", percent: "95%" },
];

const ProductVideoSection = () => {
  const [isOpenV1, setOpenV1] = useState<boolean>(false);
  const [isOpenV2, setOpenV2] = useState<boolean>(false);
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Video 1  */}
        <div className="col-lg-6 m-b30">
          <div className="video-bx content-media style-1">
            <Image src={IMAGES.VideoePic1} alt="" />
            <motion.div
              className="video-btn aos-item"
              initial={{ opacity: 0, y: "-10%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1 }}
            >
              <Link
                href="#"
                scroll={false}
                className="popup-youtube"
                onClick={() => {
                  setOpenV1(true);
                }}
              >
                <i className="flaticon-play" />
              </Link>
            </motion.div>
          </div>
          <ModalVideo
            channel="youtube"
            isOpen={isOpenV1}
            videoId="9cp-HugtbHo"
            onClose={() => setOpenV1(false)}
          />
        </div>
        <div className="col-lg-6 m-b30">
          {/* <div className="section-head style-1">
            <h2 className="title">
              DISTINCTIVE INTERIOR{" "}
              <span className="text-primary">FOR SPECIAL IDEAS</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <p className="m-b30">
            Fusce accumsan felis sed purus sollicitudin posuere. Vivamus id
            pharetra augue. Phasellus molestie ornare lacus mattis iaculis.
            Nulla dui dui, convallis et venenatis id, condimentum ut justo.
          </p>
          {progressData.map((item, i) => (
            <div className="progress-bx style-1 m-b40" key={i}>
              <div className="progress-info">
                <h6 className="title">{item.name}</h6>
                <h4 className="progress-value">{item.percent}</h4>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: item.percent }}
                ></div>
              </div>
            </div>
          ))} */}

          <div className="video-bx content-media style-1">
            <Image src={IMAGES.VideoePic1} alt="" />
            <motion.div
              className="video-btn aos-item"
              initial={{ opacity: 0, y: "-10%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1 }}
            >
              <Link
                href="#"
                scroll={false}
                className="popup-youtube"
                onClick={() => {
                  setOpenV2(true);
                }}
              >
                <i className="flaticon-play" />
              </Link>
            </motion.div>
          </div>
          <ModalVideo
            channel="youtube"
            isOpen={isOpenV2}
            videoId="gAtnGVS4UZk"
            onClose={() => setOpenV2(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductVideoSection;
