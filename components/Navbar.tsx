"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export interface SubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subItems?: SubItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    subItems: [
      { label: "Company", href: "/company" },
      { label: "OUR PROCESS", href: "/process" },
    ],
    href: "/company",
  },
  {
    label: "ClOSETS",
    subItems: [
      { label: "Walk-In Closets", href: "/closets/walk-in-closet" },
      { label: "Reach-In Closets", href: "/closets/reach-in-closet" },
      {
        label: "Smart Storage Solutions",
        href: "/closets/smart-storage-solution",
      },
    ],
    href: "/closets",
  },
  {
    label: "KITCHENS",
    subItems: [
      { label: "Kitchen with Island", href: "/kitchens/kitchen-with-island" },
      { label: "U-Shaped Kitchen", href: "/kitchens/u-shaped-kitchen" },
      { label: "Pantry Kitchen", href: "/kitchens/pantry-kitchen" },
    ],
    href: "/kitchens",
  },
  {
    label: "DOORS",
    href: "/doors",
  },
  {
    label: "uPVC WINDOWS",
    subItems: [
      { label: "Casement", href: "/windows/casement" },
      { label: "Sliding", href: "/windows/sliding" },
    ],
    href: "/windows",
  },
  { label: "FREE DESIGN", href: "/free-design" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href?: string) => (href ? pathname === href : false);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-colors duration-300
        ${scrolled ? "bg-black bg-opacity-95" : "bg-transparent"}
      `}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/images/new_logo.png"
                alt="Company Logo"
                width={128}
                height={128}
              />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <ul
            className={`
              absolute top-full w-full bg-black bg-opacity-95
              transition-all duration-200 justify-end
              ${
                mobileOpen
                  ? "max-h-screen py-4 flex flex-col items-center"
                  : "max-h-0 overflow-hidden"
              }
              lg:static lg:max-h-full lg:flex lg:bg-transparent lg:py-0
              lg:overflow-visible lg:space-x-4
            `}
          >
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className={`relative ${
                  item.subItems ? "group" : ""
                } lg:flex-shrink-0`}
              >
                {item.subItems ? (
                  <>
                    <Link
                      href={item.href!}
                      className={`nav-link whitespace-nowrap ${
                        isActive(item.href) ||
                        item.subItems.some((si) => isActive(si.href))
                          ? "active"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>

                    <ul className="dropdown-menu lg:absolute lg:top-full lg:left-0">
                      {item.subItems.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className={`dropdown-item whitespace-nowrap ${
                              isActive(sub.href) ? "active" : ""
                            }`}
                            passHref
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className={`nav-link whitespace-nowrap ${
                      isActive(item.href) ? "active" : ""
                    }`}
                    passHref
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
