"use client"
import {motion} from 'framer-motion';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import IMAGES from '../component/theme';
import Image from 'next/image';
import Link from 'next/link';

const LatestWorkGallery = () => {
    return (
        <LightGallery
            selector={'.lightimg'}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <motion.ul  className="row lightgallery" 
                initial={{ opacity: 0, y: "15%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1 }}
            >
                <li className="card-container col-xl-6 col-md-6 col-sm-6 m-b30">
                    <div className="dz-box overlay style-2">
                        <div className="dz-media" style={{backgroundImage: `url(${IMAGES.work2img1.src})`}}>
                            <span data-src={IMAGES.work2img1.src} className="view-btn lightimg" title="ARCHITECTURAL">
                                <Image src={IMAGES.work2img1} alt="" className='d-none '/>
                            </span>
                        </div>
                        <div className="dz-info">
                            <span className="line"></span>
                            <div>
                                <h4 className="title"><Link href="/blog-details">Mordern Living Room</Link></h4>
                                <h6 className="sub-title text-primary">Landscape, Urban</h6>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card-container col-xl-6 col-md-6 col-sm-6 m-b30">
                    <div className="dz-box overlay style-2">
                        <div className="dz-media" style={{backgroundImage: `url(${IMAGES.work2img2.src})`}}>
                            <span data-src={IMAGES.work2img2.src} className="view-btn lightimg" title="ARCHITECTURAL">
                                <Image src={IMAGES.work2img2} alt="" className='d-none'/>
                            </span>
                        </div>
                        <div className="dz-info">
                            <span className="line"></span>
                            <div>
                                <h4 className="title"><Link href="/blog-details">Mordern Living Room</Link></h4>
                                <h6 className="sub-title text-primary">Landscape, Urban</h6>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card-container col-xl-4 col-md-6 col-sm-6 m-b30">
                    <div className="dz-box overlay style-2">
                        <div className="dz-media" style={{backgroundImage: `url(${IMAGES.work2img3.src})`}}>
                            <span data-src={IMAGES.work2img3.src} className="view-btn lightimg" title="BUILDINGS">
                                <Image src={IMAGES.work2img3} alt="" className='d-none'/>
                            </span>
                        </div>
                        <div className="dz-info">
                            <span className="line"></span>
                            <div>
                                <h4 className="title"><Link href="/blog-details">Mordern Living Room</Link></h4>
                                <h6 className="sub-title text-primary">Landscape, Urban</h6>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card-container col-xl-4 col-md-6 col-sm-6 m-b30">
                    <div className="dz-box overlay style-2">
                        <div className="dz-media" style={{backgroundImage: `url(${IMAGES.work2img4.src})`}}>
                            <span data-src={IMAGES.work2img4.src} className="view-btn lightimg" title="BUILDINGS">
                                <Image src={IMAGES.work2img4} alt="" className='d-none'/>
                            </span>
                        </div>
                        <div className="dz-info">
                            <span className="line"></span>
                            <div>
                                <h4 className="title"><Link href="/blog-details">Mordern Living Room</Link></h4>
                                <h6 className="sub-title text-primary">Landscape, Urban</h6>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card-container col-xl-4 col-md-6 col-sm-6 m-b30">
                    <div className="dz-box overlay style-2">
                        <div className="dz-media" style={{backgroundImage: `url(${IMAGES.work2img5.src})`}}>
                            <span data-src={IMAGES.work2img5.src} className="view-btn lightimg" title="INTERIOR">
                                <Image src={IMAGES.work2img5} alt="" className='d-none'/>
                            </span>
                        </div>
                        <div className="dz-info">
                            <span className="line"></span>
                            <div>
                                <h4 className="title"><Link href="/blog-details">Mordern Living Room</Link></h4>
                                <h6 className="sub-title text-primary">Landscape, Urban</h6>
                            </div>
                        </div>
                    </div>
                </li>
            </motion.ul>
        </LightGallery>
    );
};

export default LatestWorkGallery;