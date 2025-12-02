"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

const galleryItems = [
  {
    src: "/Fotos/Badezimmer-Sankt-Augustin.png",
    title: "Modernes Bad",
  },
  {
    src: "/Fotos/Badezimmer-Waschbecken-Sankt-Augustin.png",
    title: "Die Armatur",
  },
  {
    src: "/Fotos/Badezimmer-Dusche-Sankt-Augustin.png",
    title: "Begehbare Dusche",
  },
  {
    src: "/Fotos/Badezimmer-Sankt-Augustin-Warm.png",
    title: "Warme Atmosphäre",
  },
  {
    src: "/Fotos/Badezimmer-Sankt-Augustin-Warm2.png",
    title: "Ambiente",
  },
  {
    src: "/Fotos/Badezimmer-Sankt-Augustin-Warm3.png",
    title: "Wohlfühloase",
  },
];

export function Details() {
  return (
    <section id="details" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <AnimateIn>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white max-w-2xl">
              Präzision bis in <br />
              <span className="text-zinc-600">das kleinste Detail.</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 md:mt-0 max-w-xs text-zinc-400 text-sm leading-relaxed">
              Unsere Armaturen werden aus massiven Messingblöcken gefräst und mit
              24 Karat Gold veredelt. Das ist kein Standard. Das ist Schöner Fliesen.
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Horizontal Gallery - Full Width */}
      <AnimateIn delay={0.3}>
        <div className="relative">
          {/* Left fade overlay */}
          <div
            className="absolute left-0 top-0 bottom-8 w-40 md:w-80 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgb(0,0,0) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)"
            }}
          />
          {/* Right fade overlay */}
          <div
            className="absolute right-0 top-0 bottom-8 w-40 md:w-80 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, rgb(0,0,0) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)"
            }}
          />

          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x px-6 md:px-12">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[85vw] md:min-w-[700px] h-[500px] md:h-[600px] bg-zinc-900 rounded-3xl overflow-hidden relative snap-center shrink-0 border border-white/5"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 768px) 85vw, 700px"
                />
                <div className="absolute bottom-8 left-8">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="text-lg text-white font-medium">{item.title}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
