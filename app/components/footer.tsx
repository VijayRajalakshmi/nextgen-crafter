import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

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
            Next Gen Crafter is a web development and digital solutions company in Chennai,
            specializing in website development, SEO, automation systems, and cybersecurity services.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            📍 Chennai, Tamil Nadu
          </p>

          <p className="mt-2 text-sm text-gray-600">
            📞 +91 88381 71655
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
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-cyan-400 transition">
                Services
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
            Our Services
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Website Development in Chennai</li>
            <li>SEO & Digital Marketing</li>
            <li>Mobile App Development</li>
            <li>Cyber Security Services</li>
            <li>Automation Solutions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Connect With Us
          </h3>

          <div className="flex gap-4 text-xl">

            <a
              href="https://www.instagram.com/next_gen_crafter/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/nextgencrafter/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

          </div>

          <p className="text-sm mt-4 text-gray-500">
            Follow us for updates, projects, and growth strategies.
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