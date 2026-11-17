import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FloatingCTA() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const fromBottom = document.documentElement.scrollHeight - window.innerHeight - y;
      // Steps aside for the hero at the top and the footer at the bottom.
      setVisible(y > window.innerHeight * 0.6 && fromBottom > 360);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // The contact page is the destination, so the shortcut to it is hidden there.
  if (pathname === '/Contact') return null;

  return (
    <Link
      to="/Contact"
      className={`group hidden sm:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-paper/95 backdrop-blur-sm border border-ink-900/15 text-ink-900 text-[13px] font-medium px-5 py-3 shadow-[0_2px_16px_rgba(20,24,27,0.08)] hover:border-ink-900/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      aria-label={t('nav_inquire_full')}
      tabIndex={visible ? 0 : -1}
    >
      {t('nav_inquire')}
      <ArrowUpRight className="w-3.5 h-3.5 text-tiffany-700 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
