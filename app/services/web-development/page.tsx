import Link from "next/link";

export const metadata = {
  title: "Web Development Services | Next Gen Crafter",
  description:
    "Next Gen Crafter builds modern, scalable, and high-performance websites using Next.js, React, and modern technologies.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          Web Development
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          We build modern websites and web applications designed for
          performance, scalability, and user experience.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Modern Web Solutions
          </h2>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            At Next Gen Crafter, we design and develop high-performance
            websites using modern technologies such as Next.js, React,
            and scalable backend systems.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Our goal is to create fast, secure, and SEO-friendly websites
            that help businesses grow online.
          </p>
        </div>

        <div className="border border-cyan-500/20 rounded-xl p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
            What We Build
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            <li>✔ Business Websites</li>
            <li>✔ Ecommerce Platforms</li>
            <li>✔ SaaS Applications</li>
            <li>✔ Custom Web Systems</li>
            <li>✔ High-Performance Landing Pages</li>
          </ul>
        </div>

      </section>

      {/* TECHNOLOGY STACK */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Technology Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 text-center">

          {["Next.js", "React", "Node.js", "MySQL"].map((tech, index) => (
            <div
              key={index}
              className="border border-cyan-500/20 rounded-lg p-5 sm:p-6 hover:bg-cyan-500/10 transition"
            >
              {tech}
            </div>
          ))}

        </div>

      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Our Development Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

          {[
            "Planning",
            "Design",
            "Development",
            "Deployment",
          ].map((step, index) => (
            <div
              key={index}
              className="border border-cyan-500/20 rounded-xl p-5 sm:p-6 text-center hover:bg-cyan-500/10 transition"
            >
              <h3 className="text-cyan-400 font-semibold text-sm sm:text-base">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 border-t border-gray-800 px-6">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Need a Website for Your Business?
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Let's build a modern and scalable web platform for your business.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 bg-cyan-500 text-black px-7 py-3 rounded hover:bg-cyan-400 transition"
        >
          Start Your Project
        </Link>

      </section>

    </main>
  );
}