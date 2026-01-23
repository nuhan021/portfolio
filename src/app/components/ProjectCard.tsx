import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  accentColor: string;
  figmaUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  githubUrls?: string[];
  platforms?: ('iOS' | 'Android')[];
  slug?: string;
  pubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  imageUrl,
  accentColor,
  figmaUrl,
  playStoreUrl,
  appStoreUrl,
  githubUrls = [],
  platforms = [],
  slug,
  pubUrl
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (slug) {
      navigate(`/work/${slug}`);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-[#1A1A1A] aspect-[4/3] rounded-lg">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: accentColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.9 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white font-['IBM_Plex_Mono'] text-sm tracking-wide">
            View Technical Case Study →
          </span>
        </motion.div>

        {/* Platform Badges - Top Right */}
        {platforms.length > 0 && (
          <div className="absolute top-3 right-3 flex gap-2 z-10">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="font-['IBM_Plex_Mono'] text-xs text-white bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20"
              >
                {platform}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Metadata */}
      <div className="mt-4 md:mt-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4 relative z-10">
          <div className="flex-1">
            <h3 className="font-['Poppins'] font-semibold text-white text-lg md:text-xl mb-2">
              {title}
            </h3>
            <p className="font-['Source_Serif_4'] text-[#5E5E5E] text-sm">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-start md:justify-end md:max-w-[40%] relative z-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-['IBM_Plex_Mono'] text-xs text-[#5E5E5E] border border-[#5E5E5E]/30 px-3 py-1 rounded-full bg-[#010101] relative z-10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {(figmaUrl || playStoreUrl || appStoreUrl || githubUrls.length > 0 || pubUrl) && (
          <div className="flex flex-wrap gap-3 mt-4 relative z-10">
            {figmaUrl && (
              <a
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-white bg-[#1A1A1A] hover:bg-white hover:text-black border border-[#5E5E5E]/30 hover:border-white px-4 py-2 rounded-md transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019v-3.019H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019z" />
                </svg>
                Figma
              </a>
            )}

            {playStoreUrl && (
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-white bg-[#1A1A1A] hover:bg-white hover:text-black border border-[#5E5E5E]/30 hover:border-white px-4 py-2 rounded-md transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                Play Store
              </a>
            )}

            {appStoreUrl && (
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-white bg-[#1A1A1A] hover:bg-white hover:text-black border border-[#5E5E5E]/30 hover:border-white px-4 py-2 rounded-md transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            )}

            {githubUrls.length > 0 && githubUrls.map((url, index) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-white bg-[#1A1A1A] hover:bg-white hover:text-black border border-[#5E5E5E]/30 hover:border-white px-4 py-2 rounded-md transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-3.5 h-3.5" />
                {githubUrls.length > 1 ? `GitHub ${index + 1}` : 'GitHub'}
              </a>
            ))}

            {pubUrl && (
              <a
                href={pubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-white bg-[#1A1A1A] hover:bg-white hover:text-black border border-[#5E5E5E]/30 hover:border-white px-4 py-2 rounded-md transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                Pub.dev
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}