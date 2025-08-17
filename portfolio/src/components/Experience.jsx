import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const experiences = [
  {
    role: "Software Developer & Engineer Intern",
    org: "Bluestock",
    date: "May 2025",
    points: [
      "Developed and enhanced web apps using Python & Django.",
      "Integrated REST APIs; improved response time by ~20%.",
      "Managed MySQL/MongoDB, code reviews, Agile sprints.",
    ],
  },
  {
    role: "Virtual Intern",
    org: "Deloitte",
    date: "Jul 2025",
    points: [
      "Built KPI dashboards in Tableau; analyzed large datasets in Excel.",
      "Simulated forensic data analytics to detect anomalies.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">💼 Experience</h2>
          <p className="mt-2 text-gray-600">Internships & professional work</p>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition bg-white/90 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex flex-wrap items-center gap-2 text-lg">
                    <span className="font-semibold">{exp.role}</span>
                    <span className="text-gray-500">— {exp.org}</span>
                    <span className="ml-auto text-sm text-gray-400">{exp.date}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                    {exp.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
