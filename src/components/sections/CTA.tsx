"use client";

import { Crown } from "lucide-react";
import { type FormEvent } from "react";
import { AnimateIn } from "@/components/AnimateIn";

export function CTA() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <Crown className="w-12 h-12 text-[var(--gold)] mx-auto mb-6" strokeWidth={1} />
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
