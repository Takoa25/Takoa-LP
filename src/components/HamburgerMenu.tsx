import React, { useState } from 'react';
import { CONTENT } from '../content';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Toggle Button - Fixed Top Right */}
            <button
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:brightness-110 flex flex-col justify-center gap-[5px]"
                style={{ backgroundColor: CONTENT.theme.colors.card }}
                aria-label="Menu"
            >
                <div
                    className={`w-6 h-[2px] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                    style={{ backgroundColor: CONTENT.theme.colors.text }}
                />
                <div
                    className={`w-6 h-[2px] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
                    style={{ backgroundColor: CONTENT.theme.colors.text }}
                />
                <div
                    className={`w-6 h-[2px] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                    style={{ backgroundColor: CONTENT.theme.colors.text }}
                />
            </button>

            {/* Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto backdrop-blur-xl' : 'opacity-0 pointer-events-none'
                    }`}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
            >
                <nav className="flex flex-col items-center gap-8">
                    {CONTENT.navigation.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            onMouseEnter={() => setHoveredLink(link.href)}
                            onMouseLeave={() => setHoveredLink(null)}
                            onTouchStart={() => setHoveredLink(link.href)}
                            onTouchEnd={() => setHoveredLink(null)}
                            className={`text-[clamp(2.5rem,6vw,4rem)] font-semibold transition-all duration-300 hover:scale-110 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${link.label === "Início" ? "lg:hidden" : ""}`}
                            style={{
                                color: hoveredLink === link.href ? CONTENT.theme.colors.menuHover : CONTENT.theme.colors.text,
                                fontFamily: CONTENT.theme.fonts.heading,
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default HamburgerMenu;
