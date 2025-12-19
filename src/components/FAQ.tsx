"use client";

import Script from "next/script";
import { useRef, useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

type FAQItem = { question: string; answer: string };

export function FAQ({
  items,
  headline = "Häufige Fragen",
  subline = "Antworten auf die häufigsten Fragen",
  singleOpen = true,
}: {
  items: FAQItem[];
  headline?: string;
  subline?: string;
  singleOpen?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // collapse others automatically if singleOpen
    if (!singleOpen) return;
    contentRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (openIndex === idx) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    });
  }, [openIndex, singleOpen]);

  useEffect(() => {
    // initialize collapsed
    contentRefs.current.forEach((el) => {
      if (el) el.style.maxHeight = "0px";
    });
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-2">
            {headline}
          </h2>
          {subline && (
            <p className="text-zinc-500">
              {subline}
            </p>
          )}
        </div>

        {/* Clean list look: only separators (no box) */}
        <div className="border-t border-white/10">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl text-white/90 font-light pr-6">
                    {item.question}
                  </span>
                  <ChevronRight
                    className={`shrink-0 text-[var(--gold)] transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-90 scale-110" : "rotate-0"
                    } w-6 h-6 md:w-7 md:h-7`}
                  />
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[i] = el;
                  }}
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: 0 }}
                >
                  <div className="pb-6 md:pb-7 pr-2 text-zinc-400 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
