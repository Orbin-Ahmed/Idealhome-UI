import React from 'react';
import IMAGES from '../../component/theme';
import Pagebanner from '../../element/Pagebanner';
import Image from 'next/image';
import Link from 'next/link';
import ClientSwiper from '../../element/ClientSwiper';
import TeamSlider from '../../element/TeamSlider';
import Mainlayout from '../../component/Mainlayout';

const ServicesDetails = () => {
    return (
        <Mainlayout>
            <div className="page-content bg-white">		
                <div className="dz-bnr-inr style-1 overlay-white-dark" style={{backgroundImage: `url(${IMAGES.BanerImg4.src})`}}>
                    <Pagebanner  maintitle='SERVICE DETAILS' currenttitle='Service Details' parent="Services" />                
                </div>
                <section className="content-inner line-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 m-b30 aos-item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
                                <div className="sticky-top">
                                    <div className="widget ext-sidebar-menu">
                                        <ul className="menu">
                                            <li className="active"><Link href="#" scroll={false}>Interior Design</Link>  </li>
                                            <li><Link href="#" scroll={false}>Floor Plan Design</Link>  </li>
                                            <li><Link href="#" scroll={false}>Construction</Link>  </li>
                                            <li><Link href="#" scroll={false}>Furniture Production</Link> </li>
                                            <li><Link href="#" scroll={false}>Architecture Design</Link> </li>
                                            <li><Link href="#" scroll={false}>24X 7 Support</Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 m-b30 aos-item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                                <div className="service-detail">
                                    <div className="dz-media">
                                        <Image src={IMAGES.ServiceDetail} alt="" />
                                    </div>
                                    <div className="dz-content">
                                        <h2 className="title m-b15">Maecenas sit amet luctus magna, in placerat ante.</h2>
                                        <p>Donec non ex elementum, auctor elit a, vehicula mauris. Etiam varius faucibus tortor quis iaculis. Proin tortor eros, dignissim at velit nec, cursus gravida lectus. Pellentesque egestas nisl et lacus sollicitudin pulvinar. Donec a maximus augue,</p>
                                        <p className="m-b0">Suspendisse ornare suscipit nibh quis maximus. Praesent tristique erat eget elit finibus elementum. Suspendisse potenti. In finibus ac nulla vel tincidunt. In hac habitasse platea dictumst. Aliquam vel pulvinar lectus. Sed a risus rutrum, imperdiet lacus vehicula, egestas eros. Nullam vitae orci at diam imperdiet sagittis eu in mi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="clients-section-1 bg-gray line-img">
                    <div className="container">
                        <ClientSwiper />
                    </div>
                </div>
                <section className="content-inner section-title line-img style-2" data-name="Our Team">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h2 className="title">CREATIVE <span className="text-primary">EXPERTISE</span></h2>
                            <div className="dz-separator style-1 text-primary"></div>
                        </div>
                        <TeamSlider />
                    </div>    
                </section>    
            </div>
        </Mainlayout>
    );
};

export default ServicesDetails;