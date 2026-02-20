import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative px-6 overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block py-1 px-3 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black rounded-full mb-6 tracking-widest uppercase"
          >
            Full Stack Developer (Angular & MERN)
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-6">
            I'M <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400">
              ARAVINTH
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
            Proficient in <span className="text-white font-bold">Angular</span>{" "}
            and <span className="text-white font-bold">MERN Stack</span>{" "}
            development. Crafting performance-optimized applications with a
            focus on clean code.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element)
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: "smooth",
                  });
              }}
              className="bg-blue-600 px-8 py-4 rounded-xl font-bold text-white shadow-xl shadow-blue-600/20 text-center cursor-pointer"
            >
              View Projects
            </motion.a>
            <div className="flex gap-4 items-center ml-4">
              <a
                href="https://github.com/aravinth2760"
                target="_blank"
                className="text-slate-500 hover:text-white transition-colors cursor-pointer"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/aravinth2760?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="text-slate-500 hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative hidden lg:block"
        >
          <div className="w-[500px] h-[500px] bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl rotate-12 absolute inset-0 blur-3xl opacity-20 animate-pulse" />
          <div className="relative z-10 bg-slate-900 border border-white/10 p-8 rounded-3xl backdrop-blur-3xl shadow-2xl">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-sm space-y-2">
              <p className="text-emerald-400">const developer = {"{"}</p>
              <p className="pl-4 text-blue-300">name: "Aravinth S",</p>
              <p className="pl-4 text-blue-300">
                primary: ["MERN", "Angular"],
              </p>
              <p className="pl-4 text-blue-300">
                location: "Tiruchirappalli, Tamil nadu",
              </p>
              <p className="pl-4 text-blue-300">experience: "1 Year",</p>
              <p className="pl-4 text-blue-300">current: "SDLC Course",</p>
              <p className="text-emerald-400">{"}"}</p>
              <p className="mt-4 text-slate-500">
                // Building responsive realities...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
