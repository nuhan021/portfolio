import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'EXPERTISE', path: '/expertise' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#010101]/95 backdrop-blur-sm border-b border-[#5E5E5E]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 1.7, ease: 'easeOut' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9, ease: 'easeOut' }}
          >
            <Link
              to="/"
              className="text-white font-['Poppins'] font-bold text-xl tracking-tight hover:text-[#5E5E5E] transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              FLUTTER DEV
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2.0 + (index * 0.1),
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Link
                  to={link.path}
                  className={`font-['IBM_Plex_Mono'] text-sm tracking-wide transition-colors ${location.pathname === link.path
                      ? 'text-white'
                      : 'text-[#5E5E5E] hover:text-white'
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0, ease: 'easeOut' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-6 flex flex-col gap-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-['IBM_Plex_Mono'] text-sm tracking-wide transition-colors block ${location.pathname === link.path
                        ? 'text-white'
                        : 'text-[#5E5E5E] hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}