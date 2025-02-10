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
            Crafting Premium Architectural Solutions in the UAE: UPVC Excellence
            & Bespoke Joinery
          </h4>
          <div className="year-exp shadow m-b30">
            <h2 className="year text-primary">20+</h2>
            <h4 className="text">
              YEARS OF <span className="text-primary">EXPERIENCE</span> |
              <span> Partnered with Schúco, Germany's Innovation Leader</span>
            </h4>
          </div>
          <p className="m-b15">
            At Ideal Factory, we combine German engineered precision from Schuco
            with our decades of expertise to deliver high-performance UPVC
            doors, windows, and luxury joinery. Designed to meet the UAE&apos;s
            unique architectural demands, our solutions feature heat resistant
            UPVC technology, timeless design, and unmatched craftsmanship,
            transforming both residential and commercial spaces. From Abu
            Dhabi&apos;s luxury villas to modern architectural masterpieces, we
            elevate every project with innovation and quality.
          </p>
          <p className="m-b30"></p>
          <Link
            href="/about-us"
            className="btn shadow-primary btn-primary w-100 btn-quote"
          >
            REQUEST FOR A QUOTE TODAY
            {/* <i className="m-l10 fas fa-caret-right" /> */}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
