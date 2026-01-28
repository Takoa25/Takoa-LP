import React from 'react';
import { CONTENT } from '../content';

interface FooterProps {
    onOpenPrivacy?: () => void;
    onOpenTerms?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
    return (
        <footer className="w-full px-6 lg:px-20 pb-10 pt-20 lg:pb-12 lg:pt-32">
            <div className="w-full border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: CONTENT.theme.colors.border }}>
                <div
                    className="text-[11px] lg:text-[12px] font-medium opacity-60"
                    style={{ color: CONTENT.theme.colors.textLight }}
                >
                    {CONTENT.footer.copyright}
                </div>

                <div className="flex gap-6">
                    <button
                        onClick={onOpenPrivacy}
                        className="text-[11px] lg:text-[12px] font-medium opacity-60 hover:opacity-100 transition-opacity underline-offset-4 hover:underline"
                        style={{ color: CONTENT.theme.colors.textLight }}
                    >
                        Política de Privacidade
                    </button>
                    <button
                        onClick={onOpenTerms}
                        className="text-[11px] lg:text-[12px] font-medium opacity-60 hover:opacity-100 transition-opacity underline-offset-4 hover:underline"
                        style={{ color: CONTENT.theme.colors.textLight }}
                    >
                        Termos de Uso
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
