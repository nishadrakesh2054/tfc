"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/gallery", label: "Gallery" },
      { href: "/players", label: "Players" },
      { href: "/contact", label: "Contact" },
    ],
    social: [
      { href: "#", label: "Facebook", icon: "📘" },
      { href: "#", label: "Twitter", icon: "🐦" },
      { href: "#", label: "Instagram", icon: "📷" },
      { href: "#", label: "YouTube", icon: "▶️" },
    ],
    contact: [
      { label: "Phone", value: "+977 980 197 3975", icon: "📞", href: "#" },
      {
        label: "Email",
        value: "info@thunderbolts.com.np",
        icon: "📧",
        href: "#",
      },
      {
        label: "Address",
        value: "Dhapakhel, Lalitpur, Nepal",
        icon: "📍",
        href: "#",
      },
    ],
  };

  return (
    <footer className="bg-[#12203B] border-t border-[#EAE59B]/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 ">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-20 h-20"
              >
                <Image
                  src="/logo1.png"
                  alt="TFC Logo"
                  width={80}
                  height={80}
                  className="filter drop-shadow-lg"
                  priority
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#EAE59B] group-hover:text-[#EAE59B]/80 transition-colors">
                  TFC
                </span>
                <span className="text-xs text-gray-400 -mt-1">
                  The Football Club
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The Future of Football. We combine passion, dedication, and
              technology to create an unforgettable experience for players and
              fans.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-[#EAE59B] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#EAE59B] transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#EAE59B] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-[#EAE59B] mb-4">
              Follow Us
            </h3>
            <ul className="space-y-2">
              {footerLinks.social.map((social, index) => (
                <li key={`${social.label}-${index}`}>
                  <Link
                    href={social.href}
                    className="text-gray-400 hover:text-[#EAE59B] transition-colors text-sm flex items-center group"
                  >
                    <span className="mr-2 text-lg">{social.icon}</span>
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-[#EAE59B] mb-4">
              Quick Contact
            </h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link, index) => (
                <li key={`${link.value}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#EAE59B] transition-colors text-sm flex items-center group"
                  >
                    <span className="mr-2 text-lg">{link.icon}</span>{" "}
                    <span>{link.value}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-[#EAE59B]/20 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} TFC - The Football Club. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-[#EAE59B] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#EAE59B] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
