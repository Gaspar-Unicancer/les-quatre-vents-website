"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "L'Esprit", href: "#esprit" },
  { label: "Nos Formules", href: "#formules" },
  { label: "La Carte", href: "#carte" },
  { label: "La Terrasse", href: "#terrasse" },
  { label: "Nous Trouver", href: "#infos" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Les Quatre Vents — Logo"
            width={52}
            height={52}
            className="rounded-full object-cover"
          />
          <span
            className="hidden sm:block text-white font-heading text-lg font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Les Quatre Vents
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-brand-accent transition-colors text-sm font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#infos"
            className="hidden md:inline-flex bg-brand-accent text-brand-primary font-bold text-sm px-5 py-2 rounded hover:bg-brand-accent/90 transition-all"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Nous trouver
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                  <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-primary border-t border-white/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold text-base py-1"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#infos"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-brand-accent text-brand-primary font-bold text-sm px-5 py-3 rounded text-center"
          >
            Nous trouver
          </a>
        </div>
      )}
    </header>
  );
}
