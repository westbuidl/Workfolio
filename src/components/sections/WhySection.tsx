"use client";
import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Fast Transfers",
      description: "Send money in minutes with same-day or next-day delivery options",
      icon: "fast-transfer",
      bgColor: "bg-purple-100",
    },
    {
      id: 2,
      title: "Low Fees",
      description: "Enjoy competitive rates with no hidden charges—what you see is what you send.",
      icon: "low-fees",
      bgColor: "bg-orange-100",
    },
    {
      id: 3,
      title: "Secure Transactions",
      description: "Your peace of mind matters. We use industry-leading encryption to protect every transfer.",
      icon: "secure",
      bgColor: "bg-green-100",
    },
    {
      id: 4,
      title: "Real-Time Tracking",
      description: "Stay updated with live notifications from the moment you send until your recipient receives.",
      icon: "tracking",
      bgColor: "bg-green-100",
      fullWidth: true,
    },
    {
      id: 5,
      title: "Flexible Options",
      description: "Choose bank deposits, cash pickups, or mobile wallet transfers—whatever works best for you and your loved ones.",
      icon: "bank",
      bgColor: "bg-blue-100",
      fullWidth: true,
    }
  ];

  // Helper function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'fast-transfer':
        return (
          <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 16L18 11L13 6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 16L11 11L6 6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case 'low-fees':
        return (
          <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" stroke="#F97316" strokeWidth="2"/>
              <path d="M15 9L9 15" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        );
      case 'secure':
        return (
          <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L20 7V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V7L12 3Z" stroke="#22C55E" strokeWidth="2"/>
              <path d="M9 12L11 14L15 10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case 'tracking':
        return (
          <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="#22C55E" strokeWidth="2"/>
              <path d="M12 7V12L15 15" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case 'bank':
        return (
          <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9H20L12 3L4 9Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9V17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 9V17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 9V17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 9V17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 17H20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 21H21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose CinthPay?</h2>
          <p className="text-xl text-gray-600">Your Trusted Partner for UK-to-Nigeria Transfers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`${feature.bgColor} rounded-3xl p-8 ${feature.fullWidth ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {renderIcon(feature.icon)}
              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;