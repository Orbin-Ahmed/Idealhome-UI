"use client";

import React from "react";
import ProductCard from "./ProductCard";

export interface Product {
  title: string;
  image: string;
  link: string;
}

interface ProductCardGridProps {
  products: Product[];
}

const ProductCardGrid: React.FC<ProductCardGridProps> = ({ products }) => {
  return (
    <section className="py-8 bg-white  border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TWO-COLUMN GRID */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              image={product.image}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardGrid;
