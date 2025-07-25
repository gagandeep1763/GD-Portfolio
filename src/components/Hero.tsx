import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onScrollToAbout: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToAbout }) => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10"
      >
        <div className="mb-4">
          <span className="inline-block px-5 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg mb-4 tracking-widest uppercase">
            UI/UX Designer & aspiring Data Analyst
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-400 drop-shadow-xl">
          Hi, I'm Gagandeep D
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-medium">
          Designing the future with creativity, code, and curiosity.<br />
          Creator. Engineer. Problem Solver.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-8">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white rounded-full shadow-xl font-bold text-lg neon-btn hover:scale-105 transition-transform duration-300"
          >
            View My Projects
          </a>
          <a
            href="https://drive.google.com/file/d/16GrM1S9U-YBTzLGntEmxcL29aCHmv9S_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 border border-cyan-400 text-cyan-200 rounded-full shadow-xl font-bold text-lg neon-btn hover:scale-105 transition-transform duration-300"
          >
            View Resume
          </a>
        </div>
        <span className="text-white/60 text-lg mt-2 tracking-wide">Explore my portfolio below!</span>
        {/* Added margin to push scroll indicator further down */}
        <div className="mt-12" />
      </motion.div>

      {/* Scroll indicator arrow with extra spacing */}
      <button
        onClick={onScrollToAbout}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll to About"
      >
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="url(#scrollGradient)" className="w-12 h-12 drop-shadow-xl">
          <defs>
            <linearGradient id="scrollGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00eaff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-gradient-move" />

      <style>{`
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
          opacity: 0.18;
        }
      `}</style>
    </section>
  );
};

export default Hero;
