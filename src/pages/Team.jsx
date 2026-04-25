import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import { Network, Search, Scale, Globe, TrendingUp, Lightbulb, Star } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const valueAdd = [
  { icon: Network, title: 'Network Pipeline', description: 'Proprietary deal flow through 25+ years of relationships with founders, co-investors, and advisors across global tech ecosystems.' },
  { icon: Search, title: 'Selection System', description: 'Rigorous multi-stage due diligence combining quantitative scoring, market analysis, and deep sector expertise.' },
  { icon: Scale, title: 'Legal Support', description: 'Full legal and regulatory guidance for portfolio companies navigating complex multi-jurisdictional environments.' },
  { icon: Globe, title: 'Go Global', description: 'Strategic support for international expansion including market entry, partnerships, and regulatory compliance.' },
  { icon: TrendingUp, title: 'Dividends & Capitalization', description: 'Active board participation driving revenue growth, operational efficiency, and sustainable capitalization increases.' },
  { icon: Lightbulb, title: 'Smart Money', description: 'Beyond capital: executive recruitment, customer introductions, M&A advisory, and IPO preparation support.' },
];

const teamMembers = [
  {
    name: 'Анна Ермакова',
    nameEn: 'Anna Ermakova',
    title: 'Основатель, Управляющий партнер Simplex Capital',
    titleEn: 'Founder, Managing Partner, Simplex Capital',
    bio: 'Более 20 лет опыта работы в сфере PE&VC, создания и управления инвестиционными фондами, сделок IB и M&A. Партнер, CEO фондов DaVinci Capital Group (Москва, Лондон). Член СД ITI Capital. Запуск Фонда «Da Vinci Pre-IPO Tech Fund» размер $70M в 2019 г., запуск «Da Vinci Emerging Technologies Fund III», первое закрытие $100M, 2021/2022. Инвестиции и закрытые сделки с созданием моно-фондов: $50M – GettTaxi; $80M TON; $100M в области глубоких технологий Ocsial. До этого создание и управление фондами на позиции Директора департамента инвестиционных программ ОАО «РВК». Большой успешный опыт в сфере deep tech: новые материалы, электрокары, аккумуляторы нового поколения. IPO Softline, сделки DataArt, Ozon (pre-IPO), Gett, TON, Ocsial и другие.',
    bioEn: 'Over 20 years of experience in PE&VC, fund creation and management, IB and M&A transactions. Partner and CEO at DaVinci Capital Group (Moscow, London). Board member at ITI Capital. Launched the Da Vinci Pre-IPO Tech Fund ($70M, 2019) and Da Vinci Emerging Technologies Fund III (first close $100M, 2021/2022). Mono-fund deals: $50M – GettTaxi; $80M TON; $100M deep tech Ocsial. Previously Director of Investment Programs at RVC. Extensive deep tech experience: new materials, electric vehicles, next-gen batteries. IPO Softline, DataArt, Ozon (pre-IPO), Gett, TON, Ocsial and others.',
    initials: 'AE',
    initialsRu: 'АЕ',
  },
  {
    name: 'Геннадий Марголит',
    nameEn: 'Gennady Margolit',
    title: 'Основатель, партнер Simplex Capital',
    titleEn: 'Founder, Partner, Simplex Capital',
    bio: 'Свыше 25 лет работы на руководящих должностях Московской биржи, курировал фондовый рынок. В последние 10 лет специализировался на развитии выхода на биржу растущих компаний, технологических лидеров, национальных чемпионов. Член Совета Сектора Роста Мосбиржи, возглавляет Совет по инвестициям АПКИТ. Входил в инвестиционные комитеты венчурных фондов («РВК-ДаВинчи Капитал», Московский Венчурный Фонд), участвовал в формировании «ВТБ pre-IPO фонда». Опыт создания собственных стартапов в области финтех — две pre-IPO инвестиционных платформы, одна с Роснано, РВК и ДаВинчи, другая с Восход Капитал, успешно работают. Партнер в компании инвестиционного консалтинга.',
    bioEn: 'Over 25 years in senior roles at Moscow Exchange, overseeing the equity market. In the last 10 years specialized in developing IPO pathways for growth companies, tech leaders, and national champions. Member of the MOEX Growth Sector Council, chairs the APKIT Investment Council. Served on investment committees of venture funds (RVC-DaVinci Capital, Moscow Venture Fund), participated in forming the VTB pre-IPO fund. Founded FinTech startups — two pre-IPO investment platforms (one with Rosnano, RVC, DaVinci; another with Voskhod Capital), both active. Partner at an investment consultancy.',
    initials: 'GM',
    initialsRu: 'ГМ',
  },
];

export default function Team() {
  const { t, lang } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/team.jpg"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-block text-tiffany text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">{t('team_label')}</span>
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">25+ Years · 50+ IPOs · 10× Growth</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {lang === 'ru' ? 'Команда основателей с многолетним практическим опытом создания, инвестирования и вывода технологических компаний на биржи по всему миру.' : 'A founding team with decades of hands-on experience building, investing in, and taking technology companies public across global exchanges.'}
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-12 text-center">Founding Partners</h3>
          </FadeInSection>
          <div className="space-y-8">
            {teamMembers.map((member, i) => (
              <FadeInSection key={member.name} delay={i * 100}>
                <div className="bg-gray-50 rounded-3xl p-8 sm:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-tiffany flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{lang === 'ru' ? member.initialsRu : member.initials}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{lang === 'ru' ? member.name : member.nameEn}</h4>
                      <p className="text-tiffany font-semibold mt-1">{lang === 'ru' ? member.title : member.titleEn}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {lang === 'ru' ? member.bio : member.bioEn}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Success Accent */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border-l-4 border-tiffany">
              <Star className="w-6 h-6 text-tiffany flex-shrink-0" />
              <p className="text-gray-700 font-medium leading-relaxed">
                {lang === 'ru'
                  ? 'Подтверждённый опыт успешных выходов и создания стоимости в технологическом секторе — 50+ IPO, 25+ лет, средний рост капитализации 10× на ведущих международных биржах.'
                  : 'Proven track record of successful exits and value creation in the technology sector — 50+ IPOs, 25+ years, with an average 10× capitalization growth across global exchanges.'}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Value Add */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-4 text-center">How We Add Value</h3>
            <h4 className="text-3xl font-bold text-gray-900 mb-12 text-center">Smart Money in Action</h4>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueAdd.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 80}>
                <div className="group p-8 rounded-2xl bg-white hover:bg-tiffany-50 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-tiffany-100 flex items-center justify-center mb-5 shadow-sm transition-colors">
                    <item.icon className="w-6 h-6 text-tiffany-700" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}