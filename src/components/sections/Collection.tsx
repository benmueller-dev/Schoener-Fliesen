"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Euro } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export function Collection() {
  return (
    <section id="kollektion" className="py-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <AnimateIn>
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
              Unsere Projekte
            </h2>
            <p className="text-zinc-500">
              Individuell geplant, termingerecht umgesetzt.
            </p>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <Link
            href="/referenzen"
            className="hidden md:flex items-center gap-2 text-[var(--gold)] text-sm hover:text-[var(--gold-light)] transition-colors"
          >
            Alle Referenzen <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateIn>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {/* Main Large Item */}
          <AnimateIn delay={0.1} className="md:col-span-2 md:row-span-2">
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer h-[400px] md:h-full">
              <Image
                src="/Fotos/Badezimmer-Sankt-Augustin.png"
                alt="Modernes Bad Sankt Augustin"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="text-[var(--gold)] text-xs font-medium tracking-widest uppercase mb-2 block">
                  Komplettsanierung
                </span>
                <h3 className="text-3xl text-white font-medium tracking-tight mb-2">
                  Modernes Bad in Sankt Augustin
                </h3>
                <p className="text-zinc-400 text-sm max-w-md line-clamp-2">
                  Helle Fliesen, bodengleiche Dusche und elegante Holzakzente –
                  ein zeitloses Wohlfühlbad für die ganze Familie.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Secondary Item Top */}
          <AnimateIn delay={0.2}>
            <Link href="/referenzen#projekt-1" className="relative group rounded-2xl overflow-hidden cursor-pointer h-[300px] md:h-full block">
              <Image
                src="/Fotos/Badezimmer-Sankt-Augustin-Warm.png"
                alt="Warmes Badezimmer"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl text-white font-medium">
                      Wellness-Oase
                    </h3>
                    <p className="text-zinc-300 text-xs mt-1">
                      Warme Töne, freistehende Badewanne
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimateIn>

          {/* Secondary Item Bottom - Festpreis Box */}
          <AnimateIn delay={0.3}>
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/5 p-8 flex flex-col justify-between h-[300px] md:h-full">
              <div>
                <Euro className="w-10 h-10 text-[var(--gold)] mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl text-white font-medium mb-2">
                  Festpreis-Garantie
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Individuelles Design zum transparenten Festpreis.
                  Keine versteckten Kosten, keine Überraschungen.
                </p>
              </div>
              <div className="mt-4">
                <span className="text-xs text-zinc-500 block mb-2 uppercase tracking-wider">
                  Inklusive
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">Planung</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">Material</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">Montage</span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
