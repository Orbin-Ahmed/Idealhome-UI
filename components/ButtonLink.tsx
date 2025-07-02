"use client";
import React from "react";
import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      href={href}
      className={`
        mt-8 inline-block
        px-8 py-3
        border-2 border-brand
        text-brand font-semibold
        rounded-lg
        hover:bg-brand hover:text-white
        transition-colors duration-300
        ${className ?? ""}
      `}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
