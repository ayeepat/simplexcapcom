import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import Shape3D from '@/components/shared/Shape3D';
import { useLanguage } from '@/lib/LanguageContext';

const sections = {
  en: [
    {
      h: 'Acceptance of Terms',
      p: [
        'By accessing or using simplex-cap.com (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use this Site.',
      ],
    },
    {
      h: 'Informational Purposes Only',
      p: [
        'Content on this Site, including descriptions of Simplex Capital\'s strategy, portfolio, and fund structure, is provided for general informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any securities or investment product in any jurisdiction. Any offer or solicitation will be made only through definitive fund documentation to qualified investors.',
      ],
    },
    {
      h: 'No Investment Advice',
      p: [
        'Nothing on this Site should be construed as investment, legal, or tax advice. Prospective investors should consult their own advisors before making any investment decision.',
      ],
    },
    {
      h: 'Intellectual Property',
      p: [
        'All content on this Site, including text, graphics, logos, and images, is the property of Simplex Capital or its licensors and may not be reproduced or distributed without prior written consent.',
      ],
    },
    {
      h: 'No Warranty',
      p: [
        'This Site and its content are provided "as is" without warranties of any kind. Simplex Capital does not guarantee the accuracy, completeness, or timeliness of the information presented.',
      ],
    },
    {
      h: 'Limitation of Liability',
      p: [
        'To the fullest extent permitted by law, Simplex Capital shall not be liable for any damages arising from your use of, or inability to use, this Site.',
      ],
    },
    {
      h: 'Third-Party Links',
      p: [
        'This Site may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.',
      ],
    },
    {
      h: 'Changes to These Terms',
      p: [
        'We may revise these Terms of Use at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.',
      ],
    },
    {
      h: 'Contact Us',
      p: [
        'If you have questions about these Terms of Use, please contact us at ir@simplex-cap.com.',
      ],
    },
  ],
  ru: [
    {
      h: 'Принятие условий',
      p: [
        'Используя сайт simplex-cap.com («Сайт»), вы соглашаетесь соблюдать настоящие условия использования. Если вы не согласны, пожалуйста, не используйте Сайт.',
      ],
    },
    {
      h: 'Только информационные цели',
      p: [
        'Содержание Сайта, включая описание стратегии, портфеля и структуры фонда Simplex Capital, предоставляется исключительно в информационных целях и не является офертой на продажу или предложением о покупке каких-либо ценных бумаг или инвестиционных продуктов в какой-либо юрисдикции. Любое предложение или оферта будут сделаны только через официальную документацию фонда квалифицированным инвесторам.',
      ],
    },
    {
      h: 'Не является инвестиционной консультацией',
      p: [
        'Ничто на Сайте не должно рассматриваться как инвестиционная, юридическая или налоговая консультация. Потенциальным инвесторам следует проконсультироваться со своими советниками перед принятием любого инвестиционного решения.',
      ],
    },
    {
      h: 'Интеллектуальная собственность',
      p: [
        'Всё содержимое Сайта, включая тексты, графику, логотипы и изображения, является собственностью Simplex Capital или её лицензиаров и не может воспроизводиться или распространяться без предварительного письменного согласия.',
      ],
    },
    {
      h: 'Отсутствие гарантий',
      p: [
        'Сайт и его содержимое предоставляются «как есть» без каких-либо гарантий. Simplex Capital не гарантирует точность, полноту или актуальность представленной информации.',
      ],
    },
    {
      h: 'Ограничение ответственности',
      p: [
        'В максимальной степени, разрешённой законом, Simplex Capital не несёт ответственности за любые убытки, возникшие в связи с использованием или невозможностью использования Сайта.',
      ],
    },
    {
      h: 'Ссылки на сторонние сайты',
      p: [
        'Сайт может содержать ссылки на сторонние сайты. Мы не несём ответственности за содержание или практики конфиденциальности этих сайтов.',
      ],
    },
    {
      h: 'Изменения условий',
      p: [
        'Мы можем в любое время пересматривать настоящие условия использования. Продолжение использования Сайта после публикации изменений означает согласие с обновлёнными условиями.',
      ],
    },
    {
      h: 'Связь с нами',
      p: [
        'По вопросам, связанным с настоящими условиями использования, обращайтесь на ir@simplex-cap.com.',
      ],
    },
  ],
};

export default function TermsOfUse() {
  const { lang } = useLanguage();
  const list = lang === 'ru' ? sections.ru : sections.en;

  return (
    <div className="bg-paper">
      <section className="relative isolate overflow-hidden pt-28 sm:pt-40 pb-16 border-b border-ink-900/10">
        {/* A closed box within a box: information kept in. */}
        <Shape3D shape="nested" size={170} speed={0.1} seed={0.9} className="absolute -z-10 hidden md:block right-[8%] top-28 text-tiffany-700/30" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-ink-900 mb-4">
            {lang === 'ru' ? 'Условия использования' : 'Terms of Use'}
          </h1>
          <p className="text-sm text-ink-400">{lang === 'ru' ? 'Обновлено: 2 июля 2026 г.' : 'Last updated: July 2, 2026'}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            {list.map((s, i) => (
              <div key={i} className="group mb-10 last:mb-0 border-l border-transparent pl-5 -ml-5 transition-colors duration-300 hover:border-tiffany-700">
                <h2 className="font-display text-xl text-ink-900 mb-3 transition-colors duration-300 group-hover:text-tiffany-700">{s.h}</h2>
                {s.p.map((para, j) => (
                  <p key={j} className="text-ink-500 leading-relaxed mb-3 last:mb-0">{para}</p>
                ))}
              </div>
            ))}
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
