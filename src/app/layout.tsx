import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";

const lora = Lora({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inferi",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-basis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bold Clinic - Expert Aesthetic Dermatology",
  description: "Doctor-led aesthetic clinics bringing together skin, hair, laser, and injectables under one trusted network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        <TopHeader />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
