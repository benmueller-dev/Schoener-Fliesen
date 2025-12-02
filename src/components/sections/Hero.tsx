import Image from "next/image";
import { PlayCircle } from "lucide-react";

const galleryImages = {
  col1: [
    {
      src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
      height: "h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
      height: "h-64",
    },
  ],
  col2: [
    {
      src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop",
      height: "h-64",
    },
    {
      src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
      height: "h-96",
    },
  ],
  col3: [
    {
      src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
      height: "h-72",
    },
    {
      src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
      height: "h-64",
    },
  ],
  col4: [
    {
      src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
      height: "h-96",
    },
  ],
};

function GalleryImage({
  src,
  height,
}: {
  src: string;
  height: string;
}) {
  return (
    <div className={`relative w-full ${height} rounded-xl overflow-hidden`}>
      <Image
        src={src}
        alt="Bathroom detail"
        fill
        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid/Gallery Effect */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 px-4 scale-105">
        <div className="space-y-4 pt-12 animate-pan-slow">
          {galleryImages.col1.map((img, i) => (
            <GalleryImage key={i} src={img.src} height={img.height} />
          ))}
        </div>
        <div className="space-y-4 animate-pan-medium">
          {galleryImages.col2.map((img, i) => (
            <GalleryImage key={i} src={img.src} height={img.height} />
          ))}
        </div>
        <div className="space-y-4 pt-24 hidden md:block animate-pan-fast">
          {galleryImages.col3.map((img, i) => (
            <GalleryImage key={i} src={img.src} height={img.height} />
          ))}
        </div>
        <div className="space-y-4 hidden md:block animate-pan-slower">
          {galleryImages.col4.map((img, i) => (
            <GalleryImage key={i} src={img.src} height={img.height} />
          ))}
        </div>
      </div>

      {/* Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8 animate-title">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-xs uppercase tracking-widest text-amber-300 font-medium">
            Neue Kollektion 2024
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[0.9]">
          <span className="block text-white animate-title animate-delay-100">
            Die Kunst des
          </span>
          <span className="block gold-gradient animate-title animate-delay-200 pb-2">
            Badezimmers.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-12 animate-title animate-delay-300 leading-relaxed">
          Wir erschaffen Räume der Stille und Eleganz.{" "}
          <br className="hidden md:block" />
          Reduziert auf das Wesentliche, veredelt mit purem Gold.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-title animate-delay-300">
          <button className="w-full md:w-auto px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-colors font-medium text-sm tracking-wide">
            Projekt anfragen
          </button>
          <button className="w-full md:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full hover:bg-zinc-800 transition-colors font-medium text-sm tracking-wide flex items-center justify-center gap-2">
            <PlayCircle className="w-4 h-4" />
            Showreel
          </button>
        </div>
      </div>
    </section>
  );
}
