"use client";
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";
import Navbar from '@/components/common/Navbar';

const TermsOfServicePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <Navbar 
        title="CinthPay"
        description="Send money to Nigeria quickly and securely"
      />

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto my-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Terms of service</h1>
          <p className="text-gray-600 mt-2">Last Updated: March 08, 2025</p>
        </div>

        <div className="prose max-w-none mb-12">
          <p className="mb-6">
            Welcome to CinthPay! These Terms of Service ("Terms") govern your use of the CinthPay website, mobile app, and services
            (collectively, the "Service") provided by CinthPay Limited, a company registered in England and Wales ("we," "us," or "our"). By
            accessing or using our Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
          </p>

          {/* 1. Eligibility */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be at least 18 years old and a resident of the UK to use the Service.</li>
              <li>You must provide accurate and complete information during registration and keep it updated.</li>
            </ul>
          </div>

          {/* 2. Services */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Services</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>CinthPay provides a platform for sending money from the UK to Nigeria via bank deposits, cash pickups, or mobile wallets.</li>
              <li>We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice.</li>
            </ul>
          </div>

          {/* 3. Fees and Payments */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Fees and Payments</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fees and exchange rates are displayed before you confirm a transaction. By proceeding, you agree to pay the displayed amount.</li>
              <li>Payments must be made using a UK-issued bank card or account in your name.</li>
              <li>Transactions are final once processed, subject to our refund policy.</li>
            </ul>
          </div>

          {/* 4. User Responsibilities */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. User Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You agree not to use the Service for illegal purposes, including money laundering or fraud.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
            </ul>
          </div>

          {/* 5. Refunds and Cancellations */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Refunds and Cancellations</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Refunds may be issued at our discretion if a transaction fails due to our error.</li>
              <li>Cancellations are not permitted once a transaction is processed, unless required by law.</li>
            </ul>
          </div>

          {/* 6. Limitation of Liability */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Limitation of Liability</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We are not liable for delays or losses caused by circumstances beyond our control (e.g., bank processing times, recipient errors).</li>
              <li>Our liability is limited to the amount of the transaction in question.</li>
            </ul>
          </div>

          {/* 7. Termination */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Termination</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We may suspend or terminate your account for violation of these Terms or applicable laws.</li>
              <li>You may close your account at any time by contacting <a href="mailto:ask@cinthpay.money" className="text-blue-600 hover:underline">ask@cinthpay.money</a>.</li>
            </ul>
          </div>

          {/* 8. Governing Law */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. Governing Law</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>These Terms are governed by the laws of England and Wales. Disputes will be resolved in the courts of England and Wales.</li>
            </ul>
          </div>

          {/* 9. Contact Us */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">9. Contact Us</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>For questions about these Terms, email us at <a href="mailto:support@cinthpay.money" className="text-blue-600 hover:underline">support@cinthpay.money</a> or call +44 20 1234 5678.</li>
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

export default TermsOfServicePage;