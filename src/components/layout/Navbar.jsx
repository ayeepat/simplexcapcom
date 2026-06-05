import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/lib/LanguageContext';

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
    { label: t('nav_insights'), path: '/MarketInsights' },
    { label: t('nav_investors'), path: '/ForInvestors' },
    { label: t('nav_contact'), path: '/Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/Home" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/images/logo3.png"
              alt="Simplex Capital"
              className="h-20 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900 tracking-tight">Simplex Capital</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2.5 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-tiffany-700 bg-tiffany-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/Contact">
              <Button className="bg-tiffany hover:bg-tiffany-dark text-white rounded-full px-5 text-sm">
                {t('nav_inquire')}
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-600" aria-label="Toggle navigation menu">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/logo3.png"
                        alt="Simplex Capital"
                        className="h-16 w-auto"
                      />
                      <span className="text-lg font-bold text-gray-900">Simplex Capital</span>
                    </div>
                  </div>
                  <div className="flex-1 py-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`block px-6 py-3 text-base font-medium transition-colors ${
                          location.pathname === link.path
                            ? 'text-tiffany-700 bg-tiffany-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="p-6 border-t">
                    <Link to="/Contact" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-tiffany hover:bg-tiffany-dark text-white rounded-full">
                        {t('nav_inquire_full')}
                      </Button>
                    </Link>
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