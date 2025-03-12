"use client";
import React from 'react';

const CompetitiveRatesSection = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Competitive Rates, No Surprises</h2>
          <p className="text-xl text-gray-600">Transparent Pricing for Every Transfer</p>
        </div>

        <div className="bg-gradient-to-r from-blue-950 to-blue-600 rounded-3xl overflow-hidden">
          <div className="p-10 md:p-12 text-white text-center relative">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl mb-8">
                With CinthPay, you'll always know exactly what you're paying. Our exchange rates are 
                among the best in the market, and we keep fees low so more of your money reaches 
                Nigeria.
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="#" 
                  className="bg-white text-blue-900 py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Check rate now
                </a>
              </div>
            </div>
            
            {/* Background shape element - left side */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-96 w-96 bg-blue-900 rounded-full opacity-50 blur-3xl -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveRatesSection;