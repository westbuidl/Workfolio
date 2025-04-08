'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../../app/globals.css";

interface NavItem {
  title: string;
  href: string;
}

interface NavbarProps {
  navItems?: NavItem[];
  title?: string;
  description?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  navItems = [
    { title: 'About us', href: '/about' },
    { title: 'Contact us', href: '/contact' },
    { title: 'FAQ', href: '/faq' }
  ],
  title = 'CinthPay - Fast & Secure UK to Nigeria Money Transfers | Support Family & Business',
  description = 'CinthPay offers secure, fast money transfers from UK to Nigeria. Support loved ones, pay bills, and manage business transactions with competitive rates and reliable service.'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="CinthPay logo" 
                width={150} 
                height={80} 
                className="mr-2" 
              />

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className="text-gray-800 hover:text-blue-900 transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}
            
            <div className="ml-4 flex items-center">
              <Link href="/download" className="flex items-center bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors duration-200">

                <span className="text-gray-800">Login</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 border-t border-gray-200">
          <div className="px-4 space-y-4">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className="block text-gray-800 hover:text-blue-900 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-2">
              <Link 
                href="/download" 
                className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-fit hover:bg-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >

                <span className="text-gray-800">Login</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;