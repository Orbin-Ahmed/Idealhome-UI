import React from "react";
import Image from "next/image";

type ColumnCardProps = {
  image: string;
  description: string;
  flipFlag: boolean;
};

const ColumnCard = ({ image, description, flipFlag }: ColumnCardProps) => {
  return (
    <div
      className={`row align-items-center mt-4 p-4 bg-gray rounded-lg shadow-lg ${
        flipFlag ? "flex-row-reverse" : ""
      }`}
    >
      <div className="col-md-3 text-center">
        <Image
          src={image}
          width={280}
          height={300}
          alt="window"
          className="img-fluid"
        />
      </div>
      <div className="col-md-9">
        <p className="fs-6 fw-medium">{description}</p>
      </div>
    </div>
  );
};

export default ColumnCard;
