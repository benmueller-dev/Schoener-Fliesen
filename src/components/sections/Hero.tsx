"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1920&auto=format&fit=crop",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    const newIndex = (index + heroImages.length) % heroImages.length;
    if (newIndex === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning, currentIndex]);

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden group/hero">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-50 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={src}
              alt={`Badezimmer ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-20 flex items-center justify-start pl-4 md:pl-8 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300 cursor-pointer group/btn"
        aria-label="Vorheriges Bild"
      >
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-3 md:p-4 transition-all duration-300 group-hover/btn:bg-white/10 group-hover/btn:scale-110 -translate-x-full group-hover/hero:translate-x-0 transition-transform">
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-20 flex items-center justify-end pr-4 md:pr-8 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300 cursor-pointer group/btn"
        aria-label="Nächstes Bild"
      >
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-3 md:p-4 transition-all duration-300 group-hover/btn:bg-white/10 group-hover/btn:scale-110 translate-x-full group-hover/hero:translate-x-0 transition-transform">
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </button>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-8 animate-title">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          <span className="text-xs uppercase tracking-widest text-[var(--gold-light)] font-medium">
            Über 20 Jahre Erfahrung
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[0.9]">
          <span className="block text-white animate-title animate-delay-100">
            Komplettrenovierung
          </span>
          <span className="block gold-gradient animate-title animate-delay-200 pb-2">
            vom Badprofi.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-12 animate-title animate-delay-300 leading-relaxed">
          Hochwertige Badgestaltung muss nicht teuer sein.{" "}
          <br className="hidden md:block" />
          Wir kombinieren Qualität und Stil mit transparenten, fairen Festpreisen.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-title animate-delay-300">
          <button className="w-full md:w-auto px-8 py-3 bg-[var(--gold)] text-white rounded-full hover:bg-[var(--gold-light)] transition-colors font-medium text-sm tracking-wide">
            Jetzt Planung anfragen
          </button>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-[var(--gold)]"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Gehe zu Bild ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
