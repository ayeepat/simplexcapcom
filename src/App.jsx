import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { LanguageProvider } from '@/lib/LanguageContext';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import Strategy from './pages/Strategy';
import Portfolio from './pages/Portfolio';
import MarketInsights from './pages/MarketInsights';
import ForInvestors from './pages/ForInvestors';
import Contact from './pages/Contact';
import Fund from './pages/Fund';

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Navigate to="/Home" replace />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Fund" element={<Fund />} />
              <Route path="/Strategy" element={<Strategy />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/MarketInsights" element={<MarketInsights />} />
              <Route path="/ForInvestors" element={<ForInvestors />} />
              <Route path="/Contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;