import React, { useState} from "react";
import { BsGithub, BsLinkedin,  BsCode, BsCheckCircle, BsClock,  BsCalendar,  BsLightning, BsArrowUpRight, BsBookmark, BsDownload, BsEnvelope, BsCopy, BsPhone } from "react-icons/bs";
import { motion } from "framer-motion";



interface ContactInfo {
  type: string;
  value: string;
  icon: React.ReactNode;
  label: string;
}



const SkillsOverviewCard = () => {
  const skills = [
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Express.js", level: 85, category: "Backend" },
    { name: "TypeScript", level: 85, category: "Languages" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "Jest", level: 75, category: "Testing" }
  ];

  return (
    <div className="h-full">
      <h3 className="text-xl font-bold mb-3 transform rotate-1 bg-white inline-block p-2 border-2 border-black">
        <BsCode className="inline-block mr-2" />
        Technical Skills
      </h3>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border-2 border-black p-4 transform hover:-rotate-1 transition-transform"
          >
            <div className="flex justify-between mb-2">
              <span className="font-bold text-lg">{skill.name}</span>
              <span className="bg-pink-300 px-2 py-1 border border-black text-sm font-bold">
                {skill.category}
              </span>
            </div>
            <div className="h-4 bg-gray-200 border-2 border-black">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full bg-black"
              />
            </div>
            <div className="text-right mt-1 font-bold">{skill.level}%</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const RecentActivityCard = () => {
  const activities = [
    {
      type: "project",
      project: "Property Dollar",
      description: "Property management platform",
      tasks: [
        {
          name: "User Authentication",
          status: "completed",
          lastUpdated: "2 hours ago"
        },
        {
          name: "Property Listing API",
          status: "in-progress",
          lastUpdated: "1 hour ago"
        }
      ]
    },
    {
      type: "project",
      project: "iManagify",
      description: "Infrastructure management tool",
      tasks: [
        {
          name: "API Integration Tests",
          status: "completed",
          lastUpdated: "5 hours ago"
        },
        {
          name: "Real-time Updates",
          status: "in-progress",
          lastUpdated: "3 hours ago"
        }
      ]
    },
    {
      type: "project",
      project: "EasyBankCore",
      description: "Core Banking System",
      tasks: [
        {
          name: "Transaction Module",
          status: "completed",
          lastUpdated: "1 day ago"
        },
        {
          name: "Account Management API",
          status: "in-progress",
          lastUpdated: "4 hours ago"
        }
      ]
    }
  ];

  const getStatusStyles = (status: string) => {
    if (status === 'completed') {
      return {
        dot: 'bg-green-500',
        badge: 'bg-green-300 border-2 border-black',
        text: 'Done'
      };
    }
    return {
      dot: 'bg-yellow-500',
      badge: 'bg-yellow-300 border-2 border-black',
      text: 'In Progress'
    };
  };

  return (
    <div className="h-full">
      <h3 className="text-xl font-bold mb-3 transform -rotate-1 bg-white inline-block p-2 border-2 border-black">
        <BsClock className="inline-block mr-2" />
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border-2 border-black p-4 transform hover:rotate-1 transition-transform"
          >
            {/* Project Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="font-bold bg-yellow-300 px-2 py-1 border border-black inline-block transform -rotate-1">
                  {activity.project}
                </span>
                <p className="text-sm mt-1 font-mono">{activity.description}</p>
              </div>
            </div>

            {/* Tasks List */}
            <div className="space-y-2 mt-2">
              {activity.tasks.map((task, i) => {
                const statusStyle = getStatusStyles(task.status);
                return (
                  <div 
                    key={i}
                    className="flex items-center justify-between border-l-4 border-black pl-2 py-1 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${statusStyle.dot} border border-black`} />
                      <span className="text-sm font-mono font-bold">{task.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-3 py-1 font-bold ${statusStyle.badge} transform hover:scale-105 transition-transform`}>
                        {statusStyle.text}
                      </span>
                      <span className="text-xs bg-gray-100 px-2 py-1 border border-black">
                        {task.lastUpdated}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WorkExperienceCard = () => {
  const experience = [
    {
      role: "Software Engineer (Backend)",
      company: "SolGuruz LLP",
      period: "02/2024 - Present",
      location: "Ahmedabad",
      highlights: [
        "Building reliable backend applications using JavaScript, Express.js, and NestJS",
        "Implementing SOLID principles and clean code practices",
        "Working with PostgreSQL and TypeORM for database management",
        "Creating comprehensive test suites with JEST"
      ]
    },
    {
      role: "Backend Developer",
      company: "Acute Informatics Pvt Ltd",
      period: "05/2023 - 12/2023",
      location: "Ahmedabad",
      highlights: [
        "Developed CBS submodules for customer and account management",
        "Designed and implemented database schemas",
        "Collaborated with teams for API deployment and troubleshooting"
      ]
    },
    {
      role: "SQL DBA",
      company: "Asite Solutions Pvt Ltd",
      period: "01/2023 - 04/2023",
      location: "Ahmedabad",
      highlights: [
        "Managed SQL server instances configuration",
        "Implemented database backup and recovery strategies",
        "Handled disaster recovery planning"
      ]
    }
  ];

  return (
    <div className="h-full">
      <h3 className="text-xl font-bold mb-6 bg-white inline-block p-2 border-2 border-black transform rotate-1">
        <BsCalendar className="inline-block mr-2" />
        Work Experience
      </h3>
      <div className="space-y-4">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border-4 border-black p-6 hover:transform hover:rotate-1 transition-transform"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h4 className="text-xl font-bold bg-yellow-300 px-4 py-1 border-2 border-black mb-2">
                  {job.role}
                </h4>
                <p className="font-bold">{job.company}</p>
                <p className="text-sm text-gray-600">{job.location}</p>
              </div>
              <span className="bg-pink-300 px-4 py-1 border-2 border-black text-sm">
                {job.period}
              </span>
            </div>
            <ul className="space-y-2">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-xl">→</span>
                  <span className="text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProjectsShowcaseCard = () => {
  const projects = [
    {
      name: "EasyBankCore",
      description: "Core Banking System with comprehensive submodules",
      tech: ["Node.js", "TypeScript", "SQL"],
      metrics: { performance: 95, coverage: 90 },
      github: "#",
      live: "#"
    },
    {
      name: "Property Dollar",
      description: "Property management and investment tracking platform",
      tech: ["NestJS", "PostgreSQL", "Jest"],
      metrics: { performance: 92, coverage: 85 },
      github: "#",
      live: "#"
    },
    {
      name: "iManagify",
      description: "Infrastructure maintenance management tool",
      tech: ["NestJS", "PostgreSQL", "TypeScript"],
      metrics: { performance: 88, coverage: 92 },
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="h-full">
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-white inline-block p-2 border-2 border-black transform -rotate-1">
        <BsLightning className="inline-block mr-2" />
        Featured Projects
      </h3>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border-4 border-black p-4 sm:p-6 hover:transform hover:-rotate-1 transition-transform"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 mb-4">
              <h4 className="text-lg sm:text-xl font-bold bg-blue-300 px-3 sm:px-4 py-1 border-2 border-black">
                {project.name}
              </h4>
              <div className="flex gap-2">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 bg-black text-white px-4 py-1 border-2 border-black"
                >
                  <BsGithub size={16} />
                  Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 bg-green-300 px-4 py-1 border-2 border-black"
                >
                  <BsArrowUpRight size={16} />
                  Live Demo
                </motion.a>
              </div>
            </div>
            <p className="text-base mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-green-300 px-3 py-1 border-2 border-black text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold">Performance</span>
                  <span className="bg-pink-300 px-2 border-2 border-black">
                    {project.metrics.performance}%
                  </span>
                </div>
                <div className="h-3 bg-white border-2 border-black">
                  <div 
                    className="h-full bg-black"
                    style={{ width: `${project.metrics.performance}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold">Test Coverage</span>
                  <span className="bg-orange-300 px-2 border-2 border-black">
                    {project.metrics.coverage}%
                  </span>
                </div>
                <div className="h-3 bg-white border-2 border-black">
                  <div 
                    className="h-full bg-black"
                    style={{ width: `${project.metrics.coverage}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const EducationTimelineCard = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "LD College of Engineering",
      period: "2021 - 2023",
      gpa: "8.60/10.0"
    }
  ];

  return (
    <div className="h-full">
      <h3 className="text-xl font-bold mb-3 transform -rotate-1 bg-white inline-block p-2 border-2 border-black">
        <BsBookmark className="inline-block mr-2" />
        Education
      </h3>
      <div className="space-y-2">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border-4 border-black p-4 transform hover:rotate-1 transition-transform"
          >
            <h4 className="font-bold mb-2 bg-yellow-300 inline-block px-2">
              {edu.degree}
            </h4>
            <p className="text-lg font-bold mb-2">{edu.institution}</p>
            <div className="flex justify-between items-center">
              <span className="bg-blue-300 px-2 py-1 border-2 border-black">
                {edu.period}
              </span>
              <span className="bg-green-300 px-2 py-1 border-2 border-black font-bold">
                GPA: {edu.gpa}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};



const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactInfo: ContactInfo[] = [
    {
      type: "email",
      value: "rathoodrahool@gmail.com",
      icon: <BsEnvelope className="text-xl" />,
      label: "Email Address"
    },
    {
      type: "phone",
      value: "+91 6352807475",
      icon: <BsPhone className="text-xl" />,
      label: "Phone Number"
    },
    {
      type: "linkedin",
      value: "linkedin.com/in/rathodrahool",
      icon: <BsLinkedin className="text-xl" />,
      label: "LinkedIn Profile"
    },
    {
      type: "github",
      value: "github.com/rahulrathod",
      icon: <BsGithub className="text-xl" />,
      label: "GitHub Profile"
    }
  ];

  const handleCopy = async (value: string, type: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(type);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 sm:p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white border-4 border-black p-4 sm:p-6 w-full max-w-md shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Let's Connect!</h2>
          <button 
            onClick={onClose}
            className="bg-black text-white p-2 hover:bg-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>

        <p className="mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base">
          I'm always open to new opportunities and interesting projects. Feel free to reach out!
        </p>

        <div className="space-y-3 sm:space-y-4">
          {contactInfo.map((info) => (
            <div 
              key={info.type}
              className="border-2 border-black p-3 sm:p-4 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden">
                  <div className="bg-blue-300 p-2 border-2 border-black shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <p className="text-xs sm:text-sm text-gray-600">{info.label}</p>
                    <p className="font-bold text-sm sm:text-base truncate">
                      {info.value}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleCopy(info.value, info.type)}
                  className={`px-3 py-1.5 sm:py-2 border-2 border-black font-bold text-sm sm:text-base whitespace-nowrap ${
                    copiedField === info.type 
                      ? 'bg-green-300 text-black' 
                      : 'bg-black text-white'
                  }`}
                >
                  {copiedField === info.type ? (
                    <span className="flex items-center gap-1">
                      <BsCheckCircle className="shrink-0" />
                      <span className="shrink-0">Copied!</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <BsCopy className="shrink-0" />
                      <span className="shrink-0">Copy</span>
                    </span>
                  )}
                </motion.button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-black">
          <p className="text-center text-xs sm:text-sm text-gray-600">
            Prefer email? Click the copy button and paste it in your favorite email client.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const ActionButtons = ({ onContactClick }: { onContactClick: () => void }) => {
  const handleDownloadResume = () => {
    // Add your resume download logic here
    const resumeUrl = "https://drive.google.com/file/d/1MNsQRrHMj_vcM-hUVNxf64CMLqKvtRCA/view";
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="w-full sm:w-auto bg-black text-white px-6 py-3 border-4 border-black font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
        onClick={handleDownloadResume}
      >
        <div className="flex items-center gap-2">
          <BsDownload size={20} />
          Download Resume
        </div>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="w-full sm:w-auto bg-yellow-300 px-6 py-3 border-4 border-black font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
        onClick={onContactClick}
      >
        <div className="flex items-center gap-2">
          <BsEnvelope size={20} />
          Contact Me
        </div>
      </motion.button>
    </div>
  );
};

const CurrentlyLearningCard = () => {
  const learningItems = [
    {
      title: "Prompt Engineering",
      description: "Create simple, effective prompts to optimize development processes.",
      progress: 75,
      icon: "🤖",
      color: "bg-purple-300"
    },
    {
      title: "AI-Powered Development",
      description: "Apply AI tools to simplify and accelerate backend processes.",
      progress: 65,
      icon: "⚡",
      color: "bg-blue-300"
    },
    {
      title: "AWS Deployment",
      description: "Learning to deploy frontend and backend projects on AWS",
      progress: 60,
      icon: "☁️",
      color: "bg-orange-300"
    }
  ];

  return (
    <div className="h-full">
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-white inline-block p-2 border-2 border-black transform rotate-1">
        <BsLightning className="inline-block mr-2" />
        Currently Learning
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {learningItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border-4 border-black p-4 hover:transform hover:-rotate-1 transition-transform"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold">Progress</span>
                <span className={`${item.color} px-2 py-1 border-2 border-black`}>
                  {item.progress}%
                </span>
              </div>
              <div className="h-3 bg-white border-2 border-black">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-full ${item.color} border-r-2 border-black`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
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
      {/* Navigation Bar - More compact on medium screens */}
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

      {/* Hero Section - Better text scaling */}
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
              className="bg-black text-white px-6 py-3 border-4 border-black font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work →
            </motion.button>
          </div>
        </div>
      </div>

      {/* Featured Work Section - Optimized for medium screens */}
      <div id="work" className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-yellow-300 inline-block p-2 border-4 border-black transform -rotate-1">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="md:col-span-1">
            <ProjectsShowcaseCard />
          </div>
          <div className="md:col-span-1">
            <WorkExperienceCard />
          </div>
        </div>
      </div>

      {/* Skills & Recent Activity - Better medium screen layout */}
      <div id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        <div className="border-4 border-black bg-white p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <SkillsOverviewCard />
        </div>
        <div className="border-4 border-black bg-white p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <RecentActivityCard />
        </div>
      </div>

      {/* What I Can Do Section - Better grid for medium screens */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-green-300 inline-block p-2 border-4 border-black transform rotate-1">
          What I Can Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Backend Development */}
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-12 h-12 bg-blue-400 border-4 border-black mb-4" />
            <h3 className="text-xl font-bold mb-4">Backend Development</h3>
            <p>Specializing in building robust and scalable backend systems with Node.js, Express, and NestJS.</p>
          </div>

          {/* Database Design */}
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-12 h-12 bg-green-400 border-4 border-black mb-4" />
            <h3 className="text-xl font-bold mb-4">Database Design</h3>
            <p>Expert in PostgreSQL database design, optimization, and management.</p>
          </div>

          {/* API Development */}
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-12 h-12 bg-yellow-400 border-4 border-black mb-4" />
            <h3 className="text-xl font-bold mb-4">API Development</h3>
            <p>Creating clean, well-documented, and efficient APIs following REST principles.</p>
          </div>
        </div>
      </div>

      {/* Learning Journey - Adjusted spacing */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-purple-300 inline-block p-2 border-4 border-black transform -rotate-1">
          Learning Journey
        </h2>
        <div className="border-4 border-black bg-white p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CurrentlyLearningCard />
        </div>
      </div>

      {/* Education - Adjusted spacing */}
      <div className="mb-8 sm:mb-12">
        <EducationTimelineCard />
      </div>

      {/* Action Buttons - Better spacing on medium screens */}
      <div className="mt-8 sm:mt-12 text-center">
        <ActionButtons onContactClick={handleContactClick} />
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

      {/* Single ContactModal instance */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Portfolio; 