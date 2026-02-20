import { motion } from "framer-motion";
import { Database, Globe, Terminal, Cpu } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Frontend",
      icon: Globe,
      list: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "TypeScript",
        "Angular 13+",
        "Bootstrap 5+",
        "React",
        "Redux",
        "Next.js",
        "Angular Material",
        "NgRx",
        "RxJS",
        "Routing (Lazy Loading)",
        "Signals",
      ],
    },
    {
      name: "Backend",
      icon: Terminal,
      list: ["Node.js", "Express", "REST APIs", "Clean Code"],
    },
    {
      name: "Database",
      icon: Database,
      list: ["MongoDB", "Database Design", "Firebase"],
    },
    {
      name: "DevOps/Tools",
      icon: Cpu,
      list: ["Git & GitHub", "GitLab", "npm"],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-slate-900/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-bold text-blue-500 tracking-[0.3em] uppercase mb-4">
          Capabilities
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-16">
          My Tech Stack
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-blue-500/50 transition-colors group"
            >
              <s.icon
                className="text-blue-500 mb-6 group-hover:scale-110 transition-transform"
                size={40}
              />
              <h4 className="text-xl font-bold text-white mb-4">{s.name}</h4>
              <div className="flex flex-wrap gap-2">
                {s.list.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-[10px] font-bold bg-slate-800 text-slate-400 rounded-lg uppercase tracking-wider"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
