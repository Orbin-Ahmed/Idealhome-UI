import Image from "next/image";
import React from "react";
import IMAGES from "../component/theme";

const UpvcProduct = () => {
  return (
    <>
      <div className="container w-75">
        <p className="mt-5 text-center fs-3 fw-bold">
          Our <span className="text-primary">Door & Window</span>
        </p>

        <div className="row mt-4 text-center">
          <div className="col-sm-4 d-flex flex-column align-items-center">
            <Image
              src={IMAGES.AboutImage1}
              width="320"
              height="230"
              alt="Anthracite grey"
              className="img-fluid"
            />
            <p className="mt-2 fw-bold">Item 1</p>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center">
            <Image
              src={IMAGES.AboutImage1}
              width="320"
              height="230"
              alt="Brushed aluminium"
              className="img-fluid"
            />
            <p className="mt-2 fw-bold">Item 1</p>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center">
            <Image
              src={IMAGES.AboutImage1}
              width="320"
              height="230"
              alt="Walnut"
              className="img-fluid"
            />
            <p className="mt-2 fw-bold">Item 1</p>
          </div>
        </div>

        <div className="row mt-4 text-center">
          <div className="col-sm-4 d-flex flex-column align-items-center">
            <Image
              src={IMAGES.AboutImage1}
              width="320"
              height="230"
              alt="Alux white aluminium"
              className="img-fluid"
            />
            <p className="mt-2 fw-bold">Item 1</p>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center">
            <Image
              src={IMAGES.AboutImage1}
              width="320"
              height="230"
              alt="Bronze platinum"
              className="img-fluid"
            />
            <p className="mt-2 fw-bold">Item 1</p>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center">
            <Image
              src={IMAGES.AboutImage1}
              width="320"
              height="230"
              alt="Dark grey SFTN"
              className="img-fluid"
            />
            <p className="mt-2 fw-bold">Item 1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpvcProduct;
