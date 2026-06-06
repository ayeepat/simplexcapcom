import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatCounter from '@/components/shared/StatCounter';
import FadeInSection from '@/components/shared/FadeInSection';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const teaserCards = [
    {
      icon: TrendingUp,
      title: t('home_card_strategy_title'),
      description: t('home_card_strategy_desc'),
      link: '/Strategy',
    },
    {
      icon: Briefcase,
      title: t('home_card_portfolio_title'),
      description: t('home_card_portfolio_desc'),
      link: '/Portfolio',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home.jpg"
            alt="Simplex Capital - Tech Venture Capital & Strategic Technology Investments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
              {t('home_hero_title')}
            </h1>
            <h2 className="animate-fade-in-up-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-tiffany leading-tight mb-6">
              {t('home_hero_subtitle')}
            </h2>
            <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              {t('home_hero_desc')}
            </p>
            <div className="animate-fade-in-up-delay-3 flex flex-wrap gap-4">
              <Link to="/Strategy">
                <Button size="lg" className="bg-tiffany hover:bg-tiffany-dark text-white rounded-full px-8 text-base h-12">
                  {t('home_explore_strategy')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            <StatCounter prefix="$" value={500} suffix="M" label={t('home_stats_fum')} delay={0} />
            <StatCounter prefix="$" value={5} suffix="B+" label={t('home_stats_aum')} delay={100} />
            <StatCounter value={25} suffix="+" label={t('home_stats_exp')} delay={200} />
            <StatCounter value={50} suffix="+" label={t('home_stats_ipo')} delay={300} />
            <StatCounter value={10} suffix="x" label={t('home_stats_growth')} delay={400} />
          </div>
        </div>
      </section>

      {/* Teaser Cards */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teaserCards.map((card, i) => (
              <FadeInSection key={card.title} delay={i * 100}>
                <Link to={card.link} className="group block">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-tiffany-50 flex items-center justify-center mb-6 group-hover:bg-tiffany-100 transition-colors">
                      <card.icon className="w-6 h-6 text-tiffany-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <div className="h-20 mb-4 flex items-start">
                      {card.link === '/Strategy' ? (
                        <div className="flex flex-wrap gap-1.5 content-start">
                          {card.description.split(' · ').map((theme) => (
                            <span key={theme} className="inline-block text-xs font-medium text-tiffany-700 bg-tiffany-50 rounded-full px-2.5 py-1 leading-tight">{theme}</span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 leading-relaxed">{card.description}</p>
                      )}
                    </div>
                    <span className="text-tiffany-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                      {t('home_learn_more')} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Market Quote */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <div className="text-5xl text-tiffany mb-8">"</div>
            <blockquote className="text-2xl sm:text-3xl font-light text-gray-700 leading-relaxed mb-8">
              {t('home_quote')}
            </blockquote>
            <cite className="text-gray-400 text-sm">{t('home_quote_source')}</cite>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}