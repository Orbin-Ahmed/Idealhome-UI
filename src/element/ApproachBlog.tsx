"use client"

import {motion} from 'framer-motion'
import Image from 'next/image';
import IMAGES from '../component/theme';

const progressBlog = [
    {percent:'80%', title:'Design'},
    {percent:'90%', title:'Architech'},
    {percent:'70%', title:'Planing'},
];

const ApproachBlog = () => {
    return (
        <div className="row align-items-center about-bx2">
            <motion.div className="col-lg-6 m-b30" 
                initial={{ opacity: 0, y: "15%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1 }}
            >
                <div className="section-head style-1">
                    <h2 className="title">ARCHITACTS WITH DIFFERENT APPROACH</h2>
                </div>
                {progressBlog.map((item,i)=>(
                    <div className="progress-bx style-3 m-b40" key={i}>
                        <div className="progress-info">
                            <h4 className="title">{item.title}</h4>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: item.percent}}>
                                <h5 className="progress-value">{item.percent}</h5>
                            </div>
                        </div>
                    </div>
                ))}                          
            </motion.div>
            <div className="col-lg-6 m-b30">
                <div className="dz-media right">
                    <Image src={IMAGES.AboutPic4} alt="" className="img1"  />
                    <Image src={IMAGES.Pattern3} className="circle-bg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ApproachBlog;