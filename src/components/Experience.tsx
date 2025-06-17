// src/components/Experience.tsx
"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/language-provider';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Fullstack Web Developer",
    company: "IVS JSC",
    period: "07/2023 – Present",
    description: "Chat System For Customer Support",
    tech: ["Vagrant", "Nginx", "Rocky9", "CakePHP", "AngularJS", "jQuery", "Javascript", "NodeJS", "RESTful API", "Socket.io", "MySQL"],
    teamSize: "3 members",
    achievements: [
      "Resolved UI bugs and logical issues in chatbot systems to improve reliability and user experience",
      "Maintained and updated automated test scripts using PlaywrightJS",
      "Integrated new features into the existing system as per client requirements",
      "Optimized system performance by reducing excel export time by 70%, decreasing page load time by 40%",
      "Implemented a queue system using Bull and Redis to efficiently handle frequent database count updates",
      "Designed and implemented scheduled jobs using CakePHP Shell and cronjobs for batch data processing",
      "Investigated and proposed solutions for production environment bugs",
      "Upgraded key components (MySQL, CakePHP, jQuery, Node.js, Socket.io) to latest stable versions"
    ]
  },
  // Add other experiences in similar format
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('experience.title') as string}</h2>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="text-primary">{exp.company}</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {exp.period}
                </div>
              </div>
              
              <div className="mb-4">
                <p className="font-medium">{exp.description}</p>
                <p className="text-sm text-muted-foreground">Team size: {exp.teamSize}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-muted text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}