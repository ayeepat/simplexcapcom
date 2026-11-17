import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import Shape3D from '@/components/shared/Shape3D';
import { useLanguage } from '@/lib/LanguageContext';

const sections = {
  en: [
    {
      h: 'Overview',
      p: [
        'This Privacy Policy explains how Simplex Capital ("we," "us," "our") collects, uses, and protects information submitted through simplex-cap.com (the "Site"). By using the contact form on this Site, you agree to the practices described below.',
      ],
    },
    {
      h: 'Information We Collect',
      p: [
        'We only collect information that you choose to submit through our contact form: full name, email address, phone number (optional), investor type, and the content of your message.',
        'We do not use cookies, analytics tools, or tracking pixels on this Site, and we do not collect any information automatically or through third-party trackers.',
      ],
    },
    {
      h: 'How We Use Your Information',
      p: [
        'We use the information you provide to respond to your inquiry, assess investor eligibility, and communicate with you about potential investment opportunities with Simplex Capital.',
        'We do not use your information for marketing without your consent, and we do not sell or rent your information to third parties.',
      ],
    },
    {
      h: 'Third-Party Processing',
      p: [
        'Contact form submissions are processed using Formspree, a third-party form-handling service, solely to deliver your message to our team. Formspree may process and store your submission on its servers in accordance with its own privacy policy, available at formspree.io. We encourage you to review Formspree\'s privacy practices as well.',
      ],
    },
    {
      h: 'Data Retention',
      p: [
        'We retain inquiry information only for as long as necessary to respond to your request and to maintain records of investor communications, after which it is deleted or anonymized.',
      ],
    },
    {
      h: 'Your Rights',
      p: [
        'You may request access to, correction of, or deletion of your personal information at any time by emailing ir@simplex-cap.com.',
      ],
    },
    {
      h: 'Security',
      p: [
        'We take reasonable measures to protect information submitted to us, but no method of transmission over the internet is completely secure.',
      ],
    },
    {
      h: 'Changes to This Policy',
      p: [
        'We may update this Privacy Policy from time to time. The date below reflects the most recent revision.',
      ],
    },
    {
      h: 'Contact Us',
      p: [
        'If you have questions about this Privacy Policy, please contact us at ir@simplex-cap.com.',
      ],
    },
  ],
  ru: [
    {
      h: 'Общие положения',
      p: [
        'Настоящая политика конфиденциальности объясняет, как Simplex Capital («мы», «нас», «наш») собирает, использует и защищает информацию, отправленную через сайт simplex-cap.com («Сайт»). Используя контактную форму на Сайте, вы соглашаетесь с описанными ниже практиками.',
      ],
    },
    {
      h: 'Какую информацию мы собираем',
      p: [
        'Мы собираем только ту информацию, которую вы сами предоставляете через контактную форму: полное имя, адрес электронной почты, номер телефона (необязательно), тип инвестора и содержание сообщения.',
        'Мы не используем на Сайте файлы cookie, аналитические инструменты или трекинг-пиксели и не собираем никакую информацию автоматически или через сторонние трекеры.',
      ],
    },
    {
      h: 'Как мы используем информацию',
      p: [
        'Мы используем предоставленную информацию, чтобы ответить на ваш запрос, оценить соответствие критериям инвестора и связаться с вами по поводу возможных инвестиционных возможностей в Simplex Capital.',
        'Мы не используем вашу информацию в маркетинговых целях без вашего согласия и не продаём и не передаём её третьим лицам.',
      ],
    },
    {
      h: 'Обработка третьими сторонами',
      p: [
        'Отправка контактной формы обрабатывается сервисом Formspree — сторонним сервисом обработки форм — исключительно для доставки вашего сообщения нашей команде. Formspree может обрабатывать и хранить вашу заявку на своих серверах в соответствии с собственной политикой конфиденциальности, доступной на formspree.io. Рекомендуем ознакомиться и с ней.',
      ],
    },
    {
      h: 'Хранение данных',
      p: [
        'Мы храним информацию о запросах только в течение времени, необходимого для ответа на ваш запрос и ведения записей об общении с инвесторами, после чего она удаляется или обезличивается.',
      ],
    },
    {
      h: 'Ваши права',
      p: [
        'Вы можете в любой момент запросить доступ, исправление или удаление своих персональных данных, написав на ir@simplex-cap.com.',
      ],
    },
    {
      h: 'Безопасность',
      p: [
        'Мы принимаем разумные меры для защиты предоставленной нам информации, однако ни один способ передачи данных через интернет не является полностью безопасным.',
      ],
    },
    {
      h: 'Изменения политики',
      p: [
        'Мы можем время от времени обновлять данную политику конфиденциальности. Дата ниже отражает последнюю редакцию.',
      ],
    },
    {
      h: 'Связь с нами',
      p: [
        'По вопросам, связанным с настоящей политикой конфиденциальности, обращайтесь на ir@simplex-cap.com.',
      ],
    },
  ],
};

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  const list = lang === 'ru' ? sections.ru : sections.en;

  return (
    <div className="bg-paper">
      <section className="relative isolate overflow-hidden pt-28 sm:pt-40 pb-16 border-b border-ink-900/10">
        {/* A padlock: information kept safe. */}
        <Shape3D shape="padlock" size={170} speed={0.14} seed={0.9} className="absolute -z-10 hidden md:block right-[8%] top-28 text-tiffany-700/30" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-ink-900 mb-4">
            {lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}
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
