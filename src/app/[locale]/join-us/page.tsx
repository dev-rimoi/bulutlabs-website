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
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link 
            href="/career"
            className="group relative bg-gray-900 border border-gray-800 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('career.title')}
            </h2>
            <p className="text-gray-400 mb-6">
              {t('career.description')}
            </p>
            <div className="flex items-center text-white group-hover:text-gray-300 transition-colors">
              <span className="font-semibold">{t('career.cta')}</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>

          <Link 
            href="/invest"
            className="group relative bg-gray-900 border border-gray-800 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('invest.title')}
            </h2>
            <p className="text-gray-400 mb-6">
              {t('invest.description')}
            </p>
            <div className="flex items-center text-white group-hover:text-gray-300 transition-colors">
              <span className="font-semibold">{t('invest.cta')}</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>

          <Link 
            href="/propose-project"
            className="group relative bg-gray-900 border border-gray-800 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              {t('idea.title')}
            </h2>
            <p className="text-gray-400 mb-6">
              {t('idea.description')}
            </p>
            <div className="flex items-center text-white group-hover:text-gray-300 transition-colors">
              <span className="font-semibold">{t('idea.cta')}</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}