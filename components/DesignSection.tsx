import React from "react";
import ButtonLink from "./ButtonLink";

const DesignSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black uppercase">
          Design Without Limits
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-relaxed">
          At <span className="text-brand font-semibold">Ideal Factory</span> —
          transform your villa with elegant closets, kitchens, doors, and
          windows — your vision becomes the blueprint. We empower homeowners to
          break free from convention and explore new possibilities in beauty,
          function, and performance.
        </p>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Imagine a new generation of interior solutions crafted with
          European-level quality, tailored to elevate every style — from classic
          elegance to modern minimalism.
        </p>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Visualize your dream space in minutes — with free, rapid 3D previews
          and no obligation to commit. Design, tweak, and decide with
          confidence.
        </p>

        <p className="mt-10 text-xl font-semibold text-black">
          <span className="text-brand">See it before we build it</span>, and
          move forward with confidence.
        </p>

        <div className="flex justify-center">
          <ButtonLink href="/design-request">Request Free 3D Design</ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
