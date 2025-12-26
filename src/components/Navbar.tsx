"use client";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Find a Clinic", href: "/doctors" },
  { label: "Treatments", href: "/treatments" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="bg-[#FCF4E9] border-b border-[#ECDCCD]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Bold Clinic"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#282725] hover:text-[#18454B] transition-colors text-[16px]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/appointment"
              className="bg-[#18454B] hover:bg-[#18454B]/90 text-white px-6 py-3 rounded-md text-[16px] font-semibold transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-[#18454B]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
