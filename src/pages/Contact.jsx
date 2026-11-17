import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '@/components/shared/FadeInSection';
import Shape3D from '@/components/shared/Shape3D';
import Cta from '@/components/shared/Cta';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Send } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const fieldClass = 'rounded-none border-0 border-b border-ink-900/20 bg-transparent px-0 shadow-none transition-colors duration-300 hover:border-ink-900/50 focus-visible:ring-0 focus-visible:border-tiffany-700';
const labelClass = 'font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500';

export default function Contact() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', investor_type: '', message: '' });
  const [agreed, setAgreed] = useState(false);
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
        setAgreed(false);
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
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="animate-fade-in-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('contact_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('contact_desc')}</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative isolate overflow-hidden bg-paper py-20 sm:py-28">
        {/* The Abu Dhabi office linked to London, New York and Moscow. */}
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
                  <div className="group">
                    <div className={`${labelClass} mb-2 transition-colors duration-300 group-hover:text-tiffany-700`}>Email</div>
                    <a href="mailto:ir@simplex-cap.com" className="underline-sweep text-ink-900 transition-colors hover:text-tiffany-700">ir@simplex-cap.com</a>
                  </div>
                  <div className="group">
                    <div className={`${labelClass} mb-2 transition-colors duration-300 group-hover:text-tiffany-700`}>{lang === 'ru' ? 'Офис' : 'Office'}</div>
                    <div className="text-ink-900 transition-transform duration-300 group-hover:translate-x-1">{lang === 'ru' ? 'Москва, Россия' : 'Abu Dhabi, UAE'}</div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center gap-6 mt-14">
                  <Shape3D shape="routes" size={190} speed={0.1} seed={1.4} tilt={0.35} className="text-tiffany-700/60" />
                  <p className="text-sm text-ink-500 leading-relaxed max-w-[13rem]">Abu Dhabi, with listings experience in London, New York and Moscow.</p>
                </div>
              </FadeInSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeInSection delay={100}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2 [&:focus-within>label]:text-tiffany-700 [&>label]:transition-colors">
                      <Label htmlFor="name" className={labelClass}>{t('contact_name')} *</Label>
                      <Input id="name" name="name" autoComplete="name" required placeholder={lang === 'ru' ? 'Иван Иванов' : 'John Smith'} value={form.name} onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, name: e.target.value })} className={fieldClass} />
                    </div>
                    <div className="space-y-2 [&:focus-within>label]:text-tiffany-700 [&>label]:transition-colors">
                      <Label htmlFor="email" className={labelClass}>{t('contact_email')} *</Label>
                      <Input id="email" name="email" type="email" autoComplete="email" required placeholder="john@institution.com" value={form.email} onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, email: e.target.value })} className={fieldClass} />
                    </div>
                    <div className="space-y-2 [&:focus-within>label]:text-tiffany-700 [&>label]:transition-colors">
                      <Label htmlFor="phone" className={labelClass}>{t('contact_phone')}</Label>
                      <Input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+44 20 7946 0958" value={form.phone} onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, phone: e.target.value })} className={fieldClass} />
                    </div>
                    <div className="space-y-2 [&:focus-within>label]:text-tiffany-700 [&>label]:transition-colors">
                      <Label id="investor_type_label" className={labelClass}>{t('contact_type')}</Label>
                      <Select value={form.investor_type} onValueChange={v => setForm({ ...form, investor_type: v })}>
                        <SelectTrigger aria-labelledby="investor_type_label" className={fieldClass}>
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
                  <div className="space-y-2 [&:focus-within>label]:text-tiffany-700 [&>label]:transition-colors">
                    <Label htmlFor="message" className={labelClass}>{t('contact_message')}</Label>
                    <Textarea id="message" name="message" rows={4} placeholder={lang === 'ru' ? 'Расскажите о ваших инвестиционных интересах...' : 'Tell us about your investment interests and objectives...'} value={form.message} onChange={(/** @type {React.ChangeEvent<HTMLTextAreaElement>} */ e) => setForm({ ...form, message: e.target.value })} className={fieldClass} />
                  </div>

                  {error && (
                    <div role="alert" className="border border-red-700/30 text-red-800 px-4 py-3 text-sm">
                      {lang === 'ru' ? 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.' : 'Something went wrong. Please try again.'}
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy_agree"
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked === true)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="privacy_agree" className="text-sm font-normal text-ink-500 leading-relaxed cursor-pointer">
                      {lang === 'ru' ? (
                        <>Я согласен(на) с <Link to="/PrivacyPolicy" className="text-ink-900 underline underline-offset-2">политикой конфиденциальности</Link> *</>
                      ) : (
                        <>I agree to the <Link to="/PrivacyPolicy" className="text-ink-900 underline underline-offset-2">privacy policy</Link> *</>
                      )}
                    </Label>
                  </div>

                  <div className="flex items-center gap-6 pt-2">
                    <Cta type="submit" disabled={submitting || !agreed} variant="primary">
                      {submitting ? (lang === 'ru' ? 'Отправка...' : 'Sending...') : (
                        <span className="inline-flex items-center gap-2"><Send className="w-3.5 h-3.5" /> {t('contact_submit')}</span>
                      )}
                    </Cta>
                  </div>
                </form>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className="sm:max-w-md text-center rounded-none border-ink-900/10">
          <DialogHeader className="items-center">
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
