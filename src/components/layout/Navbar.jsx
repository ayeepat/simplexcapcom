import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useLanguage } from '@/lib/LanguageContext';
import Cta from '@/components/shared/Cta';
import { prefetchRoute } from '@/lib/prefetch';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t('nav_home'), path: '/Home' },
    { label: 'Fund', path: '/Fund' },
    { label: t('nav_strategy'), path: '/Strategy' },
    { label: t('nav_portfolio'), path: '/Portfolio' },
    { label: t('nav_team'), path: '/Team' },
    { label: t('nav_insights'), path: '/MarketInsights' },
    { label: t('nav_investors'), path: '/ForInvestors' },
    { label: t('nav_contact'), path: '/Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-paper/95 backdrop-blur-md ${
        scrolled ? 'border-b border-ink-900/10' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/Home" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo-mark.webp"
              alt="Simplex Capital - Tech Venture Capital & Strategic Technology Investments"
              className="h-14 w-auto"
              width="62"
              height="56"
              fetchpriority="high"
              decoding="async"
            />
            <span className="hidden sm:block font-display text-lg text-ink-900 tracking-tight leading-none">
              Simplex Capital
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => prefetchRoute(link.path)}
                  onTouchStart={() => prefetchRoute(link.path)}
                  onFocus={() => prefetchRoute(link.path)}
                  className={`relative py-2 font-sans text-[13px] font-medium uppercase tracking-[0.08em] transition-colors whitespace-nowrap ${
                    active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-px bg-tiffany-700 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center">
            <Cta
              to="/Contact"
              variant="ghost"
              onMouseEnter={() => prefetchRoute('/Contact')}
              className="font-sans px-5 py-2.5 text-[12px] tracking-[0.08em]"
            >
              {t('nav_inquire')}
            </Cta>
          </div>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-ink-900" aria-label="Toggle navigation menu">
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 bg-paper border-l border-ink-900/10">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-ink-900/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/logo-mark.webp"
                        alt="Simplex Capital"
                        className="h-12 w-auto"
                        width="54"
                        height="48"
                        decoding="async"
                      />
                      <span className="font-display text-lg text-ink-900 leading-none">Simplex Capital</span>
                    </div>
                  </div>
                  <div className="flex-1 py-4 overflow-y-auto">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        onTouchStart={() => prefetchRoute(link.path)}
                        className={`block px-6 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.08em] transition-colors border-l-2 ${
                          location.pathname === link.path
                            ? 'text-ink-900 border-tiffany-700 bg-ink-900/[0.03]'
                            : 'text-ink-500 border-transparent hover:text-ink-900 hover:bg-ink-900/[0.03]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="p-6 border-t border-ink-900/10">
                    <Cta
                      to="/Contact"
                      variant="primary"
                      onClick={() => setOpen(false)}
                      onTouchStart={() => prefetchRoute('/Contact')}
                      className="font-sans w-full justify-center"
                    >
                      {t('nav_inquire_full')}
                    </Cta>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
