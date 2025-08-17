import React from "react";
import { Award, Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    title: "She Leads Hackathon – Winner",
    desc: "Built a real-time Disaster Management & Evacuation system (Jan 2025).",
  },
  {
    icon: <Star className="h-6 w-6 text-blue-500" />,
    title: "Viswakarma Project",
    desc: "Developed IoT-based Emergency Vehicle Lane Clearance System (Jun–Jul 2024).",
  },
  {
    icon: <Award className="h-6 w-6 text-green-500" />,
    title: "Certifications",
    desc: "Completed Deloitte Virtual Internship & Tableau Data Analytics projects (2025).",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border rounded-2xl p-6 shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3">
                {a.icon}
                <h3 className="text-lg font-semibold">{a.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
