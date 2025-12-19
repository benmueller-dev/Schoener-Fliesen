"use client";

import { type FormEvent, useState, useRef, useEffect } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import Image from "next/image";
import Script from "next/script";

// Cloudflare Turnstile types
declare global {
  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
      }) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function CTA() {
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>("");

  // Initialize Cloudflare Turnstile
  useEffect(() => {
    const initTurnstile = () => {
      if (!window.turnstile || !turnstileRef.current || widgetId.current) {
        return false;
      }

      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
      if (!siteKey) return false;

      try {
        widgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          size: 'invisible',
          callback: (token: string) => {
            setTurnstileToken(token);
          },
        });
        return true;
      } catch (error) {
        console.error('Turnstile render error:', error);
        return false;
      }
    };

    let attempts = 0;
    const maxAttempts = 20;
    const interval = setInterval(() => {
      attempts++;
      const success = initTurnstile();
      if (success || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (!turnstileToken) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Neue Exposé-Anfrage`,
          from_name: "Schöner Fliesen Website",
          email: email,
          message: `Neue Exposé-Anfrage von: ${email}`,
          turnstile_token: turnstileToken,
          to: ["mueller.ben100@gmail.com", "info@schoener-fliesen.com"],
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setEmail("");
        if (window.turnstile && widgetId.current) {
          window.turnstile.reset(widgetId.current);
        }
        setTurnstileToken("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Cloudflare Turnstile Script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Fotos/Badezimmer-Sankt-Augustin.png"
            alt="Luxuriöses Badezimmer"
            fill
            className="object-cover"
          />
          {/* Blur + Gradient Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <Image
              src="/schoener-fliesen_logo.png"
              alt="Schöner Fliesen Logo"
              width={200}
              height={50}
              className="mx-auto mb-6"
            />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
              Bereit für die Verwandlung?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
              Vereinbaren Sie einen exklusiven Beratungstermin in unserem Showroom
              oder virtuell.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input
                type="email"
                placeholder="Ihre E-Mail Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all"
                required
              />

              {/* Cloudflare Turnstile Widget - Invisible */}
              <div ref={turnstileRef} className="cf-turnstile" style={{ display: 'none' }}></div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm">Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">Es gab einen Fehler. Bitte versuchen Sie es erneut.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[var(--gold)] text-white rounded-lg font-medium hover:bg-[var(--gold-light)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Wird gesendet..." : "Kostenloses Exposé anfordern"}
              </button>
            </form>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <p className="text-zinc-600 text-xs mt-4">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
