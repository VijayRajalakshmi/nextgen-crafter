import Link from "next/link";

export const metadata = {
  title: "SEO & Digital Marketing | Next Gen Crafter",
  description:
    "Next Gen Crafter provides SEO and digital marketing strategies to grow your online presence and increase business visibility.",
};

export default function SEODigitalMarketingPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          SEO & Digital Marketing
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          We help businesses grow online with data-driven SEO strategies
          and digital marketing campaigns designed for measurable results.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Grow Your Online Presence
          </h2>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Digital visibility is essential for modern businesses.
            Our SEO and digital marketing services help your brand
            appear where your customers are searching.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            We focus on sustainable strategies that improve rankings,
            increase traffic, and convert visitors into customers.
          </p>
        </div>

        <div className="border border-cyan-500/20 rounded-xl p-6 sm:p-8">

          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
            Marketing Services
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            <li>✔ Search Engine Optimization (SEO)</li>
            <li>✔ Website SEO Audits</li>
            <li>✔ Google Ranking Optimization</li>
            <li>✔ Social Media Marketing</li>
            <li>✔ Content Strategy</li>
          </ul>

        </div>

      </section>

      {/* STRATEGY */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Our Marketing Strategy
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

          {[
            "Market Research",
            "SEO Optimization",
            "Content Marketing",
            "Performance Tracking",
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

      {/* RESULTS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Results That Matter
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Our strategies focus on improving search rankings,
          increasing organic traffic, and delivering measurable
          business growth.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 border-t border-gray-800 px-6">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Want More Customers Online?
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Let’s create a powerful digital marketing strategy
          for your business.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 bg-cyan-500 text-black px-7 py-3 rounded hover:bg-cyan-400 transition"
        >
          Start Marketing
        </Link>

      </section>

    </main>
  );
}