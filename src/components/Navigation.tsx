"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/hersteller", label: "Hersteller" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? "bg-black"
          : "backdrop-blur-xl border-b border-white/5 bg-black/50"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/schoener-fliesen_logo.png"
              alt="Schöner Fliesen Logo"
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[var(--gold)] transition-colors duration-300 ${
                  pathname === link.href ? "text-[var(--gold)]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/kontakt"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="text-xs font-medium text-[var(--gold-light)] uppercase tracking-wide">
              Kontakt
            </span>
            <ArrowRight className="w-3 h-3 text-[var(--gold)] group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            className="md:hidden text-zinc-300 z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 pt-16">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-4xl font-semibold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  pathname === link.href
                    ? "text-[var(--gold)]"
                    : "text-white hover:text-[var(--gold)]"
                } ${
                  mobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 75}ms` : "0ms"
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-medium text-[var(--gold)] mt-6 flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${navLinks.length * 75}ms` : "0ms"
              }}
            >
              Kontakt <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
