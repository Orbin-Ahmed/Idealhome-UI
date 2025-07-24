"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export const LanguageToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇦🇪" },
  ];

  const current = languages.find((l) => l.code === locale)!;

  const handleChange = (newLocale: string) => {
    const base = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${base}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".lang-toggle")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div
      className="lang-toggle fixed top-16 right-4 z-50"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="
          flex items-center space-x-2
          px-3 py-1.5
          bg-white border border-gray-300
          rounded-full
          text-black text-sm font-medium
          hover:bg-gray-100
          transition-colors
        "
        aria-label="Change language"
      >
        <span className="text-lg">{current.flag}</span>
        <span className="hidden sm:inline">{current.name}</span>
        <svg
          className={`w-4 h-4 ml-1 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="
            absolute right-0 mt-2 w-40
            bg-white rounded-lg
            shadow-md overflow-hidden
            ring-1 ring-black ring-opacity-5
          "
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`
                flex items-center w-full px-4 py-2 text-sm text-black
                ${
                  locale === lang.code
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }
                transition-colors
              `}
            >
              <span className="mr-2">{lang.flag}</span>
              <span className="flex-1 text-left">{lang.name}</span>
              {locale === lang.code && (
                <span className="text-green-600">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
