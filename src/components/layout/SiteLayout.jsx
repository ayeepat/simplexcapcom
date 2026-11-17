import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

export default function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 lg:pt-24">
        <div key={pathname} className="animate-page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
