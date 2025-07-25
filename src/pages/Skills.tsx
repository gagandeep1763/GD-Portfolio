// src/pages/Skills.tsx
import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: '🔷',
    skills: [
      'C++', 'Python', 'C', 'JavaScript', 'Solidity', 'SQL', 'HTML', 'CSS'
    ]
  },
  {
    title: 'Machine Learning & AI',
    icon: '🔷',
    skills: [
      'OpenCV', 'MediaPipe', 'Pandas', 'NumPy', 'Matplotlib'
    ]
  },
  {
    title: 'Database & Cloud',
    icon: '🔷',
    skills: [
      'MySQL', 'MongoDB', 'Microsoft Excel', 'Power BI'
    ]
  },
  {
    title: 'Web Development',
    icon: '🔷',
    skills: [
      'React.js', 'Tailwind CSS', 'Wix'
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: '🔷',
    skills: [
      'Git', 'GitHub', 'VS Code'
    ]
  },
  {
    title: 'UI/UX & Design',
    icon: '🔷',
    skills: [
      'Figma', 'Canva', 'Wireframing', 'Prototyping', 'User Research', 'Responsive Design'
    ]
  },
  {
    title: 'Blockchain',
    icon: '🔷',
    skills: [
      'Solidity', 'Web3.js', 'MetaMask', 'Smart Contracts (Basics)'
    ]
  },
  {
    title: 'Other Technical Skills',
    icon: '🔷',
    skills: [
      'Problem Solving', 'Team Collaboration', 'Creative Thinking', 'Team Leading', 'Attention to Detail'
    ]
  }
];

const aosAnimations = [
  'fade-up',
  'zoom-in',
  'slide-left',
  'fade-right',
  'fade-up',
  'zoom-in',
];

interface SkillsProps {
  onScrollToCertifications?: () => void;
}

const Skills: React.FC<SkillsProps> = ({ onScrollToCertifications }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] text-white px-6 py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-10 text-center bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-400 text-transparent drop-shadow-xl">My Skills</h1>
        <div className="grid mx-auto gap-10 md:grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-2 border-cyan-400/60 glass-card transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white/90">
                <span>{cat.icon}</span> {cat.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="neon-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {onScrollToCertifications && (
        <button
          onClick={onScrollToCertifications}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce z-10"
          aria-label="Scroll to Certifications"
        >
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="url(#skillsScrollGradient)" className="w-12 h-12 drop-shadow-xl">
            <defs>
              <linearGradient id="skillsScrollGradient" x1="0" y1="0" x2="0" y2="1">
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

export default Skills;
