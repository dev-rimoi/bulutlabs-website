import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Contact');

  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">{t('title')}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2">{t('general.title')}</h2>
              <p className="text-gray-400 mb-4">{t('general.description')}</p>
              <a href={`mailto:${t('general.email')}`} className="gradient-accent text-xl hover:opacity-80 transition-opacity">
                {t('general.email')}
              </a>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2">{t('investor.title')}</h2>
              <p className="text-gray-400 mb-4">{t('investor.description')}</p>
              <a href={`mailto:${t('investor.email')}`} className="gradient-accent text-xl hover:opacity-80 transition-opacity">
                {t('investor.email')}
              </a>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2">{t('press.title')}</h2>
              <p className="text-gray-400 mb-4">{t('press.description')}</p>
              <a href={`mailto:${t('press.email')}`} className="gradient-accent text-xl hover:opacity-80 transition-opacity">
                {t('press.email')}
              </a>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2">{t('careers.title')}</h2>
              <p className="text-gray-400 mb-4">{t('careers.description')}</p>
              <a href={`mailto:${t('careers.email')}`} className="gradient-accent text-xl hover:opacity-80 transition-opacity">
                {t('careers.email')}
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">{t('address.title')}</h2>
            <p className="text-gray-400">
              {t('address.line1')}<br />
              {t('address.line2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}