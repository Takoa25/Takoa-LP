import { WhatsAppIcon } from "./Icons";
import { CONTENT } from "../content";
import { useState } from "react";
import { motion } from "framer-motion";

interface WhatsappContactButtonProps {
    href?: string;
    className?: string;
    layoutId?: string;
}

export function WhatsappContactButton({ href, className, layoutId }: WhatsappContactButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const whatsappNumber = CONTENT.finalCta.whatsappNumber;
    const targetHref = href || `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(CONTENT.contact.defaultWhatsappMessage)}`;

    const colors = CONTENT.theme.colors.contactButton;

    return (
        /* 
            AJUSTE DE TAMANHO DO BOTÃO:
            - LARGURA: Altere 'px-8' para aumentar o preenchimento interno ou use classes como 'w-64' para largura fixa.
            - ESPAÇAMENTO DO ÍCONE: 'pr-12' garante que o texto não bata no ícone da direita.
            - ALTURA: Atualmente em 'h-14'. Pode ser alterado para 'h-12', 'h-16', etc.
        */
        <motion.a
            layoutId={layoutId}
            href={targetHref}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            /* Base styles from Button + Custom styles combined */
            className={`group relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap px-8 pr-12 h-14 w-64 rounded-full font-semibold text-[15px] border-2 cursor-pointer ${className}`}
            style={{
                backgroundColor: isHovered ? colors.hover : CONTENT.theme.colors.sidebarBackground,
                borderColor: isHovered ? colors.hover : colors.bg,
                color: colors.text
            }}
            transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] // Custom ease curve for smooth UI movement
            }}
        >
            {/* Texto do Botão */}
            <span className="relative z-20 flex items-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-4">
                Entrar em contato
            </span>

            {/* Círculo do Ícone do WhatsApp que Expande no Hover */}
            <i
                className="absolute right-1 top-1 bottom-1 aspect-square rounded-full z-10 grid place-items-center transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-[calc(100%-0.5rem)] group-hover:aspect-auto"
                style={{
                    backgroundColor: colors.bg
                }}
            >
                <WhatsAppIcon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" style={{ color: colors.text }} />
            </i>
        </motion.a>
    );
}
