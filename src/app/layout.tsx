import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Royal Disability Forum | Empowering Potential, Restoring Dignity",
  description: "Transforming Struggles into Strength. We are dedicated to building and changing the lifestyle of vulnerable people with disabilities in Zimbabwe and across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.variable} suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        <main style={{ minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
