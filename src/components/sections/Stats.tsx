"use client";

import { AnimateIn } from "@/components/AnimateIn";

interface StatItemProps {
  value: string;
  label: string;
  description: string;
  delay?: number;
}

function StatItem({ value, label, description, delay = 0 }: StatItemProps) {
  return (
    <AnimateIn delay={delay}>
      <div className="group">
        <div className="text-5xl md:text-6xl font-light text-white mb-2 tracking-tight">
          {value}
        </div>
        <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-medium mb-3">
          {label}
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>
    </AnimateIn>
  );
}

const stats: Omit<StatItemProps, "delay">[] = [
  {
    value: "25+",
    label: "Jahre Erfahrung",
    description:
      "Seit über zwei Jahrzehnten steht unser Meisterbetrieb für Qualität.",
  },
  {
    value: "1,500",
    label: "Fertige Projekte",
    description: "Jedes Projekt mit Leidenschaft umgesetzt.",
  },
  {
    value: "50",
    label: "Partnerhersteller",
    description: "Führende Marken für höchste Materialqualität.",
  },
  {
    value: "1k+",
    label: "Zufriedene Kunden",
    description: "Tausendfach zufriedene Kunden im Rhein-Sieg-Kreis.",
  },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
