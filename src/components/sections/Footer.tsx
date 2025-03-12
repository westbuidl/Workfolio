"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FooterSection = () => {
  const serviceLinks = [
    { id: 1, title: "Money transfer", href: "#" },
    { id: 2, title: "Swap currencies", href: "#" },
    { id: 3, title: "Global accounts", href: "#" },
  ];

  const supportLinks = [
    { id: 1, title: "About us", href: "/about" },
    { id: 2, title: "FAQs", href: "/faq" },
    { id: 3, title: "Contact us", href: "/contact" },
  ];

  const legalLinks = [
    { id: 1, title: "Terms of Service", href: "/terms-of-service" },
    { id: 2, title: "Privacy policy", href: "/privacy-policy" },
    { id: 3, title: "Cookie Policy", href: "/cookie" },
    { id: 4, title: "Complaints Procedure", href: "/complaints" },
    { id: 5, title: "Anti-Money Laundering Policy", href: "/anti" },
  ];

  const socialLinks = [
    { id: 1, name: "Facebook", href: "#", icon: "facebook" },
    { id: 2, name: "Twitter", href: "#", icon: "twitter" },
    { id: 3, name: "LinkedIn", href: "#", icon: "linkedin" },
    { id: 4, name: "Instagram", href: "#", icon: "instagram" },
  ];

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="py-16 px-6 md:px-12 border-b">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Stay updated with Cinthpay by<br />signing up for our newsletter
          </h2>
          
          <div className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow py-3 px-4 bg-gray-100 rounded-lg text-gray-900"
            />
            <button className="bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo Column */}
            <div>
              <div className="mb-6">
                <Link href="/">
                  <div className="flex items-center">
                            <Image src="/images/logo.png" alt="CinthPay Logo" width={150} height={40} />
                          </div>
                </Link>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-700 hover:text-blue-900">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-700 hover:text-blue-900">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-700 hover:text-blue-900">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 px-6 md:px-12 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6 text-sm text-gray-600">
            <p className="mb-4">
              All trademarks and brand names featured on this website belong to their respective owners. The use of these trademarks and brand names does not imply endorsement by or association with CinthPay.
            </p>
            <p>©2024 Cinthpay. All rights reserved</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <Link 
                key={social.id} 
                href={social.href}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-blue-900 hover:border-blue-900 transition-colors"
                aria-label={social.name}
              >
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;