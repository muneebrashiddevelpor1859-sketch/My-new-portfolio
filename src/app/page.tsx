import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollManager from "@/components/ScrollManager";

export default function Home() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Process />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
