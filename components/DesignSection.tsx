import React from "react";
import { useTranslations } from "next-intl";
import ButtonLink from "./ButtonLink";

const DesignSection: React.FC = () => {
  const t = useTranslations("DesignSection");
  const b = useTranslations("Button");

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black uppercase">
          {t("heading")}
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-relaxed">
          {t("paragraph1Before")}
          <span className="text-brand font-semibold">{t("companyName")}</span>
          {t("paragraph1After")}
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          {t("paragraph2")}
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          {t("paragraph3")}
        </p>

        <p className="mt-10 text-xl font-semibold text-black text-center">
          {t("taglineBefore")}
          <span className="text-brand">{t("seeItBefore")}</span>
          {t("taglineAfter")}
        </p>

        <div className="flex justify-center">
          <ButtonLink href="#contact-us">{b("ctaButton")}</ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
