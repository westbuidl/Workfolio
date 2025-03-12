"use client";
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";
import Navbar from '@/components/common/Navbar';

const ComplaintsPage = () => {
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
              <li>Contact Us: Email complaints@cinthpay.com, call +44 20 1234 5678, or write to:</li>
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
              <li>For assistance, email complaints@cinthpay.com.</li>
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
  );
};

export default ComplaintsPage;