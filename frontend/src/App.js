import "@/App.css";
import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white font-sans text-ink antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <Nav />
        <main>
          <Hero />
          <EditorialMarquee />
          <About />
          <Skills />
          <Projects />
          <EditorialMarquee inverted />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Toaster position="bottom-right" toastOptions={{ style: { borderRadius: 0, fontFamily: "JetBrains Mono" } }} />
      </div>
    </MotionConfig>
  );
}

export default App;
