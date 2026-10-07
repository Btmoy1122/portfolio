"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { profile, about, skills, coursework, experience, projects, earlierProjects, type Project } from "./data";

const NAV_ITEMS = ["Home", "About", "Experience", "Projects", "Contact"];

// Full class strings so Tailwind can detect them at build time.
const ACCENTS: Record<Project["accent"], { title: string; border: string; tag: string; link: string }> = {
  teal: {
    title: "text-teal-400",
    border: "border-teal-500/20 hover:border-teal-500/40",
    tag: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    link: "text-teal-300 hover:text-teal-400",
  },
  lime: {
    title: "text-lime-400",
    border: "border-lime-500/20 hover:border-lime-500/40",
    tag: "bg-lime-500/20 text-lime-300 border-lime-500/30",
    link: "text-lime-300 hover:text-lime-400",
  },
  amber: {
    title: "text-amber-400",
    border: "border-amber-500/20 hover:border-amber-500/40",
    tag: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    link: "text-amber-300 hover:text-amber-400",
  },
  purple: {
    title: "text-purple-400",
    border: "border-purple-500/20 hover:border-purple-500/40",
    tag: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    link: "text-purple-300 hover:text-purple-400",
  },
  sky: {
    title: "text-sky-400",
    border: "border-sky-500/20 hover:border-sky-500/40",
    tag: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    link: "text-sky-300 hover:text-sky-400",
  },
};

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SectionHeading({ id, gradient, title, subtitle }: { id?: string; gradient: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{title}</span>
      </h2>
      {subtitle && <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

function FloatingPhoto({
  src,
  alt,
  className,
  sizes,
  float,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  float: { y: number; rotate: number; duration: number; delay: number };
  priority?: boolean;
}) {
  return (
    <motion.div
      animate={{ y: [0, float.y, 0], rotate: [0, float.rotate, 0] }}
      transition={{ duration: float.duration, repeat: Infinity, ease: "easeInOut", delay: float.delay }}
      className={`absolute overflow-hidden shadow-2xl ${className}`}
    >
      <div className="relative w-full h-full">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-center" />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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
          isScrolled || menuOpen ? "bg-black/80 backdrop-blur-md border-b border-teal-500/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent"
            >
              {profile.name}
            </a>

            <div className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 -my-1 py-1 rounded-full border border-teal-400/50 text-teal-300 hover:bg-teal-500/15 transition-colors duration-300 font-medium"
              >
                Resume
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden p-2 -mr-2 text-gray-300 hover:text-teal-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 pb-4 flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-lg text-gray-300 hover:text-teal-400 border-b border-white/5 last:border-0"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-lg font-medium text-teal-300 hover:text-teal-400"
                >
                  Resume ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main id="home" className="pt-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-7"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-wrap gap-2"
              >
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  {profile.year}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Graduating {profile.graduation}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <span className="block text-white">Hi, I&apos;m</span>
                <span className="block bg-gradient-to-r from-teal-400 via-lime-400 to-amber-400 bg-clip-text text-transparent">
                  {profile.firstName}
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-2"
              >
                <p className="text-xl md:text-2xl text-gray-200">
                  CS Honors &amp; Applied Math @ Stony Brook Honors College
                </p>
                <p className="text-lg text-gray-400">Full-stack and backend engineering, from React frontends to distributed systems.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 max-w-md"
              >
                <p className="text-xs uppercase tracking-widest text-lime-400 font-semibold mb-2">Currently</p>
                <ul className="space-y-1 text-gray-300">
                  {profile.now.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-teal-400" aria-hidden="true">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
              >
                <motion.a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(20, 184, 166, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-teal-500 to-lime-500 text-black px-7 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5zM14 3v5h5M9 13h6M9 17h6" />
                  </svg>
                  View Resume
                </motion.a>
                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 119, 181, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
                >
                  <LinkedInIcon />
                  LinkedIn
                </motion.a>
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
                >
                  <GitHubIcon />
                  GitHub
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Photo collage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative px-6 lg:px-8"
            >
              <div className="relative w-full h-[440px] sm:h-[520px] lg:h-[600px]">
                <FloatingPhoto
                  src="/brandon-main.jpg"
                  alt="Brandon Moy"
                  priority
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  float={{ y: -10, rotate: 2, duration: 4, delay: 0 }}
                  className="inset-0 w-3/4 h-3/4 m-auto rounded-3xl border-4 border-teal-500/30 z-10"
                />
                <FloatingPhoto
                  src="/brandon-top.jpg"
                  alt="Brandon climbing"
                  sizes="(min-width: 1024px) 20vw, 35vw"
                  float={{ y: -15, rotate: -3, duration: 3.5, delay: 0.8 }}
                  className="-top-6 -right-6 lg:-top-8 lg:-right-8 w-2/5 h-2/5 rounded-2xl border-3 border-lime-500/40 z-20"
                />
                <FloatingPhoto
                  src="/brandon-bottom.jpg"
                  alt="Brandon outside of class"
                  sizes="(min-width: 1024px) 20vw, 35vw"
                  float={{ y: 10, rotate: 3, duration: 3, delay: 1.2 }}
                  className="-bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-2/5 h-2/5 rounded-2xl border-3 border-amber-500/40 z-20"
                />
                <FloatingPhoto
                  src="/brandon-left.jpg"
                  alt="Brandon portrait"
                  sizes="(min-width: 1024px) 20vw, 35vw"
                  float={{ y: -12, rotate: 2, duration: 3.2, delay: 1.5 }}
                  className="-top-6 -left-6 lg:-top-8 lg:-left-8 w-2/5 h-2/5 rounded-2xl border-3 border-purple-500/40 z-20"
                />
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-400 to-lime-400 rounded-full opacity-60 z-30"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* About */}
        <section id="about" className="py-20 scroll-mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading gradient="from-teal-400 to-lime-400" title="About Me" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[1fr_auto] gap-10 items-start mb-16"
            >
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-5">
                {about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {profile.gaming.map(({ game, result }) => (
                    <div key={game} className="rounded-xl border border-purple-500/25 bg-purple-500/[0.06] px-4 py-3">
                      <p className="text-xs uppercase tracking-widest text-purple-300 font-semibold">{game}</p>
                      <p className="text-base text-gray-200 mt-1">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <dl className="rounded-2xl border border-teal-500/20 bg-gray-900/50 p-6 space-y-4 md:w-64 text-sm">
                <div>
                  <dt className="text-teal-400 font-semibold uppercase tracking-wide text-xs">School</dt>
                  <dd className="text-gray-200 mt-1">{profile.school}</dd>
                </div>
                <div>
                  <dt className="text-teal-400 font-semibold uppercase tracking-wide text-xs">Degree</dt>
                  <dd className="text-gray-200 mt-1">{profile.degree}</dd>
                </div>
                <div>
                  <dt className="text-teal-400 font-semibold uppercase tracking-wide text-xs">Year</dt>
                  <dd className="text-gray-200 mt-1">
                    {profile.year} · Graduating {profile.graduation}
                  </dd>
                </div>
                <div>
                  <dt className="text-teal-400 font-semibold uppercase tracking-wide text-xs">GPA</dt>
                  <dd className="text-gray-200 mt-1">{profile.gpa}</dd>
                </div>
                <div>
                  <dt className="text-teal-400 font-semibold uppercase tracking-wide text-xs">Activities</dt>
                  <dd className="text-gray-200 mt-1">
                    <ul className="space-y-1">
                      {profile.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center rounded-full border border-teal-400/50 text-teal-300 py-2 font-medium hover:bg-teal-500/15 transition-colors"
                  >
                    View full resume ↗
                  </a>
                </div>
              </dl>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-teal-500/20 rounded-2xl p-6 hover:border-teal-500/40 transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold text-lime-400 mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-200 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 bg-gray-900/50 border border-lime-500/20 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-lime-400 mb-4">Coursework</h3>
              <div className="grid md:grid-cols-[3fr_1fr] gap-6">
                {coursework.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">{group.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-lime-500/10 border border-lime-500/30 rounded-full text-lime-200 text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 bg-gray-900/30 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              gradient="from-lime-400 to-amber-400"
              title="Experience"
              subtitle="Research, teaching, and industry work."
            />

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.role + job.org}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="bg-gray-900/50 border border-amber-500/20 rounded-2xl p-6 md:p-8 hover:border-amber-500/40 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      {job.logo ? (
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                          <div className="relative w-12 h-12">
                            <Image src={job.logo} alt={`${job.org} logo`} fill sizes="48px" className="object-contain" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-teal-500 rounded-xl flex items-center justify-center text-xl font-bold text-black">
                          {job.initials}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-1 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-amber-400">{job.role}</h3>
                          <p className="text-lg text-white font-medium">{job.org}</p>
                        </div>
                        <span className="text-amber-200/80 font-medium whitespace-nowrap">{job.dates}</span>
                      </div>
                      <ul className="space-y-2 text-gray-300 mb-5">
                        {job.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="text-amber-400 mt-1.5 text-xs" aria-hidden="true">●</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-amber-500/15 text-amber-200 rounded-full text-sm border border-amber-500/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              gradient="from-amber-400 to-teal-400"
              title="Projects"
              subtitle="Systems, full-stack apps, and hackathon builds."
            />

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const accent = ACCENTS[project.accent];
                return (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: (index % 2) * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`flex flex-col bg-gray-900/50 border rounded-2xl overflow-hidden transition-colors duration-300 ${accent.border}`}
                  >
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className={`text-xl font-bold ${accent.title}`}>{project.title}</h3>
                        {project.status && (
                          <span className={`flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${accent.tag}`}>
                            {project.status}
                          </span>
                        )}
                      </div>
                      {project.team && <p className="text-sm text-gray-400 mb-2">{project.team}</p>}
                      <p className="text-gray-300 leading-relaxed mt-2 mb-4">{project.summary}</p>
                      <ul className="space-y-3 text-sm leading-relaxed mb-5 flex-1">
                        {project.features.map((feature) => (
                          <li key={feature.name}>
                            <span className={`font-semibold ${accent.title}`}>{feature.name}</span>
                            <span className="text-gray-400"> · {feature.desc}</span>
                          </li>
                        ))}
                      </ul>
                      {project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span key={tag} className={`px-2.5 py-0.5 rounded-full text-xs border ${accent.tag}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {(project.github || project.demo) && (
                        <div className="flex gap-5 pt-2 border-t border-white/5">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-2 pt-3 text-sm font-medium transition-colors ${accent.link}`}
                            >
                              <GitHubIcon className="w-4 h-4" />
                              Code
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-2 pt-3 text-sm font-medium transition-colors ${accent.link}`}
                            >
                              <span aria-hidden="true">↗</span>
                              Live demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <h3 className="text-2xl font-bold text-gray-200 mt-20 mb-6">Earlier projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {earlierProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gray-900/40 border border-white/10 rounded-xl p-5 hover:border-teal-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-white group-hover:text-teal-300 transition-colors">{project.title}</h4>
                    <GitHubIcon className="w-4 h-4 flex-shrink-0 mt-1 text-gray-500 group-hover:text-teal-300" />
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{project.desc}</p>
                  <p className="text-xs text-gray-500">{project.tags.join(" · ")}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-gray-900/30 scroll-mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeading
              gradient="from-teal-400 via-lime-400 to-amber-400"
              title="Contact Me"
              subtitle="The best way to reach me is by email."
            />
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="px-6 py-3 rounded-full bg-teal-500/15 border border-teal-500/40 text-teal-200 font-medium hover:bg-teal-500/25 transition-colors"
              >
                {profile.email}
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-200 font-medium hover:border-lime-400/50 transition-colors"
              >
                Resume ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-200 font-medium hover:border-blue-400/50 transition-colors flex items-center justify-center gap-2"
              >
                <LinkedInIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-200 font-medium hover:border-teal-400/50 transition-colors flex items-center justify-center gap-2"
              >
                <GitHubIcon className="w-4 h-4" /> GitHub
              </a>
            </div>
            <p className="text-gray-500 mt-6">
              Discord: <span className="text-lime-300">{profile.discord}</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
