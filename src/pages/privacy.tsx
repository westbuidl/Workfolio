"use client";
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";
import Navbar from '@/components/common/Navbar';
import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
    <>
    <Head>
    <title>CinthPay Privacy Policy | UK to Nigeria Transfer Data Protection</title>
  <meta charSet="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Learn how CinthPay protects your personal data when using our UK to Nigeria money transfer services. Information on data collection, usage, and your rights."/>
  <meta name="keywords" content="CinthPay privacy, money transfer data protection, UK GDPR compliance, financial data security"/>
  <meta name="robots" content="index, follow"/>
  <meta property="og:title" content="CinthPay Privacy Policy"/>
  <meta property="og:description" content="How CinthPay collects, processes, and protects your personal information when using our UK to Nigeria money transfer services."/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.cinthpay.money/privacy/"/>
  <meta property="og:image" content="https://www.cinthpay.money/images/cinthpay-social.jpg"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="canonical" href="https://www.cinthpay.money/privacy/"/>
  <link rel="icon" href="/images/favicon.ico"/>
  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
  <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
  <link rel="manifest" href="/site.webmanifest"/>
  </Head>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <Navbar 
        title="CinthPay"
        description="Send money to Nigeria quickly and securely"
      />

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto my-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last Updated: March 08, 2025</p>
        </div>

        <div className="prose max-w-none mb-12">
          <p className="mb-6">
            At CinthPay, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when
            you use our website, app, and services ("Service").
          </p>

          {/* 1. Information We Collect */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Personal Data: Name, address, email, phone number, date of birth, and payment details (e.g., bank card information).</li>
              <li>Recipient Data: Details of the person receiving funds in Nigeria (e.g., name, bank account, or mobile number).</li>
              <li>Usage Data: IP address, device information, and transaction history.</li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To process and complete your remittance transactions.</li>
              <li>To verify your identity and comply with anti-money laundering laws.</li>
              <li>To improve our Service and communicate updates or promotions (with your consent).</li>
            </ul>
          </div>

          {/* 3. Sharing Your Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Sharing Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>With banks, payment partners, and agents in the UK and Nigeria to facilitate transfers.</li>
              <li>With regulators or law enforcement if required by law.</li>
              <li>We do not sell your data to third parties for marketing purposes.</li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Data Security</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We use encryption and secure servers to protect your information.</li>
              <li>However, no system is 100% secure, and we cannot guarantee absolute protection.</li>
            </ul>
          </div>

          {/* 5. Your Rights */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Your Rights</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Under GDPR, you can access, correct, or delete your data, or object to its processing.</li>
              <li>Contact us at <a href="mailto:privacy@cinthpay.money" className="text-blue-600 hover:underline">privacy@cinthpay.money</a> to exercise these rights.</li>
            </ul>
          </div>

          {/* 6. Data Retention */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Data Retention</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We retain your data for as long as necessary to provide the Service and comply with legal obligations (typically 6 years after your last transaction).</li>
            </ul>
          </div>

          {/* 7. Cookies */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Cookies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>See our Cookie Policy below for details on how we use cookies.</li>
            </ul>
          </div>

          {/* 8. Contact Us */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. Contact Us</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>For privacy inquiries, email <a href="mailto:privacy@cinthpay.money" className="text-blue-600 hover:underline">privacy@cinthpay.money</a> or call +44 20 1234 5678.</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}

      </div>

      {/* Footer */}
     <Footer />
    </div>
    </>
  );
};

export default PrivacyPolicyPage;