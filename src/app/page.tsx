"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-teal-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent"
            >
              Brandon
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05, color: "#14b8a6" }}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <span className="block text-white">I'm</span>
                <span className="block bg-gradient-to-r from-teal-400 via-lime-400 to-gold-400 bg-clip-text text-transparent">
                  Brandon
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              >
                I'm a full-stack developer with a passion for crafting clean, 
                functional, and engaging user experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(0, 119, 181, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </motion.a>
                
                <motion.a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(0, 0, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Avatar/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Placeholder for 3D Avatar - we'll add a simple design for now */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full bg-gradient-to-br from-teal-500/20 to-lime-500/20 rounded-3xl border border-teal-500/30 flex items-center justify-center"
                >
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-400 to-lime-400 rounded-full flex items-center justify-center text-4xl">
                      👨‍💻
                    </div>
                    <p className="text-teal-400 font-semibold">3D Avatar Coming Soon</p>
                  </div>
                </motion.div>
                
                {/* Floating elements for visual interest */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-400 to-lime-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-gold-400 rounded-full opacity-60"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                I'm a passionate software engineer with expertise in full-stack development, machine learning, and data science. 
                I love building innovative solutions that solve real-world problems and create meaningful impact.
              </p>
              
              {/* Tech Stack Display */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-lime-400 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["React", "Node.js", "Express", "PostgreSQL", "FastAPI", "Tailwind CSS", "Python", "TypeScript", "JavaScript", "Java", "Git", "Jira"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-lime-500/20 border border-teal-500/30 rounded-full text-teal-300 font-medium hover:border-teal-400/50 hover:bg-teal-500/30 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Languages Section */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    title: "Python", 
                    desc: "Primary language for data science, backend, and automation projects",
                    icon: "🐍",
                    color: "from-yellow-500 to-orange-500"
                  },
                  { 
                    title: "JavaScript/TypeScript", 
                    desc: "Core for front-end and full-stack development",
                    icon: "⚡",
                    color: "from-yellow-400 to-yellow-600"
                  },
                  { 
                    title: "Java", 
                    desc: "Strong OOP and algorithmic foundation",
                    icon: "☕",
                    color: "from-orange-500 to-red-500"
                  },
                  { 
                    title: "HTML5/CSS3", 
                    desc: "UI design, responsive layouts, and styling",
                    icon: "🎨",
                    color: "from-pink-500 to-purple-500"
                  }
                ].map((lang, index) => (
                  <motion.div
                    key={lang.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 hover:border-teal-500/40 transition-all duration-300 text-center"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${lang.color} rounded-full flex items-center justify-center text-2xl`}>
                      {lang.icon}
                    </div>
                    <h3 className="text-xl font-bold text-teal-400 mb-3">{lang.title}</h3>
                    <p className="text-gray-300 text-sm">{lang.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-lime-400 to-gold-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                My professional journey in software engineering and research.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Get Talky Experience */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-lime-500/20 rounded-2xl p-8 hover:border-lime-500/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-lime-500 to-gold-500 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                      GT
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-lime-400 mb-2">Software Engineering Intern</h3>
                        <p className="text-xl text-white font-semibold">Get Talky</p>
                      </div>
                      <span className="text-gold-400 font-medium">May 2025 – August 2025</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Developed and deployed full-stack features for an AI conversation monitoring platform.
                      Implemented a dynamic comment tracking system with metadata and CSV export capabilities used across 100+ client conversations. 
                      Designed RESTful APIs and optimized data flow to reduce front-end refresh latency by 25%.
                    </p>
                    <p className="text-gray-300 mb-4">
                      Collaborated in Agile sprints to enhance schema design, debug endpoints, and automate QA workflows with AskUI to improve efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "TypeScript", "React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Tailwind CSS", "Jira", "AskUI"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-lime-500/20 text-lime-300 rounded-full text-sm border border-lime-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Research Experience */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-8 hover:border-gold-500/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                      AP
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gold-400 mb-2">Undergraduate Researcher</h3>
                        <p className="text-xl text-white font-semibold">Advanced Programming Methods & Applications Lab</p>
                      </div>
                      <span className="text-gold-400 font-medium">September 2025 – Present</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Researching algorithm optimization and computational efficiency with a focus on reducing time complexity for real-world data problems.
                      Designing and testing provably correct solutions under faculty mentorship to improve performance in complex algorithmic pipelines.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "NumPy", "Pandas", "Algorithm Design"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gold-500/20 text-gold-300 rounded-full text-sm border border-gold-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gold-400 to-teal-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A showcase of my recent projects showcasing full-stack development, machine learning, and data science expertise.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Course Planning Visualizer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-teal-500 to-lime-500 flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-teal-400 mb-4">Course Planning Visualizer & Professor Insight Chatbot</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Developed an interactive prerequisite visualization tool that helps computer science students plan course sequences.
                    Implemented dynamic D3.js graphs that color-code courses based on completion status. Built a data pipeline to scrape RateMyProfessors reviews and served them via an Express API.
                    Integrated a GPT-powered chatbot to provide real-time professor and course insights within a responsive React interface.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "React", "D3.js", "Node.js", "Express", "OpenAI API", "Selenium", "BeautifulSoup", "HTML/CSS"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Breast Tumor Classifier */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-lime-500/20 rounded-2xl overflow-hidden hover:border-lime-500/40 transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-lime-500 to-gold-500 flex items-center justify-center">
                  <div className="text-6xl">🧠</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-lime-400 mb-4">Breast Tumor Classifier Web App</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Built a deep learning web app that classifies breast tumor histopathology images using a fine-tuned MobileNetV2 model.
                    Integrated a FastAPI backend for real-time inference and a Next.js frontend for seamless image uploads, model predictions, and session tracking.
                    Optimized user flow and model accuracy for smooth deployment in a browser-based environment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TensorFlow", "FastAPI", "Uvicorn", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-lime-500/20 text-lime-300 rounded-full text-sm border border-lime-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Financial Sentiment Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-gold-500 to-teal-500 flex items-center justify-center">
                  <div className="text-6xl">📈</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gold-400 mb-4">Financial Sentiment Analysis Dashboard</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Created an AI-powered financial dashboard that performs sentiment analysis on Reddit and Yahoo Finance discussions.
                    Implemented FinBERT NLP models for financial tone detection and visualized results using interactive Plotly charts and KPI metrics.
                    Optimized backend caching and API requests to ensure fast, responsive data visualizations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Streamlit", "Plotly", "ProsusAI/FinBERT", "yfinance", "PRAW"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gold-500/20 text-gold-300 rounded-full text-sm border border-gold-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-teal-400 via-lime-400 to-gold-400 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Ready to bring your ideas to life? Let's discuss your next project.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <motion.button
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(20, 184, 166, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-teal-500 to-lime-500 text-black px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
