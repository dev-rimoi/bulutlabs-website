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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-16">
            {t('title')}
          </h1>

          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 relative">
                <div className="absolute top-4 right-4 text-sm text-gray-500">
                  {t('inc.status')}
                </div>
                <h2 className="text-2xl font-bold mb-2">{t('inc.title')}</h2>
                <p className="text-4xl font-bold text-orange-500 mb-4">{t('inc.subtitle')}</p>
                <p className="text-gray-300">
                  {t('inc.description')}
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 relative">
                <div className="absolute top-4 right-4 text-sm text-gray-500">
                  {t('foundation.status')}
                </div>
                <h2 className="text-2xl font-bold mb-2">{t('foundation.title')}</h2>
                <p className="text-4xl font-bold text-blue-500 mb-4">{t('foundation.subtitle')}</p>
                <p className="text-gray-300">
                  {t('foundation.description')}
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-gray-950 border-2 border-orange-500 rounded-lg p-6 text-center max-w-md">
                <p className="text-3xl font-bold mb-2">{t('transfer.percentage')}</p>
                <p className="text-sm text-gray-400">{t('transfer.rule')}</p>
              </div>
            </div>

            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-orange-500 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}