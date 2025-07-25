// src/pages/About.tsx
import React from 'react';

interface AboutProps {
  onScrollToProjects?: () => void;
}

const About: React.FC<AboutProps> = ({ onScrollToProjects }) => {
  return (
    <section id="about" className="relative py-10 px-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] overflow-hidden">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile Card */}
        <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border-2 border-cyan-400/60 glass-card min-h-[340px] md:min-h-[360px]">
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-pink-400 flex items-center justify-center mb-2 overflow-hidden shadow-lg profile-img-wrapper">
            <img
              src="/Gagandeep D.jpg"
              alt="Gagandeep D profile"
              className="w-full h-full object-cover object-center rounded-full border-4 border-gradient profile-img"
            />
          </div>
          <span className="text-white/80 text-lg font-bold tracking-wide mb-0">Gagandeep D</span>
          <span className="text-cyan-200 text-sm mt-1">UI/UX Designer | Aspiring Data Analyst</span>
        </div>
        {/* About Content */}
        <div>
          <h2 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-400">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded mb-6" />
          <p className="text-white/80 mb-6 text-lg text-justify font-medium">
            I'm Gagandeep D, a passionate software engineer from Bengaluru, India, with a strong foundation in Computer Science. I’m a Google Certified UI/UX Designer, aspiring Data Analyst, and an enthusiastic learner of AI and Machine Learning technologies. I enjoy solving real-world problems by building impactful and scalable solutions. With hands-on experience as a freelancer, I believe in learning by doing and continuously improving through real-world projects.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold text-cyan-300 mb-1">Education</h3>
            <div className="text-white/80 text-base">RV Institute of Technology and Management<br />Computer Science & Engineering, B.E<br />2022 - 2026</div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-cyan-300 mb-1">Experience</h3>
            <div className="text-white/80 text-base grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 shadow-md">
                <strong>ShadowFox</strong> · Internship<br />
                AI/ML Intern<br />
                Sep 2024 - Sep 2024
              </div>
              <div className="bg-white/10 rounded-xl p-4 shadow-md">
                <strong>CodeClause</strong> · Internship<br />
                Graphic Designer<br />
                Sep 2024 - Sep 2024
              </div>
              <div className="bg-white/10 rounded-xl p-4 shadow-md">
                <strong>CodSoft</strong> · Internship<br />
                UI Designer<br />
                Aug 2024 - Aug 2024
              </div>
              <div className="bg-white/10 rounded-xl p-4 shadow-md">
                <strong>Sapientury</strong> · Internship<br />
                Digital Marketing Intern<br />
                Nov 2023 - Dec 2023
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-cyan-300 mb-1">Tech Stack</h3>
            <div className="flex flex-wrap gap-3 mt-3 w-full">
              {[
                'C++', 'Python', 'C', 'JavaScript', 'SQL', 'Solidity',
                'HTML', 'CSS', 'React.js', 'TailwindCSS', 'Figma', 'Canva', 'Wix', 'Wireframing', 'Prototyping', 'User Research',
                'TensorFlow', 'OpenCV', 'Power BI', 'Microsoft Excel', 'Pandas', 'NumPy', 'Matplotlib', 'MySQL', 'MongoDB',
                'Git', 'GitHub', 'VS Code', 'Web3.js', 'MetaMask'
              ].map((tech) => (
                <span key={tech} className="neon-pill text-base px-4 py-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {onScrollToProjects && (
        <button
          onClick={onScrollToProjects}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce z-10"
          aria-label="Scroll to Projects"
        >
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="url(#aboutScrollGradient)" className="w-12 h-12 drop-shadow-xl">
            <defs>
              <linearGradient id="aboutScrollGradient" x1="0" y1="0" x2="0" y2="1">
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
        .profile-img-wrapper {
          box-shadow: 0 8px 32px 0 #00eaff33, 0 1.5px 8px 0 #a855f799, 0 0 0 6px #fff2, 0 0 0 12px #00eaff22;
          background: linear-gradient(135deg, #00eaff 0%, #a855f7 100%);
          padding: 4px;
        }
        .profile-img {
          border: 4px solid transparent;
          background: linear-gradient(135deg, #fff 60%, #a855f7 100%);
          transition: transform 0.3s, filter 0.3s, box-shadow 0.3s;
        }
        .profile-img-wrapper:hover .profile-img {
          transform: scale(1.06);
          filter: brightness(1.12) saturate(1.2);
          box-shadow: 0 0 24px #00eaff99, 0 0 48px #a855f799;
        }
      `}</style>
    </section>
  );
};

export default About;
