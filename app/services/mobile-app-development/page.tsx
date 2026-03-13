import Link from "next/link";

export const metadata = {
  title: "Mobile App Development | Next Gen Crafter",
  description:
    "Next Gen Crafter develops high-performance Android and iOS mobile applications designed for scalability and user experience.",
};

export default function MobileAppDevelopmentPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          Mobile App Development
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          We design and build powerful mobile applications that deliver
          seamless experiences across Android and iOS platforms.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Build Apps That Scale
          </h2>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            At Next Gen Crafter, we develop mobile applications that
            combine modern design with scalable architecture.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Whether you're launching a startup product or improving an
            existing platform, our team delivers reliable and high
            performance mobile solutions.
          </p>
        </div>

        <div className="border border-cyan-500/20 rounded-xl p-6 sm:p-8">

          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
            Mobile Solutions We Build
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            <li>✔ Android Applications</li>
            <li>✔ iOS Applications</li>
            <li>✔ Cross Platform Apps</li>
            <li>✔ Startup MVP Applications</li>
            <li>✔ Business Mobile Systems</li>
          </ul>

        </div>

      </section>

      {/* TECHNOLOGY */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Technologies We Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 text-center">

          {["React Native", "Flutter", "Firebase", "Node.js"].map(
            (tech, index) => (
              <div
                key={index}
                className="border border-cyan-500/20 rounded-lg p-5 sm:p-6 hover:bg-cyan-500/10 transition"
              >
                {tech}
              </div>
            )
          )}

        </div>

      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Our App Development Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

          {[
            "Strategy",
            "Design",
            "Development",
            "Launch",
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
          Have an App Idea?
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Let's turn your idea into a powerful mobile application.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 bg-cyan-500 text-black px-7 py-3 rounded hover:bg-cyan-400 transition"
        >
          Start Your App Project
        </Link>

      </section>

    </main>
  );
}