"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [
    { href: "/", label: "Home" },
    ...segments.map((seg, idx) => ({
      href: "/" + segments.slice(0, idx + 1).join("/"),
      label: decodeURIComponent(seg.replace(/-/g, " ")),
    })),
  ];

  if (segments.length === 0) return null;

  return (
    <nav className="w-full bg-black/40 border-b border-white/5">
      <ol className="max-w-7xl mx-auto px-6 h-10 text-xs md:text-sm text-zinc-400 flex items-center gap-2">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center">
            {i > 0 && <span className="mx-2">/</span>}
            {i < crumbs.length - 1 ? (
              <Link href={c.href} className="hover:text-[var(--gold)] transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-white">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

