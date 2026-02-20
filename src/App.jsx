import { motion, useScroll, useSpring } from "framer-motion";

import ParticleField from "./components/ParticleField";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-slate-950 text-slate-200 selection:bg-blue-500/30 font-sans tracking-tight scroll-smooth">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html { scroll-behavior: smooth; }
        .scroll-mt-24 { scroll-margin-top: 6rem; }
      `,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      <ParticleField />
      <Navbar />
      <Hero />
      <Journey />
      <footer className="py-10 text-center border-t border-white/5 text-slate-600 text-[10px] font-bold tracking-[0.3em] uppercase">
        &copy; {new Date().getFullYear()} DESIGNED BY ARAVINTH •
        Tiruchirappalli, Tamil Nadu
      </footer>
    </div>
  );
};
export default App;
