"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Head from 'next/head';

const CinthPay = () => {
  const [mobileDonate, setMobileDonate] = useState(false);

  return (
    <>
    <Head>
    <title>CinthPay - Fast & Secure UK to Nigeria Money Transfers | Support Family & Business</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="CinthPay offers secure, fast money transfers from UK to Nigeria. Support loved ones, pay bills, and manage business transactions with competitive rates and reliable service." />
  <meta name="keywords" content="money transfer UK to Nigeria, remittance, international payments, send money to Nigeria, UK to Nigeria transfer" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="CinthPay - Fast & Secure UK to Nigeria Money Transfers" />
  <meta property="og:description" content="Send money from the UK to Nigeria quickly and securely with CinthPay. Support loved ones and manage business payments with confidence." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.cinthpay.money/" />
  <meta property="og:image" content="https://www.cinthpay.com/images/cinthpay-social.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://www.cinthpay.money/" />
  <link rel="icon" href="/images/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />

  </Head>
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}


<Navbar/>
      
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="container mx-auto px-6 md:px-12 mt-12 md:mt-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-navy-blue">Fast, </span>
            <span className="text-red-600">Secure, </span>
            <span className="text-red-600">Affordable</span>
            <br />
            <span className="text-navy-blue">Remittances</span>
          </h1>
          
          <p className="text-gray-700 md:max-w-3xl mx-auto text-base md:text-lg mb-10 leading-relaxed">
            Send money from the UK to Nigeria with confidence. Whether you're supporting loved ones, paying bills, or managing business transactions, CinthPay delivers your funds quickly and securely.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#" className="inline-block">
              <Image src="/images/background/google-frame.png" alt="Get it on Google Play" width={180} height={53} />
            </a>
            <a href="#" className="inline-block">
              <Image src="/images/background/appstore-frame.png" alt="Download on the App Store" width={180} height={53} />
            </a>
          </div>
          
          {/* Rating */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center mb-2">
              <div className="flex space-x-1 mr-4">
                <Image src="/images/user-avatar-1.png" alt="User" width={30} height={30} className="rounded-full" />
                <Image src="/images/user-avatar-2.png" alt="User" width={30} height={30} className="rounded-full" />
                <Image src="/images/user-avatar-3.png" alt="User" width={30} height={30} className="rounded-full" />
                <Image src="/images/user-avatar-4.png" alt="User" width={30} height={30} className="rounded-full" />
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700">loved by 10.7k customers</p>
          </div>
          
          {/* App Screenshot */}
          <div className="relative mx-auto max-w-4xl mb-12">
            <Image 
              src="/images/background/main-hero.png" 
              alt="CinthPay App" 
              width={800} 
              height={500} 
              className="mx-auto"
            />
            
            {/* Floating panels */}
            <div className="absolute top-1/4 left-0 md:-left-12 bg-white rounded-lg shadow-lg p-4 w-60 hidden md:block">
              <h3 className="text-sm font-medium mb-2">Send money</h3>
              <p className="text-xs text-gray-500 mb-1">You send</p>
              <p className="text-xl font-bold mb-2">400.56</p>
              <div className="flex justify-between items-center mb-2">
                <span className="inline-flex items-center">
                  <Image src="/images/background/gb-flag.png" alt="GB" width={20} height={20} className="mr-1" />
                  <span className="text-xs">GBP</span>
                </span>
                <span className="text-xs text-gray-500">Balance: 12.56</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">1 GBP = 2,010.00 NGN</div>
              <hr className="mb-2" />
              <p className="text-xs text-gray-500 mb-1">Receiver gets</p>
              <p className="text-xl font-bold mb-2">0.00</p>
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center">
                  <Image src="/images/background/ng-flag.png" alt="NG" width={20} height={20} className="mr-1" />
                  <span className="text-xs">NGN</span>
                </span>
              </div>
            </div>
            
            <div className="absolute top-1/2 right-0 md:-right-12 bg-white rounded-lg shadow-lg p-4 w-60 hidden md:block">
              <h3 className="text-sm font-medium mb-2">Swap currency</h3>
              <p className="text-xs text-gray-500 mb-1">Swap from</p>
              <p className="text-xl font-bold mb-2">400.56</p>
              <div className="flex justify-between items-center mb-2">
                <span className="inline-flex items-center">
                  <Image src="/images/gb-flag.png" alt="GB" width={20} height={20} className="mr-1" />
                  <span className="text-xs">GBP</span>
                </span>
                <span className="text-xs text-gray-500">Balance: 12.56</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">1 GBP = 2,010.00 NGN</div>
              <hr className="mb-2" />
              <p className="text-xs text-gray-500 mb-1">Swap to</p>
              <p className="text-xl font-bold mb-2">0.00</p>
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center">
                  <Image src="/images/background/ng-flag.png" alt="NG" width={20} height={20} className="mr-1" />
                  <span className="text-xs">NGN</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer (if needed) */}
      
    </div>
    </>
  );
};

export default CinthPay;