"use client";
import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { Briefcase, GraduationCap, Users } from "lucide-react";

export default function ExperienceTimeline() {
  const getIcon = (type: string) => {
    if (type === 'work') return <Briefcase size={18} />;
    if (type === 'education') return <GraduationCap size={18} />;
    return <Users size={18} />;
  };

  return (
    <div className="max-w-3xl mx-auto py-20 relative">
      {/* The vertical line */}
      <div className="absolute left-8 top-20 bottom-0 w-[1px] bg-gray-800" />

      {experience.map((item, index) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-20 pb-12 group"
        >
          {/* The glowing dot */}
          <div className="absolute left-[24px] top-1 w-8 h-8 rounded-full bg-surface border border-gray-700 flex items-center justify-center text-maroon-500 group-hover:border-maroon-500 group-hover:shadow-[0_0_15px_rgba(161,40,40,0.5)] transition-all duration-300 z-10">
            {getIcon(item.type)}
          </div>

          <div className="bg-surface border border-gray-800/50 p-6 rounded-xl group-hover:border-maroon-900/50 transition-colors">
            <span className="text-maroon-400 font-mono text-sm block mb-2">{item.date}</span>
            <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
            <h5 className="text-gray-400 font-medium mb-4">{item.entity}</h5>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}