// src/pages/Contact.tsx
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="relative min-h-screen text-white px-6 py-16 bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] flex items-center justify-center overflow-hidden">
      <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-12 border-2 border-cyan-400/60 glass-card">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-400 drop-shadow-xl">Contact Me</h1>
        <p className="text-xl mb-10 text-white/80 font-medium">Feel free to reach out via any of the platforms below:</p>
        <div className="flex justify-center space-x-12">
          <a href="mailto:gaganreachsky73@gmail.com" className="neon-icon" aria-label="Email">
            <FaEnvelope size={56} />
          </a>
          <a href="https://www.linkedin.com/in/gagandeep-d-06b88b297/" className="neon-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={56} />
          </a>
          <a href="https://github.com/gagandeep1763" className="neon-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={56} />
          </a>
        </div>
      </div>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-gradient-move" />
      <style>{`
        .glass-card {
          box-shadow: 0 8px 32px 0 #00eaff33, 0 1.5px 8px 0 #a855f799;
        }
        .neon-icon {
          color: #fff;
          text-shadow: 0 0 8px #00eaff, 0 0 16px #a855f7;
          transition: color 0.2s, text-shadow 0.2s, transform 0.2s;
        }
        .neon-icon:hover {
          color: #00eaff;
          text-shadow: 0 0 16px #00eaff, 0 0 32px #a855f7;
          transform: scale(1.2);
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

export default Contact;
