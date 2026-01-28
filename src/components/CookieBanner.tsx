import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../content';
import { Button } from './Button';
import { X, ChevronRight, Check } from 'lucide-react';

/* 
 * TYPES 
 */
type CookieCategory = "essential" | "marketing" | "analytics";
type ConsentState = Record<CookieCategory, boolean>;

const STORAGE_KEY = 'takoa_cookie_consent';

interface CookieBannerProps {
    onOpenPrivacy?: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);

    // Default: essential is always true, others false initially
    const [consents, setConsents] = useState<ConsentState>({
        essential: true,
        marketing: false,
        analytics: false
    });

    useEffect(() => {
        const storedConsent = localStorage.getItem(STORAGE_KEY);
        if (!storedConsent) {
            // Delay appearance slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        } else {
            // Load saved preferences just in case we need them (e.g. for re-opening banner logic later)
            setConsents(JSON.parse(storedConsent));
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            essential: true,
            marketing: true,
            analytics: true
        };
        saveConsent(allAccepted);
    };

    const handleDeny = () => {
        const allDenied = {
            essential: true, // Always true
            marketing: false,
            analytics: false
        };
        saveConsent(allDenied);
    };

    const handleSavePreferences = () => {
        saveConsent(consents);
    };

    // Explicitly handle "Reject" button inside preferences -> same as "Deny" but explicitly from that screen
    const handleRejectPreferences = () => {
        const allDenied = {
            essential: true,
            marketing: false,
            analytics: false
        };
        saveConsent(allDenied);
    };

    const saveConsent = (finalConsents: ConsentState) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(finalConsents));
        setConsents(finalConsents);
        setIsVisible(false);
        // Here you would trigger external scripts (GA, Pixel, etc.) based on the consent
        console.log("Consent saved:", finalConsents);
    };

    const toggleCategory = (id: string) => {
        if (id === 'essential') return; // Cannot toggle essential
        const updateId = id as CookieCategory;
        setConsents(prev => ({ ...prev, [updateId]: !prev[updateId] }));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 flex justify-center pointer-events-none">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="w-full max-w-5xl bg-[#161616]/95 backdrop-blur-md border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row"
                        style={{ fontFamily: CONTENT.theme.fonts.sans }}
                    >
                        {/* =======================
                            MAIN BANNER VIEW
                           ======================= */}
                        {!showPreferences ? (
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center bg-[#161616]">
                                <div className="flex-1 space-y-3 text-left w-full md:w-auto">
                                    <h3
                                        className="text-lg font-bold text-white mb-2"
                                        style={{ fontFamily: CONTENT.theme.fonts.heading }}
                                    >
                                        {CONTENT.cookieBanner.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        Utilizamos cookies para melhorar sua experiência, analisar o tráfego e fornecer conteúdo personalizado. Você pode aceitar todos ou gerenciar suas preferências abaixo. Leia nossa <button onClick={onOpenPrivacy} className="text-blue-500 hover:text-blue-400 transition-colors font-medium underline underline-offset-2">Política de Privacidade</button>.
                                    </p>
                                </div>

                                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto shrink-0 items-center md:items-center">
                                    <Button
                                        onClick={handleAcceptAll}
                                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 font-semibold w-full md:w-auto transition-colors"
                                    >
                                        {CONTENT.cookieBanner.acceptAllLabel}
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={handleDeny}
                                        className="border-neutral-700 hover:bg-neutral-800 text-neutral-300 w-full md:w-auto"
                                    >
                                        {CONTENT.cookieBanner.denyLabel}
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={() => setShowPreferences(true)}
                                        className="border-neutral-700 hover:bg-neutral-800 text-neutral-300 w-full md:w-auto"
                                    >
                                        {CONTENT.cookieBanner.preferencesLabel}
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            /* =======================
                                PREFERENCES VIEW
                               ======================= */
                            <div className="w-full flex flex-col h-full max-h-[80vh] md:max-h-auto bg-[#161616]">
                                {/* Header */}
                                <div className="p-6 border-b border-neutral-800 flex justify-between items-center bg-[#161616]">
                                    <div>
                                        <h3
                                            className="text-xl font-bold text-white"
                                            style={{ fontFamily: CONTENT.theme.fonts.heading }}
                                        >
                                            {CONTENT.cookieBanner.preferences.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setShowPreferences(false)}
                                        className="p-2 hover:bg-neutral-800 rounded-full text-neutral-400 transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Content Scrollable */}
                                <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar bg-[#161616]">
                                    <p className="text-sm text-neutral-400 mb-6">
                                        {CONTENT.cookieBanner.preferences.description}
                                    </p>

                                    <div className="space-y-4">
                                        {CONTENT.cookieBanner.preferences.categories.map((category) => (
                                            <div
                                                key={category.id}
                                                className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/50 flex flex-col sm:flex-row justify-between gap-4"
                                            >
                                                <div className="flex-1 pr-4">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-semibold text-white text-sm">
                                                            {category.title}
                                                        </span>
                                                        {category.required && (
                                                            <span className="text-[10px] uppercase tracking-wider font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full border border-blue-400/20">
                                                                Sempre Ativo
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-neutral-500">
                                                        {category.description}
                                                    </p>
                                                </div>

                                                {/* Toggle Switch - Fixed overflow issue */}
                                                <div className="flex items-start pt-1 shrink-0">
                                                    <button
                                                        onClick={() => toggleCategory(category.id)}
                                                        disabled={category.required}
                                                        className={`
                                                            relative w-11 h-6 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/20 flex items-center
                                                            ${category.required || consents[category.id as CookieCategory] ? 'bg-blue-600' : 'bg-neutral-700'}
                                                            ${category.required ? 'cursor-not-allowed opacity-80' : 'cursor-pointer hover:bg-neutral-600'}
                                                        `}
                                                    >
                                                        <span
                                                            className={`
                                                                pointer-events-none inline-block w-4 h-4 rounded-full bg-white shadow transform transition duration-200 ease-in-out ml-1
                                                                ${(category.required || consents[category.id as CookieCategory]) ? 'translate-x-5' : 'translate-x-0'}
                                                            `}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Actions */}
                                <div className="p-6 border-t border-neutral-800 flex justify-end gap-3 bg-[#161616]">
                                    <Button
                                        variant="outline"
                                        onClick={handleRejectPreferences}
                                        className="border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                                    >
                                        {CONTENT.cookieBanner.preferences.rejectLabel}
                                    </Button>
                                    <Button
                                        onClick={handleSavePreferences}
                                        className="bg-blue-600 hover:bg-blue-700 text-white min-w-[120px]"
                                    >
                                        {CONTENT.cookieBanner.preferences.saveLabel}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
