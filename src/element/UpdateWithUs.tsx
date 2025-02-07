
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMAGES from '../component/theme';

const widgetBlog = [
    {image: IMAGES.RecentBlog5},
    {image: IMAGES.RecentBlog6},
    {image: IMAGES.RecentBlog7},
];


const UpdateWithUs = () => {
    return (
         <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <div className="section-head style-1">
                        <h2 className="title">STAY UPDATED WITH US</h2>
                    </div> 
                </div>
                <div className="col-md-4 text-md-end text-start m-b30">
                    <Link href={"#"} scroll={false} className="btn-link style-2" >VIEW MORE <i className="m-l5 las la-plus" /></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="dz-card blog-grid style-2 m-b50">
                        <div className="dz-media m-b20">
                            <Link href="blog-details"><Image src={IMAGES.BlogGridPic4} alt=""/></Link>
                            <div className="dz-meta">
                                <ul>
                                    <li className="post-date">7 March 2024</li>
                                    <li className="post-user">By <Link href="#" scroll={false}>John Doe</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dz-info p-0">
                            <h5 className="dz-title"><Link href="/blog-details">Pellentesque pulvinar ultricies vestibulum estibulum faucibus, arcu id aliquet aliquam.</Link></h5>
                            <div className="dz-post-text text">
                                <p>Nam ut elit mauris. In sed tempus neque, eu aliquam sem. Duis libero ligula, dapibus id dui eget, porttitor scelerisque velit. Suspendisse aliquam elementum massa sed.</p>
                            </div>
                            <Link href="#" scroll={false} className="btn-link style-2">READ MORE <i className="m-l5 las la-plus" /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="widget recent-posts-entry style-2">
                        <div className="widget-post-bx">
                            {widgetBlog.map((item,i)=>(
                                <div className="widget-post clearfix" key={i}>
                                    <div className="dz-media"> 
                                        <Link href="/blog-details"><Image src={item.image} alt="" /></Link>
                                    </div>
                                    <div className="dz-info">
                                        <h5 className="title"><Link href="/blog-details">Aliquam luctus mattis el sollicitudin lacus dapibus non.</Link></h5>
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-date">7 March 2024</li>
                                                <li className="post-user">By <Link href="#" scroll={false}>John Doe</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateWithUs;