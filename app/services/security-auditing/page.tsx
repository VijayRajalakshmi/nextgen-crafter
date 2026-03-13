import Link from "next/link";

export const metadata = {
  title: "Security Auditing Services | Next Gen Crafter",
  description:
    "Next Gen Crafter provides professional security auditing services including vulnerability assessments and infrastructure security analysis.",
};

export default function SecurityAuditingPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          Security Auditing
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Identify vulnerabilities and strengthen your systems with
          professional security auditing and risk analysis.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Identify Weak Points Before Attackers Do
          </h2>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Security auditing helps organizations identify system
            vulnerabilities before they can be exploited.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Our auditing process evaluates infrastructure, applications,
            and network security to ensure your systems are protected
            against modern cyber threats.
          </p>
        </div>

        <div className="border border-cyan-500/20 rounded-xl p-6 sm:p-8">

          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
            What We Audit
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            <li>✔ Website Security Audits</li>
            <li>✔ Network Vulnerability Assessments</li>
            <li>✔ System Configuration Reviews</li>
            <li>✔ Application Security Testing</li>
            <li>✔ Infrastructure Risk Analysis</li>
          </ul>

        </div>

      </section>

      {/* AUDIT PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Our Security Audit Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

          {[
            "Discovery",
            "Vulnerability Testing",
            "Risk Analysis",
            "Security Report",
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
          Why Security Audits Are Important
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Regular security audits help organizations detect vulnerabilities,
          improve system resilience, and protect sensitive data from
          potential cyber attacks.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 border-t border-gray-800 px-6">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Schedule a Security Audit
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Ensure your systems are secure before threats appear.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 bg-cyan-500 text-black px-7 py-3 rounded hover:bg-cyan-400 transition"
        >
          Request Security Audit
        </Link>

      </section>

    </main>
  );
}