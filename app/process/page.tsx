"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const steps = [
  {
    number: 1,
    title: "Consultation & 3D Design",
    description:
      "We start by listening to your ideas, needs, and budget. Then we bring them to life — You’ll receive a free 3D design preview of your kitchen or closet. We refine your design with your feedback, offering unlimited revisions until it’s perfect.",
  },
  {
    number: 2,
    title: "Transparent Quotation & Pricing",
    description:
      "After you approve your design, we provide a fully transparent, factory-direct quotation so you know precisely what you’re paying for, with no hidden surprises.",
  },
  {
    number: 3,
    title: "Your Approval, Your Way",
    description:
      "We won’t move ahead until you sign off on every detail — from materials and finishes to layout and functionality. Your involvement ensures you are confident and in control.",
  },
  {
    number: 4,
    title: "Production You Can Trust",
    description:
      "Once approved, our skilled team gets to work in our Abu Dhabi factory using premium materials and strict quality standards. You can even visit the workshop to see progress for yourself.",
  },
  {
    number: 5,
    title: "Real-Time Progress Updates",
    description:
      "You stay in the loop with scheduled updates, so you know exactly how your project is progressing, removing any guesswork or uncertainty.",
  },
  {
    number: 6,
    title: "Professional Installation",
    description:
      "Our team ensures seamless installation, respecting your home and your schedule while delivering top-quality finishing and fitting.",
  },
];

const TransformProcessSection = () => (
  <>
    <div className="bg-black h-16">
      <Navbar />
    </div>

    <section className="bg-white pb-4 pt-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-black">
        <h2 className="text-center text-lg md:text-xl font-semibold mb-8">
          TRANSFORMING YOUR VISION INTO REALITY — STEP BY STEP, WITH YOU
          INVOLVED AT EVERY STAGE.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`
              p-6 text-gray-800
              ${
                idx < 4 ? "border-b border-gray-300" : ""
              }       /* horizontal borders for first two rows */
              ${
                idx % 2 === 0 ? "md:border-r border-gray-300" : ""
              } /* vertical border on left column */
            `}
            >
              <h3 className="font-semibold mb-2">
                <span className="font-bold mr-2">{step.number}.</span>
                {step.title}
              </h3>
              <p className="leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            className="
                  inline-block px-6 py-3
                  bg-[#57b7c0] text-white font-semibold
                  rounded-lg shadow-md
                  min-w-[220px]
                  transition-opacity duration-300
                  hover:opacity-90
                "
          >
            Request Free 3D Design
          </button>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default TransformProcessSection;
