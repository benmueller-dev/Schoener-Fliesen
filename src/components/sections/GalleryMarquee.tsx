"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Simple, continuously scrolling gallery that pulls images
// from /public/Gallery/1.jpeg ... /public/Gallery/17.jpeg

const imagePaths = Array.from({ length: 17 }, (_, i) => `/Gallery/${i + 1}.jpeg`);

// Fullscreen Lightbox Component
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  setCurrentIndex,
}: {
  images: string[];
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

      {/* Image Counter */}
      <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
        <span className="text-white text-sm">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4">
        <Image
          src={images[currentIndex]}
          alt={`Galerie Bild ${currentIndex + 1}`}
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
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

export function GalleryMarquee() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate the list to create a seamless loop
  const loopImages = [...imagePaths, ...imagePaths];

  const openLightbox = (index: number) => {
    // Map the looped index back to the original array index
    const actualIndex = index % imagePaths.length;
    setCurrentIndex(actualIndex);
    setLightboxOpen(true);
  };

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? imagePaths.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === imagePaths.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <>
      <section className="relative bg-black py-10 md:py-14 overflow-hidden">
        {/* Left/Right black gradients to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="gallery-track flex gap-6 md:gap-8 will-change-transform">
            {loopImages.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                onClick={() => openLightbox(idx)}
                className="relative h-40 md:h-56 w-64 md:w-96 shrink-0 rounded-2xl overflow-hidden bg-zinc-900/50 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image src={src} alt="Galeriebild" fill className="object-cover" sizes="(max-width: 768px) 256px, 384px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      {lightboxOpen && typeof document !== "undefined" && createPortal(
        <Lightbox
          images={imagePaths}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={goToPrev}
          onNext={goToNext}
          setCurrentIndex={setCurrentIndex}
        />,
        document.body
      )}
    </>
  );
}

