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
          WELCOME TO <span className="text-primary">Ideal Factory</span>
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
            Crafting Premium Architectural Solutions in the UAE: UPVC Excellence
            & Bespoke Joinery
          </h4>
          <div className="year-exp shadow m-b30">
            <h2 className="year text-primary">20+</h2>
            <h4 className="text">
              YEARS OF <span className="text-primary">EXPERIENCE</span>
            </h4>
          </div>
          <p className="m-b15">
            At Ideal Factory, we blend innovation and craftsmanship to deliver
            high-performance UPVC doors, windows, and luxury joinery tailored to
            the UAE&apos;s unique architectural demands. From Dubai&apos;s
            modern skylines to Abu Dhabi&apos;s luxury villas, our solutions
            combine heat-resistant UPVC technology, precision engineering, and
            timeless design to elevate residential and commercial spaces.
          </p>
          <p className="m-b30"></p>
          <Link href="/about-us" className="btn shadow-primary btn-primary">
            Request a Quote Today! <i className="m-l10 fas fa-caret-right" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
