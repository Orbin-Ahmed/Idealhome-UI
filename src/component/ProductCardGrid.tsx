"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

interface ProductCardGridProps {
  products: {
    title: string;
    image: string;
    link: string;
  }[];
}

const ProductCardGrid: React.FC<ProductCardGridProps> = ({ products }) => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container>
        <Row className="mt-4">
          {products.map((product, index) => (
            <Col key={index} xl={4} lg={4} md={6} sm={12} className="mb-4">
              <ProductCard title={product.title} image={product.image} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductCardGrid;
