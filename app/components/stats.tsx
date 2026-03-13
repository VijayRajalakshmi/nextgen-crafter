"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Projects Delivered",
  },
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "15+",
    label: "Happy Clients",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black text-white">

      {/* Heading */}
      <div className="text-center mb-12 lg:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">
          Trusted Technology Partner
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Delivering reliable digital solutions for businesses and startups.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-6 text-center">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="border border-cyan-500/30 rounded-xl p-6 sm:p-8 hover:bg-cyan-500/10 transition"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400">
              {item.number}
            </h3>

            <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}