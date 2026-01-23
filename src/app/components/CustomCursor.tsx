import { motion } from 'motion/react';

interface CustomCursorProps {
  isVisible: boolean;
  cursorPosition: { x: number; y: number };
  variant?: 'circle' | 'arrow'; // Add variant prop
}

export function CustomCursor({ isVisible, cursorPosition, variant = 'arrow' }: CustomCursorProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
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
      {variant === 'circle' ? (
        // Solid white circle
        <svg 
          width="150" 
          height="150" 
          viewBox="0 0 150 150" 
          fill="none"
          className="overflow-visible" 
        >
          <circle 
            cx="75" 
            cy="75" 
            r="65" 
            fill="#FFFFFF"
          />
        </svg>
      ) : (
        // Circle with border and arrow
        <svg 
          width="150" 
          height="150" 
          viewBox="0 0 150 150" 
          fill="none"
          className="overflow-visible" 
        >
          {/* Outer circle border - white stroke only */}
          <circle 
            cx="75" 
            cy="75" 
            r="70" 
            stroke="#FFFFFF" 
            strokeWidth="8"
            fill="none"
          />
          {/* Arrow pointing diagonally up-right */}
          <path
            d="M62 88 L88 62 M88 62 L88 74 M88 62 L76 62"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.div>
  );
}