import { Navigation } from "@/components/Navigation";
import {
  Hero,
  Stats,
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
        <Collection />
        <Details />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
