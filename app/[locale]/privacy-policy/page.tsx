"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const PrivacyPolicy: React.FC = () => (
  <>
    <div className="bg-black h-16">
      <Navbar />
    </div>
    <main className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-600">Last updated: July 15, 2025</p>

        {/* 1. Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Ideal Factory (“we”, “us”, “our”). We respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or interact with our
            services.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Identifiers:</strong> Name, email address, phone
              number, postal address.
            </li>
            <li>
              <strong>Account Data:</strong> Username, password, profile details
              if you register for an account.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, pages
              visited, time spent, referral URLs, device identifiers and other
              diagnostic data.
            </li>
            <li>
              <strong>Cookies & Tracking:</strong> We use cookies and similar
              technologies to track your activity and preferences on our site.
            </li>
          </ul>
        </section>

        {/* 3. How We Use Your Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>We use information we collect for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              To provide, maintain, and improve our products and services.
            </li>
            <li>
              To communicate with you, respond to inquiries, and send
              notifications or promotional materials (with your consent).
            </li>
            <li>
              To personalize your experience and deliver content you find most
              relevant.
            </li>
            <li>To detect, prevent, and address technical issues or fraud.</li>
            <li>
              To comply with legal obligations and enforce our terms of service.
            </li>
          </ul>
        </section>

        {/* 4. Sharing Your Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            4. Sharing Your Information
          </h2>
          <p>
            We will not rent or sell your personal data to third parties. We may
            share your information with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Service Providers:</strong> Companies that perform
              services on our behalf (hosting, payment processing, analytics).
            </li>
            <li>
              <strong>Affiliates & Subsidiaries:</strong> To enable consistent
              group-wide operations and customer support.
            </li>
            <li>
              <strong>Legal & Safety:</strong> If required by law or to protect
              our rights, property, or safety, or those of others.
            </li>
          </ul>
        </section>

        {/* 5. Cookies & Tracking Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            5. Cookies & Tracking Technologies
          </h2>
          <p>
            We use cookies, web beacons, and similar tools to collect
            information about your interactions. You can control cookies through
            your browser settings, but disabling certain cookies may affect site
            functionality.
          </p>
        </section>

        {/* 6. Your Rights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Object to or restrict our processing of your data.</li>
            <li>
              Receive a copy of your data in a structured, machine-readable
              format.
            </li>
            <li>
              Lodge a complaint with your local data protection authority.
            </li>
          </ul>
        </section>

        {/* 7. Data Security */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, loss,
            destruction, or alteration. However, please note that no method of
            transmission or storage is completely secure.
          </p>
        </section>

        {/* 8. Children’s Privacy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Children’s Privacy</h2>
          <p>
            Our services are not intended for anyone under the age of 16. We do
            not knowingly collect or maintain personal data from minors.
          </p>
        </section>

        {/* 9. Changes to This Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last
            updated” date at the top indicates when changes were made. We
            encourage you to review this page periodically for any updates.
          </p>
        </section>

        {/* 10. Contact Us */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our
            practices, please contact us at:
          </p>
          <p>
            <strong>Ideal Factory</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:info@idealfactory.com"
              className="text-blue-600 hover:underline"
            >
              info@idealfactory.com
            </a>
            <br />
            Address: via Ponte Ospedaletto, 1560, 47020 Longiano FC, Italy
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
