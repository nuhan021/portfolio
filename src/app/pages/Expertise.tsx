import { motion } from 'motion/react';
import { CustomCursor } from '../components/CustomCursor';
import { useState } from 'react';

export function Expertise() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const projectDetails = [
    {
      title: 'State Management Mastery',
      description: 'Deep expertise in BLoC, Provider, and GetX patterns for scalable application architecture.',
      icon: '01'
    },
    {
      title: 'Performance Optimization',
      description: 'Proficient in frame profiling, memory management, and achieving 60fps animations across all devices.',
      icon: '02'
    },
    {
      title: 'Custom Widget Development',
      description: 'Building reusable, accessible, and highly customizable widget libraries for enterprise applications.',
      icon: '03'
    },
    {
      title: 'Protocol Integration',
      description: 'Experience integrating Web3 wallets, payment gateways, and complex third-party APIs.',
      icon: '04'
    }
  ];

  const techCategories = [
    {
      category: 'Core',
      items: ['Flutter', 'Dart', 'Material Design', 'Cupertino']
    },
    {
      category: 'Backend',
      items: ['Firebase', 'NestJS', 'GraphQL', 'REST API', 'WebSockets']
    },
    {
      category: 'State',
      items: ['BLoC', 'Provider', 'GetX']
    },
    {
      category: 'Storage',
      items: ['SQLite', 'Hive', 'Shared Preferences', 'Secure Storage']
    },
    {
      category: 'Testing',
      items: ['Unit Tests', 'Widget Tests', 'Integration Tests', 'Golden Tests']
    },
    {
      category: 'DevOps',
      items: ['Git', 'CI/CD']
    }
  ];

  return (
    <div
      className="min-h-screen bg-[#010101] pt-24"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-28">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-['Poppins'] font-bold text-white mb-6 uppercase leading-[0.9]" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            Technical Expertise
          </h1>
          <div className="h-2 w-24 bg-white mb-8"></div>
          <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-lg md:text-xl leading-relaxed max-w-3xl">
            Core competencies that drive exceptional mobile application development.
            Each skill has been refined through real-world projects and continuous learning,
            representing mastery across the entire Flutter ecosystem.
          </p>
        </motion.div>

        {/* Expertise Grid - Asymmetrical Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-28">
          {projectDetails.map((detail, index) => {
            // Alternate between large and small cards
            const spanClass = index % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4';

            return (
              <motion.div
                key={detail.title}
                className={`${spanClass} border border-[#5E5E5E]/30 p-8 md:p-12 rounded-lg hover:border-white transition-all duration-300 group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm mb-6 uppercase tracking-wider">
                  {detail.icon}
                </div>
                <h3 className="font-['Poppins'] font-bold text-white text-2xl md:text-3xl mb-4 group-hover:text-white transition-colors">
                  {detail.title}
                </h3>
                <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-base md:text-lg leading-relaxed">
                  {detail.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Stack - High-Density Grid */}
        <div className="border-t border-[#5E5E5E]/20 pt-16 md:pt-28">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Poppins'] font-bold text-white text-5xl md:text-6xl mb-6 uppercase">
              Technology Stack
            </h2>
            <div className="h-2 w-24 bg-white mb-8"></div>
            <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              A comprehensive toolkit spanning the entire mobile development lifecycle,
              from architecture and state management to deployment and monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-[#1A1A1A] border border-[#5E5E5E]/20 p-8 rounded-lg hover:border-white transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-['IBM_Plex_Mono'] text-white text-sm uppercase tracking-wider mb-6 border-b border-[#5E5E5E]/30 pb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="font-['Source_Serif_4'] text-[#FFFFFF]/70 hover:text-white transition-colors cursor-default flex items-center"
                    >
                      <span className="w-2 h-2 bg-[#5E5E5E] rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="border-t border-[#5E5E5E]/20 pt-16 md:pt-28 mt-16 md:mt-28">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Poppins'] font-bold text-white text-5xl md:text-6xl mb-6 uppercase">
              Development Process
            </h2>
            <div className="h-2 w-24 bg-white"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Requirements analysis and technical feasibility study' },
              { step: '02', title: 'Architecture', desc: 'System design and technology stack selection' },
              { step: '03', title: 'Development', desc: 'Iterative development with continuous testing' },
              { step: '04', title: 'Deployment', desc: 'CI/CD pipeline and production monitoring' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="border-l-2 border-[#5E5E5E] pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs uppercase tracking-wider mb-3">
                  {phase.step}
                </div>
                <h3 className="font-['Poppins'] font-bold text-white text-xl mb-3">
                  {phase.title}
                </h3>
                <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-sm leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Cursor - White Circle */}
      <CustomCursor
        isVisible={isHovered}
        cursorPosition={cursorPosition}
        variant="circle"
      />
    </div>
  );
}