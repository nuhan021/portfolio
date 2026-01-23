import { useState, useEffect, RefObject } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CursorFollowArrowProps {
  containerRef: RefObject<HTMLElement>;
  excludeRef?: RefObject<HTMLElement>;
}

export function CursorFollowArrow({ containerRef, excludeRef }: CursorFollowArrowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    // Color animation similar to decorative dots
    const animateColor = async () => {
      await controls.start({
        borderColor: ['#FFFFFF', '#589B8F', '#4C4EA8', '#F69101', '#FFFFFF'],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }
      });
    };
    
    animateColor();
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInside = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      // Check if mouse is in exclude area
      let isInExcludeZone = false;
      if (excludeRef?.current) {
        const excludeRect = excludeRef.current.getBoundingClientRect();
        isInExcludeZone = 
          e.clientX >= excludeRect.left &&
          e.clientX <= excludeRect.right &&
          e.clientY >= excludeRect.top &&
          e.clientY <= excludeRect.bottom;
      }

      if (isInside && !isInExcludeZone) {
        setIsVisible(true);
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      } else {
        setIsVisible(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef, excludeRef]);

  return (
    <motion.div
      className="absolute w-20 h-20 rounded-full border-2 bg-transparent flex items-center justify-center pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        x: '-50%',
        y: '-50%'
      }}
      animate={controls}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }
      }}
    >
      <motion.div
        animate={{
          color: ['#FFFFFF', '#589B8F', '#4C4EA8', '#F69101', '#FFFFFF']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <ArrowUpRight className="w-8 h-8" strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}