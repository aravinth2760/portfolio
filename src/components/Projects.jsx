import { Github, ExternalLink } from "lucide-react";

import InnovativeApp from "../assets/images/projects/innovative-app.png";
import TodoApp from "../assets/images/projects/todo-app.png";
import APJFurniture from "../assets/images/projects/apj-furniture.png";
import Makaan from "../assets/images/projects/makaan.png";
import Nexcent from "../assets/images/projects/nexcent.png";

const Projects = () => {
  const projects = [
    {
      title: "Innovative App",
      description:
        "A modern, high-productivity landing page featuring editorial choices, interactive statistics management, and a sleek user interface for modern lifestyles.",
      live: "https://aravinth2760.github.io/Innovative-App/",
      code: "https://github.com/aravinth2760/Innovative-App",
      img: InnovativeApp,
      usingLanguage: ["HTML", "CSS", "Bootstrap"],
    },
    {
      title: "Todo App",
      description:
        "A functional task management system allowing users to add and track items with a clean, focused blue-themed workspace.",
      live: "https://aravinth2760.github.io/Todo-App/",
      code: "https://github.com/aravinth2760/Todo-App",
      img: TodoApp,
      usingLanguage: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "APJ Furniture",
      description:
        "A sophisticated e-commerce concept for modern furniture, featuring a high-end slider, product categories, and trusted partner integrations.",
      live: "https://aravinth2760.github.io/APJ-Furniture/",
      code: "https://github.com/aravinth2760/APJ-Furniture",
      img: APJFurniture,
      usingLanguage: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "Makaan",
      live: "https://aravinth2760.github.io/makaan/",
      code: "https://github.com/aravinth2760/makaan",
      description:
        "A comprehensive real estate platform with property search filters, category listings (Villa, Apartment, Office), and responsive design.",
      img: Makaan,
      usingLanguage: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
    },
    {
      title: "Nexcent",
      live: "https://aravinth2760.github.io/nexcent/",
      code: "https://github.com/aravinth2760/nexcent",
      description:
        "A business community management landing page focused on member engagement, featuring detailed insights and a trusted client showcase.",
      img: Nexcent,
      usingLanguage: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
    },
  ];

  return (
    <section id="projects" className="py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-5xl font-black text-white mb-24">
          Featured Projects
        </h3>
        {projects.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center mb-32`}
          >
            <div className="flex-1 w-full overflow-hidden rounded-3xl border border-white/10">
              <img
                src={p.img}
                alt={p.title}
                className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h4 className="text-3xl font-bold text-white">{p.title}</h4>
              <div className="flex flex-wrap gap-2">
                {p.usingLanguage.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-[10px] font-black bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full uppercase tracking-wider"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                {p.description}
              </p>
              <div className="flex gap-6 pt-4">
                <a
                  href={p.code}
                  target="_blank"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                >
                  <Github size={20} />{" "}
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                >
                  <ExternalLink size={20} />{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
