"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ProductCardProps {
  title: string;
  image: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, link }) => {
  return (
    <Link href={link} className="block no-underline">
      <div
        className="
        border border-gray-300
        rounded-lg
        overflow-hidden
        h-full
        flex flex-col justify-between
        transition-transform duration-200 ease-in-out
        hover:scale-105 hover:shadow-lg
        cursor-pointer
      "
      >
        {/* Image Section */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <Image src={image} alt={title} fill />
        </div>

        {/* Title */}
        <div className="px-4 py-3 text-center">
          <h5 className="text-lg font-medium text-black mb-0">{title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
