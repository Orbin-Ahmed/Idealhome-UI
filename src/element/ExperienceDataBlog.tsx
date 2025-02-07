"use client"
import Image from "next/image";
import {motion} from 'framer-motion'
import CountUp from "react-countup";
import Link from "next/link";
import IMAGES from "../component/theme";

const yearExperience = [
    {number:10, title1:'Years Of', title2:'Experience'},
    {number:25, title1:'Awards', title2:'Gained'},
    {number:50, title1:'Furniture', title2:'Sold'},
];

const ExperienceDataBlog = () => {
    return (
         <div className="row align-items-center about-bx2">
            <div className="col-lg-6 m-b30">
                <motion.div className="dz-media"
                    initial={{ opacity: 0, y: "15%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    transition={{ duration: 1 }}
                >
                    <Image src={IMAGES.Aboutpic3} alt="" className="img1" />
                    <Image src={IMAGES.Pattern3} className="circle-bg" alt="" />
                </motion.div>
            </div>
            <div className="col-lg-6 m-b30 aos-item" data-aos="fade-in" data-aos-duration="800" data-aos-delay="400">
                <div className="section-head style-1">
                    <h2 className="title">WE PROVIDE YOU THE BEST EXPERIENCE</h2>
                </div>
                <p>Integer pretium, nisi at aliquam faucibus, ligula leo sollicitudin ligula, a scelerisque magna nunc sit amet leo. Cras lobortis elementum orci, in lobortis velit gravida vel. In hac habitasse platea dictumst.</p>
                <div className="history-row m-b30">
                    {yearExperience.map((item, i)=>(
                        <div key={i}>
                            <h2 className="year">                                                                                        
                                <CountUp end={item.number} duration={5} className="counter"/>
                                +
                            </h2>
                            <span className="text">{item.title1} <br/>{item.title2}</span>
                        </div>
                    ))}                                
                </div>
                <Link href="/about-us" className="btn shadow-primary btn-primary">READ MORE <i className="m-l10 las la-plus" /></Link>
            </div>
        </div>
    );
};

export default ExperienceDataBlog;