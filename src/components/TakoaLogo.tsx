import React from 'react';
import { CONTENT } from '../content';

interface TakoaLogoProps {
    className?: string;
}

const TakoaLogo: React.FC<TakoaLogoProps> = ({ className = '' }) => {
    return (
        <svg
            viewBox="0 0 200 75"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* TAKOA - Russo One, vermelho */}
            <text
                x="0"
                y="35"
                fontFamily="'Russo One', sans-serif"
                fontSize="40"
                fontWeight="400"
                fill={CONTENT.theme.colors.menuHover}
                letterSpacing="1"
            >
                TAKOA
            </text>

            {/* digital - Averia Serif Libre, cor clara */}
            <text
                x="8"
                y="58"
                fontFamily="'Averia Serif Libre', serif"
                fontSize="24"
                fontWeight="300"
                fill={CONTENT.theme.colors.text}
                letterSpacing="2"
                opacity="0.9"
            >
                digital
            </text>
        </svg>
    );
};

export default TakoaLogo;
