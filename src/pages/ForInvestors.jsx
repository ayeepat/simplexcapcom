import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import TiltCard from '@/components/shared/TiltCard';
import SectionHeader from '@/components/shared/SectionHeader';
import Shape3D from '@/components/shared/Shape3D';
import Cta from '@/components/shared/Cta';
import { useLanguage } from '@/lib/LanguageContext';

const nextSteps = [
  'Review our Investment Strategy and Pipeline',
  'Schedule an introductory call with our Investor Relations team',
  'Receive detailed fund documentation and data room access',
  'Complete qualification and subscription process',
];

const nextStepsRu = [
  'Ознакомьтесь с нашей инвестиционной стратегией и пайплайном',
  'Запланируйте вводный звонок с командой по работе с инвесторами',
  'Получите подробную документацию фонда и доступ к Data Room',
  'Завершите квалификацию и процесс подписки',
];

export default function ForInvestors() {
  const { t, lang } = useLanguage();

  const valueAddItems = [
    { shape: 'sonar', title: lang === 'ru' ? 'Доступ к сети' : 'Network Access', description: lang === 'ru' ? '25+ лет проприетарных отношений с основателями, со-инвесторами, биржами и стратегическими партнёрами по всему миру.' : '25+ years of proprietary relationships with founders, co-investors, exchanges, and strategic partners worldwide.' },
    { shape: 'candles', title: lang === 'ru' ? 'Дивиденды и капитализация' : 'Dividends & Capitalization', description: lang === 'ru' ? 'Активное участие в советах директоров, оптимизация выручки и устойчивый рост стоимости.' : 'Active board participation driving revenue optimization, operational efficiency, and sustainable value creation.' },
    { shape: 'spiral', title: lang === 'ru' ? 'Международный рост' : 'International Growth', description: lang === 'ru' ? 'Стратегии выхода на глобальные рынки с поддержкой в регуляторных и партнёрских вопросах.' : 'Structured go-global strategies enabling portfolio companies to expand across markets with regulatory and partnership support.' },
    { shape: 'prism', title: lang === 'ru' ? 'Умные деньги' : 'Smart Money', description: lang === 'ru' ? 'Подбор управленцев, привлечение клиентов, M&A консультации и подготовка к IPO на биржах Лондона, Нью-Йорка и Москвы.' : 'Executive recruitment, customer introductions, M&A advisory, and comprehensive IPO preparation across London, NY, and Moscow exchanges.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-hero-md flex items-center">
        <div className="grain absolute inset-0 z-0">
          <img src="/images/forinvestors.webp" alt="For Investors" className="w-full h-full object-cover animate-hero-zoom" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="animate-fade-in-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('investors_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('investors_desc')}</p>
        </div>
      </section>

      {/* Value Add */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader shape="target" title={lang === 'ru' ? 'Больше чем капитал' : 'More than capital'} />
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-ink-900/10">
            {valueAddItems.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 80} className="border-r border-b border-ink-900/10">
                <TiltCard max={3} className="group card-hover p-8 h-full">
                  <div className="tilt-lift flex items-start justify-between mb-4">
                    <div className="font-mono text-xs text-tiffany-700">{String(i + 1).padStart(2, '0')}</div>
                    <Shape3D shape={item.shape} size={72} speed={0.6} seed={i * 1.2} tilt={0.5} hoverSpin follow={false} bob={false} className="-mr-3 -mt-4 text-ink-900/30 transition-colors duration-500 group-hover:text-tiffany-700" />
                  </div>
                  <h4 className="tilt-lift font-display text-xl text-ink-900 mb-3 transition-colors duration-300 group-hover:text-tiffany-700">{item.title}</h4>
                  <p className="text-ink-500 leading-relaxed">{item.description}</p>
                </TiltCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 sm:py-28">
        {/* Four next steps, four rising blocks. */}
        <Shape3D shape="steps" size={210} seed={1.8} speed={0.12} tilt={0.35} className="absolute -z-10 hidden md:block right-[6%] top-1/2 -translate-y-1/2 text-tiffany/45" />
        <Shape3D shape="icosa" size={120} seed={3.2} speed={0.18} className="absolute -z-10 hidden md:block left-[6%] bottom-14 text-paper/20" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h4 className="font-display text-3xl sm:text-4xl text-paper mb-12">{lang === 'ru' ? 'Следующие шаги' : 'Next Steps'}</h4>
            <div className="relative pl-10 mb-14">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-paper/15" />
              <div className="flow-line absolute left-[7px] top-2 bottom-2 w-px text-tiffany/40" aria-hidden="true" />
              <div className="space-y-8">
                {(lang === 'ru' ? nextStepsRu : nextSteps).map((step, i) => (
                  <div key={i} className="group relative cursor-default">
                    <div className="absolute -left-10 top-0.5 w-4 h-4 rounded-full border border-tiffany bg-ink-950 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-tiffany transition-transform duration-300 ease-out group-hover:scale-[1.8]" />
                    </div>
                    <p className="text-paper/70 leading-relaxed transition-[color,transform] duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-paper">
                      <span className="mr-3 font-mono text-[11px] text-tiffany/70">{String(i + 1).padStart(2, '0')}</span>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Cta to="/Contact" variant="inverse">{lang === 'ru' ? 'Начать диалог' : 'Start the Conversation'}</Cta>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
