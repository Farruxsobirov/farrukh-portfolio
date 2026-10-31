import SmoothScroll from "@/components/SmoothScroll";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Intro />
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Work />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
