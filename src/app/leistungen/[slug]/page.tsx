import { Navigation } from "@/components/Navigation";
import { Footer, CTA } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";
import Image from "next/image";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// SEO Metadata für jede Leistung
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords.join(", "),
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: "website",
    },
  };
}

// Alle Service-Seiten statisch generieren
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1920&auto=format&fit=crop"
              alt={service.title}
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[var(--gold)] transition-colors mb-6"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Zurück zu allen Leistungen
                </Link>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[var(--gold)]" strokeWidth={1.5} />
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6">
                  {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="gold-gradient">
                    {service.title.split(" ").slice(-1)}
                  </span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
                  {service.subtitle}
                </p>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--gold)] text-white rounded-full hover:bg-[var(--gold-light)] transition-colors font-medium text-sm"
                  >
                    Jetzt Beratung anfragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+491754018760"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:border-[var(--gold)]/30 transition-colors font-medium text-sm"
                  >
                    0175 4018760
                  </a>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateIn>
              <SectionBadge text="Über diese Leistung" />
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <p className="text-lg text-zinc-300 leading-relaxed mt-6">
                {service.description}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/47894596_logo_make_11_06_2023_272 1.jpg"
              alt="Prozess Hintergrund"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <AnimateIn>
                <div className="flex justify-center">
                  <SectionBadge text="Unser Prozess" />
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mt-6 mb-4">
                  So läuft Ihr Projekt ab
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Von der ersten Beratung bis zur Fertigstellung – transparent und professionell.
                </p>
              </AnimateIn>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {service.process.map((step, index) => (
                <AnimateIn key={index} delay={0.1 * index}>
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center text-white font-medium">
                      {step.step}
                    </div>
                    <div className="flex-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-xl font-light text-white mb-2">{step.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <AnimateIn>
                <div className="flex justify-center">
                  <SectionBadge text="Ihre Vorteile" />
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mt-6 mb-4">
                  Warum Sie sich für uns{" "}
                  <span className="gold-gradient">entscheiden sollten</span>
                </h2>
              </AnimateIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {service.benefits.map((benefit, index) => (
                <AnimateIn key={index} delay={0.1 * index}>
                  <div className="p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-[var(--gold)]/30 transition-colors h-full">
                    <h3 className="text-xl font-light text-white mb-3">{benefit.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 md:py-28 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <AnimateIn>
                <div className="flex justify-center">
                  <SectionBadge text="Ihr Meisterbetrieb vor Ort" />
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mt-6 mb-6">
                  {service.title} in Sankt Augustin und Umgebung
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  Seit über 25 Jahren sind wir Ihr zuverlässiger Partner im Rhein-Sieg-Kreis.
                  Von unserem Standort in Sankt Augustin aus betreuen wir Kunden in Bonn, Siegburg,
                  Troisdorf und der gesamten Region. Kurze Wege, schneller Service und persönliche Betreuung
                  – das sind unsere Stärken.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Sankt Augustin", "Bonn", "Siegburg", "Troisdorf", "Hennef", "Königswinter"].map((city, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-400"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
