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
        <div className="col-lg-4 m-b30">
          <div className="video-bx content-media style-1">
            <Image
              src={IMAGES.UpvcVideoThumb}
              width={500}
              height={500}
              alt=""
            />
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

        {/* Content Here  */}
        <div className="col-lg-4 m-b30">
          <h3>
            Premium uPVC Windows & Hinged Doors for Luxury Villas in the UAE
          </h3>
          <p>
            At Keystone uPVC Windows, a brand of Ideal Factory, we provide
            high-quality, German-engineered Schüco uPVC windows and doors
            designed specifically for luxury villas across the UAE. Our
            solutions deliver exceptional durability, energy efficiency, noise
            reduction, and security, ensuring a comfortable and stylish living
            experience.
          </p>
          <Link
            href="about-us"
            className="btn shadow-primary btn-primary w-100 btn-quote"
          >
            Reserve Your Expert Design Consultation{" "}
          </Link>
        </div>

        {/* video 2  */}
        <div className="col-lg-4 m-b30">
          <div className="video-bx content-media style-1">
            <Image
              src={IMAGES.UpvcVideoThumb}
              width={500}
              height={500}
              alt=""
            />
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
