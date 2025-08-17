import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          {/* Small Banner */}
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm mb-4 bg-primary/5">
            🚀 Open to Internships & SDE Roles
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Rohan Vante
          </h1>

          {/* Typewriter Effect */}
          <h2 className="mt-2 text-xl md:text-2xl font-medium text-primary">
            <TypeAnimation
              sequence={[
                "Fullstack Developer 💻",
                2000,
                "IoT & ML Enthusiast 🤖",
                2000,
                "Problem Solver 🧩",
                2000,
                "Tech Explorer 🚀",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          {/* Short Bio */}
          <p className="mt-4 text-lg text-muted-foreground max-w-prose">
             Passionate Software Developer specializing in full-stack applications, 
            scalable systems, and intuitive user experiences.  
            Always eager to solve real-world problems through clean code and innovative design.<span className="font-medium text-foreground">REST APIs</span>,  
            <span className="font-medium text-foreground"> data engineering</span>, and  
            <span className="font-medium text-foreground"> clean UI/UX</span>.
          </p>

          {/* Quick Highlights */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 bg-primary/10 rounded-full">🏆 3 Hackathons </span>
            <span className="px-3 py-1 bg-primary/10 rounded-full">💻 5+ Projects</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full">⚡ Full-Stack Dev</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full">⚡ Java Dev</span>
          <span className="px-3 py-1 bg-primary/10 rounded-full">⚡ Data Analyst</span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rohanvante10@gmail.com&su=Hiring%20Inquiry&body=Hello%20Rohan,"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="https://github.com/rohanvante" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="https://www.linkedin.com/in/rohan-vante-22181125a/" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-sm text-muted-foreground flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center">
              <Phone className="h-4 w-4 mr-2" /> +91 7760226876
            </span>
            <span className="inline-flex items-center">
              <MapPin className="h-4 w-4 mr-2" /> Bengaluru, Karnataka
            </span>
          </div>
        </motion.div>

        {/* Right Side - Profile Picture Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-primary/30 animate-pulse-slow">
            <img 
              src="/profile.jpg" 
              alt="Rohan Vante" 
              className="w-full h-full object-cover"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/40 animate-ping-slow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
