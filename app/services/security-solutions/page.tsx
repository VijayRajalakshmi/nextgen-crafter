import Link from "next/link";

export const metadata = {
  title: "Security Solutions | Next Gen Crafter",
  description:
    "Next Gen Crafter provides cybersecurity solutions to protect businesses from digital threats and vulnerabilities.",
};

export default function SecuritySolutionsPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          Security Solutions
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Protect your digital infrastructure with advanced cybersecurity
          solutions designed to secure networks, systems, and data.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Advanced Cyber Protection
          </h2>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Businesses today face increasing cybersecurity threats including
            malware, phishing attacks, and system vulnerabilities.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Our security solutions are designed to identify risks, strengthen
            infrastructure, and ensure your systems remain protected against
            evolving digital threats.
          </p>
        </div>

        <div className="border border-cyan-500/20 rounded-xl p-6 sm:p-8">

          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
            Security Services
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            <li>✔ Network Security</li>
            <li>✔ Endpoint Protection</li>
            <li>✔ Firewall Configuration</li>
            <li>✔ Threat Monitoring</li>
            <li>✔ Security Infrastructure Setup</li>
          </ul>

        </div>

      </section>

      {/* SECURITY PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Our Security Approach
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

          {[
            "Assessment",
            "Risk Analysis",
            "Implementation",
            "Monitoring",
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

      {/* WHY SECURITY MATTERS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Why Cybersecurity Matters
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Cyber threats are constantly evolving. A strong security strategy
          ensures your business data, systems, and customer information remain
          protected.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 border-t border-gray-800 px-6">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Secure Your Business Today
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Protect your systems with professional cybersecurity solutions.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 bg-cyan-500 text-black px-7 py-3 rounded hover:bg-cyan-400 transition"
        >
          Get Security Consultation
        </Link>

      </section>

    </main>
  );
}