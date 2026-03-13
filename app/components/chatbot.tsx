"use client";

import { useState } from "react";
import { services } from "../../lib/services-data";

type Message = {
  text: string;
  sender: "bot" | "user";
};

export default function Chatbot() {
  const [open, setOpen] = useState<boolean>(false);

  const [messages, setMessages] = useState<Message[]>([
    { text: "👋 Hello! How can we help you today?", sender: "bot" },
  ]);

  const handleServiceClick = (serviceKey: keyof typeof services) => {
    const service = services[serviceKey];

    setMessages((prev) => [
      ...prev,
      { text: service.title, sender: "user" },
      {
        text: `${service.description}\n\nServices include:\n${service.features.join(
          "\n"
        )}`,
        sender: "bot",
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-full shadow-lg transition"
      >
        <span className="animate-pulse">💬</span>
        <span className="text-sm font-medium">AI Assistant</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="mt-2 w-[300px] sm:w-80 bg-black border border-cyan-500/20 p-4 rounded-lg text-white shadow-xl">

          {/* Messages */}
          <div className="h-48 overflow-y-auto mb-4 text-sm space-y-2 pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.sender === "bot"
                    ? "text-cyan-400"
                    : "text-right text-white"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Service Buttons */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {(Object.keys(services) as Array<keyof typeof services>).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => handleServiceClick(key)}
                  className="border border-cyan-500/30 rounded px-2 py-1 hover:bg-cyan-500 hover:text-black transition"
                >
                  {services[key].title}
                </button>
              )
            )}
          </div>

        </div>
      )}
    </div>
  );
}