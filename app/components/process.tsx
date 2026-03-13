"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    desc: "We understand your business requirements, goals, and technical needs before starting any project.",
  },
  {
    title: "Strategy & Planning",
    desc: "Our team creates a structured roadmap and architecture for building scalable digital solutions.",
  },
  {
    title: "Development",
    desc: "We build high-quality applications using modern technologies and best development practices.",
  },
  {
    title: "Testing & Security",
    desc: "Every product is tested thoroughly with security checks to ensure reliability and performance.",
  },
  {
    title: "Deployment & Support",
    desc: "We deploy your product and provide ongoing maintenance, updates, and technical support.",
  },
];

export default function Process() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black text-white">

      {/* Heading */}
      <div className="text-center mb-12 lg:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">
          Our Process
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          A structured approach that ensures every project is delivered with
          quality, security, and performance.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 px-6">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="border border-cyan-500/30 rounded-xl p-6 hover:bg-cyan-500/10 transition"
          >
            <div className="text-cyan-400 font-bold text-lg mb-3">
              Step {index + 1}
            </div>

            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              {step.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}