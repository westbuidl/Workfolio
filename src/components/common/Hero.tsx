'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Code, Github, Linkedin, Mail, ExternalLink, X, Eye, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

interface TypeWriterProps {
  text: string;
  delay?: number;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  thumbnail: string;
  fullImage: string;
}

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, delay = 30 }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 id="modal-title" className="text-2xl font-bold">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-800 rounded-full p-1"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mb-6 overflow-hidden rounded-lg">
            <img
              src={project.fullImage}
              alt={`${project.title} screenshot`}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Visit Project <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeveloperProfile = () => {
  // State for bio section
  const [showFullBio, setShowFullBio] = useState(false);

  // State for dark mode and projects
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // State for project carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);
  //const [isDragging, setIsDragging] = useState(false);
const [dragStartX, setDragStartX] = useState(0);
const [dragDistance, setDragDistance] = useState(0);
//const carouselRef = useRef(null);

  // Initialize visibleCards before using it in useEffect
  const [visibleCards, setVisibleCards] = useState(1);
  //const [autoScrollInterval, setAutoScrollInterval] = useState<NodeJS.Timeout | null>(null);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Add this handler function inside the DeveloperProfile component
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      // Send data to our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  // Check system preference for dark mode on initial load and set up listeners
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // Get initial preference
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDarkMode);

      // Apply dark mode class to document
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Set up listener for changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

      // Add event listener
      mediaQuery.addEventListener('change', handleChange);

      // Clean up
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };


  interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
  }
  
  // Add this component above the DeveloperProfile component
  const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;
  
    // Close on ESC key
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
  
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);
  
    // Auto close after 5 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }, [onClose]);
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div 
          className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full"
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <Check size={32} className="text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Success!</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-4">{message}</p>
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  


  // Start auto-scroll for projects carousel
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
      
      const interval = setInterval(() => {
        if (developerData.projects.length <= visibleCards) return;
        
        setCurrentSlide(prev => {
          if (prev >= developerData.projects.length - visibleCards) {
            return 0;
          }
          return prev + 1;
        });
      }, 5000);
      
      setAutoScrollInterval(interval);
    };
    
    startAutoScroll();
    
    return () => {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
    };
  }, [visibleCards]);

  // Handle carousel dragging
  const startDragging = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    } else {
      setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    }
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const whileDragging = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    let currentX;
    if ('touches' in e) {
      currentX = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    } else {
      currentX = e.pageX - (carouselRef.current?.offsetLeft || 0);
    }

    const walk = (currentX - startX) * 2; // Multiply by 2 for faster sliding
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Handle next/prev slide
  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    if (currentSlide >= developerData.projects.length - visibleCards) {
      scrollToSlide(0);
    } else {
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    if (currentSlide === 0) {
      scrollToSlide(developerData.projects.length - visibleCards);
    } else {
      scrollToSlide(currentSlide - 1);
    }
  };

  // Update current slide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const slideWidth = carouselRef.current.clientWidth;
        const scrollPosition = carouselRef.current.scrollLeft;
        const index = Math.round(scrollPosition / slideWidth);
        if (index !== currentSlide) {
          setCurrentSlide(index);
        }
      }
    };

    carouselRef.current?.addEventListener('scroll', handleScroll);
    return () => carouselRef.current?.removeEventListener('scroll', handleScroll);
  }, [currentSlide]);

  const developerData = {
    name: "Hyacinth Afam",
    title: "Software Engineer",
    bio: "a passionate Software Engineer and technical communicator with a strong foundation in crafting user-focused, high-performance software solutions. Based in London, United Kingdom, I bring over three years of hands-on experience in web development, technical documentation, and SaaS delivery, honed through roles at Agroease Limited, Smart Audits, and Logiscool United Kingdom.  My technical toolkit includes JavaScript, React, Node.js, TypeScript, HTML, CSS, Python, C++ and Laravel/PHP paired with expertise in AWS, Azure and GCP, APIs and docs-as-code practices using Git and Markdown. With a Master's in Advanced Computer Science from the University of Hull and certifications like AWS Certified Cloud Practitioner (in progress), I am a fast learner eager to tackle new challenges. I have contributed to education platforms, event-style web applications, and customer conversation tools, always prioritizing performance, accessibility, and teamwork.  Explore few of my projects below.",
    skills: [
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Languages" },
      { name: "Next.js", category: "Frameworks" },
      { name: "Node.js", category: "Backend" },
      { name: "Laravel/PHP", category: "API" },
      { name: "UI/UX", category: "Design" },
      { name: "AWS", category: "Cloud" },
      { name: "MongoDB", category: "Database" },
      { name: "TailwindCSS", category: "Frontend" },
      { name: "Python", category: "Languages" },
      { name: "C++", category: "Languages" },
      { name: "Git", category: "DevTools" },
      { name: "Docker", category: "DevOps" },
      { name: "CI/CD", category: "DevOps" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Figma", category: "Design" },
      { name: "RESTful APIs", category: "API" },
      { name: "Serverless", category: "Architecture" },
      { name: "OAuth", category: "Security" },
      { name: "JWT", category: "Security" },
      { name: "Webpack", category: "Build Tools" },
      { name: "SASS/SCSS", category: "Frontend" },
      { name: "Azure", category: "Cloud" },
      { name: "GCP", category: "Cloud" }
    ],
    social: {
      github: "https://github.com/westbuidl",
      linkedin: "https://linkedin.com/in/hyacinth-afam-7549ab98",
      email: "hyacinthafam@yahoo.com"
    },
    projects: [
      {
        title: "Url Shortener ",
        description: "A simple URL shortening service built with Laravel that converts long URLs into short, manageable links.",
        tech: ["PHP", "Blade", "CSS", "JavaScript"],
        link: "https://github.com/westbuidl/urlShortener.git",
        thumbnail: "/images/background/urlshort.png",
        fullImage: "/images/background/urlshort.png"
      },
      {
        title: "Agroease ",
        description: "Revolutionizing Agricultural Trade and Solutions. Agroease is a comprehensive platform designed to streamline agricultural trade, making it easier for farmers, suppliers, and buyers to connect and conduct business efficiently. With a focus on innovation and sustainability, Agroease is committed to enhancing the agricultural supply chain and providing valuable resources to its users.",
        tech: ["PHP", "Blade", "React", "GraphQL", "Node.js"],
        link: "https://agroease.trade",
        thumbnail: "/images/background/agroease1.jpeg",
        fullImage: "/images/background/agroease2.jpeg"
      },
      {
        title: "CinthPay",
        description: "CinthPay is a trusted payment platform built to simplify remittances from the United Kingdom to Nigeria. Founded with a mission to empower the Nigerian diaspora, we provide a fast, secure, and affordable way to send money home. Whether it's supporting family, paying bills, or celebrating life's milestones, CinthPay bridges the gap between you and your loved ones in Nigeria.",
        tech: ["Javascript", "Next.js", "Node.js", "Prisma"],
        link: "https://cinthpay.money",
        thumbnail: "/images/background/cinthpay1.png",
        fullImage: "/images/background/cinthpay2.png"
      },
      {
        title: "Soleer",
        description: "Soleer is set to redefine the gig economy landscape. By harnessing the power of Solana's blockchain, we're creating a decentralized platform where freelancers and clients can connect, collaborate, and transact with unprecedented efficiency and security.",
        tech: ["React", "TypeScript","TailwindCSS", "Framer Motion", "Node.js"],
        link: "https://soleer.xyz",
        thumbnail: "/images/background/soleer.png",
        fullImage: "/images/background/soleer.png"
      },
      {
        title: "Todo-s",
        description: "A simple, responsive task management web application built with PHP 8+, MySQL 8+, jQuery, and AJAX A simple, responsive task management web application built with PHP 8+, MySQL 8+, jQuery, and AJAX. Features include adding tasks with descriptions, marking tasks as done, removing tasks with confirmation, and viewing task details via a modal - all without page reloads.",
        tech: ["JavaCsript", "PHP", "Web3.AJAX", "SCSS"],
        link: "https://github.com/westbuidl/Todo-s",
        thumbnail: "/images/background/Todos-landingpage.png",
        fullImage: "/images/background/Todos-landingpage.png"
      },
      {
        title: "DeepMind",
        description: "DeepMind AI transforms raw, anonymous blockchain data into actionable intelligence, enabling smarter decisions and deeper insights.",
        tech: ["React", "Firebase", "Express.js", "Socket.io"],
        link: "https://deepmindbloc.xyz",
        thumbnail: "/images/background/logo.png",
        fullImage: "/images/background/Deepmind logo White.png"
      },
      {
        title: "C++ Gaming",
        description: "Simulating Rocket Launch using C++ and DirectX 3D",
        tech: ["C++", "C", "HLSL", "DirectX 3D"],
        link: "https://github.com/westbuidl/FinalLab_Solution",
        thumbnail: "/images/background/Clab.jpeg",
        fullImage: "/images/background/Clab.jpeg"
      }
    ]
  };

  // Format bio into paragraphs for better readability
  const formattedBio = developerData.bio.split('. ')
    .reduce((acc, sentence, i, arr) => {
      // Add the sentence back with its period
      acc += sentence + (i < arr.length - 1 ? '.' : '');
      
      // Every ~3 sentences or at the end, add a paragraph break
      if ((i + 1) % 3 === 0 && i !== arr.length - 1) {
        acc += '\n\n';
      }
      
      return acc;
    }, '');

  // Improved bio preview - create a 150 character preview
  const shortBio = formattedBio.length > 150
    ? formattedBio.substring(0, 150) + '...'
    : formattedBio;

  // SEO metadata
  const seoData = {
    title: `${developerData.name} - ${developerData.title}`,
    description: developerData.bio,
    keywords: [...developerData.skills.map(skill => skill.name), 'web developer', 'portfolio', 'frontend developer', 'developer portfolio'].join(', '),
    url: 'hyacinthafam.work', // Replace with your actual URL
    image: '/images/background/banner.png' // Replace with your actual social image
  };
  
  //const [visibleCards, setVisibleCards] = useState(1);

  // Add this useEffect with other useEffects
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4); // lg screens
      } else if (window.innerWidth >= 768) {
        setVisibleCards(3); // md screens
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2); // sm screens
      } else {
        setVisibleCards(1); // mobile
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Group skills by category
  const skillCategories = developerData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={developerData.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.url} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.image} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Canonical URL */}
        <link rel="canonical" href={seoData.url} />
      </Head>

      <div className={`${inter.className} min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 text-gray-800 dark:text-gray-200`}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-blue-800 focus:text-white focus:z-50"
        >
          Skip to main content
        </a>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all hover:shadow-blue-200 dark:hover:shadow-blue-900"
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Hero Section */}
        <div className="relative bg-white dark:bg-gray-900 shadow-lg" id="main-content">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-10">
              <div className="mb-8 md:mb-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-800 mx-auto md:mx-0 transition-transform hover:scale-105 duration-300 focus-within:ring-4 focus-within:ring-blue-500 relative shadow-lg shadow-blue-300/20 dark:shadow-blue-500/10">
                  <img
                    src="/images/background/profile.jpeg"
                    alt={`${developerData.name} profile photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  <TypeWriter text={developerData.name} />
                </h1>
                <p className="text-xl sm:text-2xl text-blue-800 dark:text-blue-400 mb-4 font-medium">{developerData.title}</p>
                <div className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl bio-container relative">
                  <p className="leading-relaxed whitespace-pre-line">
                    I am {showFullBio ? formattedBio : shortBio}
                  </p>
                  {formattedBio.length > 150 && (
                    <button
                      onClick={() => setShowFullBio(!showFullBio)}
                      className="mt-2 text-blue-800 dark:text-blue-400 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-800 rounded px-2"
                    >
                      {showFullBio ? 'Read less' : 'Read more'}
                    </button>
                  )}
                  {!showFullBio && formattedBio.length > 150 && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
                  )}
                </div>
                <div className="flex justify-center md:justify-start space-x-6">
                  {[
                    { icon: Github, link: developerData.social.github, label: "GitHub Profile" },
                    { icon: Linkedin, link: developerData.social.linkedin, label: "LinkedIn Profile" },
                    { icon: Mail, link: `mailto:${developerData.social.email}`, label: "Email Contact" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-800"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section - Simplified Design */}
        <section className="py-16 bg-blue-50 dark:bg-blue-950" aria-labelledby="skills-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
              <Code size={24} className="text-blue-800 dark:text-blue-400" aria-hidden="true" /> 
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Skills & Expertise</span>
            </h2>
            
            {/* Simplified Skills Grid */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {developerData.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-800 dark:bg-blue-400 mr-2"></span>
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Categories */}
          
            
            <div className="mt-12 flex justify-center">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 max-w-lg w-full">
                <h3 className="text-lg font-medium mb-4 text-center text-blue-800 dark:text-blue-400">Certifications & Education</h3>
                <ul className="space-y-3">
                <li className="flex items-center border-b border-gray-100 dark:border-gray-800 pb-2">
    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-800 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span>Master's in Advanced Computer Science - University of Hull</span>
  </li>
  <li className="flex items-center border-b border-gray-100 dark:border-gray-800 pb-2">
    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-800 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span>AWS Certified Cloud Practitioner (in progress)</span>
  </li>
  <li className="flex items-center">
    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-800 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span>Full Stack Web Development - Self-taught & Professional Experience</span>
  </li>
</ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white dark:bg-gray-900" aria-labelledby="projects-heading">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
      <Code size={24} className="text-blue-800 dark:text-blue-400" aria-hidden="true" />
      <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Featured Projects</span>
    </h2>

    {/* Projects Carousel */}
    <div className="relative">
      <div 
        className="overflow-hidden" 
        ref={carouselRef}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={whileDragging}
        onTouchStart={startDragging}
        onTouchEnd={stopDragging}
        onTouchMove={whileDragging}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
            width: `${(developerData.projects.length / visibleCards) * 100}%`
          }}
        >
          {developerData.projects.map((project, index) => (
            <div 
              key={index} 
              className="px-2"
              style={{ width: `${100 / developerData.projects.length * visibleCards}%` }}
            >
              <div 
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full"
                tabIndex={0}
                role="button"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                aria-label={`View details of ${project.title} project`}
              >
                <div className="relative aspect-video">
                  <img 
                    src={project.thumbnail} 
                    alt={`${project.title} thumbnail`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="p-2 bg-blue-800 rounded-full">
                      <Eye size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-blue-800 dark:text-blue-400">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                    {project.description.length > 100 
                      ? project.description.substring(0, 100) + '...' 
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <button 
                    className="mt-2 text-sm font-medium text-blue-800 dark:text-blue-400 flex items-center"
                  >
                    View Project Details <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-800 ${
          currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }`}
        aria-label="Previous project"
      >
        <ChevronLeft size={24} className="text-blue-800 dark:text-blue-400" />
      </button>
      <button 
        onClick={nextSlide}
        disabled={currentSlide >= developerData.projects.length - visibleCards}
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-800 ${
          currentSlide >= developerData.projects.length - visibleCards ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }`}
        aria-label="Next project"
      >
        <ChevronRight size={24} className="text-blue-800 dark:text-blue-400" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: developerData.projects.length - visibleCards + 1 }).map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-800 ${
              currentSlide === i ? 'bg-blue-800 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-700'
            }`}
            onClick={() => scrollToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={currentSlide === i ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  </div>
</section>


    

        {/* Contact Section */}
        <section className="py-16 bg-blue-50 dark:bg-blue-950" aria-labelledby="contact-heading">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
      <Mail size={24} className="text-blue-800 dark:text-blue-400" aria-hidden="true" />
      <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Get In Touch</span>
    </h2>
    
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject of your message"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            placeholder="Your message"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
            disabled={isSubmitting}
          />
        </div>
        {errorMessage && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 px-4 py-3 rounded-md">
            {errorMessage}
          </div>
        )}
        <div>
          <button
            type="submit"
            className={`w-full ${isSubmitting ? 'bg-blue-600' : 'bg-blue-800 hover:bg-blue-900'} text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 dark:focus:ring-offset-gray-900 flex items-center justify-center`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-600 dark:text-gray-300 mb-4">Or connect with me directly:</p>
      <div className="flex justify-center space-x-6">
        {[
          { icon: Github, link: developerData.social.github, label: "GitHub Profile" },
          { icon: Linkedin, link: developerData.social.linkedin, label: "LinkedIn Profile" },
          { icon: Mail, link: `mailto:${developerData.social.email}`, label: "Email Contact" }
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            aria-label={social.label}
            className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-800"
          >
            <social.icon size={24} />
          </a>
        ))}
      </div>
    </div>
  </div>
</section>

<SuccessModal 
  isOpen={showSuccessModal}
  onClose={() => setShowSuccessModal(false)}
  message="Your message has been sent successfully! I'll get back to you as soon as possible."
/>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 shadow-inner py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} {developerData.name}. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                {[
                  { icon: Github, link: developerData.social.github, label: "GitHub Profile" },
                  { icon: Linkedin, link: developerData.social.linkedin, label: "LinkedIn Profile" },
                  { icon: Mail, link: `mailto:${developerData.social.email}`, label: "Email Contact" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
        
        {/* Project Modal */}
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </div>
    </>
  );
};

export default DeveloperProfile;