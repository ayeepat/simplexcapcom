import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import SectionHeader from '@/components/shared/SectionHeader';
import Eyebrow from '@/components/shared/Eyebrow';

const valueAdd = [
  { title: 'Network Pipeline', description: 'Proprietary deal flow through 25+ years of relationships with founders, co-investors, and advisors across global tech ecosystems.' },
  { title: 'Selection System', description: 'Rigorous multi-stage due diligence combining quantitative scoring, market analysis, and deep sector expertise.' },
  { title: 'Legal Support', description: 'Full legal and regulatory guidance for portfolio companies navigating complex multi-jurisdictional environments.' },
  { title: 'Go Global', description: 'Strategic support for international expansion including market entry, partnerships, and regulatory compliance.' },
  { title: 'Dividends & Capitalization', description: 'Active board participation driving revenue growth, operational efficiency, and sustainable capitalization increases.' },
  { title: 'Smart Money', description: 'Beyond capital: executive recruitment, customer introductions, M&A advisory, and IPO preparation support.' },
];

const teamMembers = [
  {
    name: 'Anna Ermakova',
    title: 'Founder, Managing Partner',
    bio: 'Over 20 years of experience in PE&VC, fund creation and management, IB and M&A transactions. Partner and CEO at DaVinci Capital Group (Moscow, London). Board member at ITI Capital. Launched the Da Vinci Pre-IPO Tech Fund ($70M, 2019) and Da Vinci Emerging Technologies Fund III (first close $100M, 2021/2022). Mono-fund deals: $50M – GettTaxi; $80M TON; $100M deep tech Ocsial. Previously Director of Investment Programs at RVC. Extensive deep tech experience: new materials, electric vehicles, next-gen batteries. IPO Softline, DataArt, Ozon (pre-IPO), Gett, TON, Ocsial and others.',
    initials: 'AE',
  },
  {
    name: 'Gennady Margolit',
    title: 'Founder, Partner',
    bio: 'Over 25 years in senior roles at Moscow Exchange, overseeing the equity market. In the last 10 years specialized in developing IPO pathways for growth companies, tech leaders, and national champions. Member of the MOEX Growth Sector Council, chairs the APKIT Investment Council. Served on investment committees of venture funds (RVC-DaVinci Capital, Moscow Venture Fund), participated in forming the VTB pre-IPO fund. Founded FinTech startups — two pre-IPO investment platforms (one with Rosnano, RVC, DaVinci; another with Voskhod Capital), both active. Partner at an investment consultancy.',
    initials: 'GM',
  },
];

export default function Team() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-hero-md flex items-center">
        <div className="grain absolute inset-0 z-0">
          <img src="/images/team.webp" alt="Team" className="w-full h-full object-cover animate-hero-zoom" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="flex justify-center mb-6"><Eyebrow index="01" invert>Our Team</Eyebrow></div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">25+ Years · 50+ IPOs · 10&times; Growth</h1>
          <p className="text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">
            A founding team with decades of hands-on experience building, investing in, and taking technology companies public across global exchanges.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-paper py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="02" label="Founding Partners" title="The people behind the fund" />
          <div className="border-t border-ink-900/10">
            {teamMembers.map((member, i) => (
              <FadeInSection key={member.name} delay={i * 100}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-14 border-b border-ink-900/10">
                  <div className="lg:col-span-4">
                    <div className="w-20 h-20 border border-ink-900/20 flex items-center justify-center mb-6">
                      <span className="font-display text-2xl text-ink-900">{member.initials}</span>
                    </div>
                    <h4 className="font-display text-2xl text-ink-900 mb-1.5">{member.name}</h4>
                    <p className="font-mono text-[11px] text-tiffany-700 uppercase tracking-[0.14em]">{member.title}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-ink-500 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Success */}
      <section className="bg-ink-950 py-16 border-y border-paper/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="font-display text-xl sm:text-2xl text-paper text-center leading-relaxed">
              Proven track record of successful exits and value creation in the technology sector — <span className="text-tiffany italic">50+ IPOs, 25+ years,</span> with an average 10&times; capitalization growth across global exchanges.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Value Add */}
      <section className="bg-paper py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" index="03" label="How We Add Value" title="Smart money in action" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink-900/10">
            {valueAdd.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 80} className="border-r border-b border-ink-900/10">
                <div className="p-7 h-full">
                  <div className="font-mono text-xs text-tiffany-700 mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h4 className="font-display text-lg text-ink-900 mb-3 leading-snug">{item.title}</h4>
                  <p className="text-sm text-ink-500 leading-relaxed">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
