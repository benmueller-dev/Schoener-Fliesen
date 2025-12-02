"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Hennefer Str. 25, 53757 Sankt Augustin",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@schoener-fliesen.de",
    href: "mailto:info@schoener-fliesen.de",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "02241 343307",
    href: "tel:+4922413433077",
  },
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                <span className="text-xs uppercase tracking-widest text-[var(--gold-light)] font-medium">
                  Kontakt
                </span>
              </span>

              <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                Nehmen Sie{" "}
                <span className="gold-gradient">Kontakt auf</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                Für Anfragen oder eine persönliche Beratung steht Ihnen unser Team
                jederzeit zur Verfügung.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-medium text-white mb-8">Kontaktdaten</h2>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[var(--gold)]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white hover:text-[var(--gold)] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8!2d7.1847!3d50.7731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ2JzIzLjIiTiA3wrAxMScwNC45IkU!5e0!3m2!1sde!2sde!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-medium text-white mb-8">Nachricht senden</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="max.mustermann@gmail.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-zinc-400 mb-2">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0177 12345678"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                      Anliegen *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschreiben Sie uns Ihr Anliegen..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[var(--gold)] text-white rounded-lg font-medium hover:bg-[var(--gold-light)] transition-colors"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
