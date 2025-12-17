import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  treatments: [
    { name: "Skin Treatments", href: "/treatments/skin" },
    { name: "Hair Treatments", href: "/treatments/hair" },
    { name: "Laser Treatments", href: "/treatments/laser" },
    { name: "Injectables", href: "/treatments/injectables" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Philosophy", href: "/philosophy" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Book Consultation", href: "/book" },
    { name: "Find a Clinic", href: "/clinics" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#831A4A] text-white px-6 sm:px-10 lg:px-16 xl:px-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-inferi text-3xl text-white">Bold Clinic</span>
            </Link>
            <p className="font-basis text-white/70 text-base leading-relaxed mb-8 max-w-sm">
              Expert aesthetic dermatology delivered consistently. Doctor-led clinics bringing together skin, hair, laser, and injectables under one trusted network.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+911234567890" className="flex items-center gap-3 text-white/70 hover:text-[#F6544A] transition-colors font-basis">
                <Phone size={18} />
                <span>+91 123 456 7890</span>
              </a>
              <a href="mailto:hello@boldclinic.com" className="flex items-center gap-3 text-white/70 hover:text-[#F6544A] transition-colors font-basis">
                <Mail size={18} />
                <span>hello@boldclinic.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 font-basis">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Mumbai, Delhi, Bangalore, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Treatments Links */}
          <div>
            <h4 className="font-inferi text-lg text-white mb-6">Treatments</h4>
            <ul className="space-y-3">
              {footerLinks.treatments.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-basis text-white/70 hover:text-[#F6544A] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-inferi text-lg text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-basis text-white/70 hover:text-[#F6544A] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-inferi text-lg text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-basis text-white/70 hover:text-[#F6544A] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Copyright */}
          <p className="font-basis text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Bold Clinic. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#F6544A] hover:border-[#F6544A] hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-basis text-white/50 text-sm hover:text-[#F6544A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-basis text-white/50 text-sm hover:text-[#F6544A] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
