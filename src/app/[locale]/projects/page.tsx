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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-16">
            {t('title')}
          </h1>

          <section className="mb-20">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">{t('iyiligo.title')}</h2>
              <p className="text-lg text-gray-300 mb-8">
                {t('iyiligo.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-950 p-6 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">{t('iyiligo.metrics.totalFunds')}</p>
                  <p className="text-3xl font-bold">₺0</p>
                </div>
                <div className="bg-gray-950 p-6 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">{t('iyiligo.metrics.participants')}</p>
                  <p className="text-3xl font-bold">0</p>
                </div>
              </div>

              <a 
                href="https://iyiligo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <span className="font-semibold">{t('iyiligo.cta')}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span className="bg-gray-950 px-6 text-lg font-semibold text-gray-400">
                  {t('whatsNext.title')}
                </span>
              </div>
            </div>

            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('whatsNext.description')}
              </p>
              
              <div className="mt-12">
                <svg className="w-16 h-16 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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