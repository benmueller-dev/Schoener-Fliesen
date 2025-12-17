import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Schöner Fliesen | Meisterbetrieb für exklusive Fliesen",
  description: "Wir erschaffen Räume der Stille und Eleganz. Meisterbetrieb für exklusive Fliesen und edle Badezimmer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${poppins.className} ${poppins.variable} font-sans antialiased selection:bg-amber-900/50 selection:text-amber-100`}
      >
        {children}
      </body>
    </html>
  );
}
