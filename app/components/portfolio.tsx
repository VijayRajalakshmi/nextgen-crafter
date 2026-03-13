"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Sherin Cake Studio",
    category: "Business Website",
    description:
      "Modern website built to showcase custom cake designs and services.",
  },
  {
    title: "Shine Tuition Academy",
    category: "Education Platform",
    description:
      "Website for an academy offering both online and offline classes.",
  },
  {
    title: "Construction Company",
    category: "Corporate Website",
    description:
      "Professional company website with service showcase and branding.",
  },
  {
    title: "Pet Shop Ecommerce",
    category: "Online Store",
    description:
      "Ecommerce platform allowing users to browse pets and contact via WhatsApp.",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black text-white">

      {/* Heading */}
      <div className="text-center mb-12 lg:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">
          Featured Projects
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          A glimpse of the digital solutions we have built for businesses.
        </p>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 px-6">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="border border-cyan-500/30 rounded-xl p-6 sm:p-7 lg:p-8 hover:bg-cyan-500/10 transition"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-500 text-xs sm:text-sm mb-4">
              {project.category}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>

            <button className="mt-6 border border-cyan-500 px-4 py-2 rounded hover:bg-cyan-500/10 transition text-sm">
              View Project
            </button>
          </motion.div>
        ))}

      </div>

    </section>
  );
}