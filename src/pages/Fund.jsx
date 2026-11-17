import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import TiltCard from '@/components/shared/TiltCard';
import Shape3D from '@/components/shared/Shape3D';
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-28 sm:pt-40">
          <div className="max-w-3xl">
            <h1 className="animate-fade-in-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">
              Simplex Capital <span className="text-tiffany italic">Major International Fund</span>
            </h1>
            <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl">
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
                <div className="group card-hover py-10 px-4 sm:px-6">
                  <div className="font-mono text-[11px] text-ink-500 uppercase tracking-[0.16em] mb-3">{stat.label}</div>
                  <div className="font-display text-2xl sm:text-3xl text-ink-900 transition-[color,transform] duration-500 ease-out group-hover:text-tiffany-700 group-hover:-translate-y-0.5">{stat.value}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Structure */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeInSection>
              <div className="relative pl-8">
                <div className="absolute left-[3px] top-2 bottom-2 w-px bg-ink-900/15" />
                <div className="space-y-6">
                  {structure.map((item) => (
                    <div key={item.title} className="relative">
                      <div className={`absolute -left-8 top-1.5 w-[7px] h-[7px] rounded-full transition-transform duration-500 ${item.emphasis ? 'bg-tiffany-700 animate-pulse' : 'bg-ink-900/30'}`} />
                      <TiltCard light={item.emphasis ? 'ink' : 'paper'} max={3} className={`group p-6 border transition-[border-color] duration-500 ${item.emphasis ? 'border-ink-900 bg-ink-900 text-paper' : 'border-ink-900/15 hover:border-ink-900/45'}`}>
                        {item.emphasis && (
                          <Shape3D shape="tetra" size={64} speed={0.5} seed={1} hoverSpin follow={false} bob={false} className="absolute right-3 top-1/2 -translate-y-1/2 text-tiffany/70" />
                        )}
                        <h4 className={`font-display text-lg mb-1.5 ${item.emphasis ? 'text-paper' : 'text-ink-900'}`}>{item.title}</h4>
                        <p className={`text-sm leading-relaxed ${item.emphasis ? 'text-paper/60 pr-16' : 'text-ink-500'}`}>{item.description}</p>
                      </TiltCard>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={100} className="relative isolate">
              <Shape3D shape="layers" size={190} speed={0.1} seed={0.8} tilt={0.5} className="absolute -z-10 hidden lg:block -right-6 -top-16 text-tiffany-700/25" />
              <h3 className="font-display text-3xl sm:text-4xl text-ink-900 leading-tight mb-8">Why Simplex Capital Fund</h3>
              <div className="space-y-5 text-ink-500 leading-relaxed text-lg [&>p]:border-l [&>p]:border-transparent [&>p]:pl-4 [&>p]:-ml-4 [&>p]:transition-colors [&>p]:duration-300 [&>p:hover]:border-tiffany-700 [&>p:hover]:text-ink-700">
                <p>Our fund combines institutional-grade governance with operational expertise spanning 25+ years in PE/VC across global markets.</p>
                <p>We leverage proprietary deal flow and sector expertise to identify and support tomorrow&rsquo;s technology leaders before they reach IPO scale.</p>
                <p>Active board participation, strategic support, and access to our extensive network accelerate portfolio company growth and exits.</p>
              </div>
              <div className="hidden lg:flex items-center gap-8 mt-14 pt-10 border-t border-ink-900/10">
                <Shape3D shape="hourglass" size={150} speed={0.12} seed={0.3} tilt={0.25} className="text-tiffany-700/55" />
                <div>
                  <div className="font-display text-4xl text-ink-900 mb-1">10 years</div>
                  <p className="text-sm text-ink-500 leading-relaxed max-w-[16rem]">Fund term, with an average hold of three to five years per company.</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 sm:py-28">
        <Shape3D shape="ziggurat" size={170} speed={0.1} seed={1.3} className="absolute -z-10 hidden md:block left-[7%] top-1/2 -translate-y-1/2 text-tiffany/40" />
        <Shape3D shape="mobius" size={170} seed={2.9} speed={0.14} tilt={0.9} className="absolute -z-10 hidden md:block right-[7%] top-1/2 -translate-y-1/2 text-paper/25" />
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
