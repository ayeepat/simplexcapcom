import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FloatingCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Link
      to="/Contact"
      className={`hidden sm:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-paper/95 backdrop-blur-sm border border-ink-900/15 text-ink-900 text-[13px] font-medium px-5 py-3 shadow-[0_2px_16px_rgba(20,24,27,0.08)] hover:border-ink-900/40 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      aria-label={t('nav_inquire_full')}
    >
      {t('nav_inquire')}
      <ArrowUpRight className="w-3.5 h-3.5 text-tiffany-700" />
    </Link>
  );
}
