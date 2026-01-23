import { ProjectCard } from '../components/ProjectCard';
import { CustomCursor } from '../components/CustomCursor';
import { motion, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';

interface FloatingImage {
  id: number;
  x: number;
  y: number;
  imageUrl: string;
  rotation: number;
  scale: number;
  width: number;
  height: number;
}

import { projects as allProjects } from '../data/projects';

const projects = allProjects.filter(p => p.status === 'published');

const technicalStack = [
  { category: 'Architecture', skills: ['Clean Architecture', 'MVC', 'Repository Pattern', 'Dependency Injection'] },
  { category: 'State Management', skills: ['BLoC', 'Provider', 'GetX'] },
  { category: 'Backend & APIs', skills: ['Firebase', 'NestJS', 'REST', 'WebSockets', 'gRPC'] },
  { category: 'Performance', skills: ['Code Profiling', 'Memory Optimization', 'Custom Paint', 'Isolates'] },
  { category: 'Testing', skills: ['Unit Testing', 'Widget Testing', 'Integration Testing', 'Golden Tests'] },
  { category: 'DevOps', skills: ['Custom CI/CD', 'Fastlane', 'CodeMagic', 'GitHub Actions', 'App Distribution'] },
  { category: 'UI/UX', skills: ['Custom Animations', 'Hero Transitions', 'Rive', 'Lottie', 'Gesture Detection'] },
  { category: 'Platform', skills: ['Method Channels', 'Platform Views', 'Plugin Development', 'FFI'] }
];

const clients = [
  'DTC',
  'Sireen',
  'Biovue',
  'Shalana',
  'bbehmer',
  'jesusvlsco',
  'norealtorai',
  'giselef',
  'daymoondesigns',
  'danaj242',
  'Fadicalotti',
  'daliafayy',
  'joykrupinski',
  'saedras',
  'richardhan9'
];

export function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const featuredWorkRef = useRef<HTMLElement>(null);
  const technicalProwessRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isFeaturedWorkHovered, setIsFeaturedWorkHovered] = useState(false);
  const [isTechnicalProwessHovered, setIsTechnicalProwessHovered] = useState(false);
  const [isTrustedByHovered, setIsTrustedByHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [featuredWorkCursorPosition, setFeaturedWorkCursorPosition] = useState({ x: 0, y: 0 });
  const [technicalProwessCursorPosition, setTechnicalProwessCursorPosition] = useState({ x: 0, y: 0 });
  const [trustedByCursorPosition, setTrustedByCursorPosition] = useState({ x: 0, y: 0 });
  const [servicesCursorPosition, setServicesCursorPosition] = useState({ x: 0, y: 0 });

  // Floating images state
  const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);
  const imageIdCounter = useRef(0);
  const lastImageTime = useRef(0);
  const lastCursorPosition = useRef({ x: 0, y: 0 });

  const projectImages = [
    'https://cdn.dribbble.com/userupload/15923161/file/original-f14b1f6910cab67c2565d9a97004bfcd.png?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/17922409/file/original-9fe0b265291b34a16419b19f920c48d1.png?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/17432015/file/original-37454186bb358b3966b86efabaf344e5.png?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/45814651/file/181e66ba7cb656da12b8eccf19753344.png?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/41839800/file/original-4b3c0ae760b56b467684a17662fd0940.png?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/44575267/file/a2d92d0250dcbfe9f400b58618ccc008.png?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/44667067/file/fc248c96c6a0879135144ddb8492bc31.png?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/43305974/file/original-b25c170a32fbd75a77cdd0828b952c05.png?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/17581101/file/original-7060fcac6dfcf34ce269afc11728f317.png?resize=1024x768&vertical=center',
    'https://cdn.dribbble.com/userupload/43055099/file/original-45d47b519016cabbc8061425798fdc07.png?resize=1024x768&vertical=center'
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const newPosition = { x: e.clientX, y: e.clientY };
    setCursorPosition(newPosition);

    // Calculate movement distance
    const distance = Math.sqrt(
      Math.pow(newPosition.x - lastCursorPosition.current.x, 2) +
      Math.pow(newPosition.y - lastCursorPosition.current.y, 2)
    );

    // Only spawn image if moved enough distance and enough time has passed
    const now = Date.now();
    const timeSinceLastImage = now - lastImageTime.current;

    // Much lower thresholds for smooth, responsive trail
    if (distance > 10 && timeSinceLastImage > 100) {
      const randomImage = projectImages[Math.floor(Math.random() * projectImages.length)];

      // Fixed rectangular size for all cards - horizontal landscape (slightly smaller)
      const fixedSize = { width: 240, height: 175 }; // Landscape rectangle

      const newImage: FloatingImage = {
        id: imageIdCounter.current++,
        x: newPosition.x, // Exact cursor position
        y: newPosition.y, // Exact cursor position
        imageUrl: randomImage,
        rotation: 0, // No rotation - keep images straight
        scale: 1, // Fixed scale - no variation
        width: fixedSize.width,
        height: fixedSize.height,
      };

      setFloatingImages(prev => [...prev, newImage]);
      lastImageTime.current = now;

      // Remove image after 1.5 seconds (faster disappear)
      setTimeout(() => {
        setFloatingImages(prev => prev.filter(img => img.id !== newImage.id));
      }, 2000);
    }

    lastCursorPosition.current = newPosition;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setFloatingImages([]); // Clear all images when leaving
  };

  const handleFeaturedWorkMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setFeaturedWorkCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleFeaturedWorkMouseEnter = () => {
    setIsFeaturedWorkHovered(true);
  };

  const handleFeaturedWorkMouseLeave = () => {
    setIsFeaturedWorkHovered(false);
  };

  const handleTechnicalProwessMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setTechnicalProwessCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleTechnicalProwessMouseEnter = () => {
    setIsTechnicalProwessHovered(true);
  };

  const handleTechnicalProwessMouseLeave = () => {
    setIsTechnicalProwessHovered(false);
  };

  const handleTrustedByMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setTrustedByCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleTrustedByMouseEnter = () => {
    setIsTrustedByHovered(true);
  };

  const handleTrustedByMouseLeave = () => {
    setIsTrustedByHovered(false);
  };

  const handleServicesMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setServicesCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleServicesMouseEnter = () => {
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesHovered(false);
  };

  return (
    <div className="min-h-screen bg-[#010101] pt-24">
      {/* Hero Section - Centered Minimalist */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          {/* Decorative Elements */}
          <div className="relative">
            {/* Sparkle 1 - top right */}
            <motion.div
              className="absolute right-[15%] top-0 text-white text-2xl"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ✦
            </motion.div>

            {/* Sparkle 2 - bottom right */}
            <motion.div
              className="absolute right-[5%] bottom-8 text-white text-xl"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              ✦
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="font-['Source_Serif_4'] leading-[1.1] mb-32 relative"
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                opacity: { duration: 0.4 },
                y: { duration: 0.4 },
                scale: { duration: 0.6, delay: 1.7, ease: 'easeOut' },
              }}
              style={{
                fontSize: 'clamp(48px, 10vw, 120px)',
              }}
            >
              {/* Base layer - Grey text */}
              <span className="text-[#5E5E5E]">
                Nuhan Chowdhury
              </span>

              {/* White layer - Animates from left to right */}
              <motion.span
                className="absolute inset-0 text-white"
                initial={{
                  clipPath: 'inset(0 100% 0 0)',
                }}
                animate={{
                  clipPath: 'inset(0 0% 0 0)',
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: 'easeInOut',
                }}
              >
                Nuhan Chowdhury
              </motion.span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-xs md:text-sm uppercase tracking-widest max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2, ease: 'easeOut' }}
          >
            Crafting pixel-perfect mobile experiences, building cross-platform solutions, and obsessed with Flutter performance and seamless interactions.
          </motion.p>
        </div>

        {/* Interaction Hint - Desktop Only */}
        <motion.div
          className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 text-[#5E5E5E] font-['IBM_Plex_Mono'] text-sm tracking-widest uppercase pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Move your cursor to see magic ✨
        </motion.div>

        {/* Custom Cursor Dot - Only visible when hovering this section */}
        {isHovered && (
          <motion.div
            className="fixed w-3 h-3 bg-white rounded-full pointer-events-none mix-blend-difference"
            style={{
              left: cursorPosition.x,
              top: cursorPosition.y,
              transform: 'translate(-50%, -50%)',
              zIndex: 99999,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { duration: 0.2, ease: 'easeOut' },
              opacity: { duration: 0.2, ease: 'easeOut' },
              left: {
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.8,
                delay: 0.0005, // 0.5ms delay
              },
              top: {
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.8,
                delay: 0.0005, // 0.5ms delay
              }
            }}
          />
        )}

        {/* Floating Images */}
        <AnimatePresence>
          {floatingImages.map((img, index) => {
            // Calculate opacity based on position in array
            // Newest images are at the end of the array
            const totalImages = floatingImages.length;
            const imagePosition = totalImages - index; // How old is this image? (1 = newest, 2 = second newest, etc.)
            const opacityValue = Math.max(0.2, 1 - (imagePosition - 1) * 0.1); // 1.0, 0.9, 0.8...

            return (
              <motion.div
                key={img.id}
                className="absolute pointer-events-none overflow-hidden border-2 border-white/20 shadow-2xl"
                style={{
                  left: img.x - img.width / 2,
                  top: img.y - img.height / 2,
                  width: `${img.width}px`,
                  height: `${img.height}px`,
                  zIndex: 9999,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: opacityValue, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.4,
                  ease: [0.34, 1.56, 0.64, 1] // Bouncy ease-out
                }}
              >
                <img
                  src={img.imageUrl}
                  alt="Floating Project"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>

      {/* Immersive Work Grid - Bento Box Asymmetrical Layout */}
      <section
        ref={featuredWorkRef}
        className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-28"
        onMouseMove={handleFeaturedWorkMouseMove}
        onMouseEnter={handleFeaturedWorkMouseEnter}
        onMouseLeave={handleFeaturedWorkMouseLeave}
      >
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <h2 className="font-['Poppins'] font-bold text-white text-5xl md:text-6xl mb-6 uppercase">
            Featured Work
          </h2>
          <div className="h-2 w-24 bg-white"></div>
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
          {/* First Project - Large (Spans 7 columns) */}
          <motion.div
            className="md:col-span-7 relative z-10"
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.6 },
              rotateX: { duration: 0.7 }
            }}
          >
            <ProjectCard {...projects[0]} />
          </motion.div>

          {/* Second Project - Medium (Spans 5 columns) */}
          <motion.div
            className="md:col-span-5 relative z-10"
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.6 },
              rotateX: { duration: 0.7 }
            }}
          >
            <ProjectCard {...projects[1]} />
          </motion.div>

          {/* Third Project - Medium-Large (Spans 5 columns) */}
          <motion.div
            className="md:col-span-5 relative z-10"
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.6 },
              rotateX: { duration: 0.7 }
            }}
          >
            <ProjectCard {...projects[2]} />
          </motion.div>

          {/* Client Statement Box (Spans 7 columns) */}
          <motion.div
            className="md:col-span-7 bg-[#1A1A1A] border border-[#5E5E5E]/20 rounded-lg p-8 md:p-12 flex flex-col justify-center relative z-10"
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.6 },
              rotateX: { duration: 0.7 }
            }}
          >
            <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm mb-4 uppercase tracking-wider">
              Client Testimonial
            </div>
            <p className="font-['Source_Serif_4'] text-white text-2xl md:text-3xl leading-relaxed mb-6 italic">
              "Exceptional technical depth combined with an intuitive understanding of user experience.
              The attention to performance optimization is unmatched."
            </p>
            <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm">
              — Technical Director, Bitnob
            </div>
          </motion.div>
        </div>

        {/* Custom Cursor Dot with Spring Physics - Only visible when hovering this section */}
        <CustomCursor
          isVisible={isFeaturedWorkHovered}
          cursorPosition={featuredWorkCursorPosition}
        />
      </section>

      {/* Prowess & Technical Stack - High Density Layout */}
      <section
        ref={technicalProwessRef}
        className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-28 border-t border-[#5E5E5E]/20"
        onMouseMove={handleTechnicalProwessMouseMove}
        onMouseEnter={handleTechnicalProwessMouseEnter}
        onMouseLeave={handleTechnicalProwessMouseLeave}
      >
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] font-bold text-white text-5xl md:text-6xl mb-6 uppercase">
            Technical Prowess
          </h2>
          <div className="h-2 w-24 bg-white mb-8"></div>
          <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-lg md:text-xl leading-relaxed max-w-3xl">
            A comprehensive mastery spanning app architecture, performance audits, custom CI/CD pipelines,
            and advanced mobile engineering patterns. Each skill honed through thousands of hours of production code.
          </p>
        </motion.div>

        {/* High-Density Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicalStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              className="border-l-2 border-[#5E5E5E]/30 pl-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3 className="font-['IBM_Plex_Mono'] text-white text-sm uppercase tracking-wider mb-4">
                {stack.category}
              </h3>
              <ul className="space-y-2">
                {stack.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-['Source_Serif_4'] text-[#5E5E5E] text-sm hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Custom Cursor for Technical Prowess */}
        {isTechnicalProwessHovered && (
          <motion.div
            className="fixed pointer-events-none"
            style={{
              left: technicalProwessCursorPosition.x,
              top: technicalProwessCursorPosition.y,
              x: -75,
              y: -75,
              zIndex: 99999,
              width: '150px',
              height: '150px',
              mixBlendMode: 'difference',
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          >
            {/* Simple SVG with white border and arrow */}
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" className="overflow-visible">
              {/* Outer circle border - white stroke only */}
              <circle
                cx="75"
                cy="75"
                r="70"
                stroke="#FFFFFF"
                strokeWidth="8"
                fill="none"
              />
              {/* Arrow with rotation animation */}
              <motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  mass: 0.8,
                }}
                style={{ transformOrigin: '75px 75px' }}
              >
                <path
                  d="M62 88 L88 62 M88 62 L88 74 M88 62 L76 62"
                  stroke="#FFFFFF"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.g>
            </svg>
          </motion.div>
        )}
      </section>

      {/* Client Cloud Section */}
      <section
        className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-28 border-t border-[#5E5E5E]/20"
        onMouseMove={handleTrustedByMouseMove}
        onMouseEnter={handleTrustedByMouseEnter}
        onMouseLeave={handleTrustedByMouseLeave}
      >
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] font-bold text-white text-5xl md:text-6xl mb-6 uppercase">
            Trusted By
          </h2>
          <div className="h-2 w-24 bg-white"></div>
        </motion.div>

        <div className="relative w-full overflow-hidden mask-gradient-sides">
          {/* Gradient Masks for smooth fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-r from-[#010101] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-l from-[#010101] to-transparent pointer-events-none" />

          <motion.div
            className="flex items-center gap-12 sm:gap-16 md:gap-24 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }}
          >
            {/* Double the list for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex items-center justify-center h-24 opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                <span className="font-['Poppins'] font-bold text-[#5E5E5E] text-3xl md:text-4xl text-center">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hidden Text - Revealed by Cursor Interaction */}
        <div className="mt-20 text-center relative z-10">
          <p
            className="font-['Source_Serif_4'] text-4xl md:text-6xl leading-relaxed italic select-none relative"
            style={{ color: '#0F0F0F' }}
          >
            Building experiences that matter
          </p>
        </div>

        {/* Custom Cursor for Trusted By */}
        {isTrustedByHovered && (
          <CustomCursor
            isVisible={isTrustedByHovered}
            cursorPosition={trustedByCursorPosition}
            variant="circle"
          />
        )}
      </section>

      {/* Services - Modular Cards */}
      <section
        className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-28"
        onMouseMove={handleServicesMouseMove}
        onMouseEnter={handleServicesMouseEnter}
        onMouseLeave={handleServicesMouseLeave}
      >
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins'] font-bold text-white text-5xl md:text-6xl mb-6 uppercase">
            Services
          </h2>
          <div className="h-2 w-24 bg-white"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Mobile Development', desc: 'iOS & Android apps with Flutter' },
            { title: 'Backend Development', desc: 'Scalable APIs with NestJS' },
            { title: 'Deployment', desc: 'VPS, App Store & Play Store' },
            { title: 'App Architecture', desc: 'Clean, testable codebases' },
            { title: 'Custom Animations', desc: 'Fluid, emotive user experiences' },
            { title: 'Full Stack Solutions', desc: 'From database to mobile UI' }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="border border-[#5E5E5E]/30 p-8 rounded-lg hover:border-white transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-['Poppins'] font-semibold text-white text-xl mb-2 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="font-['Source_Serif_4'] text-[#5E5E5E] text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Custom Cursor for Services */}
        {isServicesHovered && (
          <CustomCursor
            isVisible={isServicesHovered}
            cursorPosition={servicesCursorPosition}
            variant="circle"
          />
        )}
      </section>
    </div>
  );
}