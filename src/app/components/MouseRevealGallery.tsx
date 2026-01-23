import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const projectImages = [
  {
    url: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4MTk2NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    width: 240,
    height: 160,
  },
  {
    url: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY4MTg3MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    width: 240,
    height: 160,
  },
  {
    url: 'https://images.unsplash.com/photo-1762525984790-7349708a8894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjgxNTA0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    width: 240,
    height: 160,
  },
  {
    url: 'https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHNjcmVlbnN8ZW58MXx8fHwxNzY4MTQ4Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    width: 240,
    height: 160,
  },
  {
    url: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4MTk4NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    width: 240,
    height: 160,
  },
  {
    url: 'https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbGF5b3V0fGVufDF8fHx8MTc2ODE5ODUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    width: 240,
    height: 160,
  },
];

interface ActiveImage {
  id: number;
  index: number;
  x: number;
  y: number;
  rotation: number;
}

interface MouseRevealGalleryProps {
  containerRef: React.RefObject<HTMLElement>;
}

export function MouseRevealGallery({ containerRef }: MouseRevealGalleryProps) {
  const [activeImages, setActiveImages] = useState<ActiveImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const imageIdCounter = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInside) {
        return;
      }

      const currentX = e.clientX;
      const currentY = e.clientY;
      const lastX = lastPositionRef.current.x;
      const lastY = lastPositionRef.current.y;

      // Calculate distance moved
      const distance = Math.sqrt(
        Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2)
      );

      // Only create new image if moved more than 100px
      if (distance > 100) {
        const newImage: ActiveImage = {
          id: imageIdCounter.current++,
          index: currentIndex,
          x: currentX,
          y: currentY,
          rotation: Math.random() * 20 - 10, // Random rotation between -10 and 10
        };

        setActiveImages((prev) => [...prev, newImage]);
        setCurrentIndex((prev) => (prev + 1) % projectImages.length);
        lastPositionRef.current = { x: currentX, y: currentY };

        // Remove the image after 800ms
        setTimeout(() => {
          setActiveImages((prev) => prev.filter((img) => img.id !== newImage.id));
        }, 800);
      }
    };

    const handleMouseLeave = () => {
      // Clear all images when mouse leaves the section
      setActiveImages([]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [currentIndex, containerRef]);

  return (
    <>
      <AnimatePresence>
        {activeImages.map((activeImage) => {
          const image = projectImages[activeImage.index];
          return (
            <motion.div
              key={activeImage.id}
              className="fixed pointer-events-none"
              style={{
                width: image.width,
                height: image.height,
                left: activeImage.x - image.width / 2,
                top: activeImage.y - image.height / 2,
                zIndex: 30,
              }}
              initial={{ opacity: 0, scale: 0.5, rotate: activeImage.rotation }}
              animate={{ opacity: 1, scale: 1, rotate: activeImage.rotation }}
              exit={{ opacity: 0, scale: 0.8, rotate: activeImage.rotation }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
            >
              <div
                className="w-full h-full overflow-hidden"
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
                }}
              >
                <img
                  src={image.url}
                  alt={`Project ${activeImage.index + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
}