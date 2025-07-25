// src/components/Footer.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative bg-gradient-to-r from-[#232526] via-[#0f2027] to-[#2c5364] text-white border-t border-[#3a3a5a]/40 py-8 shadow-2xl backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-3 md:mb-0 text-white/70 tracking-wide font-medium">
          &copy; {new Date().getFullYear()} Gagandeep D. All rights reserved.
        </p>
        <div className="flex space-x-6 text-2xl">
          <a
            href="mailto:gagandeepd@email.com"
            className="neon-icon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/gagandeep-d"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gagandeepd"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <style>{`
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
      `}</style>
    </motion.footer>
  );
};

export default Footer;
