"use client";
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "Sign Up",
      description: "Create your free CinthPay account in minutes—online or via our mobile app.",
    },
    {
      id: 2,
      number: "2",
      title: "Enter Details",
      description: "Add your recipient's information (bank account, mobile wallet, or cash pickup location).",
    },
    {
      id: 3,
      number: "3",
      title: "Send Funds",
      description: "Pay securely with your UK bank card or account.",
    },
    {
      id: 4,
      number: "4",
      title: "Track & Relax",
      description: "Get real-time updates and a confirmation when your money arrives in Nigeria.",
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600">Send Money in Just a Few Steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <span className="text-red-500 font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="bg-blue-900 text-white py-4 px-8 rounded-full font-medium hover:bg-blue-800 transition-colors"
          >
            Start sending money today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;