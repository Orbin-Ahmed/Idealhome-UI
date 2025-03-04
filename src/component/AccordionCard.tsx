import React from "react";
import Head from "next/head";

type AccordianCardProps = {
  text: string;
  points: string;
};

const AccordianCard = ({ text, points }: AccordianCardProps) => {
  return (
    <div className="position-relative mt-4 d-flex flex-column align-items-start ">
      <div className="d-flex w-100 align-items-center justify-content-center gap-2 rounded-lg bg-white p-3 shadow-lg">
        <p className="position-relative fs-5 fw-semibold text-center">{text}</p>
      </div>
      <div className="position-absolute start-0 translate-middle rounded-md bg-primary p-3 fs-5 fw-bold">
        {points}.
      </div>
    </div>
  );
};

export default AccordianCard;
