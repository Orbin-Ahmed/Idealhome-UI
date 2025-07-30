"use client";

import React from "react";
import { useTranslations } from "next-intl";

const ValuesGrid = () => {
  const t = useTranslations("Values");

  const cards = [
    {
      number: 1,
      title: t("Grid1.title"),
      description:t("Grid1.description"),
      icon: "🏭",
      color: "from-[#57b7c0] to-[#57b7c0]",
    },
    {
      number: 2,
      title: t("Grid2.title"),
      description:t("Grid2.description"),
      icon: "💖",
      color: "from-[#57b7c0] to-[#57b7c0]",
    },
    {
      number: 3,
      title: t("Grid3.title"),
      description:t("Grid3.description"),
      icon: "✨",
      color: "from-[#57b7c0] to-[#57b7c0]",
    },
    {
      number: 4,
      title: t("Grid4.title"),
      description:t("Grid4.description"),
      icon: "🎯",
      color: "from-[#57b7c0] to-[#57b7c0]",
    },
    {
      number: 5,
      title: t("Grid5.title"),
      description:t("Grid5.description"),
      icon: "📋",
      color: "from-[#57b7c0] to-[#57b7c0]",
    },
    {
      number: 6,
      title: t("Grid6.title"),
      description:t("Grid6.description"),
      icon: "🚪",
      color: "from-[#57b7c0] to-[#57b7c0]",
    },
    {
      number: 7,
      title: t("Grid7.title"),
      description:t("Grid7.description"),
      icon: "🛡️",
      color: "from-[#57b7c0] to-[#57b7c0]",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-[#57b7c0] to-[#57b7c0] rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t("Header.title1")}
              <span className="text-[#57b7c0] ml-2">{t("Header.title2")}</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#57b7c0] to-[#57b7c0] rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("Header.description")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.slice(0, 6).map((card, index) => (
            <div
              key={card.number}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              {/* Number Badge */}
              <div
                className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center shadow-lg`}
              >
                <span className="text-white font-bold text-lg">
                  {card.number}
                </span>
              </div>

              {/* Icon */}
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Featured Card – Full Width */}
        <div className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
          {/* Number Badge */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#57b7c0] to-[#57b7c0] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">
              {cards[6].number}
            </span>
          </div>

          <div className="flex items-center h-full">
            {/* Icon on the left */}
            <div className="text-6xl mr-8">{cards[6].icon}</div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {cards[6].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {cards[6].description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#57b7c0] rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ValuesGrid;
