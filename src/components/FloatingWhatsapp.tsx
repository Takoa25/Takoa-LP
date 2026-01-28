import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../content';

const FloatingWhatsapp: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Pegando as informações diretamente do nosso CONTENT
    const whatsappNumber = CONTENT.contact.social.find(s => s.name === "WhatsApp")?.url.split('wa.me/')[1] || "5511999999999";

    const handleClick = () => {
        const message = encodeURIComponent(CONTENT.contact.defaultWhatsappMessage);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    useEffect(() => {
        const handleScroll = () => {
            const target = document.getElementById('final-cta-title');
            if (target) {
                const rect = target.getBoundingClientRect();
                // Se o topo da frase final atingir a tela, o botão flutuante some suavemente
                const isHeadingVisible = rect.top <= window.innerHeight - 80;
                setIsVisible(!isHeadingVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Rodar uma vez no mount para o caso do usuário já estar lá embaixo
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        /* lg:hidden garante que só apareça no mobile/tablet */
        <div className="fixed bottom-6 right-6 z-[999] lg:hidden pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        key="floating-whatsapp-btn"
                        onClick={handleClick}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] cursor-pointer overflow-visible group pointer-events-auto"
                        style={{ backgroundColor: CONTENT.theme.colors.whatsapp }}
                    >
                        {/* Efeito de Ondas (Pulse) */}
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    scale: [1, 1.6],
                                    opacity: [0, 0.3, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 1,
                                }}
                                className="absolute inset-0 rounded-full"
                                style={{ backgroundColor: CONTENT.theme.colors.whatsapp }}
                            />
                        ))}

                        <WhatsAppIcon className="relative z-10 w-7 h-7" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingWhatsapp;
