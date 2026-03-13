import Link from "next/link";

export const metadata = {
  title: "CCTV Installation Services | Next Gen Crafter",
  description:
    "Professional CCTV installation services by Next Gen Crafter. Secure your home or business with smart surveillance systems.",
};

export default function CCTVInstallationPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          CCTV Installation
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Protect your home and business with professional CCTV
          surveillance systems designed for real-time monitoring
          and security.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Smart Surveillance Systems
          </h2>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            CCTV systems play a critical role in protecting
            businesses, homes, and facilities from theft,
            unauthorized access, and security risks.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Our team installs modern surveillance systems
            that allow remote monitoring, recording, and
            real-time alerts.
          </p>
        </div>

        <div className="border border-cyan-500/20 rounded-xl p-6 sm:p-8">

          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
            Our CCTV Services
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            <li>✔ CCTV Camera Installation</li>
            <li>✔ Office Surveillance Systems</li>
            <li>✔ Home Security Camera Setup</li>
            <li>✔ Remote Monitoring Systems</li>
            <li>✔ CCTV Maintenance & Support</li>
          </ul>

        </div>

      </section>

      {/* INSTALLATION PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Our Installation Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

          {[
            "Site Inspection",
            "System Planning",
            "Installation",
            "Testing & Monitoring",
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
          Why CCTV Security Matters
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Surveillance systems help prevent crime, monitor
          activities, and provide valuable evidence when
          security incidents occur.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 border-t border-gray-800 px-6">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Secure Your Property Today
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Install a reliable CCTV system for better security
          and peace of mind.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 bg-cyan-500 text-black px-7 py-3 rounded hover:bg-cyan-400 transition"
        >
          Request CCTV Installation
        </Link>

      </section>

    </main>
  );
}