"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import IMAGES from "../component/theme";

const projectData = [
  {
    name: "Free Design",
    number: "1",
    description:
      "Simply share your villa’s architectural drawings, and receive a free design delivered in 60 minutes.",
  },
  {
    name: "Tailored Design & Quotation",
    number: "2",
    description:
      "We present materials for you to choose from, then provide a bundle-priced quotation designed to maximize your savings.",
  },
  {
    name: "Production at Our Factory",
    number: "3",
    description:
      "After your approval, we proceed to the fabrication stage, ensuring all pieces are on time.",
  },
  {
    name: "Professional Installation",
    number: "4",
    description:
      "Your order is delivered as scheduled, with installation performed by our skilled team.",
  },
  {
    name: "Quality Assurance",
    number: "5",
    description:
      "We ensure everything meets your expectations and maintain our guarantee of quality.",
  },
];

interface Props {
  setOpen: (open: boolean) => void;
}

const WatchUs: React.FC<Props> = ({ setOpen }) => {
  return (
    <div
      className="dz-content-inner bg-gray"
      style={{
        backgroundImage: `url(${IMAGES.Pattern1.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="video-bx content-media style-1">
              <Image src={IMAGES.homeVideoThumbnail} alt="" />
              <motion.div
                className="video-btn aos-item"
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1 }}
              >
                <Link
                  href="#"
                  scroll={false}
                  className="popup-youtube"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <i className="flaticon-play" />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-6 inner-content">
            <div className="section-head style-1">
              <h2 className="title">
                <span className="text-primary">Design to Installations</span>
              </h2>
            </div>
            <div className="row">
              {projectData.map((item, i) => (
                <motion.div
                  className="col-lg-12 col-md-6"
                  key={i}
                  initial={{ opacity: 0, y: "-10%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1 }}
                >
                  <div className="icon-bx-wraper style-2 left m-b50">
                    <div className="icon-bx-md icon-bx m-r20">
                      {item.number}
                    </div>
                    <div className="icon-content">
                      <h4 className="title m-b0">{item.name}</h4>
                      <div className="dz-separator style-2 bg-primary"></div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchUs;
