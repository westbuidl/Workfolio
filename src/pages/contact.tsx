"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";
import Navbar from '@/components/common/Navbar';
import Head from 'next/head';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <>
    <Head>
    <title>Contact CinthPay | UK to Nigeria Money Transfer Support</title>
  <meta charSet="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Contact CinthPay for support with your UK to Nigeria money transfers. We're dedicated to keeping families and communities connected through reliable service."/>
  <meta name="keywords" content="contact CinthPay, UK to Nigeria transfer support, money transfer help, remittance customer service"/>
  <meta name="robots" content="index, follow"/>
  <meta property="og:title" content="Contact CinthPay - UK to Nigeria Transfer Support"/>
  <meta property="og:description" content="Reach out to CinthPay's customer support team for assistance with your UK to Nigeria money transfers and remittance services."/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.cinthpay.money/contact/"/>
  <meta property="og:image" content="https://www.cinthpay.money/images/cinthpay-social.jpg"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="canonical" href="https://www.cinthpay.money/contact/"/>
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

      {/* Contact Form Section */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Get in touch</h1>
          
          <p className="text-lg text-gray-700 mb-8">
            For any complaints or suggestions, please contact us via:
          </p>
          
          <div className="mb-6">
            <p className="text-lg text-gray-700">Email: <a href="mailto:support@cinthpay.money" className="text-blue-600 hover:underline">support@cinthpay.money</a></p>
          </div>
          
          <div className="mb-12">
            <p className="text-lg text-gray-700">Phone: <a href="tel:+442012345678" className="text-blue-600 hover:underline">+44 20 1234 5678</a></p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8 inline-block">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-4">Live chat</h3>
              <button className="bg-gray-900 text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
                Start live chat
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Column - Form */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-800 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Placeholder text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-blue-900 text-white py-3 px-12 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default ContactPage;