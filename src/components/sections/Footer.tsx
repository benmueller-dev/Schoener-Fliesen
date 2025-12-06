import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";

const navLinks = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/showroom", label: "Showroom" },
  { href: "/hersteller", label: "Hersteller" },
  { href: "/kontakt", label: "Kontakt" },
];

const contactInfo = [
  { icon: MapPin, value: "Hennefer Str. 25, 53757 Sankt Augustin" },
  { icon: Mail, value: "info@schoener-fliesen.de", href: "mailto:info@schoener-fliesen.de" },
  { icon: Phone, value: "02241 343307", href: "tel:+492241343307" },
];

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="block mb-6">
              <Image
                src="/schoener-fliesen_logo.png"
                alt="Schöner Fliesen Logo"
                width={160}
                height={42}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-zinc-500 text-sm mb-4">
              Meisterbetrieb für exklusive Bad- und Heizungslösungen im Rhein-Sieg-Kreis.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-[var(--gold)] hover:border-[var(--gold)]/30 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-[var(--gold)] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © 2025 Schöner Fliesen GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <Link href="#" className="hover:text-zinc-400 transition-colors">
              Datenschutz
            </Link>
            <Link href="#" className="hover:text-zinc-400 transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
