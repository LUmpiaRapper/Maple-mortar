import Hero from "@/components/hero";
import About from "@/components/about";
import PopularPicks from "@/components/popular-picks";
import TrustStrip from "@/components/trust-strip";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PopularPicks />
      <TrustStrip />
      <Footer />
    </>
  );
}
