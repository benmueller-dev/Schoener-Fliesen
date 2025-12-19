"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";
import { FileUpload } from "@/components/FileUpload";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState, FormEvent, useRef, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Hennefer Str. 25, 53757 Sankt Augustin",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@schoener-fliesen.com",
    href: "mailto:info@schoener-fliesen.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "0175 4018760",
    href: "tel:+491754018760",
  },
];

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

interface UploadedFile {
  name: string;
  url: string;
  size: number;
  type: string;
}

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>("");

  // Initialize Cloudflare Turnstile
  useEffect(() => {
    const initTurnstile = () => {
      console.log('=== TURNSTILE DEBUG ===');
      console.log('turnstileRef.current:', turnstileRef.current);
      console.log('widgetId.current:', widgetId.current);
      console.log('window.turnstile:', window.turnstile);
      console.log('Raw env var:', process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
      console.log('Type of env var:', typeof process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

      if (!window.turnstile) {
        console.log('⏳ Turnstile script not loaded yet, retrying...');
        return false;
      }

      if (!turnstileRef.current) {
        console.error('❌ Turnstile ref not ready!');
        return false;
      }

      if (widgetId.current) {
        console.log('⚠️ Widget already rendered');
        return true;
      }

      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

      if (!siteKey) {
        console.error('❌ NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set!');
        return false;
      }

      console.log('✅ Site Key:', siteKey);
      console.log('✅ Site Key Type:', typeof siteKey);
      console.log('✅ Site Key Length:', siteKey.length);

      try {
        widgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            console.log('✅ Turnstile token received:', token.substring(0, 20) + '...');
            setTurnstileToken(token);
          },
        });
        console.log('✅ Turnstile widget rendered with ID:', widgetId.current);
        return true;
      } catch (error) {
        console.error('❌ Turnstile render error:', error);
        return false;
      }
    };

    // Retry logic - check every 500ms for up to 10 seconds
    let attempts = 0;
    const maxAttempts = 20;

    const interval = setInterval(() => {
      attempts++;
      console.log(`🔄 Attempt ${attempts}/${maxAttempts} to initialize Turnstile`);

      const success = initTurnstile();

      if (success) {
        console.log('✅ Turnstile initialized successfully!');
        clearInterval(interval);
      } else if (attempts >= maxAttempts) {
        console.error('❌ Failed to initialize Turnstile after', maxAttempts, 'attempts');
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Verify Turnstile token
    if (!turnstileToken) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // Build file links section for email
      let fileLinksText = "";
      if (files.length > 0) {
        fileLinksText = "\n\n--- Hochgeladene Dateien ---\n";
        files.forEach((file, index) => {
          fileLinksText += `\n📎 ${file.name}\n${file.url}\n`;
        });
      }

      console.log('📧 Sending email with Turnstile token:', turnstileToken.substring(0, 20) + '...');

      // Send directly to Web3Forms from the client
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Neue Kontaktanfrage von ${formData.name}`,
          from_name: "Schöner Fliesen Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Nicht angegeben",
          message: formData.message + fileLinksText,
          turnstile_token: turnstileToken, // Send as regular field for logging
          to: ["mueller.ben100@gmail.com", "info@schoener-fliesen.com"],
        }),
      });

      const data = await response.json();
      console.log('📧 Web3Forms response:', data);

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacy: false,
        });
        setFiles([]);
        // Reset Turnstile
        if (window.turnstile && widgetId.current) {
          window.turnstile.reset(widgetId.current);
        }
        setTurnstileToken("");
      } else {
        console.error("Web3Forms error:", data);
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
        onLoad={() => console.log('✅ Turnstile script loaded!')}
        onError={(e) => console.error('❌ Turnstile script failed to load:', e)}
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <SectionBadge text="Kontakt" />
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6">
                  Nehmen Sie{" "}
                  <span className="gold-gradient">Kontakt auf</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  Für Anfragen oder eine persönliche Beratung steht Ihnen unser Team
                  jederzeit zur Verfügung.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <div>
                <AnimateIn>
                  <h2 className="text-2xl font-light text-white mb-8">Kontaktdaten</h2>
                </AnimateIn>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <AnimateIn key={index} delay={0.1 + index * 0.1}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-[var(--gold)]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white hover:text-[var(--gold)] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </AnimateIn>
                  ))}
                </div>

                {/* Map Placeholder */}
                <AnimateIn delay={0.4}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8!2d7.1847!3d50.7731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ2JzIzLjIiTiA3wrAxMScwNC45IkU!5e0!3m2!1sde!2sde!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </AnimateIn>
              </div>

              {/* Contact Form */}
              <div>
                <AnimateIn from="right">
                  <h2 className="text-2xl font-light text-white mb-8">Nachricht senden</h2>
                </AnimateIn>

                <AnimateIn delay={0.2} from="right">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Max Mustermann"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="max.mustermann@gmail.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-zinc-400 mb-2">
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0177 12345678"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                        Anliegen *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Beschreiben Sie uns Ihr Anliegen..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/50 transition-all resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Fotos hochladen (optional)
                      </label>
                      <FileUpload
                        onFilesChange={setFiles}
                        maxFiles={5}
                        maxSizeMB={10}
                      />
                    </div>

                    {/* Cloudflare Turnstile Widget */}
                    <div>
                      <div ref={turnstileRef} className="cf-turnstile"></div>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        checked={formData.privacy}
                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-[var(--gold)] focus:ring-[var(--gold)]/50"
                      />
                      <label htmlFor="privacy" className="text-sm text-zinc-400">
                        Ich habe die{" "}
                        <Link href="/datenschutz" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline">
                          Datenschutzerklärung
                        </Link>{" "}
                        zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden. *
                      </label>
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <p className="text-green-400 text-sm">Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.</p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-red-400 text-sm">Es gab einen Fehler beim Versenden Ihrer Nachricht. Bitte versuchen Sie es erneut.</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[var(--gold)] text-white rounded-lg font-medium hover:bg-[var(--gold-light)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                    </button>
                  </form>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
