import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Force resize after a short delay to ensure proper height calculation
    const resizeTimeout = setTimeout(() => {
      lenis.resize();
    }, 100);

    return () => {
      clearTimeout(resizeTimeout);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    // immediate: true prevents smooth scroll animation for page transitions
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);
}