import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function JoinUsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('JoinUs');

  return (
    <div className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">{t('title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Link 
            href="/career"
            className="group relative glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 touch-manipulation"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
              {t('career.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              {t('career.description')}
            </p>
            <div className="flex items-center text-white group-hover:text-gray-300 transition-colors">
              <span className="font-semibold text-sm sm:text-base">{t('career.cta')}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>

          <Link 
            href="/invest"
            className="group relative glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 touch-manipulation"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
              {t('invest.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              {t('invest.description')}
            </p>
            <div className="flex items-center text-white group-hover:text-gray-300 transition-colors">
              <span className="font-semibold text-sm sm:text-base">{t('invest.cta')}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>

          <Link 
            href="/propose-project"
            className="group relative glass glass-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 touch-manipulation sm:col-span-2 lg:col-span-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
              {t('idea.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              {t('idea.description')}
            </p>
            <div className="flex items-center text-white group-hover:text-gray-300 transition-colors">
              <span className="font-semibold text-sm sm:text-base">{t('idea.cta')}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}