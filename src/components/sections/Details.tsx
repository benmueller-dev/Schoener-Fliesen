"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, useMotionValue, animate as fmAnimate } from "framer-motion";

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

  // Mobile carousel state
  const [mobileSlide, setMobileSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const dragX = useMotionValue(0);
  const mobileTouchStartX = useRef(0);
  const mobileTouchStartTime = useRef(0);

  // Calculate slide width for mobile
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setSlideWidth(window.innerWidth * 0.85 + 16);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Animate mobile carousel to current slide
  useEffect(() => {
    if (slideWidth > 0) {
      const controls = fmAnimate(dragX, -(mobileSlide * slideWidth), {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
      return controls.stop;
    }
  }, [mobileSlide, slideWidth, dragX]);

  const handleMobileTouchStart = useCallback((e: React.TouchEvent) => {
    mobileTouchStartX.current = e.touches[0].clientX;
    mobileTouchStartTime.current = Date.now();
  }, []);

  const handleMobileTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = mobileTouchStartX.current - e.changedTouches[0].clientX;
    const timeDiff = Date.now() - mobileTouchStartTime.current;
    const velocity = Math.abs(diff) / timeDiff;

    if (Math.abs(diff) > 50 || velocity > 0.5) {
      if (diff > 0) {
        setMobileSlide((prev) => Math.min(prev + 1, galleryItems.length - 1));
      } else {
        setMobileSlide((prev) => Math.max(prev - 1, 0));
      }
    }
  }, []);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
      const imageWidth = 700;
      const gap = 24;
      scrollContainerRef.current.scrollBy({
        left: -(imageWidth + gap),
        behavior: "smooth",
      });
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
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
      const imageWidth = 700;
      const gap = 24;
      scrollContainerRef.current.scrollBy({
        left: imageWidth + gap,
        behavior: "smooth",
      });
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
        const isAtEnd =
          container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 1, behavior: "auto" });
        }
      }
    }, 30);
  }, []);

  // Auto-scroll for desktop only
  useEffect(() => {
    if (window.innerWidth >= 768) {
      startAutoScroll();
    }
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [startAutoScroll]);

  // Pause auto-scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    }
  }, [lightboxOpen]);

  // Pause auto-scroll on manual scroll (desktop)
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!lightboxOpen && window.innerWidth >= 768) {
          startAutoScroll();
        }
      }, 3000);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
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

        <AnimateIn delay={0.3}>
          <div className="relative">
            {/* Left fade overlay - desktop only */}
            <div
              className="absolute left-0 top-0 bottom-8 w-40 md:w-80 z-10 pointer-events-none hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, rgb(0,0,0) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)",
              }}
            />
            {/* Right fade overlay - desktop only */}
            <div
              className="absolute right-0 top-0 bottom-8 w-40 md:w-80 z-10 pointer-events-none hidden md:block"
              style={{
                background:
                  "linear-gradient(to left, rgb(0,0,0) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* Desktop arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hidden md:flex"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hidden md:flex"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Mobile Carousel - Framer Motion snap-to-image */}
            <div
              className="md:hidden overflow-hidden"
              onTouchStart={handleMobileTouchStart}
              onTouchEnd={handleMobileTouchEnd}
            >
              <motion.div
                className="flex gap-4 px-6"
                style={{ x: dragX }}
              >
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="min-w-[85vw] h-[500px] bg-zinc-900 rounded-3xl overflow-hidden relative shrink-0 border border-white/5 cursor-pointer group"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      sizes="85vw"
                    />
                    <div className="absolute bottom-8 left-8">
                      <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <span className="text-lg text-white font-medium">
                          {item.title}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Mobile dot indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {galleryItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMobileSlide(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      idx === mobileSlide
                        ? "w-6 h-2 bg-[var(--gold)]"
                        : "w-2 h-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Bild ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Gallery - Auto-scroll */}
            <div
              ref={scrollContainerRef}
              className="hidden md:flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x px-6 md:px-12"
            >
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="min-w-[700px] h-[600px] bg-zinc-900 rounded-3xl overflow-hidden relative snap-center shrink-0 border border-white/5 cursor-pointer group"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="700px"
                  />
                  <div className="absolute bottom-8 left-8">
                    <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="text-lg text-white font-medium">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Fullscreen Lightbox */}
      {lightboxOpen &&
        typeof document !== "undefined" &&
        createPortal(
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
