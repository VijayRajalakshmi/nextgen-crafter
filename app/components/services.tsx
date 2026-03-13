import Link from "next/link";

const services = [
  {
    title: "Web Development",
    link: "/services/web-development",
    desc: "Build high-performance websites using modern technologies like React, Next.js, Node.js, and scalable cloud architecture.",
  },
  {
    title: "Mobile App Development",
    link: "/services/mobile-app-development",
    desc: "Design and develop Android and iOS applications with seamless performance, intuitive UI, and scalable backend systems.",
  },
  {
    title: "SEO & Digital Marketing",
    link: "/services/seo-digital-marketing",
    desc: "Improve your online visibility through SEO strategies, content marketing, and performance-driven digital campaigns.",
  },
  {
    title: "Security Solutions",
    link: "/services/security-solutions",
    desc: "Protect your digital infrastructure with modern cybersecurity solutions, threat detection, and secure system design.",
  },
  {
    title: "Security Auditing",
    link: "/services/security-auditing",
    desc: "Identify vulnerabilities and strengthen your systems through professional penetration testing and security audits.",
  },
  {
    title: "CCTV Installation",
    link: "/services/cctv-installation",
    desc: "Secure your business and property with advanced CCTV systems and intelligent surveillance monitoring.",
  },
  {
    title: "PC & Laptop Support",
    link: "/services/pc-laptop-support",
    desc: "Professional troubleshooting, upgrades, and technical support for computers, laptops, and enterprise IT systems.",
  },
  {
    title: "Online Tutoring",
    link: "/services/online-tutoring",
    desc: "Learn web development, cybersecurity, and programming through practical training and real-world project experience.",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-6 bg-black text-white">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Our Services
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Next Gen Crafter delivers cutting-edge technology solutions including
          web development, cybersecurity, automation, marketing, and IT support
          to help businesses grow faster in the digital world.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <div className="border border-cyan-500/30 p-6 sm:p-8 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition cursor-pointer h-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </Link>
        ))}

      </div>

    </section>
  );
}