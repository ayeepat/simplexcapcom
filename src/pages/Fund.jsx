import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Calendar, Clock, DollarSign, Shield, Network, TrendingUp, Users, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeInSection from '@/components/shared/FadeInSection';

export default function Fund() {
  const stats = [
    { icon: Target, label: 'Investment Focus', value: 'Series C/D' },
    { icon: Calendar, label: 'Fund Term', value: '10 Years' },
    { icon: Clock, label: 'Average Hold', value: '3-5 Years' },
    { icon: DollarSign, label: 'Target Fund Size', value: '$150M' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fund.jpg"
            alt="Global Vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/92 via-gray-900/80 to-gray-900/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-tiffany/20 text-tiffany rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-tiffany/30">
                Our Fund
              </span>
            </div>
            <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Simplex Capital
              <span className="block text-tiffany">Major International Fund</span>
            </h1>
            <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              A premier institutional-grade vehicle for strategic technology investments targeting high-growth companies positioned for global IPO success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col items-center text-center hover:bg-tiffany-50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:bg-tiffany-100 transition-colors flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-tiffany-700" />
                  </div>
                  <div className="text-xs font-semibold text-tiffany uppercase tracking-wider mb-3">{stat.label}</div>
                  <div className="text-lg font-bold text-gray-900 leading-snug">{stat.value}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>{/* Fund Structure */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
                <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-8">Fund Structure</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-tiffany-50 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-tiffany-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Limited Partners</h4>
                        <p className="text-sm text-gray-500">Institutional investors, family offices, and strategic partners globally</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-tiffany" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border-2 border-tiffany">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-tiffany flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Simplex Capital Major International Fund</h4>
                        <p className="text-sm text-gray-500">Cayman Islands-domiciled Limited Partnership providing institutional governance and transparency</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-tiffany" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-tiffany-50 flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-tiffany-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Portfolio Companies</h4>
                        <p className="text-sm text-gray-500">High-growth technology companies across Series C/D stage with clear IPO pathways</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Simplex Capital Fund</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>Our fund combines institutional-grade governance with operational expertise spanning 25+ years in PE/VC across global markets.</p>
                  <p>We leverage proprietary deal flow and sector expertise to identify and support tomorrow's technology leaders before they reach IPO scale.</p>
                  <p>Active board participation, strategic support, and access to our extensive network accelerate portfolio company growth and exits.</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section> {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 sm:p-14">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Invest?</h3>
              <p className="text-gray-400 text-lg mb-8">Join institutional investors in backing the next generation of technology leaders.</p>
              <Link to="/Contact">
                <Button size="lg" className="bg-tiffany hover:bg-tiffany-dark text-white rounded-full px-8">
                  Inquire About Investing <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}