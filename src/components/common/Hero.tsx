"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const FuturisticConstruction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [progress, setProgress] = useState(0);
  const [currentGlow, setCurrentGlow] = useState(0);
  const glowColors = ['#00FFFF', '#7B68EE', '#9400D3'];

  // Simulate construction progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev < 75 ? prev + 0.2 : prev);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Cycle through glow colors for futuristic effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGlow(prev => (prev + 1) % glowColors.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We'll notify ${email} when CinthPay launches.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full" 
        style={{
          background: `radial-gradient(circle, ${glowColors[currentGlow]} 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(30px)',
          opacity: 0.6,
          animation: 'float 15s infinite ease-in-out'
        }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full" 
        style={{
          background: `radial-gradient(circle, ${glowColors[(currentGlow+1) % 3]} 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(40px)',
          opacity: 0.5,
          animation: 'float 20s infinite ease-in-out reverse'
        }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Futuristic Logo */}
          <div className="mb-8 inline-block">
            <div className="text-5xl font-bold relative">
              <Image src="/images/logo-cinthpay.png" alt="Wallet" width={160} height={160} />
              <div className="absolute -inset-1 bg-cyan-500 opacity-20 blur-lg rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-6xl font-extrabold mb-6 text-white leading-tight">
          Fast, Secure, Affordable Remittances<br />

          </h1>
          
          <p className="text-gray-300 mb-10 text-xl leading-relaxed">
          Send money from the UK to Nigeria with confidence. Whether you're supporting loved ones, paying bills, or managing business transactions, CinthPay delivers your funds quickly and securely.
          </p>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Development Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Notification Form */}
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-gray-900 border border-gray-700 text-white rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                Notify Me
              </button>
            </div>
          </form>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { 
                title: "Fast Transfers", 
                description: "Send money in minutes with same-day or next-day delivery options",
                icon: "🔄"
              },
              { 
                title: "Low Fees", 
                description: "Enjoy competitive rates with no hidden charges—what you see is what you send.",
                icon: "📈"
              },
              { 
                title: "Secure Transactions", 
                description: "Your peace of mind matters. We use industry-leading encryption to protect every transfer.",
                icon: "🔐"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 text-gray-500 text-sm">
            <p>© 2025 CinthPay Fast, Secure, Affordable.</p>
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </div>
  );
};

export default FuturisticConstruction;