import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SocialSidebar from "./components/social-sidebar";
import Chatbot from "./components/chatbot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgencrafter.in"),
  title: {
    default: "Next Gen Crafter | Web Development & Technology Solutions",
    template: "%s | Next Gen Crafter",
  },
  description:
    "Next Gen Crafter is a technology solutions company specializing in web development, cybersecurity, digital infrastructure, and scalable software systems.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <Chatbot />
        <SocialSidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}