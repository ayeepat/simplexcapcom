import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { LanguageProvider } from '@/lib/LanguageContext';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';

// Non-landing pages are code-split so visitors only download what they view.
const Fund = lazy(() => import('./pages/Fund'));
const Strategy = lazy(() => import('./pages/Strategy'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Team = lazy(() => import('./pages/Team'));
const MarketInsights = lazy(() => import('./pages/MarketInsights'));
const ForInvestors = lazy(() => import('./pages/ForInvestors'));
const Contact = lazy(() => import('./pages/Contact'));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-tiffany border-t-transparent animate-spin" />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Navigate to="/Home" replace />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Fund" element={<Fund />} />
              <Route path="/Strategy" element={<Strategy />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/MarketInsights" element={<MarketInsights />} />
              <Route path="/ForInvestors" element={<ForInvestors />} />
              <Route path="/Contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
