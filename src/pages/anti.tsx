"use client";
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";

const AntiMoneyLaunderingPolicyPage = () => {
  const policyData = {
    policyType: 'anti-money-laundering',
    lastUpdated: 'March 08, 2025',
    intro: 'CinthPay is committed to preventing money laundering and terrorist financing. This AML Policy outlines our approach to compliance with UK and international regulations.',
    sections: [
      {
        title: 'Our Commitment',
        items: [
          'We comply with the UK Money Laundering Regulations 2017 and FCA requirements.',
          'We cooperate with authorities to detect and prevent financial crime.'
        ]
      },
      {
        title: 'Customer Due Diligence (CDD)',
        items: [
          'We verify your identity using government-issued ID and proof of address.',
          'Additional checks may apply for high-value or unusual transactions.'
        ]
      },
      {
        title: 'Monitoring and Reporting',
        items: [
          'We monitor transactions for suspicious activity.',
          'Suspected money laundering is reported to the UK National Crime Agency (NCA).'
        ]
      },
      {
        title: 'Prohibited Activities',
        items: [
          'Using CinthPay for illegal purposes, including fraud or sanctions evasion, is strictly forbidden.',
          'Accounts linked to such activities will be terminated.'
        ]
      },
      {
        title: 'Training',
        items: [
          'Our staff receive regular AML training to ensure compliance.'
        ]
      },
      {
        title: 'Contact Us',
        items: [
          'Report concerns to aml@cinthpay.com or call +44 20 1234 5678.'
        ]
      }
    ]
  };

  
};

export default AntiMoneyLaunderingPolicyPage;