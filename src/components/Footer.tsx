import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Doctors", href: "/doctors" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1440px] mx-auto py-12 lg:py-16">

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <span className="font-inferi text-2xl text-white">Bold Clinic</span>
            </Link>
            <p className="font-basis text-white/50 text-sm max-w-xs">
              Expert aesthetic dermatology. Doctor-led care you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 lg:gap-10">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-basis text-white/70 text-sm hover:text-[#F6544A] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#F6544A] hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-basis text-white/40 text-xs">
            © {new Date().getFullYear()} Bold Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-basis text-white/40 text-xs hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-basis text-white/40 text-xs hover:text-white/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
