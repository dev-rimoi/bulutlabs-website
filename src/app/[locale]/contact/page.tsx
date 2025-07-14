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
    <div className="min-h-screen py-12 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">{t('title')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('general.title')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{t('general.description')}</p>
              <a href={`mailto:${t('general.email')}`} className="gradient-accent text-base sm:text-lg md:text-xl hover:opacity-80 transition-opacity inline-block break-all">
                {t('general.email')}
              </a>
            </div>
            
            <div className="glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('investor.title')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{t('investor.description')}</p>
              <a href={`mailto:${t('investor.email')}`} className="gradient-accent text-base sm:text-lg md:text-xl hover:opacity-80 transition-opacity inline-block break-all">
                {t('investor.email')}
              </a>
            </div>
            
            <div className="glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('press.title')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{t('press.description')}</p>
              <a href={`mailto:${t('press.email')}`} className="gradient-accent text-base sm:text-lg md:text-xl hover:opacity-80 transition-opacity inline-block break-all">
                {t('press.email')}
              </a>
            </div>
            
            <div className="glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('careers.title')}</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{t('careers.description')}</p>
              <a href={`mailto:${t('careers.email')}`} className="gradient-accent text-base sm:text-lg md:text-xl hover:opacity-80 transition-opacity inline-block break-all">
                {t('careers.email')}
              </a>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-10 md:mt-12 text-center glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t('address.title')}</h2>
            <p className="text-sm sm:text-base text-gray-400">
              {t('address.line1')}<br />
              {t('address.line2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}