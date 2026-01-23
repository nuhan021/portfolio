import { ProjectCard } from '../components/ProjectCard';
import { motion } from 'motion/react';
import { useState } from 'react';
import { CustomCursor } from '../components/CustomCursor';

import { projects as allProjects, Project } from '../data/projects';

type ProjectStatus = Project['status'] | 'all';

export function Work() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProjectStatus | 'all'>('all');

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(project => project.status === activeFilter);

  const getProjectCount = (status: ProjectStatus | 'all') => {
    if (status === 'all') return allProjects.length;
    return allProjects.filter(p => p.status === status).length;
  };

  return (
    <div className="min-h-screen bg-[#010101] pt-24">
      <section
        className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-28 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-['Poppins'] font-bold text-white mb-6 uppercase leading-[0.9]" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            All Work
          </h1>
          <div className="h-2 w-24 bg-white mb-8"></div>
          <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-lg md:text-xl leading-relaxed max-w-3xl">
            A comprehensive showcase of mobile applications built with Flutter.
            Each project represents hundreds of hours of development, focusing on
            state management, performance optimization, and delightful user experiences.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'published', label: 'Published' },
              { id: 'working', label: 'In Development' },
              { id: 'others', label: 'Others' }
            ].map((filter) => {
              const isActive = activeFilter === filter.id;
              const count = getProjectCount(filter.id as ProjectStatus | 'all');

              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as ProjectStatus | 'all')}
                  className={`
                    group relative font-['IBM_Plex_Mono'] text-sm uppercase tracking-wider
                    px-6 py-3 rounded-md border transition-all duration-300
                    ${isActive
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-[#5E5E5E] border-[#5E5E5E]/30 hover:border-white hover:text-white'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {filter.label}
                    <span className={`
                      text-xs px-2 py-0.5 rounded-full
                      ${isActive
                        ? 'bg-black text-white'
                        : 'bg-[#1A1A1A] text-[#5E5E5E] group-hover:text-white'
                      }
                    `}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Status Indicator */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#589B8F]"></div>
              <span className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs">Published</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F69101]"></div>
              <span className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs">In Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4C4EA8]"></div>
              <span className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs">Others</span>
            </div>
          </div>
        </motion.div>

        {/* Asymmetrical Bento Grid for All Projects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
          layout
        >
          {filteredProjects.map((project, index) => {
            // Create asymmetrical pattern: 7-5, 5-7, 7-5
            const spanClass = index % 4 === 0 || index % 4 === 2 ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <motion.div
                key={project.title}
                className={spanClass}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                layout
              >
                <ProjectCard {...project} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom Cursor */}
        {isHovered && (
          <CustomCursor
            isVisible={isHovered}
            cursorPosition={cursorPosition}
          />
        )}
      </section>
    </div>
  );
}