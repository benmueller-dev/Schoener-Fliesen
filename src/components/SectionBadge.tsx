"use client";

import Image from "next/image";

interface SectionBadgeProps {
  text: string;
}

export function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {/* Left ornament */}
      <Image
        src="/Grafik/typo_links.png"
        alt=""
        width={28}
        height={12}
        className="h-3 w-auto"
      />
      {/* Gold textured title */}
      <span
        className="text-xs font-semibold tracking-[0.15em] uppercase"
        style={{
          backgroundImage: "url('/Grafik/gold.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {text}
      </span>
      {/* Right ornament */}
      <Image
        src="/Grafik/typo_rechts.png"
        alt=""
        width={28}
        height={12}
        className="h-3 w-auto"
      />
    </div>
  );
}
