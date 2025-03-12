"use client";
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";
import Navbar from '@/components/common/Navbar';
import Head from 'next/head';

const CookiePolicyPage = () => {
  return (
    <>
    <Head>
    <title>CinthPay Cookie Policy | UK to Nigeria Money Transfer Service</title>
  <meta charSet="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Learn about how CinthPay uses cookies and similar technologies to improve your experience when using our UK to Nigeria money transfer services."/>
  <meta name="keywords" content="CinthPay cookies, money transfer privacy, UK to Nigeria service cookies, financial services privacy"/>
  <meta name="robots" content="index, follow"/>
  <meta property="og:title" content="CinthPay Cookie Policy"/>
  <meta property="og:description" content="Information about cookies and tracking technologies used by CinthPay's UK to Nigeria money transfer platform."/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.cinthpay.com/cookie-policy/"/>
  <meta property="og:image" content="https://www.cinthpay.com/images/cinthpay-social.jpg"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="canonical" href="https://www.cinthpay.com/cookie-policy/"/>
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
          <h1 className="text-3xl font-bold text-blue-600">Cookie Policy</h1>
          <p className="text-gray-600 mt-2">Last Updated: March 08, 2025</p>
        </div>

        <div className="prose max-w-none mb-12">
          <p className="mb-6">
          This Cookie Policy explains how CinthPay uses cookies and similar technologies on our website and app.
          </p>

          {/* 1. Information We Collect */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. What Are Cookies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cookies are small text files stored on your device to enhance your experience.</li>
             
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Essential Cookies: Required for the Service to function (e.g., login sessions).</li>
              <li>Analytics Cookies: Help us understand how users interact with our Service (e.g., Google Analytics).</li>
              <li>Marketing Cookies: Used to deliver relevant ads (only with your consent).</li>
            </ul>
          </div>

          {/* 3. Sharing Your Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Managing Cookies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You can disable cookies via your browser settings, but this may affect functionality.</li>
              <li>On your first visit, we'll ask for your consent to non-essential cookies.</li>
             
            </ul>
          </div>

          {/* 4. Data Security */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Third-Party Cookies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We use trusted partners (e.g., Google) for analytics and advertising. Their cookie use is governed by their own policies.</li>
              
            </ul>
          </div>

          {/* 5. Your Rights */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Contact Us</h2>
            <ul className="list-disc pl-5 space-y-2">

              <li>Contact us at <a href="mailto:privacy@cinthpay.com" className="text-blue-600 hover:underline">ask@cinthpay.money</a> to exercise these rights.</li>
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

export default CookiePolicyPage;