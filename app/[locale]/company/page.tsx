"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ValuesGrid from "@/components/ValuesGrid";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Company = () => {
  const t = useTranslations("Company");
  const b = useTranslations("Button");
  return (
    <>
      <div className="bg-black h-16">
        <Navbar />
      </div>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-gray-800 space-y-6">
          <h2 className="text-3xl font-semibold">
            {t("aboutus.title")}
          </h2>
          <p>
            {t("aboutus.content.firstline")}
          </p>
          <p>
            {t("aboutus.content.2ndline")}
          </p>
          <p>
            {t("aboutus.content.3rdline")}
          </p>
        </div>

        <div className="mt-12">
          <Image
            src="/images/test2/company.jpg"
            alt="Factory Machinery"
            width={800}
            height={400}
            className="m-auto h-auto object-cover"
          />
        </div>
      </section>
      <ValuesGrid />
      <div className="pt-4 pb-8 bg-white">
        <p className="text-2xl font-semibold text-center text-black px-1 max-w-4xl mx-auto leading-relaxed">
          {t("statement.title")}
        </p>
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
            <a href="#contact-us">{b("ctaButton")}</a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Company;
