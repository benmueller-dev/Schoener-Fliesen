"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1920&auto=format&fit=crop",
  "/Fotos/Badezimmer-Sankt-Augustin.png",
  "/Hero/pexels-ranamatloob567-35189673.jpg",
  "/Fotos (showroom)/DSC02104-min.jpg",
  "/Referenz 1/Nachher/Badezimmer-Sankt-Augustin-Warm2.png",
  "/Referenz 1/Nachher/Badezimmer-Sankt-Augustin-Warm.png",

];

interface HeroProps {
  badge?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function Hero({
  badge = "Über 25 Jahre Erfahrung",
  titleLine1 = "Komplettrenovierung",
  titleLine2 = "vom Badprofi.",
  description = "Hochwertige Badgestaltung muss nicht teuer sein. Wir kombinieren Qualität und Stil mit transparenten, fairen Festpreisen.",
  primaryButtonText = "Jetzt Planung anfragen",
  primaryButtonHref = "/kontakt",
  secondaryButtonText,
  secondaryButtonHref,
}: HeroProps = {}) {
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
    <section className="relative min-h-[75vh] lg:min-h-[65vh] flex items-center justify-center pt-20 overflow-x-clip">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-90 scale-100"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-10" />

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="group/left absolute left-0 top-0 bottom-0 w-24 md:w-32 z-20 flex items-center justify-start pl-4 md:pl-8 cursor-pointer"
        aria-label="Vorheriges Bild"
      >
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-3 md:p-4 transition-all duration-300 opacity-0 -translate-x-full group-hover/left:opacity-100 group-hover/left:translate-x-0 group-hover/left:bg-white/10 group-hover/left:scale-110">
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="group/right absolute right-0 top-0 bottom-0 w-24 md:w-32 z-20 flex items-center justify-end pr-4 md:pr-8 cursor-pointer"
        aria-label="Nächstes Bild"
      >
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-3 md:p-4 transition-all duration-300 opacity-0 translate-x-full group-hover/right:opacity-100 group-hover/right:translate-x-0 group-hover/right:bg-white/10 group-hover/right:scale-110">
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </button>

      {/* Content */}
      <div className="relative z-20 text-center max-w-[823px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-8 animate-title">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          <span className="text-xs uppercase tracking-widest text-[var(--gold-light)] font-medium">
            {badge}
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8 leading-[0.9] break-words">
          <span className="block text-white animate-title animate-delay-100 font-light text-[40px] md:text-[60px]">
            {titleLine1}
          </span>
          <span className="block gold-gradient animate-title animate-delay-200 pb-2 pt-[11px] tracking-[-1.5px] md:tracking-[-2.7px] break-words hyphens-auto" lang="de">
            {titleLine2}
          </span>
        </h1>

        <p
          className="text-base md:text-xl text-zinc-400 font-light max-w-[728px] mx-auto mb-12 animate-title animate-delay-300 leading-relaxed px-2"
          style={{ fontFamily: "Poppins" }}
        >
          {description}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-title animate-delay-300 px-2">
          <a
            href={primaryButtonHref}
            className="w-full md:w-auto px-8 py-3 bg-[var(--gold)] text-white rounded-full hover:bg-[var(--gold-light)] transition-colors font-medium text-sm tracking-wide text-center"
          >
            {primaryButtonText}
          </a>
          {secondaryButtonText && secondaryButtonHref && (
            <a
              href={secondaryButtonHref}
              className="w-full md:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:border-[var(--gold)]/30 transition-colors font-medium text-sm"
            >
              {secondaryButtonText}
            </a>
          )}
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
