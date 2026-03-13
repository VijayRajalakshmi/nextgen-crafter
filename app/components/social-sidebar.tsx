"use client";

import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">

      {/* WhatsApp */}
      <Link
        href="https://wa.me/918838171655"
        target="_blank"
        className="flex items-center justify-center w-11 h-11 border border-cyan-400 rounded-full hover:bg-cyan-400/20 transition"
      >
        <MessageCircle className="text-cyan-400" size={20} />
      </Link>

      {/* LinkedIn */}
      <Link
        href="#"
        target="_blank"
        className="flex items-center justify-center w-11 h-11 border border-cyan-400 rounded-full hover:bg-cyan-400/20 transition"
      >
        <Linkedin className="text-cyan-400" size={20} />
      </Link>

      {/* Instagram */}
      <Link
        href="#"
        target="_blank"
        className="flex items-center justify-center w-11 h-11 border border-cyan-400 rounded-full hover:bg-cyan-400/20 transition"
      >
        <Instagram className="text-cyan-400" size={20} />
      </Link>

      {/* Email */}
      <Link
        href="mailto:info@nextgencrafter.com"
        className="flex items-center justify-center w-11 h-11 border border-cyan-400 rounded-full hover:bg-cyan-400/20 transition"
      >
        <Mail className="text-cyan-400" size={20} />
      </Link>

    </div>
  );
}