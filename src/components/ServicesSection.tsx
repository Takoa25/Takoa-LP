import React from 'react';
import { CONTENT } from '../content';
import { MonitorIcon, ShieldIcon } from './Icons';

const ServicesSection: React.FC = () => {
    const getServiceIcon = (id: string) => {
        switch (id) {
            case 'websites': return <MonitorIcon />;
            case 'lgpd': return <ShieldIcon />;
            default: return null;
        }
    };

    return (
        <section id="services"
            className="w-full px-6 py-20 lg:pt-32 lg:pb-0 lg:px-20 flex flex-col items-start"
            style={{ backgroundColor: CONTENT.theme.colors.background }}
        >
            <div className="w-full">
                <span className="text-[clamp(11px,1vw,14px)] uppercase tracking-[0.2em] text-gray-400 font-bold mb-16 block animate-fade-up">
                    {CONTENT.servicesSection.title}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {CONTENT.servicesSection.items.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative border border-transparent rounded-[2.5rem] p-8 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 animate-fade-up overflow-hidden"
                            style={{
                                animationDelay: `${index * 150}ms`,
                                backgroundColor: CONTENT.theme.colors.card
                            }}
                        >
                            {/* Massive background number for premium feel */}
                            <div className="absolute right-1 -top-8 text-[clamp(8rem,15vw,12rem)] font-bold text-white opacity-[0.03] select-none group-hover:opacity-[0.05] transition-opacity duration-700">
                                {index + 1}
                            </div>

                            <div className="relative z-10">
                                <div
                                    className="w-12 h-12 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundColor: CONTENT.theme.colors.primary }}
                                >
                                    {getServiceIcon(service.id)}
                                </div>

                                <h3
                                    className="text-[clamp(1.8rem,3vw,3.5rem)] font-semibold mb-6 leading-tight"
                                    style={{ fontFamily: CONTENT.theme.fonts.heading, color: CONTENT.theme.colors.text }}
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className="text-[clamp(1rem,1.2vw,1.2rem)] mb-10 leading-relaxed max-w-md font-light"
                                    style={{ color: CONTENT.theme.colors.textLight }}
                                >
                                    {service.description}
                                </p>

                                <div className="h-[1px] w-full mb-10" style={{ backgroundColor: CONTENT.theme.colors.border }} />

                                <ul className="space-y-5">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-4 group/item">
                                            <div className="mt-1.5 w-5 h-5 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-white/30 transition-colors duration-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-white transition-colors duration-300" />
                                            </div>
                                            <span
                                                className="text-sm lg:text-base leading-snug"
                                                style={{ color: CONTENT.theme.colors.textLight }}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Divider with same padding as content */}
            <div className="w-full mt-32 h-[1px]" style={{ backgroundColor: CONTENT.theme.colors.border }} />
        </section>
    );
};

export default ServicesSection;
