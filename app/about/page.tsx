"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Vijay R",
    role: "Director",
    image: "/team/vijay.jpg",
  },
  {
    name: "Binu P",
    role: "Director",
    image: "/team/binu.jpg",
  },
  {
    name: "Ponnilavan P",
    role: "Developer",
    image: "/team/ponnilavan.jpg",
  },
];

export default function AboutPage() {
  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-cyan-400"
        >
          About Next Gen Crafter
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          Next Gen Crafter is a modern technology solutions company focused on
          building scalable digital platforms, secure infrastructures,
          and innovative software systems for businesses worldwide.
        </p>
      </div>

      {/* OUR STORY */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>

          <p className="text-gray-400 mb-4">
            Next Gen Crafter was officially launched in the previous year with
            a clear vision — to help businesses grow using modern digital
            technologies and scalable systems.
          </p>

          <p className="text-gray-400 mb-4">
            Even though our company was recently established, our team carries
            more than <span className="text-cyan-400 font-semibold">7 years of experience</span>
            in web development, system infrastructure, cybersecurity,
            automation and digital technology solutions.
          </p>

          <p className="text-gray-400 mb-4">
            We operate as a highly efficient <span className="text-cyan-400">remote-first team</span>,
            allowing us to collaborate from anywhere while delivering reliable,
            high-quality solutions to our clients.
          </p>

          <p className="text-gray-400">
            Our work culture is built on innovation, flexibility,
            and continuous learning. This allows us to adapt quickly to new
            technologies and build solutions that stay relevant for years.
          </p>
        </div>

        <div className="border border-cyan-500/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">
            Craft. Create. Conquer.
          </h3>

          <p className="text-gray-400">
            Our philosophy is simple: craft powerful digital solutions,
            create meaningful technology experiences, and conquer
            complex technical challenges through innovation and teamwork.
          </p>
        </div>

      </div>

      {/* COMPANY STRATEGY */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our Strategy
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="border border-cyan-500/30 p-8 rounded-xl">
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">
              Innovation First
            </h4>

            <p className="text-gray-400 text-sm">
              We constantly explore emerging technologies such as
              AI, automation, and advanced web systems to deliver
              future-ready solutions.
            </p>
          </div>

          <div className="border border-cyan-500/30 p-8 rounded-xl">
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">
              Client Focus
            </h4>

            <p className="text-gray-400 text-sm">
              Our goal is not just to deliver software but to build
              long-term relationships with our clients through
              reliable support and scalable solutions.
            </p>
          </div>

          <div className="border border-cyan-500/30 p-8 rounded-xl">
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">
              Scalable Systems
            </h4>

            <p className="text-gray-400 text-sm">
              Every project we build is designed to scale as your
              business grows — ensuring performance, reliability,
              and long-term sustainability.
            </p>
          </div>

        </div>

      </div>

      {/* FUTURE PLANS */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Looking Ahead
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          We are incredibly grateful to all our current and upcoming
          clients who trust Next Gen Crafter for their digital growth.
          Your support motivates us to continuously improve and innovate.
        </p>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          Our team is currently working on several exciting
          <span className="text-cyan-400 font-semibold"> AI-powered tools and automation systems </span>
          that will help businesses operate smarter and more efficiently.
          These new innovations will soon become a core part of our services.
        </p>

      </div>

      {/* TEAM */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our Leadership
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group border border-cyan-500/20 rounded-xl p-8 text-center overflow-hidden"
            >

              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition"></div>

              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-cyan-400 mb-6"
              />

              <h4 className="text-xl font-semibold text-cyan-400">
                {member.name}
              </h4>

              <p className="text-gray-400 mt-2 text-sm">
                {member.role}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* CTA */}
      <div className="text-center py-24 border-t border-gray-800">

        <h2 className="text-3xl font-bold">
          Ready to Build Your Next Project?
        </h2>

        <p className="text-gray-400 mt-4">
          Let’s collaborate and create something amazing together.
        </p>

        <button className="mt-8 bg-cyan-500 text-black px-8 py-3 rounded-lg hover:bg-cyan-400 transition">
          Start a Project
        </button>

      </div>

    </section>
  );
}