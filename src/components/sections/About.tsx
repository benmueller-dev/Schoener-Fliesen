"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";

export function About() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Left */}
          <div>
            <AnimateIn>
              <SectionBadge text="Über uns" />
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Ihr Meisterbetrieb für{" "}
                <span className="gold-gradient">Bad & Heizung</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Seit über 20 Jahren gestalten wir Bäder, die Funktion und Ästhetik
                  verbinden. Als Meisterbetrieb im Rhein-Sieg-Kreis stehen wir für
                  höchste Qualität und handwerkliche Präzision.
                </p>
                <p>
                  Von der ersten Beratung bis zur Schlüsselübergabe begleiten wir Sie
                  persönlich – mit transparenten Festpreisen und termingerechter
                  Fertigstellung.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 mt-8 text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors group"
              >
                <span className="text-sm font-medium">Mehr über uns erfahren</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimateIn>
          </div>

          {/* Image Right */}
          <AnimateIn delay={0.2} from="right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/Fotos/Badezimmer-Waschbecken-Sankt-Augustin.png"
                  alt="Schöner Fliesen Handwerk"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-light text-white mb-1">20+</div>
                <div className="text-sm text-[var(--gold)]">Jahre Erfahrung</div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
