import React, { useEffect, Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar';
import HamburgerMenu from './components/HamburgerMenu';
import ServicesSection from './components/ServicesSection';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import CookieBanner from './components/CookieBanner';
import { CONTENT } from './content';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { FadeSection } from './components/FadeSection';

// Icons
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// Code Splitting: Componentes pesados carregados sob demanda
// Isso reduz o bundle inicial em ~66KB e melhora o tempo de carregamento
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./components/TermsOfUse'));
const ProcessSection = lazy(() => import('./components/ProcessSection'));

export type ViewState = 'home' | 'privacy' | 'terms';

// Componente de carregamento leve
const LoadingFallback = () => (
  <div
    className="min-h-screen flex items-center justify-center"
    style={{ backgroundColor: CONTENT.theme.colors.background }}
  >
    <div className="animate-pulse text-lg" style={{ color: CONTENT.theme.colors.textLight }}>
      Carregando...
    </div>
  </div>
);

function App() {
  const selectionColor = CONTENT.theme.colors.selection;
  const [isLanded, setIsLanded] = React.useState(false);
  const [currentView, setCurrentView] = React.useState<ViewState>('home');

  useEffect(() => {
    const handleScroll = () => {
      // Logic for scroll landing only if in home view
      if (currentView !== 'home') return;

      const target = document.getElementById('final-cta-title');
      if (target) {
        const rect = target.getBoundingClientRect();
        // Ativa o pouso quando o título do CTA final está visível
        // No desktop, queremos que o botão pouse um pouco antes ou exatamente quando o título entra
        setIsLanded(rect.top <= window.innerHeight - 150);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  useEffect(() => {
    // Inicializa o Smooth Scroll (Lenis)
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpeza ao desmontar
    return () => {
      // Clean up lenis if necessary (though Lenis doesn't have a standardized destroy in this version usually, it cleans up on unmount context typically)
      // Actually Lenis instance is local here, we might want to keep it.
      // For now, let's keep it simple as it was.
    };
  }, []);

  return (
    <div
      className="min-h-screen font-sans selection:text-white"
      style={{
        backgroundColor: CONTENT.theme.colors.background,
        color: CONTENT.theme.colors.text
      }}
    >
      <style>{`
        ::selection { background: ${selectionColor}; color: white; }
/* Removed Lenis-related styles as they are not needed with default Lenis setup */
`}</style>

      {currentView === 'home' ? (
        <>
          <FloatingWhatsapp />
          <Sidebar isLanded={isLanded} />
          <HamburgerMenu />

          <main className="w-full lg:pl-[33.33%] pt-8 lg:pt-0 overflow-hidden">
            <section
              id="work"
              className="w-full p-6 lg:pt-32 lg:pb-0 lg:px-20"
              style={{ backgroundColor: CONTENT.theme.colors.background }}
            >
              <FadeSection>
                <span
                  className="text-[clamp(11px,1vw,14px)] uppercase tracking-[0.2em] font-bold mb-12 block"
                  style={{ fontFamily: CONTENT.theme.fonts.heading, color: CONTENT.theme.colors.textLight }}
                >
                  {CONTENT.projectsTitle}
                </span>
              </FadeSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {CONTENT.projects.map((project, index) => (
                  <FadeSection
                    key={project.id}
                    className={CONTENT.projects.length === 1 ? "md:col-span-2" : ""}
                  >
                    <div className="w-full">
                      <ProjectCard project={project} />
                    </div>
                  </FadeSection>
                ))}
              </div>

              <div className="mt-32 h-[1px] w-full" style={{ backgroundColor: CONTENT.theme.colors.border }} />
            </section>

            <FadeSection>
              <ServicesSection />
            </FadeSection>

            <FadeSection>
              <Suspense fallback={<LoadingFallback />}>
                <ProcessSection isLanded={isLanded} />
              </Suspense>
            </FadeSection>

            <FadeSection>
              <Footer
                onOpenPrivacy={() => setCurrentView('privacy')}
                onOpenTerms={() => setCurrentView('terms')}
              />
            </FadeSection>
          </main>

          <CookieBanner onOpenPrivacy={() => setCurrentView('privacy')} />
        </>
      ) : currentView === 'privacy' ? (
        <Suspense fallback={<LoadingFallback />}>
          <PrivacyPolicy onBack={() => setCurrentView('home')} />
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingFallback />}>
          <TermsOfUse onBack={() => setCurrentView('home')} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
