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
        src="/Grafik/New/typo_links.png"
        alt=""
        width={28}
        height={12}
        className="h-3 w-auto"
      />
      {/* Gold title */}
      <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
        {text}
      </span>
      {/* Right ornament */}
      <Image
        src="/Grafik/New/typo_rechts.png"
        alt=""
        width={28}
        height={12}
        className="h-3 w-auto"
      />
    </div>
  );
}
