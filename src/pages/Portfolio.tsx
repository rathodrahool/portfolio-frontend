import React, { useState } from "react";
import { 
  BsCodeSlash,
  BsGithub,
  BsArrowRight,
  BsCircleFill,
  BsPlayCircle,
  BsGlobe,
  BsCode,
  BsServer
} from "react-icons/bs";
import { motion } from "framer-motion";

interface ContactInfo {
  type: string;
  value: string;
  icon: React.ReactNode;
  label: string;
}

const SourceCodeModal = ({ isOpen, onClose, repos }: { 
  isOpen: boolean; 
  onClose: () => void;
  repos: {
    frontend: string;
    backend: string;
  };
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white border-4 border-black p-6 max-w-md w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Source Code</h3>
          <button 
            onClick={onClose}
            className="bg-black text-white p-2 hover:bg-gray-800"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          <motion.a
            href={repos.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full bg-purple-100 p-4 border-4 border-black hover:bg-purple-200 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <BsCode className="text-xl" />
            <div>
              <div className="font-bold">Frontend Repository</div>
              <div className="text-sm text-gray-600">React, TypeScript, Tailwind</div>
            </div>
          </motion.a>

          <motion.a
            href={repos.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full bg-blue-100 p-4 border-4 border-black hover:bg-blue-200 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <BsServer className="text-xl" />
            <div>
              <div className="font-bold">Backend Repository</div>
              <div className="text-sm text-gray-600">Node.js, Express, PostgreSQL</div>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

const CurrentProjectCard = () => {
  const projectDetails = {
    name: "CorrectEase",
    description: "Ever wish your writing felt a little sharper? A bit more natural? This tool's built to help with exactly that. Think of it like Grammarly, but with more control. It's clean. Easy to use. Inspired by the way Jira keeps things simple but powerful.",
    status: "In Development",
    liveUrl: "https://correctease.rahulrathod.in",
    demoVideo: "https://www.youtube.com/embed/J96_aFWCsgo?si=0vbMTuxd5cHuHCPT&autoplay=0&mute=1",
    repositories: {
      frontend: "https://github.com/rathodrahool/CorrectEase",
      backend: "https://github.com/rathodrahool/CorrectEase-Backend"
    },
    features: [
      "Switch between writing styles — formal, casual, concise, or standard",
      "Real-time content updates with automatic saving",
      "Comprehensive edit history with search and filtering",
      "Built-in user management system for teams",
      "Integration with multiple AI providers for flexibility",
      "Enterprise-grade security and authentication"
    ],
    tech: {
      frontend: ["React 18", "TypeScript", "Vite", "TailwindCSS", "React Router"],
      backend: ["NestJS", "PostgreSQL", "TypeORM", "Gemini AI", "JWT"]
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [showSourceModal, setShowSourceModal] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-purple-100 to-blue-100 border-4 border-black p-6 relative overflow-hidden"
    >
      {/* Live Development Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 border-2 border-black">
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <BsCircleFill className="w-2 h-2" />
        </motion.div>
        <span className="font-bold text-sm">LIVE DEVELOPMENT</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-bold bg-white inline-block px-4 py-2 border-2 border-black transform -rotate-1 mb-6">
            <BsCodeSlash className="inline-block mr-2" />
            {projectDetails.name}
          </h3>
          
          <p className="text-lg mb-6">{projectDetails.description}</p>

          <div className="space-y-4 mb-6">
            <h4 className="font-bold">Key Features:</h4>
            <ul className="space-y-2">
              {projectDetails.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-bold mb-2">Frontend Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {projectDetails.tech.frontend.map((tech, index) => (
                  <span key={index} className="bg-purple-100 px-3 py-1 border-2 border-black text-sm font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Backend Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {projectDetails.tech.backend.map((tech, index) => (
                  <span key={index} className="bg-blue-100 px-3 py-1 border-2 border-black text-sm font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {projectDetails.liveUrl && (
              <motion.a
                href={projectDetails.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 font-bold border-2 border-black hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <BsGlobe />
                View Live Demo
              </motion.a>
            )}
            <motion.button
              onClick={() => setShowSourceModal(true)}
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-bold border-2 border-black hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <BsGithub />
              View Source
            </motion.button>
            {projectDetails.demoVideo && (
              <motion.button
                onClick={() => setIsPlaying(true)}
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 font-bold border-2 border-black hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <BsPlayCircle />
                Watch Demo
              </motion.button>
            )}
          </div>
        </div>

        {/* Right Column - Video */}
        <div className="relative h-[400px] lg:h-full min-h-[400px] border-4 border-black bg-white p-2">
          <div className="relative w-full h-full">
            <iframe
              className="w-full h-full"
              src={`${projectDetails.demoVideo}${isPlaying ? '&autoplay=1' : ''}`}
              title="CorrectEase Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer group"
                onClick={handleVideoClick}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white p-4 rounded-full group-hover:bg-gray-100 transition-colors"
                >
                  <BsPlayCircle className="w-12 h-12 text-black" />
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>

      <SourceCodeModal 
        isOpen={showSourceModal}
        onClose={() => setShowSourceModal(false)}
        repos={projectDetails.repositories}
      />
    </motion.div>
  );
};

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF5EE] p-3 sm:p-4 md:p-6 lg:p-8 font-mono relative">
      {/* Navigation Bar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12 border-4 border-black bg-white p-3 sm:p-4 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-400 border-2 border-black rotate-12" />
          <span className="text-lg sm:text-xl font-bold">rahulrathod.in</span>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <button 
            onClick={handleContactClick}
            className="font-bold hover:text-blue-500 transition-colors"
          >
            About
          </button>
          <a href="#skills" className="font-bold hover:text-blue-500">What I Do</a>
          <a href="#work" className="font-bold hover:text-blue-500">My Work</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mb-8 sm:mb-12 border-4 border-black bg-white p-4 sm:p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-300 border-4 border-black rotate-12" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I'm Rahul.
          </h1>
          <div className="text-5xl md:text-7xl font-bold mb-6">
            I'm a 
            <div className="bg-blue-400 inline-block ml-4 px-4 py-2 border-4 border-black transform -rotate-2">
              Backend Engineer.
            </div>
          </div>
          <p className="text-xl mb-8 max-w-3xl">
            who loves building strong, reliable software. I focus on writing clean code, testing every part, and learning constantly.
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-green-500 text-white px-6 py-3 border-4 border-black font-bold shadow-[8px_8px_0px_0px_rgba(34,197,94,1)]"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work →
            </motion.button>
          </div>
        </div>
      </div>

      {/* Current Project Section */}
      <div className="mb-8 sm:mb-12">
        <CurrentProjectCard />
      </div>

      {/* Copyright Notice */}
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-xs sm:text-sm text-gray-600">
        <p className="flex items-center gap-1">
          <span>Designed by</span>
          <a 
            href="https://github.com/rathodrahool" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold hover:text-blue-500 transition-colors border-b-2 border-gray-600 hover:border-blue-500"
          >
            Rahul Rathod
          </a>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;