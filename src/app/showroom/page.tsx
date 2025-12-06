import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";
import Image from "next/image";
import { ShowroomGrid } from "./ShowroomGrid";

export const metadata = {
  title: "Showroom | Schöner Fliesen",
  description:
    "Besuchen Sie unseren Showroom in Sankt Augustin: Inspirationen, Materialien und Beratung für Ihr neues Bad.",
};

const showroomImages: string[] = [
  "/Showroom/01_DSC_0001cd.jpg",
  "/Showroom/02_D 5530_0053cd.jpg",
  "/Showroom/03_DSC_0137cd.jpg",
  "/Showroom/04_D 5534_0029cd.jpg",
  "/Showroom/05_DSC_0097cd.jpg",
  "/Showroom/06_DSC_0102cdneu.jpg",
  "/Showroom/07_D 5530_0059cdneu.jpg",
  "/Showroom/08_P1020331.jpg",
  "/Showroom/09_P1020362.jpg",
  "/Showroom/10_DSC_0027cd.jpg",
  "/Showroom/11_DSC_0121cd.jpg",
  "/Showroom/12_DSC_0068cd.jpg",
  "/Showroom/13_D 5572_0101cd.jpg",
  "/Showroom/14_D 5572_0089cd.jpg",
  "/Showroom/15_D 5572_0099cd.jpg",
];

export default function ShowroomPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={encodeURI(showroomImages[0])}
              alt="Showroom Hintergrund"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <SectionBadge text="Showroom" />
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                  Entdecken Sie unseren <span className="gold-gradient">Showroom</span>
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  Erleben Sie Materialien, Oberflächen und Konfigurationen live. In unserer Ausstellung finden Sie inspirierende Lösungen – von der barrierefreien Dusche bis zum Wellnessbad. Wir beraten Sie gern persönlich vor Ort.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <ShowroomGrid images={showroomImages} />

            {/* Visit Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Adresse", text: "Hennefer Str. 25, 53757 Sankt Augustin" },
                { title: "Öffnungszeiten", text: "Nach Vereinbarung – rufen Sie uns an: 02241 343307" },
                { title: "Beratung", text: "Individuelle Planung mit Material- und Farbberatung vor Ort." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
