import React from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">📩 Contact Me</h2>
        <p className="mt-2 text-gray-600">Let’s connect! Fill out the form below.</p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 max-w-3xl mx-auto grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! (replace with backend/email service)");
        }}
      >
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea rows={5} placeholder="Your Message" required />
        <Button type="submit" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          Send Message
        </Button>
      </motion.form>
    </section>
  );
}
