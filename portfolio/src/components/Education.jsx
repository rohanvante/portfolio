import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    school: "Presidency University, Bangalore",
    meta: "CGPA: 8.5 · Expected 2026",
  },
  {
    degree: "Pre-University (PCMB)",
    school: "GOVT PU College Majalatti, Belagavi",
    meta: "2020–2022 · 92%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">🎓 Education</h2>
          <p className="mt-2 text-gray-600">Academic background</p>
        </div>

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.meta}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
