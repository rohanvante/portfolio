import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Disaster Management & Evacuation Routes",
    date: "Jan 2025",
    blurb:
      "Real-time evacuation planning using Google Maps API + ML; built during She Leads Hackathon.",
    tags: ["Google Maps API", "Machine Learning", "React", "Python"],
    link: "#",
  },
  {
    title: "Krushi — Crop Prediction & Disease Management",
    date: "Feb 2025",
    blurb:
      "Raspberry Pi + Python platform to predict yields, detect diseases, and recommend fertilizers.",
    tags: ["Raspberry Pi", "Python", "Flask", "ML"],
    link: "#",
  },
  {
    title: "Emergency Vehicle Lane Clearance (Viswakarma)",
    date: "Jun–Jul 2024",
    blurb:
      "IoT-driven real-time traffic clearance system to speed up ambulance response times.",
    tags: ["IoT", "Java", "Real-time Data"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">🚀 Projects</h2>
          <p className="mt-2 text-gray-600">Some of my selected work</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition bg-white/80 backdrop-blur relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition" />
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-lg">
                    {p.title}
                    <span className="text-sm text-gray-400">{p.date}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
