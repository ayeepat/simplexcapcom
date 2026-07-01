import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';
import { prefetchRoute } from '@/lib/prefetch';

export default function Footer() {
  const { t, lang } = useLanguage();

  const footerLinks = {
    [lang === 'ru' ? 'Компания' : 'Company']: [
      { label: t('nav_strategy'), path: '/Strategy' },
      { label: t('nav_portfolio'), path: '/Portfolio' },
      { label: t('nav_team'), path: '/Team' },
    ],
    [t('footer_investors')]: [
      { label: t('nav_insights'), path: '/MarketInsights' },
      { label: t('nav_investors'), path: '/ForInvestors' },
      { label: t('nav_contact'), path: '/Contact' },
    ],
  };

  const office = { city: lang === 'ru' ? 'Москва' : 'Abu Dhabi', country: lang === 'ru' ? 'Россия' : 'UAE' };

  return (
    <footer className="bg-ink-950 text-paper">
      <div className="border-b border-paper/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="font-mono text-[11px] text-paper/50 leading-relaxed tracking-wide">
            <span className="text-tiffany">{lang === 'ru' ? 'ВАЖНЫЙ ДИСКЛЕЙМЕР — ' : 'IMPORTANT DISCLOSURE — '}</span>
            {t('footer_disclaimer')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo-mark.webp" alt="Simplex Capital" className="h-14 w-auto" width="62" height="56" loading="lazy" decoding="async" />
              <span className="font-display text-2xl tracking-tight leading-none">Simplex Capital</span>
            </div>
            <p className="text-paper/50 leading-relaxed max-w-sm mb-8">
              {lang === 'ru'
                ? 'Содействуем технологическому развитию и экономической диверсификации через стратегические инвестиции в быстрорастущие технологические компании.'
                : 'Driving technological development, competitiveness, and economic diversification through strategic investments in high-growth tech companies.'}
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/40">
              <span className="text-paper/70">{office.city}</span> · {office.country}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-mono text-[11px] font-medium text-tiffany uppercase tracking-[0.16em] mb-5">{title}</h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onMouseEnter={() => prefetchRoute(link.path)}
                        onTouchStart={() => prefetchRoute(link.path)}
                        className="text-paper/60 hover:text-paper text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="font-mono text-[11px] font-medium text-tiffany uppercase tracking-[0.16em] mb-5">
                {lang === 'ru' ? 'Контакт' : 'Contact'}
              </h4>
              <ul className="space-y-3.5 text-sm text-paper/60">
                <li>ir@simplex-cap.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-paper/40 tracking-wide">© 2026 SIMPLEX CAPITAL. {t('footer_rights').toUpperCase()}</p>
          <div className="flex gap-6">
            <Link to="/Contact" className="font-mono text-[11px] text-paper/40 hover:text-paper/70 tracking-wide transition-colors">
              {lang === 'ru' ? 'КОНФИДЕНЦИАЛЬНОСТЬ' : 'PRIVACY POLICY'}
            </Link>
            <Link to="/Contact" className="font-mono text-[11px] text-paper/40 hover:text-paper/70 tracking-wide transition-colors">
              {lang === 'ru' ? 'УСЛОВИЯ' : 'TERMS OF USE'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
