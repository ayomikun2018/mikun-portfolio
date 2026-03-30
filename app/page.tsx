import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
