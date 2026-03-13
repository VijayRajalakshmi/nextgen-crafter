import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Projects | Next Gen Crafter",
  description:
    "Explore the projects built by Next Gen Crafter including websites, platforms, and digital solutions.",
};

const projects = [
  {
    title: "Sherin Cake Studio",
    category: "Business Website",
    image: "/projects/cake-studio.png",
  },
  {
    title: "Shine Tuition Academy",
    category: "Education Platform",
    image: "/projects/tuition.png",
  },
  {
    title: "Construction Company Website",
    category: "Corporate Website",
    image: "/projects/construction.png",
  },
  {
    title: "Pet Shop Ecommerce",
    category: "Ecommerce Platform",
    image: "/projects/petshop.png",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          Our Work
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base">
          A collection of digital products and platforms built by
          Next Gen Crafter.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-6 pb-20">

        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-cyan-500/20 rounded-xl overflow-hidden hover:scale-[1.03] hover:border-cyan-400 transition duration-300"
          >

            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-[200px] sm:h-[220px] object-cover"
            />

            <div className="p-5 sm:p-6">

              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {project.category}
              </p>

            </div>

          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="text-center pb-20">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Have a Project in Mind?
        </h2>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Let’s build something amazing together.
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