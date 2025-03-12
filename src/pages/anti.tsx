"use client";
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";
import Navbar from '@/components/common/Navbar';

const AntiMoneyPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <Navbar 
        title="CinthPay"
        description="Send money to Nigeria quickly and securely"
      />

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto my-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Anti-Money Laundering Policy</h1>
          <p className="text-gray-600 mt-2">Last Updated: March 08, 2025</p>
        </div>

        <div className="prose max-w-none mb-12">
          <p className="mb-6">
            CinthPay is committed to preventing money laundering and terrorist financing. This AML Policy outlines our approach to compliance with UK and international regulations.
            
          </p>

          {/* 1. Information We Collect */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Our Commitment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We comply with the UK Money Laundering Regulations 2017 and FCA requirements.</li>.
              <li>We cooperate with authorities to detect and prevent financial crime.</li>
              
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Customer Due Diligence (CDD)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We verify your identity using government-issued ID and proof of address.</li>
              <li>Additional checks may apply for high-value or unusual transactions.</li>
              
            </ul>
          </div>

          {/* 3. Sharing Your Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Monitoring and Reporting</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We monitor transactions for suspicious activity</li>
              <li>Suspected money laundering is reported to the UK National Crime Agency (NCA)</li>
              
            </ul>
          </div>

          {/* 4. Data Security */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Prohibited Activities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Using CinthPay for illegal purposes, including fraud or sanctions evasion, is strictly forbidden.</li>
              <li>Accounts linked to such activities will be terminated.</li>
            </ul>
          </div>

          {/* 5. Your Rights */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Training </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Our staff receive regular AML training to ensure compliance.</li>
            </ul>
          </div>

         

          

          {/* 8. Contact Us */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Contact Us</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Report concerns to <a href="mailto:privacy@cinthpay.com" className="text-blue-600 hover:underline">aml@cinthpay.com</a> or call +44 20 1234 5678.</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}

      </div>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default AntiMoneyPage;