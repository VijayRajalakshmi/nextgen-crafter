import Link from "next/link";

export const metadata = {
  title: "PC & Laptop Support | Next Gen Crafter",
  description:
    "Professional PC and laptop support services including troubleshooting, hardware repair, and IT system maintenance.",
};

export default function PCLaptopSupportPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          PC & Laptop Support
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Reliable computer support services for individuals and businesses.
          We diagnose, repair, and optimize systems to ensure smooth performance.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Professional IT Support
          </h2>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Computers are essential for modern work environments.
            Technical issues can slow productivity and cause major disruptions.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Our team provides reliable support services including
            troubleshooting, hardware upgrades, software installation,
            and system optimization.
          </p>
        </div>

        <div className="border border-cyan-500/20 rounded-xl p-6 sm:p-8">

          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
            Support Services
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            <li>✔ PC Troubleshooting</li>
            <li>✔ Laptop Repair & Maintenance</li>
            <li>✔ Software Installation</li>
            <li>✔ System Performance Optimization</li>
            <li>✔ Network Setup & Configuration</li>
          </ul>

        </div>

      </section>

      {/* SERVICE PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Our Support Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

          {[
            "Issue Diagnosis",
            "Problem Analysis",
            "Repair & Configuration",
            "System Testing",
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

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Why Professional Support Matters
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Professional technical support ensures systems remain secure,
          optimized, and reliable, helping businesses avoid downtime
          and productivity losses.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 border-t border-gray-800 px-6">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Need Technical Assistance?
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Our experts are ready to diagnose and resolve your system issues.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 bg-cyan-500 text-black px-7 py-3 rounded hover:bg-cyan-400 transition"
        >
          Get Support
        </Link>

      </section>

    </main>
  );
}