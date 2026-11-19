import { Approach } from "@/components/Approach";
import { Audience } from "@/components/Audience";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Founder } from "@/components/Founder";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Lifecycle } from "@/components/Lifecycle";
import { Positioning } from "@/components/Positioning";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Positioning />
        <Lifecycle />
        <Services />
        <Founder />
        <Approach />
        <Audience />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
