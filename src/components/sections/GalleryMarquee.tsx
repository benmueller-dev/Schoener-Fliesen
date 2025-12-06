"use client";

import Image from "next/image";

// Simple, continuously scrolling gallery that pulls images
// from /public/Gallery/1.jpeg ... /public/Gallery/17.jpeg

const imagePaths = Array.from({ length: 17 }, (_, i) => `/Gallery/${i + 1}.jpeg`);

export function GalleryMarquee() {
  // Duplicate the list to create a seamless loop
  const loopImages = [...imagePaths, ...imagePaths];

  return (
    <section className="relative bg-black py-10 md:py-14 overflow-hidden">
      {/* Left/Right black gradients to fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="gallery-track flex gap-6 md:gap-8 will-change-transform">
          {loopImages.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="relative h-40 md:h-56 w-64 md:w-96 shrink-0 rounded-2xl overflow-hidden bg-zinc-900/50"
            >
              <Image src={src} alt="Galeriebild" fill className="object-cover" sizes="(max-width: 768px) 256px, 384px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

