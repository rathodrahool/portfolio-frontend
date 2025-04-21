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
import { motion, AnimatePresence } from "framer-motion";

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
    description: "Need help making your writing better? CorrectEase is your writing companion that helps polish your text exactly the way you want. It's simple to use, works in real-time, and gives you full control over how your text sounds.",
    status: "In Development",
    liveUrl: "https://correctease-frontend.netlify.app/",
    demoVideo: "https://www.youtube.com/embed/J96_aFWCsgo?si=0vbMTuxd5cHuHCPT&autoplay=0&mute=1&vq=hd1080&modestbranding=1",
    repositories: {
      frontend: "https://github.com/rathodrahool/CorrectEase",
      backend: "https://github.com/rathodrahool/CorrectEase-Backend"
    },
    features: [
      "Choose how you want to sound - professional, friendly, or straight to the point",
      "See your text improve as you type with instant AI suggestions",
      "Keep track of all your previous versions with smart search",
      "Perfect for teams - everyone gets their own workspace",
      "Works with multiple AI engines for the best results",
      "Keeps your content secure with advanced protection"
    ],
    tech: {
      frontend: ["React 18", "TypeScript", "Vite", "TailwindCSS", "React Router"],
      backend: ["NestJS", "PostgreSQL", "TypeORM", "Gemini AI", "JWT"]
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [showSourceModal, setShowSourceModal] = useState(false);

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="border-2 border-black"></div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white border-8 border-black p-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Project Status Badge */}
        <div className="absolute -top-6 -right-6 bg-red-400 px-6 py-2 border-4 border-black transform rotate-12">
          <motion.div className="flex items-center gap-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <BsCircleFill className="w-3 h-3" />
            <span className="font-black uppercase tracking-wider">In Progress</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Content Column */}
          <div className="relative col-span-1">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 border-4 border-black transform -rotate-12"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-300 border-4 border-black transform rotate-12"></div>

            <h3 className="text-3xl font-black mb-6 bg-purple-300 inline-block px-4 py-2 border-4 border-black transform -rotate-2">
              {projectDetails.name}
            </h3>
            
            <p className="text-lg mb-6 font-bold bg-green-100 p-4 border-4 border-black">
              {projectDetails.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-black text-xl mb-3 bg-yellow-300 inline-block px-4 py-2 border-4 border-black transform rotate-2">
                Key Features
              </h4>
              <ul className="space-y-2">
                {projectDetails.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2 bg-white p-2 border-4 border-black hover:transform hover:-translate-y-1 transition-transform"
                  >
                    <span className="font-black text-xl">→</span>
                    <span className="font-bold text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-black inline-block bg-blue-300 px-4 py-2 border-4 border-black transform -rotate-1">
                  Frontend Stack
                </h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  {projectDetails.tech.frontend.map((tech, index) => (
                    <span key={index} className="bg-purple-100 px-4 py-2 border-4 border-black font-bold hover:transform hover:-translate-y-1 transition-transform">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-black inline-block bg-green-300 px-4 py-2 border-4 border-black transform rotate-1">
                  Backend Stack
                </h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  {projectDetails.tech.backend.map((tech, index) => (
                    <span key={index} className="bg-blue-100 px-4 py-2 border-4 border-black font-bold hover:transform hover:-translate-y-1 transition-transform">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={projectDetails.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 px-6 py-3 border-4 border-black font-black uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <BsGlobe className="inline-block mr-2" /> Live Demo
              </motion.a>
              <motion.button
                onClick={() => setShowSourceModal(true)}
                className="bg-black text-white px-6 py-3 border-4 border-black font-black uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <BsGithub className="inline-block mr-2" /> Source
              </motion.button>
            </div>
          </div>

          {/* Video Column */}
          <div className="relative col-span-1">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-black bg-yellow-200 transform rotate-2"></div>
            <div className="relative border-8 border-black bg-white h-[calc(100%-2rem)]">
              <div className="h-full">
                <iframe
                  className="w-full h-full"
                  src={`${projectDetails.demoVideo}${isPlaying ? '&autoplay=1' : ''}`}
                  title="CorrectEase Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                {!isPlaying && (
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-white p-6 border-4 border-black transform -rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                      <BsPlayCircle className="w-16 h-16" />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <SourceCodeModal 
        isOpen={showSourceModal}
        onClose={() => setShowSourceModal(false)}
        repos={projectDetails.repositories}
      />
    </div>
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