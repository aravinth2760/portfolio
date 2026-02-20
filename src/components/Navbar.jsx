import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AravinthCV from "../assets/documents/simple-professional-resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  // Smooth scroll handler
  const handleNavClick = (e, link) => {
    e.preventDefault();
    const targetId = link.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 cursor-pointer"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">
            A
          </div>
          <span>ARAVINTH</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link)}
              whileHover={{ y: -2 }}
              className="text-[10px] font-bold text-slate-400 hover:text-blue-400 transition-colors uppercase tracking-[0.2em]"
            >
              {link}
            </motion.a>
          ))}
          <a href={AravinthCV} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-white text-black text-xs font-black rounded-full"
            >
              RESUME
            </motion.button>
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 bg-slate-950 z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link)}
                className="text-4xl font-bold hover:text-blue-500 transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
