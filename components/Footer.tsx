"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Contact Form Section */}
      <section className="bg-black py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Intro */}
          <div>
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <span className="inline-block w-1 h-7 bg-red-600 mr-3" />
              CONTACT US
            </h3>
            <p className="text-gray-300">
              For more information, please fill out the form.
            </p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {/* Left column */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name*"
                required
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <textarea
                placeholder="Message*"
                required
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none resize-none h-24"
              />
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Last Name*"
                required
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone*"
                required
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="City*"
                required
                className="w-full bg-transparent border-b border-white placeholder-gray-400 text-white py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Send&nbsp;<span aria-hidden>→</span>
              </button>
            </div>

            {/* Disclaimer */}
            <div className="col-span-full text-gray-400 text-sm mt-2">
              * Required fields
            </div>

            {/* Checkboxes */}
            <div className="col-span-full flex flex-col space-y-2 text-gray-300 text-sm mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-white bg-black border-white"
                />
                <span>
                  I have read the <a href="/privacy-policy">Privacy Policy</a>.
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-white bg-black border-white"
                />
                <span>I would like to subscribe to the newsletter</span>
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
              IDEAL FACTORY Headquarters
            </h4>
            <p>via Ponte Ospedaletto, 1560</p>
            <p>47020 Longiano FC</p>
            <p>Italy</p>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-white mb-2">Contact</h4>
            <p>tel. +39 0547 56144</p>
            <p>fax +39 0547 54094</p>
            <p>info@idealfactory.com</p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-4">
        <p className="text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Ideal Factory. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
