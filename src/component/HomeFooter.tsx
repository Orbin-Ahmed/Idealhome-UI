"use client";
import Image from "next/image";
import Link from "next/link";
import IMAGES from "./theme";

const HomeFooter = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer
      className="site-footer style-1 pt-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container pb-5">
        <div className="row gy-4 align-items-center">
          {/* Left Column */}
          <div className="col-md-4 text-md-start text-center ">
            <Image
              src={IMAGES.logo}
              alt="Ideal Home Logo"
              width={180}
              height={50}
              className="mb-3"
            />
          </div>

          {/* Center Column */}
          <div className="col-md-4 text-md-start text-center">
            <h5 className="mb-3" style={{ color: "var(--primary-dark)" }}>
              Contact Us
            </h5>
            <p style={{ fontSize: "15px", color: "#666" }}>☎️ 02-xxxxxx</p>
            <p style={{ fontSize: "15px", color: "#666" }}>📞 050-xxxx</p>
            <p style={{ fontSize: "15px", color: "#666" }}>
              📍{" "}
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/ockyuupeE6zuiy56A"
                className="text-primary"
              >
                Visit Our Factory Showroom
              </Link>
            </p>
            <p style={{ fontSize: "15px", color: "#666" }}>
              📧 info@idealhome.com
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-4 text-md-start text-center">
            {/* <h5 className="mb-3" style={{ color: "var(--primary-dark)" }}>
              Quick Links
            </h5>
            <ul
              className="list-unstyled mb-3"
              style={{ fontSize: "15px", color: "#666" }}
            >
              <li className="mb-2">
                <Link href="#" scroll={false}>
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" scroll={false}>
                  Terms & Conditions
                </Link>
              </li>
            </ul> */}

            {/* Social */}
            <h5 className="mb-3" style={{ color: "var(--primary-dark)" }}>
              Follow Us
            </h5>
            <ul className="list-inline mb-0">
              {/* <li className="list-inline-item me-3">
                <Link href="#" scroll={false}>
                  <i className="fab fa-facebook-f fs-5"></i>
                </Link>
              </li> */}
              <li className="list-inline-item me-3">
                <Link href="#" scroll={false}>
                  <i className="fab fa-instagram fs-5"></i>
                </Link>
              </li>
              {/* <li className="list-inline-item me-3">
                <Link href="#" scroll={false}>
                  <i className="fab fa-twitter fs-5"></i>
                </Link>
              </li> */}
              <li className="list-inline-item me-3">
                <Link href="#" scroll={false}>
                  <i className="fab fa-youtube fs-5"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="footer-bottom py-3"
        style={{ backgroundColor: "#212529", borderTop: "1px solid #e0e0e0" }}
      >
        <div className="container text-center">
          <span style={{ fontSize: "14px", color: "#fff" }}>
            © {currYear} Ideal Home Furniture Factory. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
