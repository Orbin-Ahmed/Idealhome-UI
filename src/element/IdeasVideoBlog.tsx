"use client"
import { useState } from "react";
import IMAGES from "../component/theme";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from 'react-modal-video';

const clientLogo = [
    {image1: IMAGES.LogoGray1, image2:IMAGES.LogoOrange1},
    {image1: IMAGES.LogoGray2, image2:IMAGES.LogoOrange2},
    {image1: IMAGES.LogoGray3, image2:IMAGES.LogoOrange3},
    {image1: IMAGES.LogoGray4, image2:IMAGES.LogoOrange4},
    {image1: IMAGES.LogoGray5, image2:IMAGES.LogoOrange5},
    {image1: IMAGES.LogoGray1, image2:IMAGES.LogoOrange1},
    {image1: IMAGES.LogoGray2, image2:IMAGES.LogoOrange2},
    {image1: IMAGES.LogoGray3, image2:IMAGES.LogoOrange3},
    {image1: IMAGES.LogoGray4, image2:IMAGES.LogoOrange4},
    {image1: IMAGES.LogoGray5, image2:IMAGES.LogoOrange5},
];

const IdeasVideoBlog = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <>
            <section className="content-inner overlay-white-dark" 
                style={{backgroundImage:`url(${IMAGES.BackBgImg5.src})`, backgroundPosition:'left top', backgroundSize:'cover', backgroundRepeat:"no-repeat"}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="video-bx content-media style-3 m-b20">
                                <div className="video-btn">
                                    <Link href="#" scroll={false} className="popup-youtube"
                                        onClick={() => setOpenModal(true)}
                                    >
                                        <i className="fas fa-play" />
                                    </Link>
                                </div>
                            </div>
                            <div className="section-head style-1 text-center">
                                <h2 className="title">WE HAVE GREAT IDEAS <br/>WITH DREMS</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="client-logo-wrapper">
                                {clientLogo.map((item, i)=>(
                                    <div className="clients-logo aos-item" key={i}>
                                        <Image className="logo-main" src={item.image1} alt="" />
                                        <Image className="logo-hover" src={item.image2} alt="" />
                                    </div>
                                ))}                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube'             
                isOpen={openModal} videoId="4UdeL0kdMMs" onClose={() => setOpenModal(false)} 
            />
        </>
    );
};

export default IdeasVideoBlog;