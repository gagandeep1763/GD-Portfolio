// src/pages/Certifications.tsx
import React from 'react';

const certifications = [
  {
    title: "Google UX Design Specialization",
    provider: "Google | Coursera",
    link: "https://coursera.org/share/ddd658da2e6cca9ce76f30a7dcfd762c"
  },
  {
    title: "Machine Learning for All",
    provider: "University of London, Coursera",
    link: "https://coursera.org/share/b52a113a2af637be9ad6c1b29cf36d56"
  },
  {
    title: "Networking Basics",
    provider: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/9cff7822-d71b-4388-8c1f-d5ccf773d440/public_url"
  }
];

interface CertificationsProps {
  onScrollToRoles?: () => void;
}

const Certifications: React.FC<CertificationsProps> = ({ onScrollToRoles }) => {
  return (
    <section className="relative min-h-screen text-white px-6 py-16 bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] overflow-hidden">
      <div className="z-10 relative max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-400 drop-shadow-xl">Certifications</h1>
        <ul className="space-y-6">
          {certifications.map((cert, idx) => (
            <li key={idx} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border-2 border-cyan-400/60 glass-card">
              <h2 className="text-2xl font-bold text-white/90 mb-1">{cert.title}</h2>
              <p className="text-base text-white/70 mb-2">{cert.provider}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-link underline font-semibold"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-gradient-move" />
      {onScrollToRoles && (
        <button
          onClick={onScrollToRoles}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce z-10"
          aria-label="Scroll to Roles"
        >
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="url(#certScrollGradient)" className="w-12 h-12 drop-shadow-xl">
            <defs>
              <linearGradient id="certScrollGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00eaff" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
      <style>{`
        .glass-card {
          box-shadow: 0 8px 32px 0 #00eaff33, 0 1.5px 8px 0 #a855f799;
        }
        .neon-link {
          color: #00eaff;
          text-shadow: 0 0 8px #00eaff, 0 0 16px #a855f7;
          transition: color 0.2s, text-shadow 0.2s;
        }
        .neon-link:hover {
          color: #a855f7;
          text-shadow: 0 0 16px #a855f7, 0 0 32px #00eaff;
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

export default Certifications;
