import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ModelPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Model');

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
            <span className="gradient-text">{t('title')}</span>
          </h1>

          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="glass rounded-lg p-6 sm:p-8 relative">
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-xs sm:text-sm text-gray-500">
                  {t('inc.status')}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('inc.title')}</h2>
                <p className="text-3xl sm:text-4xl font-bold gradient-accent mb-3 sm:mb-4">{t('inc.subtitle')}</p>
                <p className="text-sm sm:text-base text-gray-300">
                  {t('inc.description')}
                </p>
              </div>

              <div className="glass rounded-lg p-6 sm:p-8 relative">
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-xs sm:text-sm text-gray-500">
                  {t('foundation.status')}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('foundation.title')}</h2>
                <p className="text-3xl sm:text-4xl font-bold text-blue-400 mb-3 sm:mb-4">{t('foundation.subtitle')}</p>
                <p className="text-sm sm:text-base text-gray-300">
                  {t('foundation.description')}
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="glass border-2 border-orange-500/50 rounded-lg p-4 sm:p-6 text-center max-w-md w-full mx-4">
                <p className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 gradient-accent">{t('transfer.percentage')}</p>
                <p className="text-xs sm:text-sm text-gray-400">{t('transfer.rule')}</p>
              </div>
            </div>

            <svg className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-orange-500 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}