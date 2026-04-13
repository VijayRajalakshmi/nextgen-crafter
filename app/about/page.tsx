"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Vijay R", role: "Founder", image: "/team/vijay.jpg" },
  { name: "Lavanya G", role: "Director", image: "/team/Lava_PP.jpeg" },
  { name: "Binu Pravin", role: "Director", image: "/team/binu.jpg" },
  { name: "Ponnilavan", role: "Frontend Developer", image: "/team/GVMPP.jpeg" },
  { name: "Rahul", role: "DevOps Engineer", image: "/team/Rahul.jpeg" },
  { name: "Rabooni", role: "Sales Head", image: "/team/Raboo.jpeg" },
  { name: "Kavya", role: "Marketing Head", image: "/team/Kavya.jpeg" },
];

export default function AboutPage() {
  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400">
          About Next Gen Crafter
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          We are a full-spectrum technology and digital services company helping
          businesses grow through modern web development, automation systems,
          digital marketing, and security solutions.
        </p>
      </div>

      {/* WHO WE ARE */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

          <p className="text-gray-400 mb-4">
            Next Gen Crafter was founded with a clear mission — to help
            businesses move beyond traditional systems and adopt modern digital
            solutions that actually generate growth.
          </p>

          <p className="text-gray-400 mb-4">
            While officially launched recently, our team brings over
            <span className="text-cyan-400 font-semibold"> 7+ years of experience </span>
            across multiple domains including web development, system
            architecture, cybersecurity, and automation.
          </p>

          <p className="text-gray-400">
            We work as a highly efficient, remote-first team, enabling us to
            deliver high-quality solutions faster while maintaining flexibility
            and innovation.
          </p>
        </div>

        <div className="border border-cyan-500/30 p-8 rounded-xl bg-[#0a0a0a]">
          <h3 className="text-xl text-cyan-400 font-semibold mb-4">
            Craft. Create. Conquer.
          </h3>
          <p className="text-gray-400">
            This is not just our tagline — it defines how we approach every
            project. We craft powerful systems, create meaningful experiences,
            and conquer complex business challenges through technology.
          </p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="border border-cyan-500/30 p-8 rounded-xl">
            <h4 className="text-cyan-400 font-semibold mb-3">
              Web & App Development
            </h4>
            <p className="text-gray-400 text-sm">
              We build high-performance websites, e-commerce platforms, and SaaS
              applications using modern technologies like React and Next.js.
            </p>
          </div>

          <div className="border border-cyan-500/30 p-8 rounded-xl">
            <h4 className="text-cyan-400 font-semibold mb-3">
              Digital Marketing & SEO
            </h4>
            <p className="text-gray-400 text-sm">
              From SEO optimization to social media growth, we help businesses
              generate consistent leads and build strong online presence.
            </p>
          </div>

          <div className="border border-cyan-500/30 p-8 rounded-xl">
            <h4 className="text-cyan-400 font-semibold mb-3">
              Automation & Security
            </h4>
            <p className="text-gray-400 text-sm">
              We create automation systems and secure infrastructures that help
              businesses operate efficiently and safely.
            </p>
          </div>

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>

          <ul className="space-y-4 text-gray-400">
            <li>✔ Results-driven approach, not just design</li>
            <li>✔ End-to-end solutions (development + marketing)</li>
            <li>✔ Fast delivery with scalable architecture</li>
            <li>✔ Dedicated support and long-term partnership</li>
            <li>✔ Focus on real business growth</li>
          </ul>
        </div>

        <div className="border border-cyan-500/30 p-8 rounded-xl bg-[#0a0a0a]">
          <h3 className="text-cyan-400 font-semibold mb-4">
            Our Vision
          </h3>

          <p className="text-gray-400">
            To become a leading digital solutions company helping businesses
            across the globe scale using modern technology, automation, and
            innovative systems.
          </p>
        </div>

      </div>

      {/* TEAM */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-16">
          Meet Our Team
        </h2>

        <div className="space-y-12">

          {team.map((member, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-cyan-400"
              />

              <div className="text-center md:text-left">
                <h3 className="text-2xl text-cyan-400 font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* CTA */}
      <div className="text-center py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold">
          Ready to Grow Your Business?
        </h2>

        <p className="text-gray-400 mt-4">
          Let’s build powerful digital systems that drive real results.
        </p>

        <button className="mt-8 bg-cyan-500 text-black px-8 py-3 rounded-lg hover:bg-cyan-400 transition">
          Start a Project
        </button>
      </div>

    </section>
  );
}