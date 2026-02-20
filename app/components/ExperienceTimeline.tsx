"use client";
import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { Briefcase, GraduationCap, Users } from "lucide-react";

export default function ExperienceTimeline({ category }: { category: 'experience' | 'education' }) {
  const getIcon = (type: string) => {
    if (type === 'work') return <Briefcase size={18} />;
    if (type === 'education') return <GraduationCap size={18} />;
    return <Users size={18} />;
  };

  const filteredData = experience.filter(item => 
    category === 'education' ? item.type === 'education' : item.type !== 'education'
  );

  return (
    <div className="max-w-3xl mx-auto py-10 relative">
      <div className="absolute left-8 top-10 bottom-0 w-[1px] bg-border" />
      {filteredData.map((item, index) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-20 pb-12 group"
        >
          <div className="absolute left-[24px] top-1 w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-accent group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 z-10">
            {getIcon(item.type)}
          </div>
          <div className="bg-surface-2 border border-border p-6 rounded-xl group-hover:border-accent/50 transition-colors">
            <span className="text-accent font-mono text-sm block mb-2">{item.date}</span>
            <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
            <h5 className="text-gray-400 font-medium mb-4">{item.entity}</h5>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}