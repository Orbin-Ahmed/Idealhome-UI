"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from 'next/link';
import { motion } from "framer-motion";
import IMAGES from '../component/theme';

const blogSliderData = [
    {image: IMAGES.BlogGridPic1, name:'Sed lacinia pulvinar odio, nec tempus augue.', },
    {image: IMAGES.BlogGridPic2, name:'Integer vestibulum rutrum aliquet cras rutrum.', },
    {image: IMAGES.BlogGridPic3, name:'Aenean sit amet ex nec nisl consectetur iaculis.', },
    {image: IMAGES.BlogGridPic2, name:'Sed lacinia pulvinar odio, nec tempus augue.', },
];

const BlogSlider = () => {
    return (
        
        <Swiper           
            speed = {1500}
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            autoplay = {{
                delay: 2500,
            }}                
            className="swiper-container blog-swiper"         
            modules={[Autoplay]}
            breakpoints={{
                1280: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1,
				},
				691: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
            }}
        >        
            {blogSliderData.map((item, i)=>(
                <SwiperSlide key={i}>
                    <motion.div className="dz-card blog-grid style-1"
                        initial={{ opacity: 0, y: "15%" }}
                        whileInView={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1 }}
                    >
                        <div className="dz-media">
                            <Link href="/blog-details"><Image src={item.image} alt="" /></Link>
                        </div>
                        <div className="dz-info">
                            <div className="dz-meta">
                                <ul>
                                    <li className="post-date">7 March 2024</li>
                                    <li className="post-user">By <Link href="#" scroll={false}>John Doe</Link></li>
                                </ul>
                            </div>
                            <h5 className="dz-title"><Link href="/blog-details">{item.name}</Link></h5>
                            <div className="dz-post-text text">
                                <p>Aenean ultricies ex eu nunc feugiat auctor. Donec efficitur elementum odio, convallis facilisis augue porttitor.</p>
                            </div>
                            <Link href="/blog-details" className="btn shadow-primary icon-btn btn-primary"><i className="fas fa-caret-right" /></Link>
                        </div>
                    </motion.div>
                </SwiperSlide>
            ))}            
        </Swiper>
    );
};

export default BlogSlider;