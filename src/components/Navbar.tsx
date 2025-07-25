// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative px-8 py-5 flex justify-between items-center bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#232526] shadow-xl backdrop-blur-md border-b border-[#3a3a5a]/40">
      <h1 className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-400 drop-shadow-lg select-none">
        GD Portfolio
      </h1>
      <ul className="flex space-x-8 text-base font-semibold uppercase tracking-wide">
        <li><Link to="/" className="relative neon-link">Home</Link></li>
        <li><Link to="/about" className="relative neon-link">About</Link></li>
        <li><Link to="/projects" className="relative neon-link">Projects</Link></li>
        <li><Link to="/skills" className="relative neon-link">Skills</Link></li>
        <li><Link to="/certifications" className="relative neon-link">Certifications</Link></li>
        <li><Link to="/roles" className="relative neon-link">Achievements</Link></li>
        <li><Link to="/contact" className="relative neon-link">Contact</Link></li>
        <li><a href="https://drive.google.com/file/d/16GrM1S9U-YBTzLGntEmxcL29aCHmv9S_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="relative neon-link">Resume</a></li>
      </ul>
      <style>{`
        .neon-link {
          color: #fff;
          text-shadow: 0 0 6px #00eaff, 0 0 12px #a855f7;
          transition: color 0.2s, text-shadow 0.2s;
        }
        .neon-link::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00eaff, #a855f7, #ff4ecd);
          transition: width 0.3s;
          margin-top: 2px;
        }
        .neon-link:hover {
          color: #00eaff;
          text-shadow: 0 0 12px #00eaff, 0 0 24px #a855f7;
        }
        .neon-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
