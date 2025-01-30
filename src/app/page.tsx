import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import ServiceSection from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { LetsBuild } from "@/components/LetsBuild";
import TabsNii from "@/components/TabsNii"
export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      {/* <LogoTicker /> */}
      {/* <Features /> */}
      <ServiceSection/>
      <Pricing/>
      <LetsBuild/>
      <TabsNii/>
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
