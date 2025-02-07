"use client"

import React from 'react';
import IMAGES from '../component/theme';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

const AboutUs = () => {
    return (
        
        <div className="container">
            <div className="section-head style-1 text-center">
                <h2 className="title">WELCOME TO <span className="text-primary">CODESIGN</span></h2>
                <div className="dz-separator style-1 text-primary"></div>
            </div>
            <div className="row align-items-center about-bx1">
                <div className="col-lg-6 m-b30">
                    <div className="dz-media">                       
                        <Image src={IMAGES.AboutPic2} alt="about2" className="img1" />                       
                        <motion.div className="img2" 
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
                    <h4 className="title">We Design & Create Best Architect Around The World With Inspiration</h4>
                    <div className="year-exp shadow m-b30">
                        <h2 className="year text-primary">25+</h2>
                        <h4 className="text">YEARS OF <span className="text-primary">EXPERIENCE</span></h4>
                    </div>
                    <p className="m-b15">Aliquam erat volutpat. Nunc erat massa, porttitor vel egestas sit amet, tristique at massa. Donec posuere odio neque, in ultricies lorem aliquet eu. Donec venenatis libero a nulla placerat egestas. Etiam condimentum tortor vel faucibus aliquam. Sed et auctor orci. Morbi nec cursus quam.</p>
                    <p className="m-b30">Praesent eu suscipit ex, quis pulvinar sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    <Link href="/about-us" className="btn shadow-primary btn-primary">READ MORE <i className="m-l10 fas fa-caret-right" /></Link>
                </motion.div>
            </div>
        </div>
      
    );
};

export default AboutUs;