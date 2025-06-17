"use client";

import { useLanguage } from '@/context/language-provider';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', icon: '🔷' }, // Blue diamond for HTML5
      { name: 'CSS3/SCSS', icon: '🎨' }, // Artist palette for CSS/SCSS
      { name: 'JavaScript', icon: '🟨' }, // Yellow square for JavaScript
      { name: 'TypeScript', icon: '🔵' }, // Blue circle for TypeScript
      { name: 'TailwindCSS', icon: '💨' }, // Wind for Tailwind
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'PHP/CakePHP', icon: '🐘' }, // Elephant for PHP
      { name: 'Node.js/Express', icon: '🟢' }, // Green circle for Node
      { name: 'PostgreSQL', icon: '🐘' }, // Elephant for PostgreSQL
      { name: 'MySQL', icon: '💾' }, // Floppy disk for MySQL
      { name: 'REST API', icon: '🔌' }, // Plug for API
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', icon: '📦' }, // Package for Git
      { name: 'SVN', icon: '🔄' }, // Refresh for version control
      { name: 'VsCode', icon: '💻' }, // Laptop for IDE
      { name: 'Postman', icon: '📡' }, // Satellite for API testing
      { name: 'Cypress', icon: '🧪' }, // Test tube for testing
      { name: 'Playwright', icon: '🎭' }, // Theater masks for Playwright
    ],
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('skills.title') as string}
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            {t('skills.description') as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="animate-on-scroll bg-card rounded-lg shadow-md p-6 border border-border"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-foreground">{skill.name}</span>
                  </div>
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
