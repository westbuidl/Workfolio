"use client";
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";
import Navbar from '@/components/common/Navbar';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
    <Head>
    <title>About CinthPay | Trusted UK to Nigeria Money Transfer Service</title>
  <meta charSet="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Learn about CinthPay's mission to provide secure, fast, and affordable money transfer services from the UK to Nigeria. Trusted by thousands of customers."/>
  <meta name="keywords" content="about CinthPay, UK to Nigeria remittance, international money transfer, Nigerian diaspora, secure money transfer"/>
  <meta name="robots" content="index, follow"/>
  <meta property="og:title" content="About CinthPay - UK to Nigeria Money Transfer Service"/>
  <meta property="og:description" content="CinthPay is a trusted payment platform built to simplify remittances from the UK to Nigeria with competitive rates and secure transactions."/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.cinthpay.com/about/"/>
  <meta property="og:image" content="https://www.cinthpay.com/images/cinthpay-social.jpg"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="canonical" href="https://www.cinthpay.com/about/"/>
  <link rel="icon" href="/images/favicon.ico"/>
  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
  <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
  <link rel="manifest" href="/site.webmanifest"/>
  </Head>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <Navbar 
  title="AppName"
  description="App description"
 // navItems={customNavItems}
/>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About CinthPay</h1>
          <p className="text-lg text-gray-700 mb-12">
            CinthPay is a trusted payment platform built to simplify remittances from the UK to 
            Nigeria. Founded with a mission to empower the Nigerian diaspora, we provide a fast, 
            secure, and affordable way to send money home. Whether it's supporting family, 
            paying bills, or celebrating life's milestones, CinthPay bridges the gap between you 
            and your loved ones in Nigeria.
          </p>
        </div>
        
        <div className="rounded-3xl overflow-hidden mb-20">
          <Image 
            src="/images/background/about.png" 
            alt="Woman using CinthPay on her phone" 
            width={1200} 
            height={400} 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8 md:py-12 mb-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="text-5xl font-serif text-gray-400">"</div>
            <p className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
              We believe remittances should be more than just transactions—they're a lifeline between communities. Our 
              goal is to deliver a service that's easy to use, cost-effective, and reliable, ensuring every pound you send 
              makes the biggest impact.
            </p>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <Image 
              src="/images/background/about-phone.png" 
              alt="CinthPay App Interface" 
              width={400} 
              height={600} 
              className="mx-auto"
            />
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Experience</h3>
                  <p className="text-sm text-gray-700">
                    Backed by a team with deep expertise in fintech and cross-border payments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Innovation</h3>
                  <p className="text-sm text-gray-700">
                    Cutting-edge technology for seamless transfers and real-time tracking.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <span className="text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Trust</h3>
                  <p className="text-sm text-gray-700">
                    Fully regulated by the UK's Financial Conduct Authority (FCA), with a commitment to security and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Sets Us Apart</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-100 rounded-3xl p-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Great Rates</h3>
            <p className="text-gray-800">Competitive exchange rates and low fees so more money reaches Nigeria.</p>
          </div>
          
          <div className="bg-orange-100 rounded-3xl p-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible delivery options</h3>
            <p className="text-gray-800">bank deposits, cash pickups, and mobile wallets.</p>
          </div>
          
          <div className="bg-green-100 rounded-3xl p-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Customer Service</h3>
            <p className="text-gray-800">A customer-first approach with 24/7 support from a dedicated team.</p>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-12 md:py-16 bg-gray-50 rounded-3xl my-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise</h2>
          <p className="text-lg mb-10">
            At CinthPay, we're more than a payment service—we're a partner in keeping families 
            and communities connected. Join thousands of UK residents who trust us to deliver 
            their money safely and swiftly to Nigeria.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="#" className="bg-blue-900 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-800 transition-colors text-center">
              Get Started now
            </a>
            <a href="#" className="bg-gray-200 text-gray-800 py-3 px-8 rounded-full font-medium hover:bg-gray-300 transition-colors text-center">
              Contact us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default AboutPage;