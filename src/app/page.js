import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import ProductHighlights from "./components/ProductHighlights";
import DailyDealBanner from "./components/DailyDealBanner";
import ExplosiveDealBanner from "./components/ExplosiveDealBanner";

export default function Home() {
  return (
    <section>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
      <About></About>
      <DailyDealBanner></DailyDealBanner>
      <ExplosiveDealBanner></ExplosiveDealBanner>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </section>
  );
}
