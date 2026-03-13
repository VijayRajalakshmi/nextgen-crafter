import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-400">
            Next Gen Crafter
          </h2>

          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            Crafting modern digital solutions for businesses through
            innovation, security, and scalable technology.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            Craft. Create. Conquer.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-cyan-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-cyan-400 transition">
                Services
              </Link>
            </li>

            <li>
              <Link href="/projects" className="hover:text-cyan-400 transition">
                Projects
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-cyan-400 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cyber Security</li>
            <li>Automation Systems</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Connect With Us
          </h3>

          <div className="flex gap-4 text-xl">

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

          </div>

          <p className="text-sm mt-4 text-gray-500">
            Follow us for updates and innovations.
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Next Gen Crafter. All Rights Reserved.
      </div>

    </footer>
  );
}