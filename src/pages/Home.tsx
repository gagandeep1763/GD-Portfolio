import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <img
        src="/Gagandeep D.jpg"
        alt="Gagandeep D"
        className="w-36 h-36 rounded-full mb-6 border-4 border-indigo-600"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-white">Hi, I'm Gagandeep D 👋</h1>

      <h2 className="text-xl text-indigo-400 mt-4">
        Aspiring ML Engineer | Full Stack Developer
      </h2>

      <p className="text-gray-300 mt-4 max-w-xl">
        Passionate about building impactful tech solutions through machine learning, blockchain, and full-stack development.
      </p>

      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Home;
