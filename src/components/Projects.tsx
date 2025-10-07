"use client";

import { useLanguage } from '@/context/language-provider';
import { motion } from 'framer-motion';
import { Code, Users, Clock, Zap } from 'lucide-react';

// Define project data structure
interface ProjectBase {
  key: string;
  company: string;
  period: string;
  teamSize: string;
  tags: string[];
  image: string;
}

// Project data without translations
const projectData: ProjectBase[] = [
  {
    key: 'hotelBooking',
    company: 'IVS JSC',
    period: '07/2025 – Present',
    teamSize: '6 members',
    tags: ['HTML5', 'SCSS', 'VueJS', 'Typescript', 'Python', 'FastAPI', 'Docker'],
    image: '/assets/projects/chat-system.jpg',
  },
  {
    key: 'chatSystem',
    company: 'IVS JSC',
    period: '07/2023 – 6/2025',
    teamSize: '3 members',
    tags: ['CakePHP', 'AngularJS', 'jQuery', 'Node.js', 'Socket.io', 'MySQL', 'Redis', 'Playwright'],
    image: '/assets/projects/chat-system.jpg',
  },
  {
    key: 'databaseMgmt',
    company: 'IVS JSC',
    period: '01/2023 – 06/2023',
    teamSize: '4 members',
    tags: ['React', 'TypeScript', 'React Query', 'Recoil', 'Cypress', 'RESTful API'],
    image: '/assets/projects/database-mgmt.jpg',
  },
  {
    key: 'hydroPlant',
    company: 'IVS JSC',
    period: '06/2022 – 12/2022',
    teamSize: '4 members',
    tags: ['React', 'Redux Saga', 'Chart.js', 'Node.js', 'PostgreSQL', 'SCSS'],
    image: '/assets/projects/hydro-plant.jpg',
  }
];

const Projects = () => {
  const { t, language } = useLanguage();

  // Get translations with fallbacks
  const getTranslation = (key: string, fallback: string = ''): string => {
    const result = t(key);
    return typeof result === 'string' ? result : fallback;
  };

  // Get all translations
  const title = getTranslation('projects.title', 'Projects');
  const description = getTranslation('projects.description', 'Key projects I\'ve worked on');
  const roleLabel = getTranslation('projects.role', 'Role');
  const teamSizeLabel = getTranslation('projects.teamSize', 'Team size');
  const achievementsLabel = getTranslation('projects.achievements', 'Key Achievements');
  const technologiesLabel = getTranslation('projects.technologies', 'Technologies Used');
  const viewLiveLabel = getTranslation('projects.viewLive', 'Live Demo');
  const viewCodeLabel = getTranslation('projects.viewCode', 'Source Code');

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {title}
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            {description}
          </p>
        </div>

        <div className="space-y-12">
          {projectData.map((project, index) => {
            // Get the full project data from translations
            const getProjectField = (field: string, fallback: string = ''): string => {
              const fullKey = `projects.${project.key}.${field}`;
              const value = t(fullKey);
              if (typeof value === 'string') {
                return value;
              }
              console.warn(`Missing translation for key: ${fullKey}`);
              return fallback;
            };

            // Get the full project data object
            const projectData = t(`projects.${project.key}`);
            
            // Get translated project data with fallbacks
            const projectTitle = typeof projectData === 'object' && projectData !== null && 'title' in projectData
              ? String(projectData.title)
              : project.key;
              
            const projectRole = typeof projectData === 'object' && projectData !== null && 'role' in projectData
              ? String(projectData.role)
              : '';
              
            const projectDesc = typeof projectData === 'object' && projectData !== null && 'description' in projectData
              ? String(projectData.description)
              : '';

            // Handle achievements array
            let projectAchievements: string[] = [];
            if (projectData && typeof projectData === 'object' && 'achievements' in projectData && Array.isArray(projectData.achievements)) {
              projectAchievements = projectData.achievements.map(String);
            }

            const projectTeamSize = project.teamSize; // Use the default team size from project data

            return (
              <motion.div
                key={project.key}
                className="animate-on-scroll bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{projectTitle}</h3>
                      <p className="text-lg text-muted-foreground">
                        {projectRole} • {project.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{project.period}</span>
                      <Users className="w-4 h-4 ml-2" />
                      <span>{projectTeamSize}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{projectDesc}</p>

                  {projectAchievements && projectAchievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        {achievementsLabel}
                      </h4>
                      <ul className="space-y-2">
                        {projectAchievements.map((achievement: string, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-500" />
                      {technologiesLabel}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
