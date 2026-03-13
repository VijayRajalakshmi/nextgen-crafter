"use client";

import { useState } from "react";
import supabase from "@/lib/supabase";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("contacts")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

    if (error) {
      console.error(error);
      setStatus("❌ Failed to send message");
      return;
    }

    // Send email notification
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setStatus("✅ Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 bg-black border border-gray-700 rounded focus:border-cyan-400 outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 bg-black border border-gray-700 rounded focus:border-cyan-400 outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 bg-black border border-gray-700 rounded focus:border-cyan-400 outline-none"
      />

      <button
        type="submit"
        className="bg-cyan-500 text-black px-6 py-3 rounded w-full hover:bg-cyan-400 transition"
      >
        Send Message
      </button>

      {status && (
        <p className="text-sm text-gray-400">{status}</p>
      )}

    </form>
  );
}