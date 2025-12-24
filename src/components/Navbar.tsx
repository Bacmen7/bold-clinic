"use client";

import Link from "next/link";

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
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="20" cy="50" r="8" fill="#18454B" />
              <rect x="35" y="20" width="8" height="60" fill="#18454B" />
              <circle cx="80" cy="50" r="8" fill="#18454B" />
            </svg>
            <span className="text-2xl font-semibold text-[#18454B] tracking-wider">
              BOLD CLINIC
            </span>
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
