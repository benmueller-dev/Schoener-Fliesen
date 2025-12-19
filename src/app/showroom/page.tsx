import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";
import Image from "next/image";
import { ShowroomGrid } from "./ShowroomGrid";
// All images are curated manually below; no fs/path needed

export const metadata = {
  title: "Showroom | Fliesenausstellung & Badausstellung Sankt Augustin",
  description: "Besuchen Sie unseren Showroom in Sankt Augustin. Fliesen, Bad-Exponate & Beratung. Hennefer Str. 25. Termin: 0175 4018760. Jetzt vorbeikommen!",
  keywords: "Fliesenausstellung Sankt Augustin, Badausstellung Rhein-Sieg-Kreis, Showroom Fliesen Bonn, Badezimmer Inspiration",
  openGraph: {
    title: "Showroom | Fliesenausstellung Sankt Augustin",
    description: "Besuchen Sie unseren Showroom in Sankt Augustin. Fliesen, Bad-Exponate & Beratung.",
    type: "website",
  },
};

function getShowroomImages(): string[] {
  const curated = [
    "/Showroom/01_DSC_0001cd.jpg",
   
    "/Showroom/03_DSC_0137cd.jpg",
    "/Showroom/04_D 5534_0029cd.jpg",
    "/Showroom/05_DSC_0097cd.jpg",
    "/Showroom/06_DSC_0102cdneu.jpg",
    "/Showroom/07_D 5530_0059cdneu.jpg",
    

    "/Showroom/10_DSC_0027cd.jpg",
    "/Showroom/11_DSC_0121cd.jpg",
    "/Showroom/12_DSC_0068cd.jpg",
    "/Showroom/13_D 5572_0101cd.jpg",
    "/Showroom/14_D 5572_0089cd.jpg",
    "/Showroom/15_D 5572_0099cd.jpg",
    "/Showroom/09_P1020362.jpg",
    "/Fotos (showroom)/34FECE9F-0BB6-49E4-9D1A-CDFB480812C5-min.jpg",

    //Bad 1
  
    "/Fotos (neu)/2/73B3893E-9AE9-4C2E-ACB8-5E89090CB669_1_105_c.jpeg",
    "/Fotos (neu)/Mittel (IMG_1938).jpeg",
    "/Fotos (showroom)/DSC02104-min.jpg",
   

    //Bad 2
    "/Fotos (showroom)/51F45CF5-CC9E-4595-A057-CE28AB5346EE-min.jpg",
    "/Fotos (showroom)/065B9E2A-9AF3-4A4B-B668-255C66B021AB-min.jpg",
    
    
    "/Fotos (showroom)/7936E3E8-6A42-447A-8D3B-D37A0849E407-min.jpg",
    
    "/Fotos (showroom)/DSC02180-min.jpg",



    //artweger
    "/Fotos (neu)/2/A2239486-7DB6-46EF-9E42-06F0808EC032_1_105_c.jpeg",
    "/Showroom/02_D 5530_0053cd.jpg",
    "/Fotos (neu)/2/D0904354-A85E-413B-9A0E-7FA2A8356182_1_105_c.jpeg",




    "/Fotos (neu)/Mittel (EA8D77BA-9A4B-4F49-8B1B-5C7EB5E4D0CE).jpeg",
    "/Fotos (neu)/Mittel (E6F2D76C-022D-4555-A9A3-43169B7C58F2).jpeg",  
  ];

  // Exclusively return the manually curated list
  return curated;
}

export default function ShowroomPage() {
  const showroomImages = getShowroomImages();
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Fotos (neu)/Schöner-Fliesen-laden.jpg"
              alt="Showroom Hintergrund"
              fill
              className="object-cover opacity-50 object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <SectionBadge text="Showroom" />
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6">
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
                { title: "Öffnungszeiten", text: "Nach Vereinbarung – rufen Sie uns an: 0175 4018760" },
                { title: "Beratung", text: "Individuelle Planung mit Material- und Farbberatung vor Ort." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-light mb-2">{item.title}</h3>
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
