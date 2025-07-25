import React from 'react';
import crypto from '../assets/crypto.jpeg';
import voting from '../assets/voting.png';
import food from '../assets/food.png';
import k8s from '../assets/k8s.png';
import project1 from '../assets/Project 1.png';
import project2 from '../assets/Project 2.png';
import project3 from '../assets/project 3.png';
import project4 from '../assets/Project 4.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  image: string;
  github: string;
  imageClass?: string; // Added for custom image class
}

const projects: Project[] = [
  {
    title: "Antifrauds and Secure Funding Using Blockchain",
    description:
      "A decentralized crowdfunding platform ensuring secure, transparent funding using Ethereum smart contracts and a React frontend.",
    tags: ["React.js", "Web3.js", "Truffle", "Solidity", "MetaMask", "Ganache"],
    features: [
      "Smart contract-based campaign funding with ETH transactions via MetaMask",
      "Login & Registration with localStorage for session management",
      "Real-time campaign tracking and donation interface with role-based navigation."
    ],
    image: project1, // Updated image for Antifrauds and Secure Funding Using Blockchain
    github: "https://github.com/gagandeep1763/Antifraud-and-Secure-funding-using-blockchain",
  },
  {
    title: "Sign Ease – Two-Way Indian Sign Language (ISL) Communicator",
    description:
      "Sign Ease is a two-way ISL communication tool that bridges spoken languages with Indian Sign Language using real-time translation and interactive learning modules.",
    tags: ["Python", "OpenCV", "ML Models", "CSV", "Gloss System", "UI/UX", "Pose Estimation"],
    features: [
      "Sign to Text: Converts ISL gestures to text using OpenCV and ML",
      "Text to Sign: Translates text into ISL animations via gloss mapping",
      "Learn Sign Language: Interactive learning with pose visuals and glosses"
    ],
    image: project2, // Updated image for Sign Ease
    github: "https://sign-ease-dhanush-g-ms-projects.vercel.app/",
    imageClass: "w-32 h-32 object-contain object-center rounded-lg shadow-md group-hover:brightness-110 transition duration-300 border-2 border-white/20 bg-white"
  },
  {
    title: "Freelance Project Tracker",
    description:
      "A full-stack web app to manage freelance projects, track status, and calculate total earnings.",
    tags: ["Flask", "MongoDB Atlas", "HTML", "CSS", "JavaScript"],
    features: [
      "Add, update, and complete freelance projects",
      "Real-time earnings calculation from completed work",
      "Responsive UI with secure backend integration"
    ],
    image: project3, // Updated image for Freelance Project Tracker
    github: "https://github.com/gagandeep1763/Freelance-Project-Tracker",
    imageClass: "w-32 h-32 object-cover object-top rounded-lg shadow-md group-hover:brightness-110 transition duration-300 border-2 border-white/20"
  },
  {
    title: "Aid Point – First Aid Learning Tool (UI/UX Design Project)",
    description:
      "Aid Point is an interactive first-aid learning platform designed to educate and assist users in emergencies.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "User Flow"],
    features: [
      "Interactive learning with quizzes, case studies, and emergency scenarios",
      "Emergency support features like Code Blue/Purple, chatbot, and direct call",
      "Clean, accessible UI for fast and intuitive user experience"
    ],
    image: project4, // Updated image for Aid Point
    github: "https://www.figma.com/proto/AHKtUdx7kApxSxxDhl0fzj/Aid-Point?node-id=6-3&p=f&t=3ajAIu49N1RCodcG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A3",
  },
];

const aosAnimations = [
  'fade-up',
  'zoom-in',
  'slide-left',
  'fade-up',
];

interface ProjectsProps {
  onScrollToSkills?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onScrollToSkills }) => {
  return (
    <section className="relative py-20 px-6 min-h-screen bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] text-white overflow-hidden">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-400 drop-shadow-xl">
        My Projects
      </h1>
      <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto text-lg font-medium">
        Here's a showcase of my notable projects that demonstrate my technical skills and problem-solving abilities.
      </p>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border-2 border-cyan-400/60 glass-card transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="w-full flex justify-center items-center p-6 bg-gradient-to-tr from-cyan-400/10 via-fuchsia-500/10 to-pink-400/10">
              <img
                src={project.image}
                alt={project.title}
                className={project.imageClass || "w-32 h-32 object-cover object-center rounded-lg shadow-md group-hover:brightness-110 transition duration-300 border-2 border-white/20"}
              />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h2 className="text-2xl font-bold mb-2 text-white/90">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="neon-pill"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-white/80 mb-3">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-1 text-cyan-300"> KEY FEATURES</h4>
                <ul className="list-disc list-inside text-sm text-white/70">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm rounded-full shadow-xl neon-btn hover:scale-105 transition-transform duration-300 font-bold"
              >
                 {project.title.startsWith('Aid Point') ? 'View the prototype design' : 'View Code'}
              </a>
            </div>
          </div>
        ))}
      </div>
      {onScrollToSkills && (
        <button
          onClick={onScrollToSkills}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce z-10"
          aria-label="Scroll to Skills"
        >
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="url(#projectsScrollGradient)" className="w-12 h-12 drop-shadow-xl">
            <defs>
              <linearGradient id="projectsScrollGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00eaff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-gradient-move" />
      <style>{`
        .glass-card {
          box-shadow: 0 8px 32px 0 #00eaff33, 0 1.5px 8px 0 #a855f799;
        }
        .neon-pill {
          background: linear-gradient(90deg, #00eaff 0%, #a855f7 100%);
          color: #fff;
          padding: 0.5rem 1.1rem;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 600;
          box-shadow: 0 0 8px #00eaff99, 0 0 16px #a855f799;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .neon-pill:hover {
          box-shadow: 0 0 16px #00eaffcc, 0 0 32px #a855f7cc;
          transform: scale(1.08);
        }
        .neon-btn {
          box-shadow: 0 0 16px 2px #00eaff99, 0 0 32px 4px #a855f799;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .neon-btn:hover {
          box-shadow: 0 0 32px 8px #00eaffcc, 0 0 64px 16px #a855f7cc;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background: linear-gradient(120deg, #232526, #0f2027, #2c5364, #a855f7, #00eaff);
          background-size: 300% 300%;
          animation: gradient-move 12s ease-in-out infinite;
          opacity: 0.13;
        }
      `}</style>
    </section>
  );
};

export default Projects;
