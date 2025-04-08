'use client';

import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Code, Github, Linkedin, Mail, ExternalLink, X, Eye } from 'lucide-react';

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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
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
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [darkMode, setDarkMode] = useState(false);

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

  const developerData = {
    name: "Hyacinth Afam",
    title: "Senior Web Developer",
    bio: "Web developer with expertise in modern frontend frameworks and responsive design, focused on creating accessible and performant web experiences.",
    skills: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL", "UI/UX"],
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
      }
    ]
  };

  // SEO metadata
  const seoData = {
    title: `${developerData.name} - ${developerData.title}`,
    description: developerData.bio,
    keywords: [...developerData.skills, 'web developer', 'portfolio', 'frontend developer', 'developer portfolio'].join(', '),
    url: 'https://alexjohnson-portfolio.com', // Replace with your actual URL
    image: '/images/background/banner.png' // Replace with your actual social image
  };

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

      <div className={`${inter.className} min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
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
          className="fixed top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
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
        <div className="relative bg-white dark:bg-gray-800 shadow-md" id="main-content">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-10">
              <div className="mb-8 md:mb-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 mx-auto md:mx-0 transition-transform hover:scale-105 duration-300 focus-within:ring-4 focus-within:ring-blue-300">
                  <img 
                    src="/images/background/profile.jpeg" 
                    alt={`${developerData.name} profile photo`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                  <TypeWriter text={developerData.name} />
                </h1>
                <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-4">{developerData.title}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">{developerData.bio}</p>
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
                      className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section className="py-12 bg-gray-100 dark:bg-gray-800" aria-labelledby="skills-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Code size={24} aria-hidden="true" /> Skills & Expertise
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {developerData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-sm text-sm font-medium transition-all hover:bg-blue-50 dark:hover:bg-gray-600 hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white dark:bg-gray-900" aria-labelledby="projects-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold mb-10 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developerData.projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg group"
                >
                  <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={`${project.title} thumbnail`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center gap-1 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                          aria-label={`Preview ${project.title}`}
                        >
                          <Eye size={16} aria-hidden="true" /> Preview
                        </button>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                          aria-label={`Visit ${project.title}`}
                        >
                          <ExternalLink size={16} aria-hidden="true" /> Visit
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-1 focus:outline-none focus:underline"
                        aria-label={`Learn more about ${project.title}`}
                      >
                        Learn more <Eye size={16} aria-hidden="true" />
                      </button>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300 transition-colors focus:outline-none focus:underline"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300">
          <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Hyacinth Afam</h3>
                <p className="text-gray-400">Senior Web Developer specializing in modern web technologies and responsive design solutions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href={`mailto:${developerData.social.email}`} 
                      className="flex items-center gap-2 hover:text-blue-400 transition-colors focus:outline-none focus:underline"
                    >
                      <Mail size={16} aria-hidden="true" />
                      <span>{developerData.social.email}</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href={developerData.social.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 hover:text-blue-400 transition-colors focus:outline-none focus:underline"
                    >
                      <Github size={16} aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href={developerData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 hover:text-blue-400 transition-colors focus:outline-none focus:underline"
                    >
                      <Linkedin size={16} aria-hidden="true" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <nav aria-label="Footer Navigation">
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="#main-content" 
                        className="hover:text-blue-400 transition-colors focus:outline-none focus:underline"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#skills-heading" 
                        className="hover:text-blue-400 transition-colors focus:outline-none focus:underline"
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#projects-heading" 
                        className="hover:text-blue-400 transition-colors focus:outline-none focus:underline"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="hover:text-blue-400 transition-colors focus:outline-none focus:underline"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400">© {new Date().getFullYear()} Hyacinth Afam. All rights reserved.</p>
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

      {/* Add support for dark mode with Tailwind */}
      <style jsx global>{`
        /* Ensure the dark mode is applied correctly */
        .dark {
          color-scheme: dark;
        }
        
        /* Add necessary styles for aspect ratio if not using a plugin */
        .aspect-w-16 {
          position: relative;
          padding-bottom: 56.25%; /* aspect ratio 16:9 */
        }
        
        .aspect-w-16 > img {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          object-fit: cover;
          object-position: center;
        }
        
        /* Line clamp for truncating text */
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </>
  );
};

export default DeveloperProfile;