"use client";

import React from "react";

export interface FeatureItem {
  title: string;
  text: string;
}

export interface DynamicFeatureSectionProps {
  sectionTitle: string;
  features: FeatureItem[];
  ctaText?: string;
  ctaAction?: () => void;
}

const DynamicFeatureSection: React.FC<DynamicFeatureSectionProps> = ({
  sectionTitle,
  features,
  ctaText,
  ctaAction,
}) => {
  return (
    <section className="py-12 bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h4 className="text-center text-2xl md:text-3xl font-semibold text-black mb-8">
          {sectionTitle}
        </h4>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-8">
          {features.map((feature, idx) => (
            <p
              key={idx}
              className="text-base md:text-lg text-gray-700 leading-relaxed"
            >
              <span className="font-semibold text-black">{feature.title}</span>{" "}
              — {feature.text}
            </p>
          ))}
        </div>

        {/* CTA */}
        {ctaText && ctaAction && (
          <div className="text-center">
            <button
              onClick={ctaAction}
              className="
                inline-block px-6 py-3
                bg-[#57b7c0] text-white font-semibold
                rounded-lg shadow-md
                transition-colors duration-300
                hover:bg-opacity-90
              "
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicFeatureSection;
