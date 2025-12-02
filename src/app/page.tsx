import { Navigation } from "@/components/Navigation";
import {
  Hero,
  Philosophy,
  Collection,
  Details,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Collection />
        <Details />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
