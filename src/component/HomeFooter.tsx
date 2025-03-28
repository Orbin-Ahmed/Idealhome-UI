"use client";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import IMAGES from "./theme";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const HomeFooter = () => {
  let currtyear = new Date().getFullYear();
  const form = useRef(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gfykn6i",
        "template_iy1pb0b",
        e.target as HTMLFormElement,
        "HccoOtZS6GHw-N-m6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    (e.target as HTMLFormElement).reset();
  };
  return (
    <footer className="site-footer style-1">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-10">
              <div className="footer-logo logo-dark">
                <Image src={IMAGES.logo} alt="logo" className="w-auto" />
              </div>
              <div className="mail-text">
                <h4>
                  Upgrade Your Villa with Premium uPVC Windows & Hinged Doors
                  Today!
                </h4>{" "}
                <p>
                  🏡 Experience a perfect blend of luxury, security, and energy
                  efficiency with Keystone uPVC Windows.
                </p>
                <h4 className="mail-text">
                  📞 <span className="text-primary">Call us at</span>{" "}
                  <b>xxx xxxxx</b>
                </h4>
                <h5 className="mail-text">
                  📍{" "}
                  <Link
                    target="_blank"
                    href="https://maps.app.goo.gl/ockyuupeE6zuiy56A"
                  >
                    Visit Our Factory Showroom
                  </Link>
                </h5>
                <p>
                  <motion.button
                    name="submit"
                    type="submit"
                    className="btn btn-primary"
                    initial={{ opacity: 0, x: "-60%" }}
                    whileInView={{ opacity: 1, x: "0%" }}
                    transition={{ duration: 1 }}
                  >
                    Schedule a Free Consultation Reserve Now
                  </motion.button>
                </p>
              </div>

              {/* <div className="ft-subscribe">
                <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
                  <div className="dzSubscribeMsg"></div>
                  <div className="input-group">
                    <input
                      name="dzEmail"
                      required
                      type="email"
                      className="form-control"
                      placeholder="ENTER YOUR EMAIL"
                    />
                    <motion.button
                      name="submit"
                      type="submit"
                      className="btn btn-primary"
                      initial={{ opacity: 0, x: "-60%" }}
                      whileInView={{ opacity: 1, x: "0%" }}
                      transition={{ duration: 1 }}
                    >
                      SUBSCRIBE NOW
                      <i className="m-l10 fas fa-caret-right" />
                    </motion.button>
                  </div>
                </form>
              </div> */}

              <h4 className="mail-text">
                <span className="text-primary">EMAIL:</span> INFO@GMAIL.COM
              </h4>
              <ul className="footer-link">
                <li>
                  <Link href="#" scroll={false}>
                    PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <Link href="#" scroll={false}>
                    TEAM & CONDITION
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  Footer Bottom  */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 text-start">
              <span className="copyright-text">
                Copyright © {currtyear}{" "}
                <Link
                  href="https://dexignzone.com/"
                  className="text-primary"
                  target="_blank"
                >
                  Ideal Home Furniture Factory
                </Link>{" "}
                All rights reserved.
              </span>
            </div>
            <div className="col-lg-6 col-md-5 text-end">
              <ul className="social-list style-1">
                <li>
                  <Link href="#" scroll={false}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href="#" scroll={false}>
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#" scroll={false}>
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#" scroll={false}>
                    <i className="fab fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
