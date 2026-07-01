import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import Eyebrow from '@/components/shared/Eyebrow';
import Cta from '@/components/shared/Cta';

export default function Fund() {
  const stats = [
    { label: 'Investment Focus', value: 'Series C/D' },
    { label: 'Fund Term', value: '10 Years' },
    { label: 'Average Hold', value: '3–5 Years' },
    { label: 'Target Fund Size', value: '$300M' },
  ];

  const structure = [
    {
      title: 'Limited Partners',
      description: 'Institutional investors, family offices, and strategic partners globally.',
    },
    {
      title: 'Simplex Capital Major International Fund',
      description: 'Cayman Islands-domiciled Limited Partnership providing institutional governance and transparency.',
      emphasis: true,
    },
    {
      title: 'Portfolio Companies',
      description: 'High-growth technology companies across Series C/D stage with clear IPO pathways.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-hero-lg flex items-end">
        <div className="grain absolute inset-0 z-0">
          <img src="/images/fund.webp" alt="Global Vision" className="w-full h-full object-cover animate-hero-zoom" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/65 to-ink-950/20" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
          <div className="max-w-3xl">
            <div className="mb-6"><Eyebrow index="01" invert>Our Fund</Eyebrow></div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">
              Simplex Capital <span className="text-tiffany italic">Major International Fund</span>
            </h1>
            <p className="text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl">
              A premier institutional-grade vehicle for strategic technology investments targeting high-growth companies positioned for global IPO success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="bg-paper border-b border-ink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ink-900/10">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 80}>
                <div className="py-10 px-4 sm:px-6">
                  <div className="font-mono text-[11px] text-ink-500 uppercase tracking-[0.16em] mb-3">{stat.label}</div>
                  <div className="font-display text-2xl sm:text-3xl text-ink-900">{stat.value}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Structure */}
      <section className="bg-paper py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeInSection>
              <Eyebrow index="02" className="mb-8">Fund Structure</Eyebrow>
              <div className="relative pl-8">
                <div className="absolute left-[3px] top-2 bottom-2 w-px bg-ink-900/15" />
                <div className="space-y-6">
                  {structure.map((item) => (
                    <div key={item.title} className="relative">
                      <div className={`absolute -left-8 top-1.5 w-[7px] h-[7px] rounded-full ${item.emphasis ? 'bg-tiffany-700' : 'bg-ink-900/30'}`} />
                      <div className={`p-6 border ${item.emphasis ? 'border-ink-900 bg-ink-900 text-paper' : 'border-ink-900/15'}`}>
                        <h4 className={`font-display text-lg mb-1.5 ${item.emphasis ? 'text-paper' : 'text-ink-900'}`}>{item.title}</h4>
                        <p className={`text-sm leading-relaxed ${item.emphasis ? 'text-paper/60' : 'text-ink-500'}`}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h3 className="font-display text-3xl sm:text-4xl text-ink-900 leading-tight mb-8">Why Simplex Capital Fund</h3>
              <div className="space-y-5 text-ink-500 leading-relaxed text-lg">
                <p>Our fund combines institutional-grade governance with operational expertise spanning 25+ years in PE/VC across global markets.</p>
                <p>We leverage proprietary deal flow and sector expertise to identify and support tomorrow&rsquo;s technology leaders before they reach IPO scale.</p>
                <p>Active board participation, strategic support, and access to our extensive network accelerate portfolio company growth and exits.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h3 className="font-display text-3xl sm:text-4xl text-paper mb-5">Ready to Invest?</h3>
            <p className="text-paper/50 text-lg mb-10 max-w-xl mx-auto">Join institutional investors in backing the next generation of technology leaders.</p>
            <Cta to="/Contact" variant="inverse">Inquire About Investing</Cta>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
