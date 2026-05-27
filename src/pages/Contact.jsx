import React, { useState } from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

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
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-block text-tiffany text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">{t('contact_label')}</span>
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{t('contact_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">{t('contact_desc')}</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeInSection>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact_title')}</h3>
                <p className="text-gray-500 leading-relaxed mb-10">
                  {lang === 'ru'
                    ? 'Мы приветствуем запросы от институциональных инвесторов, организаций финансирования развития, семейных офисов и квалифицированных частных инвесторов.'
                    : 'We welcome inquiries from institutional investors, development finance institutions, family offices, and qualified private investors.'}
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-tiffany-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-tiffany-700" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <div className="font-medium text-gray-900">ir@simplexcapital.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-tiffany-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-tiffany-700" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{lang === 'ru' ? 'Офис' : 'Office'}</div>
                      <div className="font-medium text-gray-900">{lang === 'ru' ? 'Москва, Россия' : 'Moscow, Russia'}</div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeInSection delay={100}>
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 sm:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact_name')} *</Label>
                      <Input id="name" name="name" required placeholder={lang === 'ru' ? 'Иван Иванов' : 'John Smith'} value={form.name} onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, name: e.target.value })} className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact_email')} *</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@institution.com" value={form.email} onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, email: e.target.value })} className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact_phone')}</Label>
                      <Input id="phone" name="phone" placeholder="+44 20 7946 0958" value={form.phone} onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, phone: e.target.value })} className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label>{t('contact_type')}</Label>
                      <Select value={form.investor_type} onValueChange={v => setForm({ ...form, investor_type: v })}>
                        <SelectTrigger className="bg-white">
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
                    <Label htmlFor="message">{t('contact_message')}</Label>
                    <Textarea id="message" name="message" rows={5} placeholder={lang === 'ru' ? 'Расскажите о ваших инвестиционных интересах...' : 'Tell us about your investment interests and objectives...'} value={form.message} onChange={(/** @type {React.ChangeEvent<HTMLTextAreaElement>} */ e) => setForm({ ...form, message: e.target.value })} className="bg-white" />
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm">
                      {lang === 'ru' ? 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.' : 'Something went wrong. Please try again.'}
                    </div>
                  )}

                  <Button type="submit" disabled={submitting} size="lg" className="bg-tiffany hover:bg-tiffany-dark text-white rounded-full px-8 w-full sm:w-auto">
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {lang === 'ru' ? 'Отправка...' : 'Sending...'}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> {t('contact_submit')}
                      </span>
                    )}
                  </Button>
                  <p className="text-xs text-gray-400">
                    {lang === 'ru' ? 'Отправляя эту форму, вы соглашаетесь с нашей политикой конфиденциальности. Ваши данные будут обработаны конфиденциально.' : 'By submitting this form, you agree to our privacy policy. Your information will be treated confidentially.'}
                  </p>
                </form>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <div className="w-16 h-16 rounded-full bg-tiffany-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-tiffany-700" />
            </div>
            <DialogTitle className="text-2xl">{lang === 'ru' ? 'Спасибо' : 'Thank You'}</DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              {t('contact_success')}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}