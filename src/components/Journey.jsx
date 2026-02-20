import { motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  Music,
  Camera,
  Gamepad2,
  Code,
  MapPin,
} from "lucide-react";

const Journey = () => {
  const experiences = [
    {
      type: "exp",
      title: "MERN Stack Developer",
      org: "SDLC - COURSE",
      date: "SEP 2025 - PRESENT",
      desc: "Gaining hands-on experience with RESTful APIs, database design, and frontend frameworks. Building real-world projects to strengthen problem-solving skills.",
      icon: Code,
      location: "Remote",
    },
    {
      type: "exp",
      title: "Junior Angular Developer",
      org: "NETAXIS IT SOLUTIONS",
      date: "MAY 2024 - MAY 2025",
      desc: "Developed responsive, user-friendly applications with a focus on performance optimization and collaborative teamwork. 1 year of professional experience.",
      icon: Briefcase,
      location: "Chennai",
    },
  ];

  const education = [
    {
      title: "M.Sc. CS",
      org: "Imayam Arts & Science College",
      date: "JUL 2022 - APR 2024",
      grade: "7.22 CGPA",
      location: "Kannanur, Tiruchirappalli",
    },
    {
      title: "BCA",
      org: "Imayam Arts & Science College",
      date: "JUL 2019 - APR 2022",
      grade: "7.53 CGPA",
      location: "Kannanur, Tiruchirappalli",
    },
    {
      title: "HSC",
      org: "State Board",
      date: "JUN 2017 - MAR 2019",
      grade: "45%",
      location: "B.Mettur, Tiruchirappalli",
    },
    {
      title: "MDM",
      org: "Jeyanthinather Marine Technology",
      date: "JUN 2016 - JUN 2017",
      grade: "75%",
      location: "Thisaiyanvilai, Tirunelveli",
    },
    {
      title: "SSLC",
      org: "State Board",
      date: "JUN 2015 - MAR 2016",
      grade: "82.6%",
      location: "B.Mettur, Tiruchirappalli",
    },
  ];

  return (
    <div className="py-32 relative max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Experience Column */}
        <section id="experience" className="scroll-mt-24">
          <h2 className="text-sm font-bold text-blue-500 tracking-[0.3em] uppercase mb-4">
            Career
          </h2>
          <h3 className="text-4xl font-black text-white mb-12">
            Professional Experience
          </h3>
          <div className="space-y-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 w-12 h-12 rounded-2xl flex items-center justify-center z-10 border border-white/10 bg-blue-600/20 group-hover:border-blue-500/50 transition-colors">
                  <item.icon className="text-blue-400" size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 mb-1 block tracking-widest">
                    {item.date}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-blue-500 text-sm font-bold mb-3">
                    {item.org}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <MapPin size={12} /> {item.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Column */}
        <section id="education" className="scroll-mt-24">
          <h2 className="text-sm font-bold text-emerald-500 tracking-[0.3em] uppercase mb-4">
            Academic
          </h2>
          <h3 className="text-4xl font-black text-white mb-12">
            Education History
          </h3>
          <div className="space-y-8">
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    {item.grade}
                  </span>
                </div>
                <p className="text-slate-300 text-sm font-medium mb-1">
                  {item.org}
                </p>
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-500">
                  <span>{item.date}</span>
                  <span>{item.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Hobbies Section */}
      <section className="mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-[3rem] p-12 md:p-16 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-blue-500/5 transition-colors">
            <Heart size={200} />
          </div>
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-blue-500 tracking-[0.3em] uppercase mb-4">
              Interests
            </h2>
            <h3 className="text-4xl font-black text-white mb-10">
              Life Outside Development
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Gaming", icon: Gamepad2, color: "text-purple-400" },
                { label: "Music", icon: Music, color: "text-pink-400" },
                { label: "Photography", icon: Camera, color: "text-blue-400" },
                { label: "Open Source", icon: Code, color: "text-emerald-400" },
              ].map((hobby, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-slate-800/50 border border-white/5 hover:border-blue-500/30 transition-all cursor-default"
                >
                  <hobby.icon size={28} className={hobby.color} />
                  <span className="text-slate-300 font-bold text-sm tracking-wide">
                    {hobby.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
export default Journey;
