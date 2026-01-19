
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GeminiChatbot from "./components/GeminiChatbot";
import Cookies from "./components/Cookies"
// Google Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: "modern recruitment agency in Pune",
  description: "At Shadow Recruiter, we help companies hire smarter, faster, and better. As a modern recruitment agency in Pune, we connect the right talent with the right opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
       <head>
        <link rel="icon" href="/images/shadow_logo.png" type="website-icon" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>      
      <body className="m-0 p-0 box-border">
        <Navbar />
        <GeminiChatbot />
        <Cookies />

        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
 