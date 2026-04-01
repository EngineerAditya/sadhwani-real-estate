import { CallToAction } from "@/components/site/CallToAction";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Legacy } from "@/components/site/Legacy";
import { Navbar } from "@/components/site/Navbar";
import { Partners } from "@/components/site/Partners";
import { Portfolio } from "@/components/site/Portfolio";
import { Services } from "@/components/site/Services";

export default function Home() {
  return (
    <div className="bg-porcelain text-ink">
      <Navbar />
      <main>
        <Hero />
        <Legacy />
        <Services />
        <Portfolio />
        <Partners />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
