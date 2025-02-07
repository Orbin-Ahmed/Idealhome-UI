"use client"
import React from "react";
import Pagebanner from "../../element/Pagebanner";
import IMAGES from "../../component/theme";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Mainlayout from "../../component/Mainlayout";

const teamBlog = [
    {name:'Andrey Carol', image: IMAGES.TeamPic1},
    {name:'Rebecca Ruth', image: IMAGES.TeamPic2},
    {name:'Austin Doe', image: IMAGES.TeamPic3},
    {name:'Lala Rose', image: IMAGES.TeamPic4},
    {name:'Andrey Carol', image: IMAGES.TeamPic5},
    {name:'Rebecca Ruth', image: IMAGES.TeamPic6},
    {name:'Austin Doe', image: IMAGES.TeamPic7},
    {name:'Lala Rose', image: IMAGES.TeamPic8},
]

const Team = () => {
  return (
    <Mainlayout>
        <div className='page-content bg-white'>
        <div className='dz-bnr-inr style-1 overlay-white-dark' style={{ backgroundImage: `url(${IMAGES.BanerImg6.src})` }}>
            <Pagebanner maintitle='OUR TEAM' currenttitle='Team' parent='Home' />
        </div>
        <section className='content-inner line-img'>
            <div className='container'>
            <div className='row'>
                {teamBlog.map((item,i)=>(
                    <div className='col-xl-3 col-lg-4 col-sm-6' key={i}>
                        <motion.div className='dz-team style-1 text-center overlay-shine m-b30'
                            initial={{ opacity: 1, y: "15%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1 }}
                        >
                            <div className='dz-media shadow'>
                            <Link href='#' scroll = {false}>
                                <Image src={item.image} alt='' />
                            </Link>
                            <ul className='team-social'>
                                <li>
                                    <Link href='#' scroll = {false}>
                                        <i className='fab fa-facebook-f'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' scroll = {false}>
                                        <i className='fab fa-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' scroll = {false}>
                                        <i className='fab fa-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' scroll = {false}>
                                        <i className='fab fa-youtube'></i>
                                    </Link>
                                </li>
                            </ul>
                            </div>
                            <div className='dz-content'>
                                <h5 className='dz-name'>
                                    <Link href='#' scroll = {false}>{item.name}</Link>
                                </h5>
                                <h6 className='dz-position text-primary'>Director</h6>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
            </div>
        </section>
        </div>
    </Mainlayout>
  );
};

export default Team;
