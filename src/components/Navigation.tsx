"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center"
        >
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
          <Link
            href="#kollektion"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            Kollektion
          </Link>
          <Link
            href="#philosophie"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            Philosophie
          </Link>
          <Link
            href="#details"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            Details
          </Link>
        </div>

        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group">
          <span className="text-xs font-medium text-amber-100 uppercase tracking-wide">
            Kontakt
          </span>
          <ArrowRight className="w-3 h-3 text-amber-400 group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="md:hidden text-zinc-300">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
