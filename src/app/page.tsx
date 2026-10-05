import About from "@/components/About";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Studio from "@/components/Studio";

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
