"use client";

import { type FormEvent } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import Image from "next/image";

export function CTA() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Fotos/Badezimmer-Sankt-Augustin.png"
          alt="Luxuriöses Badezimmer"
          fill
          className="object-cover"
        />
        {/* Blur + Gradient Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <Image
            src="/schoener-fliesen_logo.png"
            alt="Schöner Fliesen Logo"
            width={200}
            height={50}
            className="mx-auto mb-6"
          />
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Bereit für die Verwandlung?
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
            Vereinbaren Sie einen exklusiven Beratungstermin in unserem Showroom
            oder virtuell.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Ihre E-Mail Adresse"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-[var(--gold)] text-white rounded-lg font-medium hover:bg-[var(--gold-light)] transition-all"
            >
              Kostenloses Exposé anfordern
            </button>
          </form>
        </AnimateIn>
        <AnimateIn delay={0.4}>
          <p className="text-zinc-600 text-xs mt-4">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
