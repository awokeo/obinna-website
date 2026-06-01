"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research" },
    { href: "/publications", label: "Publications" },
    { href: "/teaching", label: "Teaching" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl md:text-3xl font-semibold hover:text-red-700 transition"
        >
          Obinna Awoke
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <div className="flex gap-8 text-sm uppercase tracking-widest">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition duration-200 ${
                  pathname === link.href
                    ? "text-red-700 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-red-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <ThemeToggle />

        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">

          <ThemeToggle />

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-gray-950 dark:border-gray-800">
          <div className="flex flex-col px-6 py-4 space-y-4">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`uppercase tracking-wider transition ${
                  pathname === link.href
                    ? "text-red-700 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-red-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}