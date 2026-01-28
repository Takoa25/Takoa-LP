import React, { useEffect } from 'react';
import { CONTENT } from '../content';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

interface TermsOfUseProps {
    onBack: () => void;
}

/* 
 * Reusing the same structure as PrivacyPolicy to maintain consistency 
 */
const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const { termsOfUse } = CONTENT;

    return (
        <div
            className="min-h-screen w-full relative"
            style={{ backgroundColor: CONTENT.theme.colors.background }}
        >
            {/* Header / Nav */}
            <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between">
                <Button
                    variant="ghost"
                    onClick={onBack}
                    className="flex items-center gap-2 hover:bg-white/5 text-white/80 hover:text-white"
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium">Voltar ao Início</span>
                </Button>
            </header>

            {/* Content */}
            <main className="pt-32 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1
                        className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
                        style={{ fontFamily: CONTENT.theme.fonts.heading }}
                    >
                        {termsOfUse.title}
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
                        <p className="whitespace-pre-line text-lg leading-relaxed mb-12 opacity-90">
                            {termsOfUse.introduction}
                        </p>

                        <div className="space-y-12">
                            {termsOfUse.sections.map((section, index) => (
                                <section key={index} className="scroll-mt-32">
                                    <h2
                                        className="text-2xl font-bold text-white mb-6"
                                        style={{ fontFamily: CONTENT.theme.fonts.heading }}
                                    >
                                        {section.title}
                                    </h2>

                                    <div className="space-y-4">
                                        {Array.isArray(section.content) ? (
                                            section.content.map((paragraph, pIndex) => (
                                                <p key={pIndex} className="leading-relaxed text-neutral-300">
                                                    {paragraph}
                                                </p>
                                            ))
                                        ) : (
                                            <p className="leading-relaxed text-neutral-300">
                                                {section.content}
                                            </p>
                                        )}
                                    </div>
                                </section>
                            ))}

                            <section className="bg-white/5 p-8 rounded-2xl border border-white/10 mt-16">
                                <h2
                                    className="text-xl font-bold text-white mb-4"
                                    style={{ fontFamily: CONTENT.theme.fonts.heading }}
                                >
                                    Dúvidas ou Comentários?
                                </h2>
                                <p className="text-neutral-300">
                                    {termsOfUse.contact.text}{' '}
                                    <a
                                        href={`mailto:${termsOfUse.contact.email}`}
                                        className="text-blue-500 hover:text-blue-400 font-semibold transition-colors"
                                    >
                                        {termsOfUse.contact.email}
                                    </a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Back to Top Button */}
            <div className="fixed bottom-8 right-8 z-40">
                <Button
                    onClick={scrollToTop}
                    className="rounded-full w-12 h-12 p-0 flex items-center justify-center bg-blue-600 hover:bg-blue-500 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                    aria-label="Voltar ao topo"
                >
                    <ArrowUp size={24} color="white" />
                </Button>
            </div>
        </div>
    );
};

export default TermsOfUse;
