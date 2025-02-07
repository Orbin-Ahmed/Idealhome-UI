"use client"
import Image from 'next/image';

import Link from 'next/link';
import { motion } from "framer-motion";
import IMAGES from '../component/theme';



const projectData = [
    {name:'Concept', number:'1'},
    {name:'Idea', number:'2'},
    {name:'Design', number:'3'},
    {name:'Excecution', number:'4'},
];

interface Props {
  setOpen: (open: boolean) => void;
}

// const WatchUs = ({setOpen}:{setOpen:any} ) => {
const WatchUs: React.FC<Props> = ({ setOpen }) => {
  
    return (
        <div className="dz-content-inner bg-gray"             
            style={{backgroundImage: `url(${IMAGES.Pattern1.src})`, backgroundRepeat:"no-repeat", 
                backgroundPosition:'right'
            }}
        >
        <div className="container">
            <div className="row">
              <div className="col-lg-6">
                  <div className="video-bx content-media style-1">
                      <Image src={IMAGES.VideoePic1} alt="" />
                        <motion.div className="video-btn aos-item" 
                            initial={{ opacity: 0, y: "-10%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1 }}
                        >
                          <Link href="#"
                              scroll={false} 
                              className="popup-youtube"
                              onClick={()=>{setOpen(true)}}
                            ><i className="flaticon-play" />
                          </Link>
                        </motion.div>
                  </div>
              </div>
              <div className="col-lg-6 inner-content">
                  <div className="section-head style-1">
                      <h2 className="title">WATCH US HOW WE  <span className="text-primary">CREATE YOUR DREAM</span></h2>
                      <div className="dz-separator style-1 text-primary"></div>
                  </div>
                  <div className="row">
                    {projectData.map((item, i)=>(
                        <motion.div className="col-lg-12 col-md-6"  key={i}
                            initial={{ opacity: 0, y: "-10%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1 }}
                        >
                            <div className="icon-bx-wraper style-2 left m-b50">
                                <div className="icon-bx-md icon-bx m-r20">
                                    {item.number} 
                                </div>
                                <div className="icon-content">
                                    <h4 className="title m-b0">{item.name}</h4>
                                    <div className="dz-separator style-2 bg-primary"></div>
                                    <p>Maecenas eget commodo risus. Praesent facilisis iaculis dapibus. Donec ac cursus est, ut vehicula enim.</p>
                                </div>
                            </div>
                        </motion.div>
                      ))}
                  </div>
              </div>
            </div>
          </div>
          
      </div>
    );
};

export default WatchUs;