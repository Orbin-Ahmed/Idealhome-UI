import Image from "next/image";
import React from "react";

const ProductHero_1 = () => {
  return (
    <div className="container my-5 pt-5">
      <div className="mx-auto w-100 w-lg-80">
        <div className="mt-4 d-flex flex-column align-items-center justify-content-between gap-4 flex-sm-row">
          <div className="d-flex flex-column align-items-center justify-content-center w-50">
            <div className="w-100 text-left">
              <h5 className="fw-bold caveat-font fst-italic">
                Looking for a Stylish, Durable, and Elegant Home Interior?
              </h5>
              <h3 className="mt-4 fw-bold">
                Discover <span className="fs-4">Keystone Joinery's</span> <br />
                Premium Custom Joinery Solutions.
              </h3>
              <p className="mt-4 fw-bold">
                Achieve Your Dream Home Environment by Leveraging Our Expertise
                in High-Quality, Custom-Made Joinery for Doors, Cabinets, and
                Interiors.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center w-50">
            <Image
              src="joinery.jpg"
              alt="Emirati"
              className="img-fluid"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="mt-5 d-flex flex-column align-items-center justify-content-center gap-2 flex-md-row">
          <div className="d-flex flex-md-fill align-items-center justify-content-between gap-4">
            <div className="d-flex align-items-center">
              <Image
                src="green_tick.svg"
                alt="tick"
                width="24"
                height="18"
                className="me-2"
              />
              <p className="fs-6 mb-0">
                Enjoy a Sand and Dust-Free Environment
              </p>
            </div>
            <div className="d-flex align-items-center">
              <Image
                src="green_tick.svg"
                alt="tick"
                width="24"
                height="18"
                className="me-2"
              />
              <p className="fs-6 mb-0">
                Benefit from Superior Thermal and Heat Insulation
              </p>
            </div>
          </div>
          <div className="d-flex flex-fill align-items-center justify-content-center">
            <Image
              src="green_tick.svg"
              alt="tick"
              width="24"
              height="18"
              className="me-2"
            />
            <p className="fs-6 mb-0">
              Experience Waterproof and Airtight Protection
            </p>
          </div>
        </div>
        <div className="mt-4 d-flex align-items-center justify-content-center gap-4 mt-md-5">
          <div className="d-flex flex-fill align-items-center justify-content-center">
            <Image
              src="green_tick.svg"
              alt="tick"
              width="24"
              height="18"
              className="me-2"
            />
            <p className="fs-6 mb-0">Near to Zero Maintenance</p>
          </div>
          <div className="d-flex flex-fill align-items-center justify-content-center">
            <Image
              src="green_tick.svg"
              alt="tick"
              width="24"
              height="18"
              className="me-2"
            />
            <p className="fs-6 mb-0">
              Exceptional Noise Reduction Capabilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero_1;
