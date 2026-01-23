import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Expertise } from './pages/Expertise';
import { CaseStudy } from './pages/CaseStudy';
import { Contact } from './pages/Contact';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/CustomCursor';
import { useState } from 'react';

export default function App() {
  useLenis();
  const [cursorType, setCursorType] = useState('default');

  return (
    <>
      <ScrollToTop />
      <div className="bg-[#010101]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:projectId" element={<CaseStudy />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

// Placeholder pages
function Philosophy() {
  return (
    <div className="min-h-screen bg-[#010101] pt-24">
      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <h1 className="font-['Poppins'] font-bold text-white text-6xl mb-8">
          Engineering Philosophy
        </h1>
        <div className="h-1 w-24 bg-white mb-12"></div>
        <div className="max-w-3xl">
          <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-xl leading-relaxed mb-8">
            Code is not just about functionality—it's about crafting experiences that feel natural,
            perform flawlessly, and scale effortlessly.
          </p>
          <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-lg leading-relaxed mb-8">
            Every decision in architecture, every pattern implemented, and every optimization made
            serves the dual purpose of developer experience and user delight. This balance is what
            separates good code from exceptional engineering.
          </p>
          <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-lg leading-relaxed">
            Through 10,000+ hours of production code, I've learned that the best solutions emerge
            from deep understanding of both technical constraints and human needs.
          </p>
        </div>
      </section>
    </div>
  );
}

function Resume() {
  return (
    <div className="min-h-screen bg-[#010101] pt-24">
      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <h1 className="font-['Poppins'] font-bold text-white text-6xl mb-8">
          Resume
        </h1>
        <div className="h-1 w-24 bg-white mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-['Poppins'] font-semibold text-white text-3xl mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-[#5E5E5E] pl-6">
                <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm mb-2">
                  2021 - Present
                </div>
                <h3 className="font-['Poppins'] font-semibold text-white text-xl mb-2">
                  Senior Flutter Developer
                </h3>
                <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70">
                  Leading mobile development initiatives, architecting scalable applications,
                  and mentoring junior developers.
                </p>
              </div>
              <div className="border-l-2 border-[#5E5E5E] pl-6">
                <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm mb-2">
                  2019 - 2021
                </div>
                <h3 className="font-['Poppins'] font-semibold text-white text-xl mb-2">
                  Flutter Developer
                </h3>
                <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70">
                  Developed cross-platform applications for fintech and e-commerce sectors.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-['Poppins'] font-semibold text-white text-3xl mb-6">
              Skills
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-['IBM_Plex_Mono'] text-white">Flutter/Dart</span>
                  <span className="font-['IBM_Plex_Mono'] text-[#5E5E5E]">Expert</span>
                </div>
                <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-['IBM_Plex_Mono'] text-white">State Management</span>
                  <span className="font-['IBM_Plex_Mono'] text-[#5E5E5E]">Expert</span>
                </div>
                <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[90%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-['IBM_Plex_Mono'] text-white">API Integration</span>
                  <span className="font-['IBM_Plex_Mono'] text-[#5E5E5E]">Advanced</span>
                </div>
                <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}