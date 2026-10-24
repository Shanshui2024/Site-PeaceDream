import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Stats from "@/components/sections/Stats";
import Studio from "@/components/sections/Studio";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Studio />
        <Events />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
