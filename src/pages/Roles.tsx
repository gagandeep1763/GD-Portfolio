// src/pages/Roles.tsx
import React from 'react';

const roles = [
  {
    role: "Team Lead",
    org: "Sapientury",
    desc: "Successfully led a team during a digital marketing internship to launch a toothbrush project with a website, blog content, and social media campaigns."
  },
  {
    role: "Team Lead",
    org: "Mini & Major Project Teams",
    desc: "Led and coordinated project teams with strong leadership, ensuring collaboration, task management, and timely delivery."
  },
  {
    role: "Mentor",
    org: "SpeakUp Community Club",
    desc: "Mentoring juniors in soft skills and tech upskilling initiatives."
  }
];

interface RolesProps {
  onScrollToContact?: () => void;
}

const Roles: React.FC<RolesProps> = ({ onScrollToContact }) => {
  return (
    <section className="relative min-h-screen text-white px-6 py-16 bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-400 drop-shadow-xl">Roles & Achievements</h1>
        <div className="space-y-8">
          {roles.map((r, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border-2 border-cyan-400/60 glass-card transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-white/90 mb-1">{r.role} @ {r.org}</h2>
              <p className="text-white/80 mt-2 text-lg">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {onScrollToContact && (
        <button
          onClick={onScrollToContact}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce z-10"
          aria-label="Scroll to Contact"
        >
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="url(#rolesScrollGradient)" className="w-12 h-12 drop-shadow-xl">
            <defs>
              <linearGradient id="rolesScrollGradient" x1="0" y1="0" x2="0" y2="1">
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

export default Roles;
