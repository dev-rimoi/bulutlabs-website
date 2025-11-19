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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t('title')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="glass glass-hover rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">{t('general.title')}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">{t('general.description')}</p>
              <a
                href={`mailto:${t('general.email')}`}
                className="inline-flex items-center gap-2 gradient-accent text-xl hover:scale-105 transition-transform"
              >
                {t('general.email')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="glass glass-hover rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">{t('careers.title')}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">{t('careers.description')}</p>
              <a
                href={`mailto:${t('careers.email')}`}
                className="inline-flex items-center gap-2 gradient-accent text-xl hover:scale-105 transition-transform"
              >
                {t('careers.email')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3">{t('address.title')}</h2>
            <p className="text-gray-400">
              {t('address.location')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
