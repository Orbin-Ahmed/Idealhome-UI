import Link from "next/link";
import React from "react";

const WhyChooseIdealFactory = () => {
  const sections = [
    {
      title: "Immediate 3D Designs, No Upfront Commitment",
      content:
        "Visualize your dream space in minutes — with free, rapid 3D previews and no obligation to commit. Design, tweak, and decide with confidence. See it before we build it, and move forward with confidence.",
      link: { text: "Learn more", href: "/docs/3d-design-overview" },
    },
    {
      title: "Premium joinery crafted for your space",
      content: "Kitchens, closets, and more.",
      link: { text: "Learn more", href: "/joinery" },
    },
    {
      title: "German-engineered uPVC Windows & Doors - Powered by Schüco",
      content:
        "We Design. We Build. We Deliver — On Time. Bundled Solutions – Simplicity, Savings & Free Design.",
      link: { text: "Learn more", href: "/keystone-upvc" },
    },
  ];

  return (
    <section
      className="py-5"
      data-color="color_1"
      style={{ backgroundColor: "var(--rgba-primary-1)" }}
    >
      <div className="container">
        <div className="section-head style-1 text-end mb-5">
          <h2 className="title">
            Why Choose <span className="text-primary">IDEAL FACTORY?</span>
          </h2>
        </div>

        <div className="row g-4">
          {sections.map((section, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="d-flex flex-column justify-content-between h-100 p-4 rounded shadow-sm card-style"
                style={{
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease",
                  border: "1px solid var(--rgba-primary-3)",
                }}
              >
                {/* Optional icon or number */}
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--primary)",
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {idx + 1}
                </div>

                <h5 className="mb-3" style={{ color: "var(--primary-dark)" }}>
                  {section.title}
                </h5>

                <p style={{ color: "var(--secondary)", fontSize: "15px" }}>
                  {section.content}
                </p>

                {section.link && (
                  <a
                    href={section.link.href}
                    style={{ color: "var(--primary)", fontWeight: "500" }}
                    className="mt-auto"
                  >
                    {section.link.text} &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
          <div className="text-center">
            <Link
              href="/about-us"
              className="btn shadow-primary btn-primary btn-quote-2"
            >
              Request Free 3D Design
            </Link>
          </div>
        </div>

        {/* Additional Paragraph Below */}
        <div className="mt-5">
          <div
            className="p-5 rounded shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, var(--rgba-primary-1), #ffffff)",
              border: "1px solid var(--rgba-primary-3)",
            }}
          >
            <div className="mb-4">
              <h4 style={{ color: "var(--primary-dark)", fontWeight: "600" }}>
                All-in-One Villa Design Package
              </h4>
              <p style={{ fontSize: "17px", color: "var(--secondary)" }}>
                <strong>Choose Ideal Factory’s all-in-one package</strong> for
                premium joinery and Schüco uPVC windows — with fewer decisions,
                greater savings, and full villa design included.
              </p>
            </div>

            <ul
              className="ps-3"
              style={{
                fontSize: "16px",
                color: "var(--secondary)",
                lineHeight: "1.8",
              }}
            >
              <li className="mb-2">
                <strong>🎨 Free Interior Design:</strong> Get full 3D interior
                design for your entire villa — with unlimited revisions — at no
                extra cost, saving you tens of thousands in designer fees.
              </li>
              <li>
                <strong>💰 Bundle Discounts & Seamless Delivery:</strong> Enjoy
                exclusive pricing and a fully coordinated experience, from
                design to installation, managed by one expert team.
              </li>
            </ul>

            <div className="mt-4">
              <p
                style={{
                  fontSize: "17px",
                  color: "var(--primary-dark)",
                  fontWeight: "600",
                }}
              >
                Save more. Stress less. Get everything beautifully delivered.
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/about-us"
                className="btn shadow-primary btn-primary btn-quote-2"
              >
                Book Free Interiors Design Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseIdealFactory;
