"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Head from 'next/head';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
require('@solana/wallet-adapter-react-ui/styles.css');


const TypeWriter: React.FC<{ texts: string[]; delay?: number; isVisible: boolean }> = ({ texts, delay = 50, isVisible }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    if (!isVisible) {
      setDisplayText('');
      return;
    }

    let timer: NodeJS.Timeout;
    
    if (isTyping) {
      // Typing forward
      const currentText = texts[currentTextIndex];
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, delay);
      } else {
        // Wait a bit before starting to delete
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Typing backward
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, delay / 2);
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [texts, delay, isVisible, displayText, currentTextIndex, isTyping]);

  return <span>{displayText}<span className="animate-blink">|</span></span>;
};

const Hero: React.FC = () => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );


  const navItems = [
    { title: 'ABOUT', href: '#about' },
    { title: 'HOW IT WORKS', href: '#how-it-works' },
    { title: 'WHY SOLEER', href: '#why-soleer' },
    { title: 'GOVERNANCE', href: '#governance' },
    { title: 'ROADMAP', href: '#roadmap' },
    { title: 'FAQ', href: 'faq' },
    { title: 'MARKETPLACE EXPERIENCE', href: '#marketplace' }
  ];

  const heroTexts = [
    "Bringing the Gig Economy On-Chain",
    "Empowering Freelancers with Blockchain",
    "Decentralized Work, Unlimited Potential"
  ];

  const gigs = [
    { image: '/images/ads/ad1.png', title: 'Smart Contract Dev', price: '4 Sol', user: 'Soleer', userUrl: 'marketplace', description: 'I will Write and audit smart contracts for platforms like Ethereum, Solana, and Polkadot....', descriptionUrl: '/gig/smart-contract-dev' },
    { image: '/images/ads/ad2.png', title: 'Web3 UI/UX Design', price: '3.5 Sol', user: 'Soleer', userUrl: '/user/soleer', description: 'I will Create digital arts, collectibles, and content to be sold as NFTs...', descriptionUrl: '/gig/web3-ui-ux-design' },
    { image: '/images/ads/ad3.png', title: 'Content Creation', price: '4 Sol', user: 'Soleer', userUrl: '/user/soleer', description: 'I Write articles, tutorials, and educational contents on everything blockchain..', descriptionUrl: '/gig/content-creation' },
    { image: '/images/ads/ad4.png', title: 'Security Auditing', price: '5 Sol', user: 'Soleer', userUrl: '/user/soleer', description: 'I Conduct security audits for smart contracts, blockchain protocols, and Web3 applications...', descriptionUrl: '/gig/security-auditing' },
    { image: '/images/ads/ad5.png', title: 'Tokenomics Consulting', price: '2 Sol', user: 'Soleer', userUrl: '/user/soleer', description: 'I will Designing and optimizing the economic model for your blockchain-based projects..', descriptionUrl: '/gig/tokenomics-consulting' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    const timer = setTimeout(() => setCardsVisible(true), 1000);

    const slider = sliderRef.current;
    const intervalId = setInterval(() => {
      if (slider) {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % gigs.length);
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${(currentCardIndex + 1) * (220 + 16)}px)`;
        setTimeout(() => {
          slider.style.transition = 'none';
          slider.style.transform = 'translateX(0)';
          slider.appendChild(slider.firstElementChild as Node);
        }, 500);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [currentCardIndex]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <>
<Head>
    
    <title>Soleer - Find & Hire Top Freelancers on the Blockchain | P2P Service Marketplace</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Discover and hire talented freelancers on Soleer, the first decentralized P2P service marketplace built on Solana. Fast, secure, and low-fee transactions for freelancers and clients worldwide." />
    <meta name="keywords" content="Soleer, Solana marketplace, freelance platform, blockchain freelancing, P2P services, crypto freelancers, decentralized marketplace, Solana blockchain" />
    <meta name="author" content="Soleer" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://soleer.xyz" />
    <link rel="icon" href="/images/favicon.ico" />
    
   
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@soleerlabs" />
    <meta name="twitter:creator" content="@soleerlabs" />
    <meta name="twitter:title" content="Soleer - Hire Freelancers on Solana Blockchain" />
    <meta name="twitter:description" content="The first P2P service marketplace on Solana. Hire top talent with instant, secure crypto payments. Join the future of freelancing." />
    <meta name="twitter:image" content="https://soleer.xyz/images/favicon-16x16.png" />

    <meta name="application-name" content="Soleer" />
    <meta name="theme-color" content="#14F195" />
    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />

    <meta name="language" content="English" />
    <meta name="geo.region" content="US" />
</Head>
            <div 
              ref={heroRef} 
              className="min-h-screen text-white bg-cover bg-center font-neue-machina relative overflow-hidden"
              style={{ backgroundImage: "url('/images/background/background.jpg')" }}
            >
              <div className="bg-black bg-opacity-30 min-h-screen relative z-10">
                <Navbar
                  navItems={navItems}
                  title="Soleer - the First P2P Service Marketplace on Solana"
                  description="Find and hire top freelancers on the Solana blockchain"
                />

                <main className="container mx-auto px-4 py-16 text-center">
                  <h1 className="text-6xl font-extrabold mb-4 leading-tight transition-transform duration-300 ease-out">
                    <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text">
                      <TypeWriter texts={heroTexts} delay={100} isVisible={isVisible} />
                    </span>
                  </h1>
                  <p className="text-xl mb-8">
                    <TypeWriter 
                      texts={["Welcome to the future of decentralized service marketplaces, powered by Solana blockchain"]} 
                      delay={50} 
                      isVisible={isVisible} 
                    />
                  </p>

                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300">
                  <a href='marketplace'>Go to marketplace </a>
                  </button>

                  <div className="mt-16 relative overflow-hidden">
                    <div className="flex justify-start mb-4">
                      <h2 className="text-3xl font-bold text-gradient-to-r from-purple-400 via-blue-400 to-teal-400">
                        Trending Gigs
                      </h2>
                    </div>
                    <div className="relative w-full overflow-hidden">
                      <div ref={sliderRef} className="flex space-x-4 transition-transform duration-500 ease-in-out">
                        {[...gigs, ...gigs].map((gig, index) => (
                          <div 
                            key={index}
                            className={`w-[220px] flex-shrink-0 flex flex-col bg-gray-800 bg-opacity-75 rounded-lg overflow-hidden transition-all duration-1000 ease-out ${
                              cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                          >
                            <div className="flex items-center p-2 border-b border-gray-700">
                              <Image src="/images/user.png" alt={gig.user} width={24} height={24} className="rounded-full mr-2" />
                              <Link href='#' className="text-xs text-gray-400 hover:text-white transition duration-300">
                                {gig.user}
                              </Link>
                            </div>
                            <div className="w-full h-[160px] overflow-hidden">
                              <Image src={gig.image} alt={gig.title} width={220} height={160} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-3 flex flex-col gap-1 text-left">
                              <h3 className="text-sm font-semibold">{gig.title}</h3>
                              <Link href='marketplace' className="text-gray-400 text-xs hover:text-white transition duration-300">
                                {gig.description}
                              </Link>
                              <div className="flex justify-between items-center mt-2">
                                <button className="bg-gray-700 px-3 py-1 text-xs hover:bg-gray-600 transition duration-300">
                                  HIRE
                                </button>
                                <span className="text-xs flex items-center">
                                  <Image src="/images/sol-logo.png" alt="SOL" width={12} height={12} className="mr-1" />
                                  {gig.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                      {gigs.map((_, index) => (
                        <div 
                          key={index} 
                          className={`w-2 h-2 rounded-full ${
                            index === currentCardIndex ? 'bg-gradient-to-r from-[#C134DA] to-[#14EDE9]' : 'bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Hero;