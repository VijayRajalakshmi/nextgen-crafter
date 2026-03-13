"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  "/clients/client1.png",
  "/clients/client2.png",
  "/clients/client3.png",
  "/clients/client4.png",
];

export default function Clients() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-black text-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12 lg:mb-14 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400">
          Our Clients
        </h2>

        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Businesses that trust Next Gen Crafter for digital solutions.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden 
      [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="flex gap-8 sm:gap-12 lg:gap-16 items-center px-6"
        >
          {[...clients, ...clients].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] lg:min-w-[150px] opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={logo}
                alt={`client-${index}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}