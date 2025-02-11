"use client";
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState('GBP');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [amount, setAmount] = useState('400.56');

  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute inset-0 bg-[url('/gradient-bg.png')] bg-no-repeat bg-cover opacity-40" />
      
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="flex items-center mb-4">
            <img src="/uk-flag.png" alt="UK Flag" className="w-6 h-4 mr-2" />
            <img src="/turkey-flag.png" alt="Turkey Flag" className="w-6 h-4 mr-2" />
            <img src="/nigeria-flag.png" alt="Nigeria Flag" className="w-6 h-4 mr-2" />
            <span className="text-gray-600 text-sm">Payments From the UK, Turkey, Nigeria →</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 text-[#0A2255]">
            For Hassle-Free 
            <span className="text-[#FF0000] block">International Money Transfers</span>
          </h1>
          
          <p className="text-gray-600 mb-6 text-lg">
            With Cinthpay, you can trust that your financial transactions are in safe hands, 
            allowing you to focus on what truly matters. Join us today and discover a 
            smarter way to manage your overseas finance.
          </p>

          <div className="flex space-x-4 mb-6">
            <img src="/google-play.png" alt="Google Play" className="h-12" />
            <img src="/app-store.png" alt="App Store" className="h-12" />
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((_, index) => (
                <img 
                  key={index} 
                  src={`/avatar-${index + 1}.png`} 
                  alt="User" 
                  className="w-8 h-8 rounded-full border-2 border-white" 
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-500">★★★★★</div>
              <p className="text-sm text-gray-600">loved by 10.7k customers</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 border">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Send money</label>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <select 
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="appearance-none border rounded-lg p-3 pr-8 w-full"
                >
                  <option value="GBP">🇬🇧 GBP</option>
                  <option value="TRY">🇹🇷 TRY</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  ▼
                </div>
              </div>
              <input 
                type="text" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border rounded-lg p-3 flex-grow text-right"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Receive</label>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <select 
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="appearance-none border rounded-lg p-3 pr-8 w-full"
                >
                  <option value="NGN">🇳🇬 NGN</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  ▼
                </div>
              </div>
              <input 
                type="text" 
                value="0.00"
                readOnly
                className="border rounded-lg p-3 flex-grow text-right bg-gray-100"
              />
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-4 text-right">
            Balance: 12.56
          </div>

          <button className="w-full bg-[#0A2255] text-white py-3 rounded-lg hover:bg-blue-900 text-lg font-semibold">
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;