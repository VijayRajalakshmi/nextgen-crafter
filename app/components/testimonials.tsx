"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Startup Founder",
    message:
      "Next Gen Crafter helped us build a scalable web platform that dramatically improved our business operations.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    message:
      "Their SEO and digital marketing strategies helped us grow our online visibility and generate more leads.",
  },
  {
    name: "Rahul Verma",
    role: "IT Manager",
    message:
      "The cybersecurity solutions provided by Next Gen Crafter strengthened our infrastructure security.",
  },
  {
    name: "Karthik R",
    role: "Entrepreneur",
    message:
      "Professional team with deep technical knowledge. Highly recommended for web and software projects.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black text-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-12 lg:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          Trusted by businesses and startups for delivering high-quality
          technology solutions.
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="relative w-full overflow-hidden 
      [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex gap-6 sm:gap-8 lg:gap-10 px-6"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[300px] lg:min-w-[320px] border border-cyan-500/30 rounded-xl p-6 sm:p-7 lg:p-8 bg-black hover:bg-cyan-500/10 transition"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{item.message}"
              </p>

              <div>
                <h4 className="font-semibold text-cyan-400">
                  {item.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}