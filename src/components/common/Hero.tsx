'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Code, Github, Linkedin, Mail, ExternalLink, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

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
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 id="modal-title" className="text-2xl font-bold">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
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
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
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
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
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

  // Handle carousel dragging
  const startDragging = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
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
    const newIndex = Math.min(currentSlide + 1, developerData.projects.length - 1);
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentSlide - 1, 0);
    scrollToSlide(newIndex);
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
    title: "Senior Web Developer",
    bio: "a versatile and passionate developer and technical communicator with a strong foundation in crafting user-focused, high-performance software solutions. Based in London, UK, I bring over three years of hands-on experience in web development, technical documentation, and SaaS delivery, honed through roles at Agroease Limited, Smart Audits, and Logiscool Marlow. My technical toolkit includes JavaScript, React, Node.js, TypeScript, HTML, CSS, Python, and C#, paired with expertise in cloud platforms (AWS, Azure exposure), APIs, and docs-as-code practices using Git and Markdown. I thrive at the intersection of code and clarity—whether it's building scalable websites with blockchain integrations, writing engaging tutorials for diverse learners, or optimizing SaaS platforms to boost adoption by 15%, as I did at Agroease. I'm proudest of my work on Smart Audits, where I co-founded a blockchain audit tool, designing responsive, secure web interfaces that empowered clients with actionable insights. My approach is rooted in clean, maintainable code, Agile collaboration, and a relentless drive to simplify complex concepts for users, from students to global enterprises. With a Master's in Advanced Computer Science from the University of Hull and certifications like AWS Certified Cloud Practitioner (in progress), I'm a fast learner eager to tackle new challenges. I've contributed to education platforms, event-style websites, and customer conversation tools, always prioritizing performance, accessibility, and teamwork. Explore my projects to see how I blend technical skill with a passion for making a difference—let's connect to create something impactful together.",
    skills: [
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Languages" },
      { name: "Next.js", category: "Frameworks" },
      { name: "Node.js", category: "Backend" },
      { name: "GraphQL", category: "API" },
      { name: "UI/UX", category: "Design" },
      { name: "AWS", category: "Cloud" },
      { name: "MongoDB", category: "Database" },
      { name: "TailwindCSS", category: "Frontend" },
      { name: "Python", category: "Languages" },
      { name: "C#", category: "Languages" },
      { name: "Git", category: "DevTools" }
    ],
    social: {
      github: "https://github.com/westbuidl",
      linkedin: "https://linkedin.com/in/hyacinth-afam-7549ab98",
      email: "hyacinthafam@yahoo.com"
    },
    projects: [
      {
        title: "Analytics Dashboard",
        description: "Data visualization platform with interactive charts and reports. Features include real-time data updates, customizable widgets, and comprehensive reporting tools for business intelligence.",
        tech: ["React", "D3.js", "GraphQL", "Node.js"],
        link: "https://analytics-dashboard.com",
        thumbnail: "/images/background/banner.png",
        fullImage: "/images/background/banner.png"
      },
      {
        title: "E-Commerce Platform",
        description: "Full-featured online store with payment processing and inventory management. Includes user authentication, product management, shopping cart functionality, secure checkout process, and order tracking.",
        tech: ["React", "Next.js", "Node.js", "MongoDB"],
        link: "https://ecommerce-platform.com",
        thumbnail: "/images/background/banner.png",
        fullImage: "/images/background/banner.png"
      },
      {
        title: "Portfolio Website",
        description: "Responsive portfolio website with project showcases. Features include smooth animations, dark mode support, contact form, and project filtering. Optimized for accessibility and SEO performance.",
        tech: ["React", "TailwindCSS", "Framer Motion"],
        link: "https://portfolio-website.com",
        thumbnail: "/images/background/banner.png",
        fullImage: "/images/background/banner.png"
      },
      {
        title: "Blockchain Audit Tool",
        description: "Smart contract auditing platform that analyzes blockchain-based applications for security vulnerabilities and provides detailed reports with actionable recommendations for developers.",
        tech: ["React", "Solidity", "Web3.js", "Node.js"],
        link: "https://blockchain-audit.com",
        thumbnail: "/images/background/banner.png",
        fullImage: "/images/background/banner.png"
      },
      {
        title: "Educational Platform",
        description: "Interactive learning management system with course creation tools, student progress tracking, and integrated assessment features. Supports multimedia content and virtual classroom sessions.",
        tech: ["React", "Firebase", "Express.js", "Socket.io"],
        link: "https://educational-platform.com",
        thumbnail: "/images/background/banner.png",
        fullImage: "/images/background/banner.png"
      },
      {
        title: "AI Content Assistant",
        description: "Natural language processing tool that helps content creators generate ideas, improve writing quality, and optimize content for specific audiences using machine learning algorithms.",
        tech: ["Python", "TensorFlow", "Flask", "React"],
        link: "https://ai-content-assistant.com",
        thumbnail: "/images/background/banner.png",
        fullImage: "/images/background/banner.png"
      }
    ]
  };

  // Improved bio preview - create a 150 character preview instead of just first sentence
  const shortBio = developerData.bio.length > 150
    ? developerData.bio.substring(0, 150) + '...'
    : developerData.bio;

  // SEO metadata
  const seoData = {
    title: `${developerData.name} - ${developerData.title}`,
    description: developerData.bio,
    keywords: [...developerData.skills.map(skill => skill.name), 'web developer', 'portfolio', 'frontend developer', 'developer portfolio'].join(', '),
    url: 'https://alexjohnson-portfolio.com', // Replace with your actual URL
    image: '/images/background/banner.png' // Replace with your actual social image
  };
  const [visibleCards, setVisibleCards] = useState(1);

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

      <div className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 text-gray-800 dark:text-gray-200`}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-blue-600 focus:text-white focus:z-50"
        >
          Skip to main content
        </a>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-blue-200 dark:hover:shadow-blue-900"
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
        <div className="relative bg-white dark:bg-gray-800 shadow-lg" id="main-content">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-10">
              <div className="mb-8 md:mb-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 mx-auto md:mx-0 transition-transform hover:scale-105 duration-300 focus-within:ring-4 focus-within:ring-blue-300 relative shadow-lg shadow-blue-300/20 dark:shadow-blue-500/10">
                  <img
                    src="/images/background/profile.jpeg"
                    alt={`${developerData.name} profile photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <TypeWriter text={developerData.name} />
                </h1>
                <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-4 font-medium">{developerData.title}</p>
                <div className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl bio-container relative">
                  <p className="leading-relaxed">
                    I'm {showFullBio ? developerData.bio : shortBio}
                  </p>
                  {developerData.bio.length > 150 && (
                    <button
                      onClick={() => setShowFullBio(!showFullBio)}
                      className="mt-2 text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2"
                    >
                      {showFullBio ? 'Read less' : 'Read more'}
                    </button>
                  )}
                  {!showFullBio && developerData.bio.length > 150 && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
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
                      className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section - Redesigned */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900" aria-labelledby="skills-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
              <Code size={24} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills & Expertise</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="bg-blue-600 dark:bg-blue-800 py-3 px-4">
                    <h3 className="text-lg font-semibold text-white">{category}</h3>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium transition-all hover:bg-blue-100 dark:hover:bg-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 max-w-lg w-full">
                <h3 className="text-lg font-medium mb-4 text-center">Certifications & Education</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Master's in Advanced Computer Science - University of Hull</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>AWS Certified Cloud Practitioner (in progress)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Improved */}
<section className="py-16 bg-white dark:bg-gray-900" aria-labelledby="projects-heading">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</h2>
    
    <div className="relative">
      {/* Carousel Controls */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            currentSlide === 0 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-gray-800'
          }`}
          aria-label="Previous projects"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="hidden sm:flex gap-2">
          {developerData.projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                currentSlide === index 
                  ? 'bg-blue-600 dark:bg-blue-400' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          disabled={currentSlide >= developerData.projects.length - visibleCards}
          className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            currentSlide >= developerData.projects.length - visibleCards
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-gray-800'
          }`}
          aria-label="Next projects"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Project Cards - Sliding Container */}
      <div 
        ref={carouselRef}
        className="overflow-x-hidden relative"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={whileDragging}
        onTouchStart={startDragging}
        onTouchEnd={stopDragging}
        onTouchMove={whileDragging}
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out gap-4 sm:gap-6"
          style={{ 
            transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
          }}
        >
          {developerData.projects.map((project, index) => (
            <div 
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg group h-full flex flex-col"
            >
              <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} thumbnail`} 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3 sm:p-4">
                  <div className="flex gap-2 sm:gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1 bg-white text-gray-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors"
                      aria-label={`View ${project.title} details`}
                    >
                      <Eye size={14} className="sm:w-16" /> <span className="hidden sm:inline">View Details</span>
                    </button>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors"
                      aria-label={`Visit ${project.title} project`}
                    >
                      <ExternalLink size={14} className="sm:w-16" /> <span className="hidden sm:inline">Visit</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 line-clamp-1">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm sm:text-base line-clamp-2 sm:line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 sm:p-8 max-w-lg mx-auto">
              <div className="mb-6 flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">Email</h3>
                    <a
                      href={`mailto:${developerData.social.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {developerData.social.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">LinkedIn</h3>
                    <a
                      href={developerData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                    <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">GitHub</h3>
                    <a
                      href={developerData.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View GitHub Projects
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-6 mt-6">
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Open to new opportunities and collaborations!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} {developerData.name}. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href={developerData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href={developerData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${developerData.social.email}`}
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  aria-label="Contact via Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </>
  );
};

export default DeveloperProfile;