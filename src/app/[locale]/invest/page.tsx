import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function InvestPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Invest');

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">{t('title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 md:mb-16">
            {t('subtitle')}
          </p>

          <section className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 gradient-accent">{t('whyStrategic.title')}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {t('whyStrategic.content')}
              </p>
            </div>
          </section>

          <section className="glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              {t('cta.text')}
            </p>
            <a 
              href={`mailto:${t('cta.email')}`}
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors p-2 -m-2 touch-manipulation"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm sm:text-base">{t('cta.email')}</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}