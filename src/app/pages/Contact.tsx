import { useState } from 'react';
import { CustomCursor } from '../components/CustomCursor';

export function Contact() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className="min-h-screen bg-[#010101] pt-24"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <section className="max-w-[1400px] mx-auto px-8 py-20">
                <h1 className="font-['Poppins'] font-bold text-white text-6xl mb-8">
                    Get In Touch
                </h1>
                <div className="h-1 w-24 bg-white mb-12"></div>
                <div className="max-w-2xl">
                    <p className="font-['Source_Serif_4'] text-[#FFFFFF]/70 text-xl leading-relaxed mb-12">
                        Let's build something exceptional together. Whether you have a project in mind or
                        just want to discuss mobile development, I'm always open to new opportunities.
                    </p>

                    <div className="space-y-6">
                        <div className="border border-[#5E5E5E]/30 p-6 rounded-lg hover:border-white transition-colors">
                            <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm mb-2">
                                Email
                            </div>
                            <a href="mailto:ali.nuhan.chowdhury@gmail.com" className="font-['Poppins'] text-white text-xl hover:text-[#5E5E5E] transition-colors break-all">
                                ali.nuhan.chowdhury@gmail.com
                            </a>
                        </div>

                        <div className="border border-[#5E5E5E]/30 p-6 rounded-lg hover:border-white transition-colors">
                            <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm mb-2">
                                Location
                            </div>
                            <span className="font-['Poppins'] text-white text-xl">
                                Dhaka, Bangladesh
                            </span>
                        </div>

                        <div className="border border-[#5E5E5E]/30 p-6 rounded-lg hover:border-white transition-colors">
                            <div className="font-['IBM_Plex_Mono'] text-[#5E5E5E] text-sm mb-2">
                                Response Time
                            </div>
                            <span className="font-['Poppins'] text-white text-xl">
                                Within 24 hours
                            </span>
                        </div>
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
