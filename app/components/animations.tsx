"use client";

import { motion } from "framer-motion";

const techStack = [
  "React",
  "Next.js",
  "Cyber Security",
  "AI Automation",
  "Cloud Systems",
  "UI/UX Design",
  "DevOps",
  "Networking",
  "Digital Marketing",
  "System Architecture",
];

export default function Animations() {
  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-cyan-400">
          Technologies We Work With
        </h2>

        <p className="text-gray-400 mt-3 md:mt-4 text-sm md:text-base">
          Building modern digital systems using cutting-edge tools and technologies.
        </p>
      </div>

      {/* Moving Tech Row */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15, // faster on mobile
            ease: "linear",
          }}
          className="flex gap-6 md:gap-16 whitespace-nowrap px-4"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="text-sm md:text-lg border border-cyan-500/30 px-4 md:px-6 py-2 md:py-3 rounded-lg text-gray-300 hover:text-cyan-400 transition shrink-0"
            >
              {tech}
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}