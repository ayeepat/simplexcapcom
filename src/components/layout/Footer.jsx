import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();

  const footerLinks = {
    [lang === 'ru' ? 'Компания' : 'Company']: [
      { label: t('nav_strategy'), path: '/Strategy' },
      { label: t('nav_portfolio'), path: '/Portfolio' },
    ],
    [t('footer_investors')]: [
      { label: t('nav_insights'), path: '/MarketInsights' },
      { label: t('nav_investors'), path: '/ForInvestors' },
      { label: t('nav_contact'), path: '/Contact' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            <span className="text-tiffany font-semibold">{lang === 'ru' ? 'Важный дисклеймер:' : 'Important Disclaimer:'}</span> {t('footer_disclaimer')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo3.png"
                alt="Simplex Capital"
                className="h-20 w-auto"
              />
              <span className="text-lg font-bold tracking-tight">Simplex Capital</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              {lang === 'ru'
                ? 'Содействуем технологическому развитию и экономической диверсификации через стратегические инвестиции в быстрорастущие технологические компании.'
                : 'Driving technological development, competitiveness, and economic diversification through strategic investments in high-growth tech companies.'}
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-tiffany uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2026 Simplex Capital. {t('footer_rights')}</p>
          <div className="flex gap-6">
            <Link to="/Contact" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">{lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}</Link>
            <Link to="/Contact" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">{lang === 'ru' ? 'Условия использования' : 'Terms of Use'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}