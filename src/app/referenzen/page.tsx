import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import Image from "next/image";
import { Quote } from "lucide-react";

export const metadata = {
  title: "Referenzen | Schöner Fliesen",
  description: "Entdecken Sie unsere Projekte – von der ersten Idee bis zur perfekten Umsetzung.",
};

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
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Barrierefreies Komfortbad in Bonn",
    description: "Für dieses Projekt wurde ein in die Jahre gekommenes Bad vollständig modernisiert und barrierefrei umgebaut. Entstanden ist ein eleganter Raum mit bodengleicher Dusche, rutschhemmenden Fliesen und stilvoller LED-Beleuchtung.",
    type: "Barrierefreies Bad",
    duration: "4 Wochen",
    testimonial: {
      text: "Einfach top! Das Team hat unsere Wünsche perfekt umgesetzt – alles sauber, pünktlich und mit Liebe zum Detail. Jetzt haben wir ein Bad, das nicht nur praktisch, sondern richtig schön ist.",
      author: "Michael T., Bonn"
    },
    beforeImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
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

export default function ReferenzenPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop"
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
                {/* Before/After Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimateIn delay={0.1} from="left">
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                          src={project.beforeImage}
                          alt={`${project.title} - Vorher`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        Vorher
                      </span>
                    </div>
                  </AnimateIn>
                  <AnimateIn delay={0.2} from="right">
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                          src={project.afterImage}
                          alt={`${project.title} - Nachher`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--gold)] rounded-full text-xs font-medium text-white">
                        Nachher
                      </span>
                    </div>
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
