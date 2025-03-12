"use client";
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";
import Navbar from '@/components/common/Navbar';
import Head from 'next/head';

const ComplaintsPage = () => {
  return (
    <>
    <Head>
    <title>CinthPay Complaints Procedure | UK to Nigeria Money Transfer Resolution</title>
  <meta charSet="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="CinthPay's complaint resolution process ensures any issues with your UK to Nigeria money transfers are addressed promptly and effectively."/>
  <meta name="keywords" content="CinthPay complaints, money transfer resolution, UK to Nigeria transfer issues, customer support"/>
  <meta name="robots" content="index, follow"/>
  <meta property="og:title" content="CinthPay Complaints Procedure"/>
  <meta property="og:description" content="Learn how CinthPay handles and resolves issues with UK to Nigeria money transfers to ensure excellent customer service."/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.cinthpay.money/complaints/"/>
  <meta property="og:image" content="https://www.cinthpay.money/images/cinthpay-social.jpg"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="canonical" href="https://www.cinthpay.money/complaints/"/>
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
          <h1 className="text-3xl font-bold text-blue-600">Complaints Procedure</h1>
          <p className="text-gray-600 mt-2">Last Updated: March 08, 2025</p>
        </div>

        <div className="prose max-w-none mb-12">
          <p className="mb-6">
          We aim to provide excellent service, but if something goes wrong, we're here to help. This Complaints Procedure outlines how to raise an issue and what to expect.
            
          </p>

          {/* 1. Information We Collect */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. How to Complain</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact Us: Email complaints@cinthpay.money, call +44 20 1234 5678, or write to:</li>
                <li>CinthPay Limited, Slough Berkshire, United Kingdom.</li>
               <li>Details: Include your name, transaction ID (if applicable), and a description of the issue.</li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Our Process</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Acknowledgment: We'll confirm receipt within 3 business days.</li>
<li>Investigation: We'll review your complaint and aim to resolve it within 15 business days.</li>
<li>Resolution: You'll receive a written response with our decision.</li>
            </ul>
          </div>

          {/* 3. Sharing Your Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. If You are Not Satisfied</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>If we can't resolve your complaint, you may refer it to the Financial Ombudsman Service (FOS):</li>
              <li> Website: www.financial-ombudsman.org.uk</li>
              <li>Phone: 0800 023 4567</li>
              <li> Deadline: Within 6 months of our final response.</li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Contact Us</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>For assistance, email complaints@cinthpay.money.</li>
            </ul>
          </div>

          {/* 5. Your Rights */}

         

          

          {/* 8. Contact Us */}
          
        </div>

        {/* Newsletter Signup */}

      </div>

      {/* Footer */}
     <Footer />
    </div>
    </>
  );
};

export default ComplaintsPage;