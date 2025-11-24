"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "players", label: "Men's Team" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePath = pathname === "/";

  useEffect(() => {
    if (!isHomePath) {
      return;
    }

    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePath]);

  const scrollToSection = (sectionId: string) => {
    const isHomePath = pathname === "/";

    if (!isHomePath) {
      const hash = sectionId === "home" ? "" : `#${sectionId}`;
      router.push(`/${hash}`);
      setMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
    }
  };

  const currentActiveSection = isHomePath ? activeSection : "home";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#101E38]/95 backdrop-blur-md border-b border-[#EAE59B]/20 py-1 overflow-x-hidden">
      <div className="max-w-7xl mx-auto  px-4  w-full">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer shrink-0"
          >
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0">
                <Image
                  src="/logo3.png"
                  alt="TFC Logo"
                  width={80}
                  height={80}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-start">
                <span className="text-sm sm:text-lg md:text-xl font-bold text-[#EAE59B] group-hover:text-[#EAE59B]/80 transition-colors whitespace-nowrap">
                  Thunderbolts FC
                </span>
              </div>
            </Link>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = currentActiveSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-5 py-2.5 transition-all duration-300 uppercase font-medium tracking-wider"
                >
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "text-[#EAE59B] font-semibold"
                        : "text-gray-300 hover:text-[#EAE59B]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#EAE59B] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#EAE59B] transition-colors p-2"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                // X Icon
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-7 h-7"
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
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu - Animated Slide In */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#101E38]/98 backdrop-blur-lg border-t border-[#EAE59B]/30"
            >
              <div className="px-4 py-4 space-y-0">
                {navItems.map((item) => {
                  const isActive = currentActiveSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block  text-left px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <span
                        className={`text-md font-medium uppercase tracking-wider ${
                          isActive
                            ? "text-[#EAE59B] font-medium"
                            : "text-gray-300 hover:text-[#EAE59B]"
                        }`}
                      >
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="mobileActive"
                          className="mt-1 h-0.5 bg-[#EAE59B] rounded-full"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
