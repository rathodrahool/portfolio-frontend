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
    <div className="relative p-2">
      {/* Main Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#FFFAF4] border-8 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Project Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-300 border-4 border-black -z-10"></div>
            <h3 className="text-4xl font-black bg-white px-6 py-3 border-4 border-black transform -rotate-2">
              {projectDetails.name}
            </h3>
            <div className="mt-4 ml-4">
              <motion.div 
                className="flex items-center gap-2 bg-red-400 w-fit px-4 py-1 border-4 border-black"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BsCircleFill className="w-2 h-2 animate-pulse" />
                <span className="font-black uppercase text-sm tracking-wider">Completed</span>
              </motion.div>
            </div>
          </div>
          
          <div className="flex gap-3 mt-6 md:mt-0">
            {/* Action Buttons */}
            <motion.a
              href={projectDetails.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 px-6 py-3 border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <BsGlobe className="inline-block mr-2" /> Demo
            </motion.a>
            <motion.button
              onClick={() => setShowSourceModal(true)}
              className="bg-black text-white px-6 py-3 border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(34,197,94,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <BsGithub className="inline-block mr-2" /> Code
            </motion.button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-full h-full bg-blue-200 border-4 border-black -z-10"></div>
              <p className="text-lg font-bold bg-white p-4 border-4 border-black">
                {projectDetails.description}
              </p>
            </div>

            <div className="relative">
              <h4 className="inline-block font-black text-xl mb-4 bg-yellow-300 px-4 py-2 border-4 border-black transform -rotate-1">
                Key Features
              </h4>
              <ul className="space-y-2 relative">
                <div className="absolute -top-2 -left-2 w-full h-full bg-purple-200 border-4 border-black -z-10"></div>
                {projectDetails.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white p-3 border-4 border-black hover:-translate-y-1 transition-transform"
                  >
                    <span className="font-black text-xl">→</span>
                    <span className="font-bold">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Video and Tech Stack */}
          <div className="space-y-6">
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-black mb-3 bg-green-300 inline-block px-4 py-2 border-4 border-black transform rotate-1">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projectDetails.tech.frontend.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white px-3 py-1 border-4 border-black text-sm font-bold hover:-translate-y-1 transition-transform inline-block"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-black mb-3 bg-blue-300 inline-block px-4 py-2 border-4 border-black transform -rotate-1">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projectDetails.tech.backend.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white px-3 py-1 border-4 border-black text-sm font-bold hover:-translate-y-1 transition-transform inline-block"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-green-200 border-4 border-black -z-10"></div>
              <div className="relative border-8 border-black bg-white h-full">
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
                    <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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

const KeenoteProjectCard = () => {
  const projectDetails = {
    name: "Keenote",
    description: "Want to stay consistent with your habits and goals? Keenote is your personal productivity tracker that helps you log and improve daily, weekly, and monthly routines. It focuses on what actually matters—your effort and habits—across all areas of life.",
    status: "In Progress",
    liveUrl: "https://keenote.netlify.app",
    demoVideo: "https://www.youtube.com/embed/OkmQED96laQ?si=2_7hygMd1FZVyJ5p",
    repositories: {
      frontend: "https://github.com/rathodrahool/keenote-frontend-v2",
      backend: "https://github.com/rathodrahool/keenote-backend"
    },
    features: [
      "Track two core task types: time-based (like \"read 30 mins\") and yes/no habits (like \"did yoga?\")",
      "Organized by categories—Health, Work, Learning, Finance, and more",
      "Flexible scheduling: daily, weekly, or monthly tasks",
      "Visual reports to track your consistency and progress",
      "Simple, fast check-in system",
      "Designed for individuals who want clarity, not clutter"
    ],
    tech: {
      frontend: ["React", "TypeScript", "TailwindCSS", "Redux Toolkit", "React Router"],
      backend: ["NestJS", "Node.js", "TypeScript", "MongoDB", "Mongoose"]
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [showSourceModal, setShowSourceModal] = useState(false);

  return (
    <div className="relative p-2">
      {/* Main Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#FFFAF4] border-8 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Project Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-300 border-4 border-black -z-10"></div>
            <h3 className="text-4xl font-black bg-white px-6 py-3 border-4 border-black transform -rotate-2">
              {projectDetails.name}
            </h3>
            <div className="mt-4 ml-4">
              <motion.div 
                className="flex items-center gap-2 bg-red-400 w-fit px-4 py-1 border-4 border-black"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BsCircleFill className="w-2 h-2 animate-pulse" />
                <span className="font-black uppercase text-sm tracking-wider">In Progress</span>
              </motion.div>
            </div>
          </div>
          
          <div className="flex gap-3 mt-6 md:mt-0">
            {/* Action Buttons */}
            <motion.a
              href={projectDetails.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 px-6 py-3 border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <BsGlobe className="inline-block mr-2" /> Demo
            </motion.a>
            <motion.button
              onClick={() => setShowSourceModal(true)}
              className="bg-black text-white px-6 py-3 border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(34,197,94,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <BsGithub className="inline-block mr-2" /> Code
            </motion.button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-full h-full bg-blue-200 border-4 border-black -z-10"></div>
              <p className="text-lg font-bold bg-white p-4 border-4 border-black">
                {projectDetails.description}
              </p>
            </div>

            <div className="relative">
              <h4 className="inline-block font-black text-xl mb-4 bg-yellow-300 px-4 py-2 border-4 border-black transform -rotate-1">
                Key Features
              </h4>
              <ul className="space-y-2 relative">
                <div className="absolute -top-2 -left-2 w-full h-full bg-purple-200 border-4 border-black -z-10"></div>
                {projectDetails.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white p-3 border-4 border-black hover:-translate-y-1 transition-transform"
                  >
                    <span className="font-black text-xl">→</span>
                    <span className="font-bold">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Video and Tech Stack */}
          <div className="space-y-6">
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-black mb-3 bg-green-300 inline-block px-4 py-2 border-4 border-black transform rotate-1">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projectDetails.tech.frontend.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white px-3 py-1 border-4 border-black text-sm font-bold hover:-translate-y-1 transition-transform inline-block"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-black mb-3 bg-blue-300 inline-block px-4 py-2 border-4 border-black transform -rotate-1">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projectDetails.tech.backend.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white px-3 py-1 border-4 border-black text-sm font-bold hover:-translate-y-1 transition-transform inline-block"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-green-200 border-4 border-black -z-10"></div>
              <div className="relative border-8 border-black bg-white h-full">
                <iframe
                  className="w-full h-full"
                  src={`${projectDetails.demoVideo}${isPlaying ? '&autoplay=1' : ''}`}
                  title="Keenote Demo"
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
                    <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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

  const handleWorkClick = () => {
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF5EE] p-3 sm:p-4 md:p-6 lg:p-8 font-mono relative">
      {/* Navigation Bar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12 border-4 border-black bg-white p-3 sm:p-4 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-400 border-2 border-black rotate-12" />
          <span className="text-lg sm:text-xl font-bold">rahulrathod.in</span>
        </div>
        <div>
          <motion.button
            onClick={handleWorkClick}
            className="bg-black text-white px-4 py-2 border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(34,197,94,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            whileHover={{ scale: 1.02 }}
          >
            My Work
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mb-8 sm:mb-12 border-4 border-black bg-white p-4 sm:p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-300 border-4 border-black rotate-12" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I'm Rahul.
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl bg-yellow-100 p-3 border-4 border-black transform -rotate-1">
            Welcome to my collection of personal projects - where I experiment, learn, and showcase my development skills.
          </p>
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
              onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work →
            </motion.button>
          </div>
        </div>
      </div>

      {/* Current Project Section */}
      <div id="project" className="space-y-12 scroll-mt-24">
        <CurrentProjectCard />
        <KeenoteProjectCard />
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