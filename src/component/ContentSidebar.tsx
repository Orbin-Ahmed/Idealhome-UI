"use client";
import Image from "next/image";
import IMAGES from "./theme";
import { useContext } from "react";
import { Context } from "./ThemContaxt";
import Link from "next/link";

const ContentSidebar = () => {
  const {
    leftSidebar,
    setleftSidebar,
    // isDarkMode, setIsDarkMode
  } = useContext(Context);

  return (
    <>
      <div className={`contact-sidebar ${leftSidebar ? "active" : ""}`}>
        {/* <div onClick={() => setIsDarkMode(!isDarkMode)}> Light| Dark</div> */}
        <div className="contact-box">
          <div className="logo-contact logo-dark">
            <Link href="/">
              <Image src={IMAGES.logo} alt="" />
            </Link>
          </div>

          <div className="m-b50 contact-text">
            <div className="dz-title">
              <h4>About US</h4>
              <div className="dz-separator style-1 text-primary mb-0"></div>
            </div>
            <p>
              At Ideal Factory, we specialize in precision-crafted joinery and
              high-performance uPVC windows and doors. Partnering with Schüco,
              Germany's leader in energy-efficient uPVC systems, we bring German
              precision and UAE-tailored design to your home. Our solutions
              offer superior thermal insulation, durability, and noise
              reduction, ensuring luxury custom joinery and state-of-the-art
              window systems designed for the UAE's climate.
            </p>
            <Link href="/about-us" className="btn btn-primary btn-sm">
              READ MORE
            </Link>
          </div>
          <div className="dz-title">
            <h4>Contact Info</h4>
            <div className="dz-separator style-1 text-primary mb-0"></div>
          </div>
          <div className="icon-bx-wraper left">
            <div className="icon-md m-r20">
              <span className="icon-cell">
                <i className="las la-phone-volume" />
              </span>
            </div>
            <div className="icon-content">
              <h5 className="tilte">Call Now</h5>
              <p className="m-b0">
                +91 123 456 7890,
                <br /> +91 987 654 3210
              </p>
            </div>
          </div>
          <div className="icon-bx-wraper left">
            <div className="icon-md m-r20">
              <span className="icon-cell">
                <i className="las la-envelope-open" />
              </span>
            </div>
            <div className="icon-content">
              <h5 className="tilte">Location</h5>
              <p className="m-b0">info@gmail.com, services@gmail.com</p>
            </div>
          </div>
          <div className="icon-bx-wraper left">
            <div className="icon-md m-r20">
              <span className="icon-cell">
                <i className="las la-map-marker" />
              </span>
            </div>
            <div className="icon-content">
              <h5 className="tilte">Email Now</h5>
              <p className="m-b0">15/B Miranda House, New York, US</p>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-close" onClick={() => setleftSidebar(false)}></div>
    </>
  );
};

export default ContentSidebar;
