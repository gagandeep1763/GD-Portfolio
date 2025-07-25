// src/App.tsx
import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Roles from './pages/Roles';
import Contact from './pages/Contact';

const App = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCertifications = () => {
    certificationsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans bg-grid-pattern">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero onScrollToAbout={handleScrollToAbout} />
              <div ref={aboutRef} id="about">
                <About onScrollToProjects={handleScrollToProjects} />
              </div>
              <div ref={projectsRef} id="projects">
                <Projects onScrollToSkills={handleScrollToSkills} />
              </div>
              <div ref={skillsRef} id="skills">
                <Skills onScrollToCertifications={handleScrollToCertifications} />
              </div>
              <div ref={certificationsRef} id="certifications">
                <Certifications onScrollToRoles={handleScrollToRoles} />
              </div>
              <div ref={rolesRef} id="roles">
                <Roles onScrollToContact={handleScrollToContact} />
              </div>
              <div ref={contactRef} id="contact">
                <Contact />
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
