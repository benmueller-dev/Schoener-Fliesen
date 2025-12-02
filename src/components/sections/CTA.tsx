"use client";

import { Crown } from "lucide-react";
import { type FormEvent } from "react";

export function CTA() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Crown className="w-12 h-12 text-amber-500 mx-auto mb-6" strokeWidth={1} />
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Bereit für die Verwandlung?
        </h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
          Vereinbaren Sie einen exklusiven Beratungstermin in unserem Showroom
          oder virtuell.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="email"
            placeholder="Ihre E-Mail Adresse"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg font-medium hover:brightness-110 transition-all shadow-[0_0_20px_rgba(217,119,6,0.3)]"
          >
            Kostenloses Exposé anfordern
          </button>
        </form>
        <p className="text-zinc-600 text-xs mt-4">
          Limitierte Verfügbarkeiten für Q4 2024.
        </p>
      </div>
    </section>
  );
}
