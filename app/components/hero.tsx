"use client";

import { motion } from "framer-motion";
import ThreeScene from "./three";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-16">

        {/* LEFT SIDE */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Next Gen
            <span className="text-cyan-400"> Crafter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg"
          >
            Craft. Create. Conquer.
          </motion.p>

          <p className="text-gray-500 mt-4 max-w-lg text-sm sm:text-base">
            Building next-generation digital solutions including web
            development, cybersecurity, automation and scalable systems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="bg-cyan-500 px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition">
              Start Project
            </button>

            <button className="border border-cyan-500 px-6 py-3 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition">
              Explore Services
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="h-[300px] sm:h-[380px] md:h-[420px] lg:h-[450px]">
          <ThreeScene />
        </div>

      </div>
    </section>
  );
}