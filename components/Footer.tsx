"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  // 🔧 EMAIL CONFIGURATION - Change this email address when needed
  const CONTACT_EMAIL = "sales@keystoneuae.com";

  const t = useTranslations("Footer");

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    agreeToPrivacy: false,
    subscribeNewsletter: false,
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "error">("");

  // Handle input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    const isCheckbox =
      (target as HTMLInputElement).type &&
      (target as HTMLInputElement).type === "checkbox";
    const checked = isCheckbox ? (target as HTMLInputElement).checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Basic validation
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.phone ||
        !formData.city ||
        !formData.message
      ) {
        throw new Error(t("errors.fillAllRequired"));
      }

      if (!formData.agreeToPrivacy) {
        throw new Error(t("errors.agreePrivacy"));
      }

      // Send to backend API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: CONTACT_EMAIL, // Send the target email to the API
        }),
      });

      if (!response.ok) {
        throw new Error(t("errors.sendFailed"));
      }

      // Success
      setSubmitStatus("success");
      setSubmitMessage(t("successMessage"));

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        message: "",
        agreeToPrivacy: false,
        subscribeNewsletter: false,
      });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error ? error.message : t("errors.unexpected")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="text-white">
      {/* Contact Form Section */}
      <section className="bg-black py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Intro */}
          <div>
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <span className="inline-block w-1 h-7 bg-red-600 mr-3" />
              {t("contactForm.title")}
            </h3>
            <p className="text-gray-300">{t("contactForm.subtitle")}</p>
          </div>

          {/* Form */}
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
            id="contact-us"
            onSubmit={handleSubmit}
          >
            {/* Left column */}
            <div className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder={t("placeholders.firstName")}
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder={t("placeholders.email")}
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder={t("placeholders.message")}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none resize-none h-24"
              />
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <input
                type="text"
                name="lastName"
                placeholder={t("placeholders.lastName")}
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder={t("placeholders.phone")}
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <input
                type="text"
                name="city"
                placeholder={t("placeholders.city")}
                required
                value={formData.city}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? t("buttons.sending") : t("buttons.send")}
                &nbsp;<span aria-hidden>→</span>
              </button>
            </div>

            {/* Disclaimer */}
            <div className="col-span-full text-gray-400 text-sm mt-2">
              {t("disclaimer")}
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={`col-span-full text-sm mt-4 p-3 rounded ${
                  submitStatus === "success"
                    ? "bg-green-900 text-green-200 border border-green-700"
                    : "bg-red-900 text-red-200 border border-red-700"
                }`}
              >
                {submitMessage}
              </div>
            )}

            {/* Checkboxes */}
            <div className="col-span-full flex flex-col space-y-2 text-gray-300 text-sm mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  className="h-4 w-4 accent-white bg-black border-white"
                />
                <span>
                  {t("privacy.prefix")}{" "}
                  <a href="/privacy-policy" className="underline hover:text-white">
                    {t("privacy.link")}
                  </a>
                  {t("privacy.suffix")}
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={handleInputChange}
                  className="h-4 w-4 accent-white bg-black border-white"
                />
                <span>{t("newsletterLabel")}</span>
              </label>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom Site Footer */}
      <div className="bg-gray-900 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-300 text-sm">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-white mb-2">
              {t("company.heading")}
            </h4>
            <p>ICAD-1, Mussafah</p>
            <p>Abu Dhabi</p>
            <p>UAE</p>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-white mb-2">
              {t("contact.heading")}
            </h4>
            <p>tel. +971 (0)264 25445</p>
            <p>mob. +971 (0)50 312 2300</p>
            <p>mob. +971 (0)50 138 8555</p>
            <p>info@idealhomeuae.com</p>
            <p>sales@idealhomeuae.com</p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-4">
        <p className="text-center text-gray-500 text-xs">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
