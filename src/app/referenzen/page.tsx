"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Modernes Bad in Sankt Augustin",
    description: "Dieses Projekt umfasste die komplette Sanierung eines Badezimmers. Alte Fliesen, Sanitär und Beleuchtung wurden vollständig erneuert. Entstanden ist ein helles, modernes Bad mit begehbarer Dusche, großformatigen Natursteinfliesen und integrierter LED-Beleuchtung.",
    type: "Komplettrenovierung",
    duration: "4 Wochen",
    testimonial: {
      text: "Wir sind begeistert vom Ergebnis! Unser altes Bad war dunkel und unpraktisch – jetzt ist es hell, modern und perfekt durchdacht. Die Arbeiten liefen absolut termingerecht und sauber, das Team war jederzeit freundlich und professionell.",
      author: "Julia H., Sankt Augustin"
    },
    beforeImages: [
      "/Referenz 1/Vorher/Mittel (IMG_0078).jpeg",
      "/Referenz 1/Vorher/Mittel (IMG_0079).jpeg",
      "/Referenz 1/Vorher/Mittel (IMG_0080).jpeg",
      "/Referenz 1/Vorher/Mittel (IMG_0082).jpeg",
      "/Referenz 1/Vorher/Mittel (IMG_0083).jpeg",
    ],
    afterImages: [
      "/Referenz 1/Nachher/Mittel (IMG_1715).jpeg",
      "/Referenz 1/Nachher/Mittel (IMG_1716).jpeg",
      "/Referenz 1/Nachher/Mittel (IMG_1717).jpeg",
      "/Referenz 1/Nachher/Mittel (IMG_1718).jpeg",
      "/Referenz 1/Nachher/Mittel (IMG_1719).jpeg",
    ],
  },
];

const testimonials = [
  { text: "Schöner Fliesen GmbH besitzt ein sehr kompetentes Team. Von der Beratung bis zur Fertigstellung ist alles bestens gelaufen.", author: "Kevin E." },
  { text: "Wir haben unser komplettes Bad erneuern lassen inkl. Abtrennung eines Gäste WCs. Wir sind von den Arbeiten von Schöner Fliesen begeistert und sehr zufrieden.", author: "Julius B." },
  { text: "Ich bin der Leistung der Firma sehr zufrieden. Sehr gute Beratung, ordnungsgemäße und fristgerechte Bearbeitung.", author: "Daniela Müller" },
  { text: "Ich habe meine Badezimmer bei Schöner Fliesen komplett neu sanieren lassen. Gute Beratung und professionelle Umsetzung. Ich kann es nur weiterempfehlen!", author: "Megan Scharte" },
  { text: "Die Beratung, die Planung und die Umsetzung lief reibungslos ab. Das Team ist Kompetent und arbeitet schnell und sauber. Den Preis finde ich angemessen.", author: "Christina I." },
  { text: "Sehr Guter Unternehmer im bereich Fliesen diese Firma arbeit hoch professionell und das auch noch zu einem sehr fairen Preis bin zufrieden mit der Firma.", author: "Angelina Thiemann" },
];

function ImageGallery({
  images,
  label,
  isGold = false
}: {
  images: string[];
  label: string;
  isGold?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative">
      <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`${label} ${idx + 1}`}
            fill
            className={`object-cover transition-opacity duration-500 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Label Badge */}
      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white ${
        isGold ? "bg-[var(--gold)]" : "bg-black/70 backdrop-blur-sm"
      }`}>
        {label}
      </span>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? isGold ? "bg-[var(--gold)] w-6" : "bg-white w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ReferenzenPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Referenz 1/Nachher/Mittel (IMG_1715).jpeg"
              alt="Referenzen"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  <span className="text-xs uppercase tracking-widest text-[var(--gold-light)] font-medium">
                    Referenzen
                  </span>
                </span>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                  So könnte Ihr neues{" "}
                  <span className="gold-gradient">Badezimmer aussehen</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  Sehen Sie selbst, wie aus alten Räumen moderne Wohlfühloasen werden.
                  In unserer Galerie zeigen wir ausgewählte Projekte.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="space-y-8">
                {/* Before/After Image Galleries */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimateIn delay={0.1} from="left">
                    <ImageGallery
                      images={project.beforeImages}
                      label="Vorher"
                    />
                  </AnimateIn>
                  <AnimateIn delay={0.2} from="right">
                    <ImageGallery
                      images={project.afterImages}
                      label="Nachher"
                      isGold
                    />
                  </AnimateIn>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <AnimateIn delay={0.3}>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
                        {project.title}
                      </h2>
                      <p className="text-zinc-400 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex gap-4">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">
                          {project.type}
                        </span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  </AnimateIn>

                  <AnimateIn delay={0.4}>
                    <div className="bg-zinc-950 border border-white/5 rounded-2xl p-6">
                      <Quote className="w-8 h-8 text-[var(--gold)]/30 mb-4" />
                      <p className="text-zinc-300 italic mb-4 leading-relaxed">
                        &ldquo;{project.testimonial.text}&rdquo;
                      </p>
                      <p className="text-sm text-[var(--gold)]">{project.testimonial.author}</p>
                    </div>
                  </AnimateIn>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 md:py-28 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <AnimateIn>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                  Das sagen unsere Kunden
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Lesen Sie, wie unsere Kunden die Zusammenarbeit mit Schöner Fliesen erleben.
                </p>
              </AnimateIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <AnimateIn key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                    <Quote className="w-6 h-6 text-[var(--gold)]/30 mb-4" />
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="text-sm font-medium text-white">{testimonial.author}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
