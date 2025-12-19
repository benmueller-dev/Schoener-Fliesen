"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

// Fullscreen Lightbox Component
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  setCurrentIndex,
}: {
  images: typeof galleryItems;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  setCurrentIndex: (idx: number) => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Image Counter & Title */}
      <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
        <span className="text-white text-sm">
          {images[currentIndex].title} · {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Details() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    // Auto-scroll pausieren
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Nach 3 Sekunden Auto-scroll wieder starten
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 3000);
  };

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  }, []);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      // Auto-scroll pausieren
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }

      // Scrolle genau ein Bild (Bildbreite + Gap)
      const imageWidth = window.innerWidth < 768
        ? window.innerWidth * 0.85  // Mobile: 85vw
        : 700; // Desktop: 700px
      const gap = 24; // 6 * 4px (gap-6)
      scrollContainerRef.current.scrollBy({
        left: -(imageWidth + gap),
        behavior: 'smooth'
      });

      // Nach 3 Sekunden Auto-scroll wieder starten
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      pauseTimeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, 3000);
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      // Auto-scroll pausieren
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }

      // Scrolle genau ein Bild (Bildbreite + Gap)
      const imageWidth = window.innerWidth < 768
        ? window.innerWidth * 0.85  // Mobile: 85vw
        : 700; // Desktop: 700px
      const gap = 24; // 6 * 4px (gap-6)
      scrollContainerRef.current.scrollBy({
        left: imageWidth + gap,
        behavior: 'smooth'
      });

      // Nach 3 Sekunden Auto-scroll wieder starten
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      pauseTimeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, 3000);
    }
  };

  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;

        if (isAtEnd) {
          // Am Ende angekommen, zum Anfang springen
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          container.scrollBy({
            left: 1,
            behavior: 'auto'
          });
        }
      }
    }, 30); // Scrollt langsam (1px alle 30ms)
  }, []);

  // Auto-scroll beim Mount starten
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [startAutoScroll]);

  // Auto-scroll pausieren/fortsetzen basierend auf Lightbox
  useEffect(() => {
    if (lightboxOpen) {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    }
  }, [lightboxOpen]);

  // Auto-scroll pausieren bei manuellem Scrollen
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      // Auto-scroll pausieren
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }

      // Timeout zurücksetzen
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!lightboxOpen) {
          startAutoScroll();
        }
      }, 3000);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lightboxOpen, startAutoScroll]);

  return (
    <>
      <section id="details" className="py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            <AnimateIn>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white max-w-2xl">
                Präzision bis in <br />
                <span className="text-zinc-600">das kleinste Detail.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mt-8 md:mt-0 max-w-xs text-zinc-400 text-sm leading-relaxed">
                Jede Fuge sitzt perfekt, jede Fliese ist exakt ausgerichtet.
                Wir arbeiten mit höchster Sorgfalt – für Ergebnisse, die begeistern.
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

            {/* Left Arrow */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={scrollNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x px-6 md:px-12">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="min-w-[85vw] md:min-w-[700px] h-[500px] md:h-[600px] bg-zinc-900 rounded-3xl overflow-hidden relative snap-center shrink-0 border border-white/5 cursor-pointer group"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
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

      {/* Fullscreen Lightbox */}
      {lightboxOpen && typeof document !== "undefined" && createPortal(
        <Lightbox
          images={galleryItems}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          setCurrentIndex={setCurrentIndex}
        />,
        document.body
      )}
    </>
  );
}
