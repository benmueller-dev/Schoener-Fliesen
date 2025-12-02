import Link from "next/link";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const discoverLinks = [
  { href: "#", label: "Kollektionen" },
  { href: "#", label: "Showroom" },
  { href: "#", label: "Projekte" },
];

const companyLinks = [
  { href: "#", label: "Über uns" },
  { href: "#", label: "Karriere" },
  { href: "#", label: "Presse" },
];

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link
              href="#"
              className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 mb-6"
            >
              AURUM.
            </Link>
            <p className="text-zinc-500 text-sm">
              Definition von Luxus im privaten Raum.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Entdecken</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              {discoverLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Social</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-zinc-500 hover:text-amber-400 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © 2024 AURUM Interiors. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <Link href="#" className="hover:text-zinc-400">
              Datenschutz
            </Link>
            <Link href="#" className="hover:text-zinc-400">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
