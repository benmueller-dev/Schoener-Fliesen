import Image from "next/image";

const galleryItems = [
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    title: "Die Armatur",
    subtitle: "Handpoliertes Finish",
  },
  {
    src: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?q=80&w=800&auto=format&fit=crop",
    title: "Freistehend",
    subtitle: "Monolithischer Stein",
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    title: "Ambiente",
    subtitle: "Smart Lighting Integration",
  },
];

export function Details() {
  return (
    <section id="details" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white max-w-2xl">
            Präzision bis in <br />
            <span className="text-zinc-600">das kleinste Detail.</span>
          </h2>
          <div className="mt-8 md:mt-0 max-w-xs text-zinc-400 text-sm leading-relaxed">
            Unsere Armaturen werden aus massiven Messingblöcken gefräst und mit
            24 Karat Gold veredelt. Das ist kein Standard. Das ist AURUM.
          </div>
        </div>

        {/* Horizontal Gallery */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[85vw] md:min-w-[600px] h-[500px] bg-zinc-900 rounded-3xl overflow-hidden relative snap-center shrink-0 border border-white/5"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 85vw, 600px"
              />
              <div className="absolute bottom-8 left-8">
                <h4 className="text-2xl text-white font-medium">
                  {item.title}
                </h4>
                <p className="text-amber-200/80 text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
