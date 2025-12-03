"use client";

import { UserRound, FileText, Award, CheckCircle, Shield, Zap } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import React, { useRef, useState, useEffect } from "react";

interface GlowCardProps {
  children: React.ReactNode;
}

function GlowCard({ children }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Smooth follow animation
  useEffect(() => {
    const animate = () => {
      setGlowPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.08,
        y: prev.y + (mousePosition.y - prev.y) * 0.08,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative p-8 rounded-2xl bg-black border border-white/5 hover:border-[var(--gold)]/30 transition-all duration-300 h-full overflow-hidden"
    >
      {/* Glow effect */}
      <div
        className="pointer-events-none absolute transition-opacity duration-500"
        style={{
          left: glowPosition.x,
          top: glowPosition.y,
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(199,155,65,0.25) 0%, rgba(199,155,65,0.1) 30%, rgba(199,155,65,0) 70%)",
          filter: "blur(40px)",
          opacity: isHovering ? 1 : 0,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const benefits = [
  {
    icon: UserRound,
    title: "Individuelle Beratung",
    description: "Jedes Projekt beginnt mit einem persönlichen Gespräch, um Ihre spezifischen Bedürfnisse und Wünsche genau zu verstehen.",
  },
  {
    icon: FileText,
    title: "Maßgeschneiderte Angebote",
    description: "Wir erstellen individuelle Angebote, die perfekt auf Ihr Badezimmer und Ihr Budget zugeschnitten sind.",
  },
  {
    icon: Award,
    title: "Fachkompetenz über 20 Jahre",
    description: "Über 20 Jahre Erfahrung in der Branche garantieren fachmännische Beratung und Ausführung.",
  },
  {
    icon: CheckCircle,
    title: "Hochwertige Materialien",
    description: "Wir verwenden nur qualitätsgeprüfte Materialien, um Langlebigkeit und Ästhetik zu gewährleisten.",
  },
  {
    icon: Shield,
    title: "4-Jahres-Garantie",
    description: "Unsere umfangreiche Garantie bietet Ihnen zusätzliche Sicherheit und Vertrauen in unsere Arbeit.",
  },
  {
    icon: Zap,
    title: "Effiziente Umsetzung",
    description: "Unser erfahrenes Team garantiert eine schnelle und störungsfreie Realisierung Ihres Badezimmerprojekts.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Warum wir Ihr idealer Partner sind
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Entdecken Sie die Gründe, die uns zum perfekten Partner für Ihr Badezimmer-Projekt machen.
            </p>
          </AnimateIn>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <GlowCard>
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/10 group-hover:border-[var(--gold)]/30 transition-colors">
                  <benefit.icon className="w-5 h-5 text-zinc-400 group-hover:text-[var(--gold)] transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{benefit.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{benefit.description}</p>
              </GlowCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
