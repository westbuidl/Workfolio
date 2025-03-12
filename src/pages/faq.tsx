"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from "@/components/sections/Footer";
import "../app/globals.css";
import Navbar from '@/components/common/Navbar';

// Define types for FAQ data
interface FaqItemData {
  question: string;
  answer: string | string[];
}

interface FaqSections {
  general: FaqItemData[];
  sending: FaqItemData[];
  receiving: FaqItemData[];
  troubleshooting: FaqItemData[];
  account: FaqItemData[];
}

// Define props for FaqItem component
interface FaqItemProps {
  question: string;
  answer: string | string[];
  index: string;
  isOpen: boolean;
  toggle: (index: string) => void;
}

const FaqPage = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (index: string) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };
  
  const FaqItem: React.FC<FaqItemProps> = ({ question, answer, index, isOpen, toggle }) => {
    return (
      <div className="border-b border-gray-200 py-4">
        <div 
          className="flex justify-between items-center cursor-pointer" 
          onClick={() => toggle(index)}
        >
          <h3 className="text-base font-medium text-gray-900">{question}</h3>
          <button className="text-gray-400">
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="mt-2 text-gray-700">
            {Array.isArray(answer) ? (
              <ul className="list-disc pl-5 space-y-1">
                {answer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{answer}</p>
            )}
          </div>
        )}
      </div>
    );
  };

  // FAQ data organized by sections
  const faqData: FaqSections = {
    general: [
      {
        question: "What is CinthPay?",
        answer: "CinthPay is a payment platform that allows you to send money from the UK to Nigeria quickly, securely, and affordably. We offer options like bank deposits, cash pickups, and mobile wallet transfers."
      },
      {
        question: "Who can use CinthPay?",
        answer: "Anyone over 18 and residing in the UK with a valid UK bank card or account can use our service."
      },
      {
        question: "Is CinthPay safe?",
        answer: "Yes! We're regulated by the UK Financial Conduct Authority (FCA) and use industry-standard encryption to protect your data and transactions."
      }
    ],
    sending: [
      {
        question: "How long does it take to send money to Nigeria?",
        answer: "Most transfers are completed within minutes to a day, depending on the delivery method (e.g., bank deposit, cash pickup, or mobile wallet)."
      },
      {
        question: "What are the fees?",
        answer: "Our fees are low and transparent. You'll see the exact cost, including exchange rates, before confirming your transfer. Use our price calculator to check rates."
      },
      {
        question: "Can I cancel a transfer?",
        answer: "Once processed, transfers cannot be canceled unless there's an error on our part. Contact us immediately at ask@cinthpay.money if you need assistance."
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept UK-issued debit/credit cards and bank transfers. The account or card must be in your name."
      }
    ],
    receiving: [
      {
        question: "How can my recipient get the money?",
        answer: [
          "Bank Deposit: To major Nigerian banks like GTBank, First Bank, or Access Bank.",
          "Cash Pickup: At thousands of locations across Nigeria.",
          "Mobile Wallet: Directly to their phone for instant access."
        ]
      },
      {
        question: "Does my recipient need a CinthPay account?",
        answer: "No, recipients don't need an account—just the details you provide during the transfer."
      }
    ],
    troubleshooting: [
      {
        question: "What if my transfer is delayed?",
        answer: "Delays are rare but can happen due to bank processing or verification checks. Contact us at ask@cinthpay.money with your transaction ID for help."
      },
      {
        question: "How do I track my transfer?",
        answer: "Use your account dashboard or mobile app to get real-time updates. We'll also send notifications via email or SMS."
      }
    ],
    account: [
      {
        question: "How do I sign up?",
        answer: "Create a free account online or via our app by providing your name, email, phone number, and address. You'll need to verify your identity too."
      },
      {
        question: "What if I have a problem?",
        answer: "Our support team is available 24/7. Reach us at ask@cinthpay.money, +44 20 1234 5678, or via live chat."
      },
      {
        question: "Still have questions?",
        answer: "Check our Help Center or get in touch—we're here to assist!"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <Navbar 
        title="CinthPay"
        description="Send money to Nigeria quickly and securely"
      />

      {/* Hero Section */}
      <section className="py-12 bg-blue-900 text-white rounded-3xl text-center mb-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-block bg-white text-blue-900 font-bold px-4 py-1 rounded-full mb-6">
            FAQ
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg opacity-90">
            Have questions? We can answer some of the most commonly brought up ones
            here to make it easy for you!
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <div className="max-w-3xl mx-auto mb-20">
        {/* General Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">General Questions</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {faqData.general.map((item, index) => (
              <FaqItem 
                key={index}
                question={item.question}
                answer={item.answer}
                index={`general-${index}`}
                isOpen={openQuestion === `general-${index}`}
                toggle={toggleQuestion}
              />
            ))}
          </div>
        </section>

        {/* Sending Money */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Sending Money</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {faqData.sending.map((item, index) => (
              <FaqItem 
                key={index}
                question={item.question}
                answer={item.answer}
                index={`sending-${index}`}
                isOpen={openQuestion === `sending-${index}`}
                toggle={toggleQuestion}
              />
            ))}
          </div>
        </section>

        {/* Receiving Money */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Receiving Money</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {faqData.receiving.map((item, index) => (
              <FaqItem 
                key={index}
                question={item.question}
                answer={item.answer}
                index={`receiving-${index}`}
                isOpen={openQuestion === `receiving-${index}`}
                toggle={toggleQuestion}
              />
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {faqData.troubleshooting.map((item, index) => (
              <FaqItem 
                key={index}
                question={item.question}
                answer={item.answer}
                index={`troubleshooting-${index}`}
                isOpen={openQuestion === `troubleshooting-${index}`}
                toggle={toggleQuestion}
              />
            ))}
          </div>
        </section>

        {/* Account & Support */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Account & Support</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {faqData.account.map((item, index) => (
              <FaqItem 
                key={index}
                question={item.question}
                answer={item.answer}
                index={`account-${index}`}
                isOpen={openQuestion === `account-${index}`}
                toggle={toggleQuestion}
              />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FaqPage;