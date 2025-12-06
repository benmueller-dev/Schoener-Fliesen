"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
        <span className="text-white text-sm">{currentIndex + 1} / {images.length}</span>
      </div>

      <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4">
        <Image
          src={encodeURI(images[currentIndex])}
          alt={`Showroom ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>
    </div>
  );
}

export function ShowroomGrid({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openAt = (idx: number) => {
    setCurrent(idx);
    setIsOpen(true);
  };

  const onPrev = useCallback(() => {
    setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  }, [images.length]);
  const onNext = useCallback(() => {
    setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
  }, [images.length]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {images.map((src, idx) => (
          <AnimateIn key={idx} delay={idx * 0.03}>
            <button
              onClick={() => openAt(idx)}
              className="relative block w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-[var(--gold)]/30 hover:border-[var(--gold)] transition-colors bg-zinc-900/40 focus:outline-none"
              aria-label={`Bild ${idx + 1} vergrößern`}
            >
              <Image src={encodeURI(src)} alt={`Showroom ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
            </button>
          </AnimateIn>
        ))}
      </div>

      {isOpen && typeof document !== "undefined" &&
        createPortal(
          <Lightbox
            images={images}
            currentIndex={current}
            onClose={() => setIsOpen(false)}
            onPrev={onPrev}
            onNext={onNext}
          />,
          document.body
        )}
    </>
  );
}
