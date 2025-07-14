import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('Projects');

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-12 md:mb-16">
            <span className="gradient-text">{t('title')}</span>
          </h1>

          <section className="mb-12 sm:mb-16 md:mb-20">
            <div className="glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{t('iyiligo.title')}</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {t('iyiligo.description')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div className="glass rounded-lg p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">{t('iyiligo.metrics.totalFunds')}</p>
                  <p className="text-2xl sm:text-3xl font-bold gradient-accent">₺0</p>
                </div>
                <div className="glass rounded-lg p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">{t('iyiligo.metrics.participants')}</p>
                  <p className="text-2xl sm:text-3xl font-bold gradient-accent">0</p>
                </div>
              </div>

              <a 
                href="https://iyiligo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors p-2 -m-2 touch-manipulation"
              >
                <span className="font-semibold text-sm sm:text-base">{t('iyiligo.cta')}</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>

          <section>
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-950 px-4 sm:px-6 text-base sm:text-lg font-semibold text-gray-400">
                  {t('whatsNext.title')}
                </span>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 text-center max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed px-4">
                {t('whatsNext.description')}
              </p>
              
              <div className="mt-8 sm:mt-10 md:mt-12">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}