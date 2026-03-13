"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const services = [
    {
      title: "Web Development",
      desc: "Modern scalable websites",
      link: "/services/web-development",
    },
    {
      title: "Mobile App Development",
      desc: "Android & iOS apps",
      link: "/services/mobile-app-development",
    },
    {
      title: "SEO & Digital Marketing",
      desc: "Grow your online presence",
      link: "/services/seo-digital-marketing",
    },
    {
      title: "Security Solutions",
      desc: "Cyber security protection",
      link: "/services/security-solutions",
    },
    {
      title: "Security Auditing",
      desc: "Vulnerability assessments",
      link: "/services/security-auditing",
    },
    {
      title: "CCTV Installation",
      desc: "Smart surveillance",
      link: "/services/cctv-installation",
    },
    {
      title: "PC & Laptop Support",
      desc: "Hardware & software support",
      link: "/services/pc-laptop-support",
    },
    {
      title: "Online Tutoring",
      desc: "Learn web & security",
      link: "/services/online-tutoring",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black flex justify-center py-4">
      <nav className="max-w-7xl w-full flex items-center justify-between border border-cyan-500/20 rounded-full px-6 py-3 text-white">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Next Gen Crafter"
            width={45}
            height={45}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">

          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link
              href="/services"
              className="hover:text-cyan-400 flex items-center gap-1"
            >
              Services ▾
            </Link>

            {/* MEGA MENU */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-10 w-[720px] bg-black border border-cyan-500/20 rounded-2xl shadow-xl p-8 grid grid-cols-2 gap-6 transition-all duration-200
              ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
              {services.map((service, index) => (
                <Link key={index} href={service.link}>
                  <div className="hover:text-cyan-400">
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link href="/about" className="hover:text-cyan-400 transition">
            About Us
          </Link>

          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>

        {/* CTA BUTTON (DESKTOP) */}
        <Link
          href="/contact"
          className="hidden md:block bg-cyan-500 text-black px-5 py-2 rounded-md hover:bg-cyan-400 transition"
        >
          Start Project
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="absolute top-20 left-0 w-full bg-black border-t border-cyan-500/20 p-6 flex flex-col gap-5 md:hidden">

          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/contact"
            className="bg-cyan-500 text-black px-5 py-2 rounded-md text-center"
          >
            Start Project
          </Link>

        </div>
      )}
    </header>
  );
}