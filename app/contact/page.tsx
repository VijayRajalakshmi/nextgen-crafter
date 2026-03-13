import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Next Gen Crafter | Web Development & Cyber Security",
  description:
    "Contact Next Gen Crafter for web development, cybersecurity, and digital solutions in Chennai.",
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-16 sm:py-20 lg:py-24 px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
          Let's Work Together
        </h1>

        <p className="text-gray-400 mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base">
          Have a project in mind? Contact Next Gen Crafter to build secure,
          scalable digital solutions.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 px-6 pb-20">

        {/* CONTACT INFO */}
        <div className="space-y-8">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Get In Touch
          </h2>

          <div className="flex items-center gap-4 text-gray-300">
            <Phone className="text-cyan-400" />
            <a href="tel:+918838171655" className="hover:text-cyan-400">
              +91 88381 71655
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <Mail className="text-cyan-400" />
            <a
              href="mailto:nextgencrafter@gmail.com"
              className="hover:text-cyan-400"
            >
              nextgencrafter@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <MapPin className="text-cyan-400" />
            Chennai, Tamil Nadu, India
          </div>

        </div>

        {/* FORM */}
        <div className="border border-cyan-500/20 rounded-xl p-6 sm:p-8">

          <h3 className="text-lg sm:text-xl font-semibold mb-6">
            Send Us a Message
          </h3>

          <ContactForm />

        </div>

      </section>

      {/* MAP */}
      <div className="w-full h-[350px] sm:h-[400px]">
        <iframe
          src="https://www.google.com/maps?q=Chennai&output=embed"
          loading="lazy"
          className="w-full h-full border-0"
        />
      </div>

    </main>
  );
}