import Image from "next/image";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";

export function Collection() {
  return (
    <section id="kollektion" className="py-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
            Unsere Signaturen
          </h2>
          <p className="text-zinc-500">
            Kuratierte Räume für höchste Ansprüche.
          </p>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 text-amber-400 text-sm hover:text-amber-300 transition-colors"
        >
          Alle ansehen <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {/* Main Large Item */}
          <div className="relative group md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden cursor-pointer h-[400px] md:h-full">
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
              alt="Black Marble"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="text-amber-400 text-xs font-medium tracking-widest uppercase mb-2 block">
                Die Noir Edition
              </span>
              <h3 className="text-3xl text-white font-medium tracking-tight mb-2">
                Midnight Marble
              </h3>
              <p className="text-zinc-400 text-sm max-w-md line-clamp-2">
                Schwarzer Marmor trifft auf gebürstetes Gold. Ein Statement der
                absoluten Luxusklasse für anspruchsvolle Ästheten.
              </p>
            </div>
          </div>

          {/* Secondary Item Top */}
          <div className="relative group rounded-2xl overflow-hidden cursor-pointer h-[300px] md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
              alt="White Gold"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl text-white font-medium">
                    Luminous Gold
                  </h3>
                  <p className="text-zinc-300 text-xs mt-1">
                    Helles Ambiente, goldene Akzente
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Item Bottom */}
          <div className="relative group rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/5 p-8 flex flex-col justify-between h-[300px] md:h-full">
            <div>
              <Award className="w-10 h-10 text-amber-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl text-white font-medium mb-2">
                Preisgekröntes Design
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Ausgezeichnet mit dem German Design Award 2024 für innovative
                Raumkonzepte.
              </p>
            </div>
            <div className="mt-4">
              <span className="text-xs text-zinc-500 block mb-2 uppercase tracking-wider">
                Materialien
              </span>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-zinc-700 border border-black" />
                <div className="w-8 h-8 rounded-full bg-amber-600 border border-black" />
                <div className="w-8 h-8 rounded-full bg-stone-400 border border-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
