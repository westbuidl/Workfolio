import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-[#020202] text-white py-8 px-4 md:px-16 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full w-[504px] h-[655px] pointer-events-none">
        <Image
          src="/images/Ellipse1.png"
          alt="Footer glow"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>


      <div className="container mx-auto relative z-10">
        {/* Logo and CTA Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-12 h-12 mb-4">
            <Image
              src="/images/Soleer.png"
              alt="Soleer Logo"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Join the Soleer Revolution</h2>
          <p className="text-center mb-6 max-w-2xl px-4 text-sm sm:text-base">
            Be part of the future of work. Sign up for our waitlist and be the first to
            experience the power of decentralized service marketplaces.
          </p>
          
          {/* Email Form */}
          <div className="w-full max-w-md mb-8 px-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-full sm:rounded-r-none bg-[#333] text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full sm:rounded-l-none font-semibold hover:opacity-90 transition-opacity"
              >
                Join waitlist
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          <Link href="../dashboard" className="text-sm hover:text-gray-300 transition-colors">DASHBOARD</Link>
          <Link href="../inbox" className="text-sm hover:text-gray-300 transition-colors">INBOX</Link>
          <Link href="../profile" className="text-sm hover:text-gray-300 transition-colors">PROFILE</Link>
          <Link href="../" className="text-sm hover:text-gray-300 transition-colors">MARKETPLACE</Link>
          <Link href="https://soleer.xyz" className="text-sm hover:text-gray-300 transition-colors">SOLEER HOME</Link>

        </nav>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-gray-400 order-2 md:order-1">
              © 2024 Soleer Labs. All rights reserved.
            </p>
            
            {/* Links and Social */}
            <div className="flex flex-col sm:flex-row items-center gap-6 order-1 md:order-2">
              {/* Footer Links */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
                <Link href="https://docs.soleer.xyz" className="hover:text-gray-300 transition-colors">Technical Documentation</Link>
                <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms of service</Link>
                <Link href="/data-safety" className="hover:text-gray-300 transition-colors">Data Safety</Link>
                <Link href="/quality-guide" className="hover:text-gray-300 transition-colors">Quality Guide</Link>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://twitter.com/soleerlabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/socials/twitter.png"
                      alt="Twitter"
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
                <a 
                  href="https://t.me/+CjPcnbb0rR8zZTQ0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/socials/telegram.png"
                      alt="Telegram"
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;