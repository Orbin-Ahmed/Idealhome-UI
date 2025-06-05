"use client";

import React from "react";
import IMAGES from "../component/theme";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="section-head style-1 text-center">
        <h2 className="title">
          WELCOME TO <span className="text-primary">IDEAL FACTORY</span>
        </h2>
        <div className="dz-separator style-1 text-primary"></div>
      </div>
      <div className="row align-items-center about-bx1">
        <div className="col-lg-6 m-b30">
          <div className="dz-media">
            <Image src={IMAGES.AboutPic2} alt="about2" className="img1" />
            <motion.div
              className="img2"
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1 }}
            >
              <Image src={IMAGES.AboutPic1} alt="about1" />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "-10%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 1 }}
          className="col-lg-6 m-b30"
        >
          <h4 className="title">
            Premium Joinery & uPVC with Free Professional 3D Design
          </h4>
          <div className="year-exp shadow m-b30">
            {/* <h2 className="year text-primary">20+</h2> */}
            <h4 className="text">
              {/* YEARS OF <span className="text-primary">EXPERIENCE</span> |
              <span> Partnered with Schúco, Germany's Innovation Leader</span> */}
              Transform your villa with elegant joinery and German uPVC windows
              — all in one seamless, hassle-free package.
            </h4>
          </div>
          <p className="m-b15">
            At Ideal Factory, we specialize Seamless Excellence from Design to
            Handover - Crafting Premium Interior Joinery and Installing
            High-Performance uPVC Doors and Windows with Superior Quality and
            Precision. Our solutions offer superior thermal insulation,
            durability, and noise reduction, ensuring luxury custom joinery and
            state-of-the-art window systems designed for the UAE&apos;s climate.
            <br />
            <br />
            Experience the perfect blend of efficiency, durability, and design
            excellence contact us today for a free consultation!
          </p>
          <p className="m-b30"></p>
          <Link
            href="/about-us"
            className="btn shadow-primary btn-primary w-100 btn-quote-2"
          >
            Reserve Your Expert Design Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
