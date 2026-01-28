import React, { useState, useEffect } from 'react';
import { CONTENT } from '../content';
import { WhatsAppIcon } from './Icons';
import TakoaLogo from './TakoaLogo';
import { Typewriter } from './Typewriter';
import { WhatsappContactButton } from './WhatsappContactButton';

import { AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isLanded?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isLanded }) => {
  return (
    <div
      id="hero"
      className="flex flex-col w-full min-h-[100dvh] lg:h-screen lg:fixed lg:left-0 lg:top-0 lg:w-[33.33%] p-8 md:p-14 lg:p-10 z-[100] overflow-hidden"
      style={{ backgroundColor: CONTENT.theme.colors.sidebarBackground }}
    >
      {/* Container Superior: Logo */}
      <div className="flex-none">
        <a href="/" className="block w-[clamp(110px,8vw,150px)]">
          <TakoaLogo className="w-full h-auto" />
        </a>
      </div>

      {/* Container Central: Headline, Subheadline & CTA */}
      <div className="flex-1 flex flex-col justify-center gap-8 lg:gap-12 animate-fade-up">
        <h1
          className="text-[clamp(3.5rem,5.5vh,5rem)] font-semibold leading-[1.05] tracking-tight"
          style={{ fontFamily: CONTENT.theme.fonts.heading, color: CONTENT.theme.colors.sidebarTitle }}
        >
          Sua clínica é única, <br />
          <span style={{ color: CONTENT.theme.colors.sidebarHighlight }}>
            seu site também deve ser.
          </span>
        </h1>

        <p
          className="text-[clamp(1.3rem,1.8vh,1.25rem)] leading-relaxed font-light max-w-[95%] min-h-[5em] lg:min-h-[4em]"
          style={{ color: CONTENT.theme.colors.textLight }}
        >
          {CONTENT.homeHero.subtitlePrefix}
          <Typewriter
            texts={CONTENT.homeHero.subtitleTexts}
            speed={100}
            deleteSpeed={50}
            delayBetweenTexts={1000}
          />
        </p>

        {/* Botão de Contato: Agora com o mesmo espaçamento (gap) dos textos no desktop */}
        <div className="hidden lg:block h-14">
          <AnimatePresence>
            {!isLanded && (
              <WhatsappContactButton layoutId="contact-button-shared" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
