"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Item = {
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    title: "Web Development",
    desc: "High-performance web platforms built with modern frameworks.",
  },
  {
    title: "Cyber Security",
    desc: "Protect your infrastructure with advanced security solutions.",
  },
  {
    title: "Mobile Applications",
    desc: "Custom Android & iOS apps designed for scalability.",
  },
  {
    title: "AI Automation",
    desc: "Automate workflows and business systems with AI tools.",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Deploy scalable applications with modern cloud systems.",
  },
];

export default function HorizontalShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      ref={ref}
      className="relative h-[160vh] sm:h-[180vh] lg:h-[200vh] bg-black text-white"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 sm:gap-10 lg:gap-12 px-6 sm:px-10 lg:px-20"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[300px] lg:min-w-[350px] border border-cyan-500/30 rounded-xl p-5 sm:p-6 lg:p-8 bg-black hover:bg-cyan-500/10 transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}