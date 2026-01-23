import { Github, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { name: 'GITHUB', icon: Github, url: 'https://github.com/nuhan021' },
    { name: 'LINKEDIN', icon: Linkedin, url: 'https://www.linkedin.com/in/nuhanchowdhury' },
    { name: 'FACEBOOK', icon: Facebook, url: 'https://www.facebook.com/nanuhan.chowdhury/' }
  ];

  return (
    <footer className="bg-[#010101] border-t border-[#5E5E5E]/20 py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          {/* Social Links */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5E5E5E] hover:text-white transition-colors flex items-center justify-center gap-3 font-['IBM_Plex_Mono'] text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>



          <motion.p
            className="text-[#5E5E5E] text-xs md:text-sm font-['IBM_Plex_Mono'] text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ®2026 PORTFOLIO — BUILT WITH PRECISION
          </motion.p>
        </div>
      </div>
    </footer>
  );
}