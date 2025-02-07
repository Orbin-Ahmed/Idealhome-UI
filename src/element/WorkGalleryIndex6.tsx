"use client"
import Link from 'next/link';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import IMAGES from '../component/theme';
import Image from 'next/image';
import { useState } from 'react';

const TabDataBlog = [
  { title: "All" },
  { title: "Architecture" },
  { title: "Interior Design" },
  { title: "Construction" },
];
const galleryImage = [
    { image : IMAGES.FilterPic1, title:'col-xl-6 col-lg-6 col-md-6', coloumn:'All Interior Design Construction' },
    { image : IMAGES.FilterPic4, title:'col-xl-6 col-lg-6 col-md-6', coloumn:'All Architecture' },
    { image : IMAGES.FilterPic3, title:'col-xl-4 col-lg-4 col-md-4 col-sm-6', coloumn:'All Architecture Construction' },
    { image : IMAGES.FilterPic2, title:'col-xl-4 col-lg-4 col-md-4 col-sm-6', coloumn:'All Interior Design Construction' },
    { image : IMAGES.FilterPic3, title:'col-xl-4 col-lg-4 col-md-4 col-sm-6', coloumn:'All Architecture Interior Design' },
];

const WorkGalleryIndex6 = () => {    
    const [galleryData, setGalleryData] = useState(galleryImage);
    const [active, setActive] = useState("All");
    const FilterButton = (title: string) => {
        setActive(title);
        const updateitems = galleryImage.filter((el) =>
            el.coloumn.includes(title)
        );
        setGalleryData(updateitems);
    };
    return (
        <>        
            <div className="container">
                <div className="row section-head-bx align-items-center">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <div className="section-head style-2">
                            <h2 className="title">Our Latest <span className="text-primary">Work</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 text-end ">
                        <Link href="/contact-us" className="btn shadow-primary btn-primary center m-tb10 text-uppercase">View All Post</Link>
                    </div>
                </div>
                <div className="site-filters style-3 clearfix">
                    <ul className="filter-isotope change-li">
                         {TabDataBlog.map(({ title }, index) => (
                            <li
                                className={`btn ${active === title ? "active" : ""}`}
                                key={index}
                                onClick={() => {
                                    FilterButton(title);
                                }}
                            >
                                <Link href="#" scroll={false}>{title} </Link>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
            <div className="clearfix container-fluid">
                <LightGallery                    
                    selector={'.lightimg'}                    
                    speed={500}
                    plugins={[lgThumbnail,lgZoom]}
                    elementClassNames="row spno lightgallery"
                >
                    {/* <ul id="Isotope" className="row spno lightgallery"> */}
                        {galleryData.map((item, ind)=>(
                            <li className={`card-container col-sm-6 ${item.title}`} key={ind}>
                                <div className="dz-box overlay style-4">
                                    <div className="dz-media" 
                                        style={{backgroundImage: `url(${item.image.src})`}}
                                    >
                                        <span  data-src={item.image.src} className="view-btn lightimg" title="Architecture">
                                            <Image src={item.image} alt="" className='d-none'/>
                                        </span>
                                    </div>
                                    <div className="dz-info">
                                        <h6 className="title"><Link href="#" scroll={false}>Construction</Link></h6>
                                    </div>
                                </div>
                                      
                            </li>
                        ))}                        
                    {/* </ul> */}
                </LightGallery>
            </div>
        </>
    );
};

export default WorkGalleryIndex6;