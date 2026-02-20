import { motion } from "framer-motion";
import { Send } from "lucide-react";
import AravinthCV from "../assets/documents/simple-professional-resume.pdf";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-slate-900/30 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 p-16 rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Send size={200} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Ready to collaborate?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto font-medium">
            Looking for a developer with Angular and MERN expertise? Let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:aravinth2760@gmail.com"
              className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform"
            >
              Get in Touch
            </a>
            <a
              href={AravinthCV}
              download="aravinth-cv"
              className="bg-blue-800/50 backdrop-blur-md px-10 py-4 rounded-2xl font-black text-lg border border-white/20 hover:bg-blue-800 transition-colors"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <div className="mt-20 flex justify-center gap-12 text-slate-500 text-[10px] font-black tracking-widest uppercase">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aravinth2760?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            target="_blank"
            href="https://github.com/aravinth2760"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/sivan_attu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="hover:text-white transition-colors"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
