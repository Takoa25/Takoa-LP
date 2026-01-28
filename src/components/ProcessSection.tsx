import React, { useRef } from 'react';
import { CONTENT } from '../content';
import { Button } from './Button';
import { WhatsappContactButton } from './WhatsappContactButton';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { SparklesCore } from './ui/sparkles';

interface ProcessStep {
    number: string;
    title: string;
    description: string;
    image?: string;
}

interface ProcessItemProps {
    step: ProcessStep;
    isLast: boolean;
}

const ProcessItem: React.FC<ProcessItemProps> = ({ step, isLast }) => {
    const ref = useRef(null);
    // Detecta quando o item está no centro/visível na tela mobile
    const isInView = useInView(ref, {
        margin: "-48% 0px -48% 0px",
        once: false
    });

    // Estado reativo para detectar mobile (evita animação automática no desktop)
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div
            ref={ref}
            className={`group relative w-full cursor-pointer py-8 lg:py-12 ${!isLast ? 'border-b' : ''}`}
            style={{ borderColor: CONTENT.theme.colors.border }}
        >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-0">
                {/* Left Side: Rolling Title & Description */}
                <div className="relative z-10">
                    {/* Rolling Text Container */}
                    <div className="relative overflow-hidden h-[40px] md:h-[60px] lg:h-[80px]">
                        <motion.div
                            animate={isMobile ? { y: isInView ? "-50%" : "0%" } : {}}
                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                            className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] lg:group-hover:-translate-y-1/2"
                        >
                            {/* State 1: Normal */}
                            <div className="h-[40px] md:h-[60px] lg:h-[80px] flex items-center">
                                <h3
                                    className="text-3xl md:text-5xl lg:text-[4rem] font-bold tracking-tight"
                                    style={{
                                        fontFamily: CONTENT.theme.fonts.heading,
                                        color: CONTENT.theme.colors.text
                                    }}
                                >
                                    {step.title}
                                </h3>
                            </div>

                            {/* State 2: Hover/Scroll (Italic + Color) */}
                            <div className="h-[40px] md:h-[60px] lg:h-[80px] flex items-center">
                                <h3
                                    className="text-3xl md:text-5xl lg:text-[4rem] font-bold tracking-tight italic"
                                    style={{
                                        fontFamily: CONTENT.theme.fonts.heading,
                                        color: CONTENT.theme.colors.primary
                                    }}
                                >
                                    {step.title}
                                </h3>
                            </div>
                        </motion.div>
                    </div>

                    {/* Description */}
                    <p
                        className={`mt-4 max-w-xl text-sm md:text-base leading-relaxed font-light transition-colors duration-300 ${isMobile && isInView ? 'text-white' : 'lg:group-hover:text-white'}`}
                        style={{ color: CONTENT.theme.colors.textLight }}
                    >
                        {step.description}
                    </p>
                </div>

                {/* Right Side: Step Number & Image Reveal */}

                {/* Step Number (Desktop) */}
                <span
                    className="hidden lg:block absolute top-8 right-0 text-xs font-bold uppercase tracking-widest transition-opacity duration-300 group-hover:opacity-0"
                    style={{ color: CONTENT.theme.colors.textLight }}
                >
                    ETAPA {step.number}
                </span>

                {/* Step Number (Mobile - Inline) */}
                <span
                    className="lg:hidden text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: CONTENT.theme.colors.textLight }}
                >
                    ETAPA {step.number}
                </span>

                {/* Image Reveal Effect - Positioned Absolute Right */}
                {step.image && (
                    <div
                        className="pointer-events-none absolute right-0 top-1/2 z-20 h-40 w-64 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl transition-all duration-500 ease-out opacity-0 scale-95 rotate-3 translate-x-4 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0 hidden lg:block"
                    >
                        <div className="relative h-full w-full bg-neutral-800">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                                loading="lazy"
                            />
                            <div
                                className="absolute inset-0 mix-blend-overlay opacity-20"
                                style={{ backgroundColor: CONTENT.theme.colors.primary }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

interface ProcessSectionProps {
    isLanded?: boolean;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ isLanded }) => {
    return (
        <section id="process"
            className="w-full px-6 py-20 lg:pt-32 lg:pb-32 lg:px-20"
            style={{ backgroundColor: CONTENT.theme.colors.background }}
        >
            <div className="w-full"> {/* Container Full Width but with padding */}

                {/* Section Header */}
                <div className="max-w-4xl mb-20">
                    <span className="text-[clamp(11px,1vw,14px)] uppercase tracking-[0.2em] font-bold mb-6 block animate-fade-up" style={{ color: CONTENT.theme.colors.textLight }}>
                        O Processo
                    </span>
                    <h2
                        className="text-[clamp(1.8rem,4vw,5rem)] font-semibold mb-6 leading-tight animate-fade-up"
                        style={{ fontFamily: CONTENT.theme.fonts.heading, color: CONTENT.theme.colors.text }}
                    >
                        {CONTENT.processSection.title}
                    </h2>
                    <p
                        className="text-[clamp(1rem,1.2vw,1.4rem)] leading-relaxed animate-fade-up font-light"
                        style={{ color: CONTENT.theme.colors.textLight }}
                    >
                        {CONTENT.processSection.subtitle}
                    </p>
                </div>

                {/* Rolling List */}
                <div className="w-full flex flex-col border-t" style={{ borderColor: CONTENT.theme.colors.border }}>
                    {CONTENT.processSection.steps.map((step, index) => (
                        <ProcessItem
                            key={step.number}
                            step={step}
                            isLast={index === CONTENT.processSection.steps.length - 1}
                        />
                    ))}
                </div>

                {/* Final CTA Divider */}
                <div className="w-full mt-32 h-[1px]" style={{ backgroundColor: CONTENT.theme.colors.border }} />

                <div className="w-full mt-32 animate-fade-up flex flex-col items-center px-0">
                    <h2 id="final-cta-title" className="w-full text-[clamp(1.8rem,3.5vw,3.5rem)] text-center font-semibold mb-2 leading-tight relative z-10" style={{ fontFamily: CONTENT.theme.fonts.heading, color: CONTENT.theme.colors.text }}>
                        {CONTENT.finalCta.title}
                    </h2>

                    {/* Sparkles Effect */}
                    <div className="w-full h-24 md:h-40 relative mb-8 flex flex-col items-center">
                        {/* Gradients - Centralized and Responsive */}
                        <div className="absolute top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm opacity-75 left-1/2 -translate-x-1/2" />
                        <div className="absolute top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4 opacity-75 left-1/2 -translate-x-1/2" />
                        <div className="absolute top-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent h-[5px] w-1/4 blur-sm opacity-75 left-1/2 -translate-x-1/2" />
                        <div className="absolute top-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent h-px w-1/4 opacity-75 left-1/2 -translate-x-1/2" />

                        {/* Core component */}
                        <div className="w-full h-full absolute top-0 left-0">
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={800}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                        </div>

                        {/* Radial Gradient to prevent sharp edges */}
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundColor: CONTENT.theme.colors.background,
                                maskImage: "radial-gradient(350px 200px at top, transparent 20%, white)",
                                WebkitMaskImage: "radial-gradient(350px 200px at top, transparent 20%, white)"
                            }}
                        />
                    </div>

                    {/* Landing Zone for Contact Button (Desktop and Mobile) */}
                    <div className="w-full flex justify-center overflow-visible relative z-20 h-14 mt-6">
                        <AnimatePresence>
                            {isLanded && (
                                <WhatsappContactButton
                                    layoutId="contact-button-shared"
                                />
                            )}
                        </AnimatePresence>

                        {/* Mobile specific version is now handled by the same isLanded logic
                            since isLanded in App.tsx mirrors the FloatingWhatsapp behavior roughly.
                        */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
