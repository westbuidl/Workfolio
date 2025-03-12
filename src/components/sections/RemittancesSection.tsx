"use client";
import React from 'react';

const RemittancesSection = () => {
  const services = [
    {
      id: 1,
      title: "Direct Bank Deposits",
      description: "Send straight to major Nigerian banks like First Bank, GTBank, and Access Bank.",
      icon: "bank"
    },
    {
      id: 2,
      title: "Cash Pickup",
      description: "Available at thousands of trusted locations across Nigeria, from Lagos to Kano.",
      icon: "chain"
    },
    {
      id: 3,
      title: "Mobile Wallets",
      description: "Instant transfers to your recipient's phone for ultimate convenience.",
      icon: "wallet"
    }
  ];

  // Helper function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'bank':
        return (
          <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 9H20L12 3L4 9Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9V17" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 9V17" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 9V17" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 9V17" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 17H20" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 21H21" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        );
      case 'chain':
        return (
          <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 13C11.0507 12.9375 12.0141 13.365 12.6967 14.1517C13.3793 14.9384 13.7177 15.9751 13.6316 17.0193C13.5454 18.0634 13.0421 19.0285 12.2349 19.6866C11.4277 20.3447 10.3916 20.6383 9.34844 20.4997C8.30526 20.3611 7.3599 19.8009 6.72489 18.9488C6.08988 18.0968 5.81352 17.0229 5.96028 15.9684C6.10704 14.9138 6.66413 13.9652 7.51169 13.3112C8.35925 12.6573 9.42937 12.3513 10.491 12.46" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5 10.5C14.5507 10.4375 15.5141 10.865 16.1967 11.6517C16.8793 12.4384 17.2177 13.4751 17.1316 14.5193C17.0454 15.5634 16.5421 16.5285 15.7349 17.1866C14.9277 17.8447 13.8916 18.1383 12.8484 17.9997C11.8053 17.8611 10.8599 17.3009 10.2249 16.4488C9.58988 15.5968 9.31352 14.5229 9.46028 13.4684C9.60704 12.4138 10.1641 11.4652 11.0117 10.8112C11.8593 10.1573 12.9294 9.85134 13.991 9.96" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case 'wallet':
        return (
          <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="14" rx="2" stroke="#22C55E" strokeWidth="2"/>
              <path d="M17 16H17.01" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
              <path d="M21 12H16.5C15.6716 12 15 11.3284 15 10.5V10.5C15 9.67157 15.6716 9 16.5 9H21" stroke="#22C55E" strokeWidth="2"/>
              <path d="M3 10H7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 14H7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-blue-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <p className="text-lg font-medium tracking-wide">REMITTANCES MADE PERSONAL</p>
        </div>
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Supporting You, Connecting Communities</h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            At CinthPay, we understand the importance of every pound you send. From helping family 
            with daily needs to celebrating special moments, we're proud to connect the UK Nigerian 
            diaspora with home. Our platform is designed with you in mind—easy to use, affordable, 
            and always reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white text-gray-900 rounded-3xl p-8"
            >
              {renderIcon(service.icon)}
              <h3 className="text-xl font-bold mt-6 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemittancesSection;