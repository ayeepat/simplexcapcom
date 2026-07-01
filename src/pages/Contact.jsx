import React, { useState } from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import Eyebrow from '@/components/shared/Eyebrow';
import Cta from '@/components/shared/Cta';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Send } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const fieldClass = 'rounded-none border-0 border-b border-ink-900/20 bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-ink-900';
const labelClass = 'font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500';

export default function Contact() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', investor_type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (/** @type {React.FormEvent<HTMLFormElement>} */ e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/xlgavgoe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', investor_type: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }

    setSubmitting(false);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-hero-md flex items-center">
        <div className="grain absolute inset-0 z-0">
          <img src="/images/contact.webp" alt="Contact" className="w-full h-full object-cover animate-hero-zoom" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="flex justify-center mb-6"><Eyebrow index="01" invert>{t('contact_label')}</Eyebrow></div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('contact_title')}</h1>
          <p className="text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('contact_desc')}</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-paper py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeInSection>
                <h3 className="font-display text-2xl text-ink-900 mb-6">{t('contact_title')}</h3>
                <p className="text-ink-500 leading-relaxed mb-12">
                  {lang === 'ru'
                    ? 'Мы приветствуем запросы от институциональных инвесторов, организаций финансирования развития, семейных офисов и квалифицированных частных инвесторов.'
                    : 'We welcome inquiries from institutional investors, development finance institutions, family offices, and qualified private investors.'}
                </p>
                <div className="space-y-8 border-t border-ink-900/10 pt-8">
                  <div>
                    <div className={`${labelClass} mb-2`}>Email</div>
                    <div className="text-ink-900">ir@simplex-cap.com</div>
                  </div>
                  <div>
                    <div className={`${labelClass} mb-2`}>{lang === 'ru' ? 'Офис' : 'Office'}</div>
                    <div className="text-ink-900">{lang === 'ru' ? 'Москва, Россия' : 'Abu Dhabi, UAE'}</div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeInSection delay={100}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={labelClass}>{t('contact_name')} *</Label>
                      <Input id="name" name="name" required placeholder={lang === 'ru' ? 'Иван Иванов' : 'John Smith'} value={form.name} onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, name: e.target.value })} className={fieldClass} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={labelClass}>{t('contact_email')} *</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@institution.com" value={form.email} onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, email: e.target.value })} className={fieldClass} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={labelClass}>{t('contact_phone')}</Label>
                      <Input id="phone" name="phone" placeholder="+44 20 7946 0958" value={form.phone} onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, phone: e.target.value })} className={fieldClass} />
                    </div>
                    <div className="space-y-2">
                      <Label className={labelClass}>{t('contact_type')}</Label>
                      <Select value={form.investor_type} onValueChange={v => setForm({ ...form, investor_type: v })}>
                        <SelectTrigger className={fieldClass}>
                          <SelectValue placeholder={lang === 'ru' ? 'Выберите тип' : 'Select type'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="institutional">{lang === 'ru' ? 'Институциональный инвестор' : 'Institutional Investor'}</SelectItem>
                          <SelectItem value="private">{lang === 'ru' ? 'Квалифицированный частный инвестор' : 'Qualified Private Investor'}</SelectItem>
                          <SelectItem value="family_office">{lang === 'ru' ? 'Семейный офис' : 'Family Office'}</SelectItem>
                          <SelectItem value="dfi">{lang === 'ru' ? 'Организация финансирования развития' : 'Development Finance Institution'}</SelectItem>
                          <SelectItem value="other">{lang === 'ru' ? 'Другое' : 'Other'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className={labelClass}>{t('contact_message')}</Label>
                    <Textarea id="message" name="message" rows={4} placeholder={lang === 'ru' ? 'Расскажите о ваших инвестиционных интересах...' : 'Tell us about your investment interests and objectives...'} value={form.message} onChange={(/** @type {React.ChangeEvent<HTMLTextAreaElement>} */ e) => setForm({ ...form, message: e.target.value })} className={fieldClass} />
                  </div>

                  {error && (
                    <div className="border border-red-700/30 text-red-800 px-4 py-3 text-sm">
                      {lang === 'ru' ? 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.' : 'Something went wrong. Please try again.'}
                    </div>
                  )}

                  <div className="flex items-center gap-6 pt-2">
                    <Cta type="submit" disabled={submitting} variant="primary">
                      {submitting ? (lang === 'ru' ? 'Отправка...' : 'Sending...') : (
                        <span className="inline-flex items-center gap-2"><Send className="w-3.5 h-3.5" /> {t('contact_submit')}</span>
                      )}
                    </Cta>
                  </div>
                  <p className="text-xs text-ink-400">
                    {lang === 'ru' ? 'Отправляя эту форму, вы соглашаетесь с нашей политикой конфиденциальности. Ваши данные будут обработаны конфиденциально.' : 'By submitting this form, you agree to our privacy policy. Your information will be treated confidentially.'}
                  </p>
                </form>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className="sm:max-w-md text-center rounded-none border-ink-900/10">
          <DialogHeader className="items-center">
            <Eyebrow index="✓" className="justify-center mb-4">{lang === 'ru' ? 'Отправлено' : 'Received'}</Eyebrow>
            <DialogTitle className="font-display text-2xl font-medium text-ink-900">{lang === 'ru' ? 'Спасибо' : 'Thank You'}</DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-ink-500">
              {t('contact_success')}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
