import React from "react";
import Image from "next/image";
import Link from "next/link";

const FourReasons = () => {
  return (
    <div className="bg-gradient py-5 mt-5">
      <div className="container">
        <div className="text-center">
          <p className="fw-bold fs-3">
            Why Choose <span className="text-primary">Schüco?</span>
          </p>
          <p className="fw-semibold fs-2 mt-3 caveat-font fst-italic">
            By choosing Schüco you are getting everything from a single source
          </p>
          <p className="fw-medium fs-6 mt-3">
            With windows, doors, and sliding doors from Schüco, you have the
            freedom to design your home down to the last detail, whether it is a
            new build or a renovation or refurbishment project. Our products,
            which include the profile (Special hot country compound), steel,
            hardware, and accessories, offer quality, innovation, and
            durability.
          </p>
          <Image
            src="fourReason.svg"
            alt="window"
            width={1000}
            height={500}
            className="img-fluid mt-4"
          />
          <p className="fw-bold fs-2 mt-5">4 Great Reasons</p>
          <p className="fs-5 text-opacity-75">
            to choose Schüco windows, doors, and sliding doors
          </p>
        </div>
        <div className="row text-center mt-5">
          <div className="col-md-3">
            <Image
              src="group_40.svg"
              alt="window"
              width={150}
              height={150}
              className="img-fluid"
            />
            <p className="fs-4 mt-2">INNOVATION</p>
          </div>
          <div className="col-md-3">
            <Image
              src="group_39.svg"
              alt="window"
              width={150}
              height={150}
              className="img-fluid"
            />
            <p className="fs-4 mt-2">CONFIDENCE</p>
          </div>
          <div className="col-md-3">
            <Image
              src="group_38.svg"
              alt="window"
              width={150}
              height={150}
              className="img-fluid"
            />
            <p className="fs-4 mt-2">QUALITY</p>
          </div>
          <div className="col-md-3">
            <Image
              src="group_37.svg"
              alt="window"
              width={150}
              height={150}
              className="img-fluid"
            />
            <p className="fs-4 mt-2">PASSION</p>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link
            href="about-us"
            className="btn shadow-primary btn-primary mt-2 rounded-md"
          >
            Reserve Your Expert Design Consultation{" "}
          </Link>
          <p className="fw-semibold fs-3 mt-5 caveat-font fst-italic">
            Know more about the products
          </p>
        </div>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <Image
              src="Rectangle 16.png"
              alt="window"
              width={280}
              height={340}
              className="img-fluid mb-3"
            />
            <p className="fs-4 fw-bold">Windows</p>
          </div>
          <div className="col-md-4">
            <Image
              src="Rectangle 17.png"
              alt="window"
              width={280}
              height={340}
              className="img-fluid mb-3"
            />
            <p className="fs-4 fw-bold">Doors</p>
          </div>
          <div className="col-md-4">
            <Image
              src="Rectangle 18.png"
              alt="window"
              width={280}
              height={340}
              className="img-fluid mb-3"
            />
            <p className="fs-4 fw-bold">Sliding Doors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourReasons;
