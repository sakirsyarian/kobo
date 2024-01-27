import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Feature from "@/components/Feature";
import Statistic from "@/components/Statistic";
import Testimony from "@/components/Testimony";
import CallToAction from "@/components/CallToAction";
import Product from "@/components/Product";
import FrequentlyAsked from "@/components/FrequentlyAsked";
import Partner from "@/components/Partner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlight />
      <Feature />
      <Statistic />
      <Testimony />
      <CallToAction />
      <Product />
      <FrequentlyAsked />
      <Partner />
      <Footer />
    </>
  );
}
