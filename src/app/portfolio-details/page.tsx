"use client"

import Image from 'next/image';
import Link from 'next/link';
import LightGallery from 'lightgallery/react';
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from 'lightgallery/plugins/zoom';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';

import Pagebanner from '../../element/Pagebanner';
import IMAGES from '../../component/theme';
import Mainlayout from '../../component/Mainlayout';

const workcardBlog = [
    {image: IMAGES.WorkPic4 , name:"INTERIOR DESIGN"},
    {image: IMAGES.WorkPic7 , name:"ARCHITECTURAL"},
    {image: IMAGES.WorkPic8 , name:"CONTRACTOR"},
];

const PortfolioDetail = () => {
    const [modelOpen, setModelOpen] = useState<boolean>(false)
    return (
        <Mainlayout>
            <div className="page-content bg-white">
                <div className="dz-bnr-inr style-1 overlay-white-dark" style={{backgroundImage: `url(${IMAGES.BanerImg1.src})`}}>
                    <Pagebanner parent="Home" currenttitle='Portfolio Detail' maintitle='PORTFOLIO DETAIL' />
                </div>
                <section className="content-inner port-detail lightgallery line-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-b30 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <h2 className="title m-b0">We Help You Buildng The Dreams & Bring More Than You Expect</h2>
                            </div>
                            <div className="col-lg-4 m-b30 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <ul className="info-list">
                                    <li>
                                        <h2 className="text-primary">100%</h2>
                                        <span>Work Completed</span>
                                    </li>
                                    <li>
                                        <h2 className="text-primary">250</h2>
                                        <span>Workers Have Done</span>
                                    </li>
                                    <li>
                                        <h2 className="text-primary">480</h2>
                                        <span>In Days Completed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <LightGallery
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            selector=".open"
                            elementClassNames='row m-b15'
                        >
                            <div className="col-lg-3 col-6 m-b30 open" data-exthumbimage={IMAGES.WorkPic9.src} data-src={IMAGES.WorkPic9.src}>                                
                                <Image src={IMAGES.WorkPic9}  alt="img1"  className="" />                                
                            </div>
                            
                            <div className="col-lg-3 col-6 m-b30 open" data-exthumbimage={IMAGES.WorkPic10.src} data-src={IMAGES.WorkPic10.src}>                                
                                <Image src={IMAGES.WorkPic10} alt="img2" className=""/>                                
                            </div>
                            <div className="col-lg-6 col-12 m-b30 open" data-exthumbimage={IMAGES.WorkPic11.src} data-src={IMAGES.WorkPic11.src}>                                
                                <Image src={IMAGES.WorkPic11} alt="img3" className="" />                                
                            </div>                        
                        </LightGallery>                        
                        <div className="row m-b15">				
                            <div className="col-lg-6">
                                <p>Nunc id orci bibendum, pulvinar magna eu, egestas mauris. Fusce augue nibh, rutrum sit amet bibendum eu, fringilla eget odio. Vestibulum quis sodales tortor. Integer sagittis nisi et commodo semper.</p>
                                <p className="m-b30">Maecenas sit amet luctus magna, in placerat ante. Donec et elit metus. Morbi faucibus nibh erat, ac dictum nisi aliquet sit amet. Nullam at elit nisi. Donec non ex elementum, auctor elit a, vehicula mauris. Etiam varius faucibus tortor quis iaculis.</p>
                                <div className="icon-bx-wraper style-7 left m-b30">
                                    <div className="icon-bx-sm rounded-0 bg-primary">
                                        <span className="icon-cell"><i className="flaticon-placeholder" /></span> 
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title m-b10">Project Location</h4>
                                        <p>#8901 Marmora Road Chi, Vietnam</p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper style-7 left m-b30">
                                    <div className="icon-bx-sm rounded-0 bg-primary">
                                        <span className="icon-cell"><i className="flaticon-telephone" /></span> 
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title m-b10">Call Us</h4>
                                        <p>+91 123 456 7890</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 text-center">
                                <Image className="m-b15" src={IMAGES.WorkPic12} alt="" />
                                <h5>FLOOR PLAN</h5>
                            </div>
                        </div>
                        <div className="row m-b15">
                            <div className="col-sm-6 m-b30 aos-item">
                                <span data-exthumbimage={IMAGES.WorkPic13.src} data-src={IMAGES.WorkPic13.src} className="lightimg" title="ARCHITECTURAL">
                                    <Image src={IMAGES.WorkPic13} alt="" />
                                </span>
                            </div>
                            <div className="col-sm-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                <span data-exthumbimage={IMAGES.WorkPic14.src} data-src={IMAGES.WorkPic14.src} className="lightimg" title="ARCHITECTURAL">
                                    <Image src={IMAGES.WorkPic14} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum a metus a fermentum. Proin rutrum, mauris quis aliquet suscipit, mauris ex imperdiet erat, ac tristique lorem nibh vitae orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate sit amet sapien eget varius. Morbi tristique felis quis tortor porta, sit amet mattis ipsum tempus.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div className="video-bx style-1 video-section aos-item" 
                    style={{backgroundImage: `url(${IMAGES.VideoeImage1.src})`}}
                >
                    <div className="video-btn">
                        <Link href="#" scroll={false}
                            onClick={() => setModelOpen(true)}
                            className="popup-youtube"
                        >
                            <i className="flaticon-play" />
                        </Link>
                    </div>
                </div>
                <section className="content-inner line-img lightgallery">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h2 className="title">RELATED <span className="text-primary">WORKS</span></h2>
                            <div className="dz-separator style-1 text-primary"></div>
                        </div>
                        <LightGallery
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            selector=".open"
                            elementClassNames='row'
                        >
                            {workcardBlog.map((item, i)=>(
                                <div className="col-lg-4 col-sm-6 aos-item" key={i}>
                                    <div className="dz-box overlay style-1 m-b30">
                                        <div className="dz-media">
                                            <Image src={item.image} alt={item.name} />
                                        </div>
                                        <div className="dz-info">
                                            <span data-exthumbimage={item.image.src} data-src={item.image.src} className="view-btn open" title={item.name}>
                                                <Image src={item.image} alt={item.name} className='d-none' />
                                            </span>
                                            <h6 className="sub-title">{item.name}</h6>
                                            <h4 className="title m-b15"><Link href="#" scroll={false}>Modern House Interior <span>New York</span></Link></h4>
                                        </div>
                                    </div>
                                </div>
                            ))}                                                   
                        </LightGallery>
                    </div>
                </section>
                <ModalVideo channel='youtube'             
                    isOpen={modelOpen} videoId="4UdeL0kdMMs" onClose={() => setModelOpen(false)} 
                />
            </div>
        </Mainlayout>
    );
};

export default PortfolioDetail;