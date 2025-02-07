"use client"

import Link from 'next/link';
import Image from 'next/image';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import IMAGES from '../component/theme';
import { useState } from 'react';

const TabDataBlog = [
  { title: "All" },
  { title: "Architecture" },
  { title: "Interior Design" },
  { title: "Construction" },
];

const galleryBlog = [
    {image:IMAGES.WorkPic3, coloumn:'All Interior Design  Architecture'},
    {image:IMAGES.WorkPic6, coloumn:'All Architecture'},
    {image:IMAGES.WorkPic4, coloumn:'All  Construction'},
    {image:IMAGES.WorkPic5, coloumn:'All Construction '},
    {image:IMAGES.WorkPic2, coloumn:'All Architecture Interior Design'},
    {image:IMAGES.WorkPic1, coloumn:'All '},
]

const MasonaryBlog = () => {
    const [galleryData, setGalleryData] = useState(galleryBlog);
    const [active, setActive] = useState("All");
    const FilterButton = (title: string) => {
        setActive(title);
        const updateitems = galleryBlog.filter((el) =>
            el.coloumn.includes(title)
        );
        setGalleryData(updateitems);
    };
    return (
        <>
            <div className="container">
                <div className="site-filters style-1 clearfix center">
                    <ul className="filters" data-toggle="buttons">                           
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
            <LightGallery                    
                selector={'.lightimg'}                    
                speed={500}
                plugins={[lgThumbnail]}                    
            >
                <div className="clearfix">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 590: 2, 1199: 4}}
                    >
                        <Masonry                             
                            className=" spno lightgallery masonary-style"                            
                        >
                            {galleryData.map((item, i)=>(
                                <li className="card-container  architecture" key={i}>
                                    <div className="dz-box overlay style-1">
                                        <div className="dz-media">
                                            <Image src={item.image} alt="" className=''/>
                                        </div>
                                        <div className="dz-info">
                                            <span  data-src={item.image.src} className="view-btn  lightimg" title="INTERIOR DESIGN">
                                                <Image src={item.image} alt="" className='d-none' />
                                            </span>
                                            <h6 className="sub-title">INTERIOR DESIGN</h6>
                                            <h4 className="title m-b15"><Link href="/portfolio-details">Modern House Interior <span>New York</span></Link></h4>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </Masonry>   
                    </ResponsiveMasonry>                    
                </div>  
            </LightGallery>
        </>
    );
};

export default MasonaryBlog;