"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "NEWS", href: "/news" },
  { label: "WORKS", href: "/works" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-white/80 backdrop-blur-md">
        <button
          onClick={() => handleNavClick("/")}
          className="text-[#333333] text-xl font-bold tracking-[0.25em]"
        >
          MNV
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
                pathname === item.href
                  ? "text-[#333333]"
                  : "text-[#333333]/40 hover:text-[#333333]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6 relative z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] w-full transition-all duration-300 ${
              isOpen
                ? "bg-white translate-y-[6.5px] rotate-45"
                : "bg-[#333333]"
            }`}
          />
          <span
            className={`block h-[1.5px] w-full transition-all duration-300 ${
              isOpen ? "opacity-0" : "bg-[#333333]"
            }`}
          />
          <span
            className={`block h-[1.5px] w-full transition-all duration-300 ${
              isOpen
                ? "bg-white -translate-y-[6.5px] -rotate-45"
                : "bg-[#333333]"
            }`}
          />
        </button>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#333333] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {[{ label: "HOME", href: "/" }, ...navItems].map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium tracking-[0.3em] uppercase transition-opacity ${
                  pathname === item.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
