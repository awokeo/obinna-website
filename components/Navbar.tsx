"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research" },
    { href: "/publications", label: "Publications" },
    { href: "/teaching", label: "Teaching" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        {/* Logo / Name */}
        <Link
          href="/"
          className="font-serif text-3xl font-semibold hover:text-red-700 transition"
        >
          Obinna Awoke
        </Link>

        {/* Navigation */}
        <div className="flex gap-8 text-sm uppercase tracking-widest">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition duration-200 ${
                pathname === link.href
                  ? "text-red-700 font-semibold"
                  : "text-gray-700 hover:text-red-700"
              }`}
            >
              {link.label}
            </Link>
          ))}

        </div>

      </div>
    </nav>
  );
}