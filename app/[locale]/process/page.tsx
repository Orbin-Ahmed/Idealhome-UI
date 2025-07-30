"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useTranslations } from "next-intl";

const steps = [
  {
    number: 1,
    titleKey: "steps.1.title",
    descriptionKey: "steps.1.description",
    iconKey: "steps.1.icon",
    color: "from-[#57b7c0] to-[#4a9da6]",
  },
  {
    number: 2,
    titleKey: "steps.2.title",
    descriptionKey: "steps.2.description",
    iconKey: "steps.2.icon",
    color: "from-[#6bc4cd] to-[#57b7c0]",
  },
  {
    number: 3,
    titleKey: "steps.3.title",
    descriptionKey: "steps.3.description",
    iconKey: "steps.3.icon",
    color: "from-[#57b7c0] to-[#4a9da6]",
  },
  {
    number: 4,
    titleKey: "steps.4.title",
    descriptionKey: "steps.4.description",
    iconKey: "steps.4.icon",
    color: "from-[#6bc4cd] to-[#57b7c0]",
  },
  {
    number: 5,
    titleKey: "steps.5.title",
    descriptionKey: "steps.5.description",
    iconKey: "steps.5.icon",
    color: "from-[#57b7c0] to-[#4a9da6]",
  },
  {
    number: 6,
    titleKey: "steps.6.title",
    descriptionKey: "steps.6.description",
    iconKey: "steps.6.icon",
    color: "from-[#6bc4cd] to-[#57b7c0]",
  },
];

const TransformProcessSection = () => {
  const t = useTranslations("Process");
  const b = useTranslations("Button");

  // Split header parts from translation keys
  const headerPart1 = t("headerMain1");    // "TRANSFORMING"
  const headerVision = t("headerVision"); // "YOUR VISION"
  const headerInto = t("headerInto");     // "INTO"
  const headerPart2 = t("headerMain2");   // "REALITY"
  const headerSubtitle = t("headerSubtitle");
  const features = [
  t("ctaFeatures.feature1"),
  t("ctaFeatures.feature2"),
  t("ctaFeatures.feature3"),
];


  return (
    <>
      <div className="bg-black h-16">
        <Navbar />
      </div>

      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-[#57b7c0] to-[#6bc4cd] rounded-full"></div>
              <div className="mx-6 w-3 h-3 bg-[#57b7c0] rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-[#6bc4cd] to-[#57b7c0] rounded-full"></div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-[#57b7c0]">{headerPart1}</span> {headerVision}
              <br />
              {headerInto} <span className="text-[#57b7c0]">{headerPart2}</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{headerSubtitle}</p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#57b7c0] to-[#6bc4cd] transform -translate-x-1/2 rounded-full"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: "fadeInUp 0.8s ease-out forwards",
                  }}
                >
                  {/* Content Card */}
                  <div className={"flex-1 lg:text-left"}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group relative">
                      <div
                        className={`flex items-center gap-4 mb-6 ${
                          index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                        } justify-center`}
                      >
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {t(step.iconKey)}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#57b7c0] transition-colors duration-300">
                          {t(step.titleKey)}
                        </h3>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {t(step.descriptionKey)}
                      </p>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#57b7c0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Step Number Circle */}
                  <div className="relative flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-2xl">{step.number}</span>
                    </div>

                    {/* Pulse effect */}
                    <div
                      className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${step.color} rounded-full animate-ping opacity-20`}
                    ></div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-[#57b7c0] to-[#6bc4cd] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">{t("ctaHeading")}</h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{t("ctaParagraph")}</p>

                <button className="bg-white text-[#57b7c0] px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl">
                  <a href="#contact-us">🎨 {b("ctaButton")}</a>
                </button>

                <div className="mt-8 flex justify-center items-center gap-4 text-white/80">
                  {features.map((feature, i) => (
                    <React.Fragment key={i}>
                      <span className="text-lg">{feature}</span>
                      {i < features.length - 1 && (
                        <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative elements */}
          <div className="flex justify-center mt-16">
            <div className="flex space-x-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-[#57b7c0] rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 300}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
};

export default TransformProcessSection;
