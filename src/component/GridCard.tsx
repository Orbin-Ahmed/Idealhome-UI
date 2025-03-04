import Image from "next/image";
import React from "react";

type GridCardProps = {
  title: string;
  subTitle: string;
  image: string;
  boldText?: string;
};

const GridCard = ({ title, subTitle, boldText, image }: GridCardProps) => {
  return (
    <div className="col-md-6 mb-4 d-flex">
      <div className="card shadow-lg rounded-3 bg-white d-flex flex-column w-100 h-100">
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center mb-3 fs-5 fw-bold">
            <Image
              src="green_circle.svg"
              alt="CT Profile"
              width={44}
              height={44}
              className="me-2"
            />
            <span>{title}</span>
          </div>
          <div className="text-center">
            <Image
              src={image}
              alt="CT Profile"
              width={466}
              height={327}
              className="img-fluid"
            />
          </div>
          <div className="mt-3 text-justify fs-6 fw-medium">
            {subTitle}
            {boldText && <p className="mt-3 fs-5 fw-bold">{boldText}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
