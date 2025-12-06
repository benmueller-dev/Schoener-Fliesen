import { Navigation } from "@/components/Navigation";
import {
  Hero,
  Stats,
  About,
  GalleryMarquee,
  Benefits,
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
        <Stats />
        <GalleryMarquee />
        <About />
        <Benefits />
        <Collection />
        <Details />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
