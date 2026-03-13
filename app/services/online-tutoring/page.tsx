import Link from "next/link";

export const metadata = {
  title: "Online Tutoring | Next Gen Crafter",
  description:
    "Next Gen Crafter provides online tutoring in web development, cybersecurity, and modern technology skills.",
};

export default function OnlineTutoringPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          Online Tutoring
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
          Learn modern technology skills through practical training programs
          designed for students, developers, and professionals.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Learn Real-World Technology
          </h2>

          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Technology evolves rapidly, and practical knowledge is
            essential for building a successful career in the tech industry.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Our online tutoring programs focus on hands-on learning,
            real-world projects, and practical problem solving.
          </p>
        </div>

        <div className="border border-cyan-500/20 rounded-xl p-6 sm:p-8">

          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-4">
            Training Programs
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            <li>✔ Web Development Training</li>
            <li>✔ Cybersecurity Fundamentals</li>
            <li>✔ React & Next.js Development</li>
            <li>✔ Full Stack Development</li>
            <li>✔ Practical Project-Based Learning</li>
          </ul>

        </div>

      </section>

      {/* LEARNING PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          Our Learning Approach
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">

          {[
            "Concept Learning",
            "Practical Training",
            "Project Development",
            "Career Guidance",
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
          Why Learn With Us
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Our training focuses on practical experience, helping learners
          build real projects and develop skills that are valuable in
          today's technology industry.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 border-t border-gray-800 px-6">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Start Your Learning Journey
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Join our training programs and build the skills needed for
          modern technology careers.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 bg-cyan-500 text-black px-7 py-3 rounded hover:bg-cyan-400 transition"
        >
          Enroll Now
        </Link>

      </section>

    </main>
  );
}