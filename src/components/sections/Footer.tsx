"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const footerRef = useRef(null);

  const skillCategories = [
    'Smart Contract Development',
    'DeFi Engineering',
    'Blockchain Architecture',
    'NFT Development',
    'Token Engineering',
    'Web3 Security',
    'Solidity Programming',
    'Crypto Trading Bots',
    'dApp Development',
    'Zero Knowledge Proofs',
    'Layer 2 Solutions',
    'DAO Development',
    'Tokenomics Design',
    'Cross-chain Development',
    'Wallet Integration',
    'Web, Mobile & Software Dev',
    'IT & Networking',
    'Data Science & Analytics',
    'Accounting & Consulting',
    'Legal',
    'Translation',
    'Design & Creative',
    'Engineering & Architecture',
    'Writing',
    'Admin Support',
    'Customer Service',
    'Sales & Marketing',
    'Gaming'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && currentSkillIndex < skillCategories.length) {
      const timer = setTimeout(() => {
        setCurrentSkillIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isVisible, currentSkillIndex, skillCategories.length]);

  return (
    <footer ref={footerRef} className="relative bg-[#020202] text-white py-8 px-4 md:px-16 overflow-hidden">
      {/* Background glow effect - adjusted for full width on larger screens */}
      <div className="absolute top-0 left-0 w-full h-[655px] pointer-events-none">
        <div className="relative w-full h-full max-w-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[504px] md:w-full h-full">
            <Image
              src="/images/Ellipse1.png"
              alt="Footer glow"
              fill
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Logo and Skills Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-12 h-12 mb-4">
            <Image
              src="/images/Soleer.png"
              alt="Soleer Logo"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Skills Section */}
          <div className="w-full max-w-4xl mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center sm:text-left">Popular Skills</h2>
              <Link 
                href="#" 
                className="text-blue-500 hover:text-blue-400 flex items-center whitespace-nowrap"
              >
                Show all skills
                <span className="ml-2">→</span>
              </Link>
            </div>
            <p className="text-lg mb-6 text-center sm:text-left">
              Connect and transact in the global digital marketplace.
            </p>
            
            {/* Skills Grid with Animation */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center sm:justify-start">
              {skillCategories.slice(0, isVisible ? currentSkillIndex : 0).map((skill) => (
                <Link
                  key={skill}
                  href={'#'}
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 px-3 md:px-4 py-2 rounded-full text-sm transition-all transform hover:scale-105 animate-fadeIn"
                >
                  {skill}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-3 mb-8 px-2">
          <Link href="../dashboard" className="text-xs md:text-sm hover:text-gray-300 transition-colors">DASHBOARD</Link>
          <Link href="../inbox" className="text-xs md:text-sm hover:text-gray-300 transition-colors">INBOX</Link>
          <Link href="../profile" className="text-xs md:text-sm hover:text-gray-300 transition-colors">PROFILE</Link>
          <Link href="../" className="text-xs md:text-sm hover:text-gray-300 transition-colors">MARKETPLACE</Link>
          <Link href="https://soleer.xyz" className="text-xs md:text-sm hover:text-gray-300 transition-colors">SOLEER HOME</Link>
        </nav>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-xs md:text-sm text-gray-400 order-2 md:order-1 text-center md:text-left">
              © 2024 Soleer Labs. All rights reserved.
            </p>
            
            {/* Links and Social */}
            <div className="flex flex-col sm:flex-row items-center gap-6 order-1 md:order-2">
              {/* Footer Links */}
              <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-2 text-xs md:text-sm">
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
                  <div className="relative w-5 h-5 md:w-6 md:h-6">
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
                  <div className="relative w-5 h-5 md:w-6 md:h-6">
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