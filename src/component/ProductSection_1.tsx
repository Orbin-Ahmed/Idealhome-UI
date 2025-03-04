import Image from "next/image";
import React from "react";

type ProductSection_1Props = {
  title: string;
  subTitle: string;
  subTitle2?: string;
  caveatText: string;
  image: string;
  flipFlag: boolean;
  fixedText: string;
};

const ProductSection_1 = ({
  title,
  fixedText,
  subTitle,
  caveatText,
  subTitle2,
  image,
  flipFlag,
}: ProductSection_1Props) => {
  return (
    <div className="container my-4 p-4 bg-white rounded-md shadow-lg">
      <div
        className={`row d-flex align-items-center ${
          flipFlag ? "flex-row-reverse" : ""
        }`}
      >
        <div className="col-md-6 text-start">
          <p className="text-primary fw-bold fs-5">{fixedText}</p>
          <p className="fw-bold fs-3">{title}</p>
          <p className="mt-3 fs-6">{subTitle}</p>
          {subTitle2 && <p className="mt-3 fs-6">{subTitle2}</p>}
          <p className="mt-4 fs-4 fw-bold caveat-font">{caveatText}</p>
        </div>
        <div className="col-md-6 text-center">
          <Image
            src={image}
            alt="window"
            width={600}
            height={430}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection_1;
