import React from 'react';
import { CONTENT } from '../content';
import TakoaLogo from './TakoaLogo';
import { Typewriter } from './Typewriter';
import { WhatsappContactButton } from './WhatsappContactButton';
import { AnimatePresence } from 'framer-motion';
import { Starfield } from './ui/starfield-1';

interface SidebarProps {
  isLanded?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isLanded }) => {
  const [bgColor, setBgColor] = React.useState(CONTENT.theme.colors.sidebarBackgroundMobile);

  React.useEffect(() => {
    const handleResize = () => {
      setBgColor(window.innerWidth >= 1024
        ? CONTENT.theme.colors.sidebarBackground
        : CONTENT.theme.colors.sidebarBackgroundMobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id="hero"
      className="relative flex flex-col w-full min-h-[100dvh] lg:h-screen lg:fixed lg:left-0 lg:top-0 lg:w-[33.33%] p-8 md:p-14 lg:p-10 z-[100] overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      {/* Starfield Background Layer - Visible ONLY on mobile/tablet (< lg) */}
      <div className="absolute inset-0 z-0 lg:hidden user-select-none">
        <Starfield
          starColor="rgba(255, 255, 255, 0.9)"
          bgColor={CONTENT.theme.colors.sidebarBackgroundMobile}
          /* 
             Para ajustar a animação no mobile:
             - quantity: Aumente para ter mais estrelas (ex: 250, 300)
             - speed: Aumente para as estrelas se moverem mais rápido (ex: 1.0, 1.5)
             - starColor: Altere o último valor (0.9) para aumentar a opacidade/brilho
          */
          quantity={200}
          speed={0.8}
          clickToWarp={true}
          tiltAdjust={true}
          mouseAdjust={true}
        />
      </div>

      {/* Container Superior: Logo - z-index higher than background */}
      <div className="flex-none z-10">
        <a href="/" className="block w-[clamp(110px,8vw,150px)]">
          <TakoaLogo className="w-full h-auto" />
        </a>
      </div>

      {/* Container Central: Headline, Subheadline & CTA - z-index higher than background */}
      <div className="flex-1 flex flex-col justify-center gap-8 lg:gap-12 animate-fade-up z-10">
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
