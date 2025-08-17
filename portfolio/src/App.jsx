import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundOrbs from "./components/BackgroundOrbs";
import ParallaxImage from "./components/ParallaxImage";
import Resume from "./components/Resume";




export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background relative">
      {/* Floating Orbs & Parallax BG */}
      <BackgroundOrbs />
      <ParallaxImage
        src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
        alt="abstract tech background"
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section (with profile + typewriter) */}
      <Hero />

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experience />

      {/* Projects */}
      <Projects />

      {/* Education */}
      <Education />

      {/* Achievements */}
      <Achievements />
      {/* Resume */}
      <Resume />



      {/* GitHub Stats */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">GitHub Activity</h2>
          <img
            src="https://github-readme-stats.vercel.app/api?username=rohanvante&show_icons=true&theme=radical"
            alt="GitHub Stats"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
